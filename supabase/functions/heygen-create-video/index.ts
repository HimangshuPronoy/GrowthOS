
import { corsHeaders } from '../_shared/cors.ts';

interface RequestParams {
  scriptText: string;
  avatarId: string;
  voiceId: string;
  voiceStyle?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const HEYGEN_API_KEY = Deno.env.get('HEYGEN_API_KEY');
    
    if (!HEYGEN_API_KEY) {
      console.error('HEYGEN_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'HeyGen API key is not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const reqJson: RequestParams = await req.json();
    const { scriptText, avatarId, voiceId, voiceStyle = 'casual' } = reqJson;
    
    if (!scriptText || !avatarId || !voiceId) {
      console.error('Missing required parameters:', { scriptText: !!scriptText, avatarId: !!avatarId, voiceId: !!voiceId });
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: scriptText, avatarId, and voiceId are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Creating video with HeyGen API for avatar:', avatarId);
    console.log('Script length:', scriptText.length);

    const requestBody = {
      video_inputs: [{
        character: {
          type: 'avatar',
          avatar_id: avatarId
        },
        voice: {
          type: 'text',
          input_text: scriptText,
          voice_id: voiceId
        }
      }],
      aspect_ratio: '16:9',
      test: false
    };

    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    // Make the actual API call to HeyGen
    const response = await fetch('https://api.heygen.com/v2/video/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': HEYGEN_API_KEY
      },
      body: JSON.stringify(requestBody)
    });

    console.log('HeyGen video creation response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HeyGen API video creation error:', errorText);
      
      return new Response(
        JSON.stringify({ 
          error: `HeyGen API error: ${response.status} - ${errorText}`,
          status: response.status 
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = await response.json();
    console.log('HeyGen video creation result:', JSON.stringify(result, null, 2));

    // HeyGen returns a video_id that can be used to check status
    const videoResponse = {
      videoUrl: result.data?.video_url || null,
      taskId: result.data?.video_id || result.data?.id || null,
      status: result.data?.status || 'pending'
    };

    console.log('Returning video response:', videoResponse);

    return new Response(
      JSON.stringify(videoResponse),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in heygen-create-video function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Unknown error occurred',
        stack: error.stack 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
