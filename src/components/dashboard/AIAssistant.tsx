
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useGeminiAI } from "@/hooks/useGeminiAI";
import { Sparkles, Loader2, Send } from "lucide-react";

type AIAssistantProps = {
  topic?: string;
  placeholder?: string;
};

const AIAssistant: React.FC<AIAssistantProps> = ({
  topic = "marketing",
  placeholder = "Ask me anything about marketing strategy, content ideas, or growth tactics...",
}) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const { processWithGemini, isLoading } = useGeminiAI();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const result = await processWithGemini(prompt, topic);
    if (result) {
      setResponse(result);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle>AI Assistant</CardTitle>
        </div>
        <CardDescription>
          Ask me anything about your marketing strategy or content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder={placeholder}
              className="min-h-[100px]"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={!prompt.trim() || isLoading}
              className="transition-all duration-300 hover:shadow-md hover:scale-[1.02] flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send
                </>
              )}
            </Button>
          </div>
        </form>

        {response && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Response:</h3>
            <div className="p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap">
              {response}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
