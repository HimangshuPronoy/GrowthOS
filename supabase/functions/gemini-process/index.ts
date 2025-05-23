
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY") || "";

interface GeminiRequest {
  prompt: string;
  topic?: string;
  maxTokens?: number;
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!GEMINI_API_KEY) {
      throw new Error("Missing Gemini API key. Please set GEMINI_API_KEY in the environment variables.");
    }

    // Parse request body
    const { prompt, topic = "", maxTokens = 1024 }: GeminiRequest = await req.json();
    
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    // Prepare the request to Gemini API
    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${topic ? `Topic: ${topic}\n` : ""}${prompt}`,
                },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: maxTokens,
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
          },
        }),
      }
    );

    const data = await geminiResponse.json();

    // Check for errors in the Gemini API response
    if (data.error) {
      throw new Error(`Gemini API error: ${data.error.message}`);
    }

    // Send back the response
    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
});
