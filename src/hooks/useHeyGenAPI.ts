
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

export interface Avatar {
  id: string;
  name: string;
  imageUrl: string;
  voiceId: string;
}

interface HeyGenVideoParams {
  scriptText: string;
  avatarId: string;
  voiceId: string;
  voiceStyle?: string;
}

export function useHeyGenAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const { toast } = useToast();

  const createVideo = async (params: HeyGenVideoParams) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Creating video with params:', params);
      
      // Call the Supabase Edge Function that interacts with HeyGen API
      const { data, error } = await supabase.functions.invoke('heygen-create-video', {
        body: params
      });

      console.log('Supabase function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message);
      }

      if (data?.error) {
        console.error('HeyGen API error:', data.error);
        throw new Error(data.error);
      }

      setGeneratedVideo(data.videoUrl);
      
      toast({
        title: "Video created successfully",
        description: "Your UGC video is ready to view",
      });

      return data.videoUrl;
    } catch (err: any) {
      console.error('Error in createVideo:', err);
      const errorMessage = err.message || "Failed to create video";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Video creation failed",
        description: errorMessage,
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getAvatars = async (): Promise<Avatar[] | null> => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Fetching avatars...');
      
      // Call the Supabase Edge Function that interacts with HeyGen API
      const { data, error } = await supabase.functions.invoke('heygen-get-avatars', {
        body: {}
      });

      console.log('Supabase avatars response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message);
      }

      if (data?.error) {
        console.error('HeyGen API error:', data.error);
        throw new Error(data.error);
      }

      console.log('Avatars received:', data.avatars?.length || 0);
      return data.avatars || [];
    } catch (err: any) {
      console.error('Error in getAvatars:', err);
      const errorMessage = err.message || "Failed to fetch avatars";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Failed to load avatars",
        description: errorMessage,
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createVideo,
    getAvatars,
    isLoading,
    error,
    generatedVideo
  };
}
