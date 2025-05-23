
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface UseGeminiOptions {
  maxTokens?: number;
}

export function useGeminiAI(options: UseGeminiOptions = {}) {
  const { maxTokens = 1024 } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const processWithGemini = async (prompt: string, topic?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-process', {
        body: {
          prompt,
          topic,
          maxTokens,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      // Extract the generated text from the response
      const generatedContent = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      
      return generatedContent;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "Failed to process with Gemini AI",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    processWithGemini,
    isLoading,
    error,
  };
}
