
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight,
  FileText,
  Video,
  Image as ImageIcon,
  Sparkles,
  Mic,
  UserCircle,
  Copy
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const Content = () => {
  const [videoTab, setVideoTab] = useState('create');
  const [scriptText, setScriptText] = useState('');
  const [generating, setGenerating] = useState(false);

  // Simulated function to generate AI script
  const generateScript = () => {
    setGenerating(true);
    setTimeout(() => {
      setScriptText("Hi there! I'm Sarah from GrowthOS. Our platform helps SaaS founders like you launch and scale your marketing with AI-powered tools. Our users report saving 15 hours per week on marketing tasks and seeing a 30% increase in conversion rates. Try GrowthOS today with our 14-day free trial!");
      setGenerating(false);
    }, 2000);
  };

  // Avatars data
  const avatars = [
    { id: 'avatar1', name: 'Sarah', image: 'https://i.pravatar.cc/150?img=36' },
    { id: 'avatar2', name: 'Michael', image: 'https://i.pravatar.cc/150?img=69' },
    { id: 'avatar3', name: 'Jessica', image: 'https://i.pravatar.cc/150?img=47' },
    { id: 'avatar4', name: 'David', image: 'https://i.pravatar.cc/150?img=68' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">AI Content Studio</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Create professional videos, scripts, and social posts with AI
        </p>
      </div>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 rounded-full h-12 p-1">
          <TabsTrigger value="video" className="rounded-full text-base">
            <Video className="mr-2 h-4 w-4" />
            Video Creator
          </TabsTrigger>
          <TabsTrigger value="social" className="rounded-full text-base">
            <ImageIcon className="mr-2 h-4 w-4" />
            Social Content
          </TabsTrigger>
          <TabsTrigger value="blog" className="rounded-full text-base">
            <FileText className="mr-2 h-4 w-4" />
            Blog Generator
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="video" className="mt-0">
          <Card className="border-none shadow-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-6">
              <CardTitle className="text-2xl">AI Video Creation</CardTitle>
              <p className="text-gray-600">Create professional videos with AI avatars and script generation.</p>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="p-6 border-b">
                <Tabs value={videoTab} onValueChange={setVideoTab} className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6 rounded-full">
                    <TabsTrigger value="create" className="rounded-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Create Script
                    </TabsTrigger>
                    <TabsTrigger value="avatar" className="rounded-full">
                      <UserCircle className="mr-2 h-4 w-4" />
                      Choose Avatar
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="create" className="mt-0 space-y-4">
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
                        disabled={generating}
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        {generating ? "Generating..." : "Generate AI Script"}
                      </Button>
                      
                      {scriptText && (
                        <Button 
                          onClick={() => setVideoTab('avatar')} 
                          className="rounded-full self-end mt-4"
                        >
                          Continue to Avatar Selection
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="avatar" className="space-y-6">
                    <div>
                      <Label className="text-lg mb-4 block">Select an Avatar</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {avatars.map((avatar) => (
                          <div key={avatar.id} className="text-center cursor-pointer group">
                            <div className="relative">
                              <img 
                                src={avatar.image} 
                                alt={avatar.name} 
                                className="rounded-xl w-full aspect-square object-cover border-2 border-transparent group-hover:border-primary transition-all"
                              />
                              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-xl flex items-center justify-center transition-opacity">
                                <Button size="sm" variant="secondary" className="rounded-full">
                                  Select
                                </Button>
                              </div>
                            </div>
                            <p className="mt-2 font-medium">{avatar.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setVideoTab('create')} className="rounded-full">
                        Back to Script
                      </Button>
                      <Button className="rounded-full">
                        Generate Video
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
          
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
                <Button variant="outline" className="w-full rounded-full">Start Creating</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Mic className="h-4 w-4 text-primary" />
                  </div>
                  Testimonial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">Generate compelling customer testimonials with AI.</p>
                <Button variant="outline" className="w-full rounded-full">Start Creating</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Copy className="h-4 w-4 text-primary" />
                  </div>
                  Promotional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">Create attention-grabbing promotional videos for campaigns.</p>
                <Button variant="outline" className="w-full rounded-full">Start Creating</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="social">
          <Card className="border-none shadow-card rounded-xl">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-6">
              <CardTitle className="text-2xl">Social Media Content Generator</CardTitle>
              <p className="text-gray-600">Create engaging social media posts with AI assistance.</p>
            </CardHeader>
            <CardContent className="p-6">
              <p>Social content generation tools coming soon!</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="blog">
          <Card className="border-none shadow-card rounded-xl">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-6">
              <CardTitle className="text-2xl">Blog Content Generator</CardTitle>
              <p className="text-gray-600">Create SEO-optimized blog posts with AI writing assistance.</p>
            </CardHeader>
            <CardContent className="p-6">
              <p>Blog generation tools coming soon!</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Content;
