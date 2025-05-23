
import { corsHeaders } from '../_shared/cors.ts';

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

    console.log('Fetching avatars from HeyGen API...');

    // Make the actual API call to HeyGen to fetch avatars
    const response = await fetch('https://api.heygen.com/v2/avatars', {
      method: 'GET',
      headers: {
        'X-API-Key': HEYGEN_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    console.log('HeyGen API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HeyGen API error response:', errorText);
      
      return new Response(
        JSON.stringify({ 
          error: `HeyGen API error: ${response.status} - ${errorText}`,
          status: response.status 
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = await response.json();
    console.log('Raw HeyGen response:', JSON.stringify(result, null, 2));
    
    // Check if the response has the expected structure
    if (!result || !result.data) {
      console.error('Unexpected response structure from HeyGen:', result);
      return new Response(
        JSON.stringify({ 
          error: 'Unexpected response structure from HeyGen API',
          receivedData: result 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Number of avatars received:', result.data?.length || 0);

    // Transform the HeyGen avatar data to match our interface
    const avatars = result.data?.map((avatar: any) => {
      console.log('Processing avatar:', avatar.avatar_id || avatar.id);
      return {
        id: avatar.avatar_id || avatar.id,
        name: avatar.avatar_name || avatar.name || 'Unknown Avatar',
        imageUrl: avatar.preview_image_url || avatar.image_url || avatar.thumbnail_url || '',
        voiceId: avatar.default_voice_id || avatar.voice_id || 'en-US-SteffanNeural'
      };
    }) || [];
    
    console.log('Transformed avatars:', avatars.length);
    
    return new Response(
      JSON.stringify({ avatars }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in heygen-get-avatars function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Unknown error occurred',
        stack: error.stack 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
