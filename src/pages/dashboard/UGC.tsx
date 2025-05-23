
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Sparkles, 
  Video,
  ImageIcon,
  MessageSquare,
  UserCircle,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { useGeminiAI } from '@/hooks/useGeminiAI';
import { useHeyGenAPI, Avatar } from '@/hooks/useHeyGenAPI';

const UGC = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [scriptText, setScriptText] = useState('');
  const [productName, setProductName] = useState('');
  const [audience, setAudience] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('casual');
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState('');
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const { toast } = useToast();
  const { processWithGemini, isLoading: geminiLoading } = useGeminiAI();
  const { getAvatars, createVideo, isLoading: heyGenLoading, error: heyGenError } = useHeyGenAPI();

  // Load avatars from HeyGen API
  useEffect(() => {
    const fetchAvatars = async () => {
      const loadedAvatars = await getAvatars();
      if (loadedAvatars) {
        setAvatars(loadedAvatars);
        toast({
          title: "Avatars loaded",
          description: "Choose an avatar for your UGC video"
        });
      }
    };

    fetchAvatars();
  }, []);

  const generateScript = async () => {
    if (!productName.trim() || !audience.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in the product name and target audience",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Use Gemini AI to generate the script
      const prompt = `Create a short, engaging 30-second UGC-style video script for ${productName}. 
      The target audience is ${audience}. 
      The script should sound authentic, relatable, and not overly promotional. 
      Include a hook, key benefits, and a clear call to action.
      Keep it under 100 words.`;
      
      const generatedContent = await processWithGemini(prompt);
      
      if (generatedContent) {
        setScriptText(generatedContent);
        toast({
          title: "Script generated",
          description: "Your UGC script is ready"
        });
      } else {
        throw new Error("Failed to generate script");
      }
    } catch (error) {
      toast({
        title: "Script generation failed",
        description: "Please try again or write your own script",
        variant: "destructive"
      });
    }
  };

  const handleCreateVideo = async () => {
    if (!scriptText.trim() || !selectedAvatar) {
      toast({
        title: "Missing information",
        description: "Please provide a script and select an avatar",
        variant: "destructive"
      });
      return;
    }

    try {
      const videoUrl = await createVideo({
        scriptText,
        avatarId: selectedAvatar.id,
        voiceId: selectedAvatar.voiceId,
        voiceStyle: selectedVoice
      });
      
      if (videoUrl) {
        setGeneratedVideoUrl(videoUrl);
        setActiveTab('result');
      }
    } catch (error) {
      console.error("Error creating video:", error);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">UGC Creator</h1>
        <p className="text-gray-500 text-sm mt-1">
          Create professional user-generated content with AI
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-5 rounded-full h-9">
          <TabsTrigger value="create" className="rounded-full text-xs">
            <MessageSquare className="mr-2 h-3 w-3" />
            Create Script
          </TabsTrigger>
          <TabsTrigger value="avatar" className="rounded-full text-xs">
            <UserCircle className="mr-2 h-3 w-3" />
            Choose Avatar
          </TabsTrigger>
          <TabsTrigger value="result" className="rounded-full text-xs">
            <Video className="mr-2 h-3 w-3" />
            Generated Video
          </TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="mt-0">
          <Card className="border-none shadow-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-5">
              <CardTitle className="text-xl">UGC Script Generator</CardTitle>
              <CardDescription className="text-sm">Create engaging scripts for your UGC videos</CardDescription>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product" className="text-xs">Product/Service Name*</Label>
                  <Input 
                    id="product" 
                    placeholder="E.g., GrowthOS"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="rounded-lg text-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="audience" className="text-xs">Target Audience*</Label>
                  <Input 
                    id="audience" 
                    placeholder="E.g., SaaS founders"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="rounded-lg text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="script">Video Script</Label>
                <Textarea 
                  id="script"
                  placeholder="Type your video script here or generate one with AI..."
                  className="min-h-[200px] rounded-xl"
                  value={scriptText}
                  onChange={(e) => setScriptText(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  onClick={generateScript} 
                  variant="outline" 
                  className="rounded-full self-start"
                  disabled={geminiLoading}
                >
                  {geminiLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate AI Script
                    </>
                  )}
                </Button>
                
                {scriptText && (
                  <Button 
                    onClick={() => setActiveTab('avatar')} 
                    className="rounded-full self-end mt-4"
                  >
                    Continue to Avatar Selection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="avatar" className="mt-0">
          <Card className="border-none shadow-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-5">
              <CardTitle className="text-xl">Avatar Selection</CardTitle>
              <CardDescription className="text-sm">Choose an avatar to present your UGC video</CardDescription>
            </CardHeader>
            <CardContent className="p-5 space-y-6">
              {heyGenLoading && avatars.length === 0 ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  <p className="ml-2">Loading avatars...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {avatars.map((avatar) => (
                    <div 
                      key={avatar.id} 
                      className={`text-center cursor-pointer group ${
                        selectedAvatar?.id === avatar.id ? 'ring-2 ring-primary ring-offset-2 rounded-xl' : ''
                      }`}
                      onClick={() => setSelectedAvatar(avatar)}
                    >
                      <div className="relative">
                        <img 
                          src={avatar.imageUrl} 
                          alt={avatar.name} 
                          className="rounded-xl w-full aspect-square object-cover border-2 border-transparent group-hover:border-primary transition-all"
                        />
                        <div className={`absolute inset-0 bg-primary/10 ${
                          selectedAvatar?.id === avatar.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        } rounded-xl flex items-center justify-center transition-opacity`}>
                          {selectedAvatar?.id === avatar.id && (
                            <Badge className="bg-primary">Selected</Badge>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 font-medium">{avatar.name}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-4 space-y-2">
                <Label htmlFor="voice">Select Voice Style</Label>
                <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a voice style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual & Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="serious">Serious & Authoritative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setActiveTab('create')} className="rounded-full">
                  Back to Script
                </Button>
                <Button 
                  className="rounded-full" 
                  onClick={handleCreateVideo}
                  disabled={heyGenLoading || !selectedAvatar}
                >
                  {heyGenLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Video...
                    </>
                  ) : (
                    <>
                      Generate Video
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="result" className="mt-0">
          <Card className="border-none shadow-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-5">
              <CardTitle className="text-xl">Generated Video</CardTitle>
              <CardDescription className="text-sm">Your AI-generated UGC video is ready</CardDescription>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              {!generatedVideoUrl ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                  <p className="text-center">Your video is being generated...</p>
                  <p className="text-center text-sm text-muted-foreground mt-1">This may take a few minutes</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <video 
                      src={generatedVideoUrl}
                      className="w-full h-full"
                      controls
                      autoPlay
                      muted
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="rounded-full w-full">
                      Download Video
                    </Button>
                    <Button variant="outline" className="rounded-full w-full">
                      Share Video
                    </Button>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="rounded-full w-full"
                      onClick={() => {
                        setActiveTab('create');
                        setScriptText('');
                        setSelectedAvatar(null);
                        setGeneratedVideoUrl('');
                      }}
                    >
                      Create New Video
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Video className="h-4 w-4 text-primary" />
              </div>
              Product Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">Create a professional product demo with AI avatars.</p>
            <Button variant="outline" className="w-full rounded-full">Create Demo</Button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <UserCircle className="h-4 w-4 text-primary" />
              </div>
              Testimonial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">Generate compelling customer testimonials with AI avatars.</p>
            <Button variant="outline" className="w-full rounded-full">Create Testimonial</Button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <ImageIcon className="h-4 w-4 text-primary" />
              </div>
              Social Post
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">Create attention-grabbing social media content with AI.</p>
            <Button variant="outline" className="w-full rounded-full">Create Social Post</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UGC;
