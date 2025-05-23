
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles,
  Copy,
  Video,
  Mic
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const VideoScripts = () => {
  const [scriptText, setScriptText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [productName, setProductName] = useState('');
  const [audience, setAudience] = useState('');
  const [duration, setDuration] = useState('60');
  const { toast } = useToast();

  // Simulated function to generate AI script
  const generateScript = () => {
    if (!productName.trim() || !audience.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a product name and target audience",
        variant: "destructive"
      });
      return;
    }
    
    setGenerating(true);
    setTimeout(() => {
      const scriptTemplates = [
        `Hi there! I'm Sarah from ${productName}. Our platform helps ${audience} save time and increase productivity. Our users report saving 10 hours per week on routine tasks and seeing a 25% boost in output quality. Try ${productName} today with our 14-day free trial!`,
        `Are you tired of wasting time on repetitive tasks? I'm Michael from ${productName}, and we've built the perfect solution for ${audience}. Our platform automates your workflow, giving you back hours every week. Join thousands of satisfied customers who've transformed their productivity with ${productName}.`,
        `Hey, I'm Jessica from ${productName}. If you're like most ${audience}, you're struggling with efficiency and scale. Our platform was built specifically to solve those challenges. In just two weeks, you could see the same 30% productivity boost our average customer experiences. Start your free trial today!`
      ];
      
      const randomIndex = Math.floor(Math.random() * scriptTemplates.length);
      setScriptText(scriptTemplates[randomIndex]);
      setGenerating(false);
      
      toast({
        title: "Script Generated",
        description: "Your video script is ready!"
      });
    }, 1500);
  };

  // Function to copy script to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptText);
    toast({
      title: "Copied to clipboard",
      description: "Script copied to clipboard successfully"
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Video Scripts</h1>
        <p className="text-gray-500 text-sm mt-1">
          Create professional scripts for your marketing videos
        </p>
      </div>

      <Card className="border-none shadow-card rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary-light to-white p-5">
          <CardTitle className="text-xl">AI Script Generator</CardTitle>
          <CardDescription className="text-sm">Generate compelling scripts for your marketing videos</CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product" className="text-xs">Product/Service Name</Label>
              <Input 
                id="product" 
                placeholder="E.g., GrowthOS"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="rounded-lg text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="audience" className="text-xs">Target Audience</Label>
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
            <Label htmlFor="duration" className="text-xs">Video Duration (seconds)</Label>
            <Input 
              id="duration" 
              type="number" 
              min="30"
              max="180"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="rounded-lg text-sm w-32"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="script" className="text-xs">Generated Script</Label>
              {scriptText && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs rounded-full"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              )}
            </div>
            <Textarea 
              id="script"
              placeholder="Your AI-generated script will appear here..."
              className="min-h-[200px] rounded-xl text-sm"
              value={scriptText}
              onChange={(e) => setScriptText(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <Button 
              onClick={generateScript} 
              className="rounded-full"
              disabled={generating}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {generating ? "Generating..." : "Generate AI Script"}
            </Button>
            
            {scriptText && (
              <Link to="/dashboard/ugc">
                <Button variant="outline" className="rounded-full">
                  <Video className="mr-2 h-4 w-4" />
                  Create Video with HeyGen
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <Video className="h-3 w-3 text-primary" />
              </div>
              Product Demo Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500 mb-3">Generate scripts for professional product demonstrations.</p>
            <Button variant="outline" className="w-full rounded-full text-xs hover:bg-gray-50">Generate Script</Button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <Mic className="h-3 w-3 text-primary" />
              </div>
              Testimonial Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500 mb-3">Create compelling customer testimonial scripts.</p>
            <Button variant="outline" className="w-full rounded-full text-xs hover:bg-gray-50">Generate Script</Button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <Copy className="h-3 w-3 text-primary" />
              </div>
              Promotional Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500 mb-3">Generate attention-grabbing promotional video scripts.</p>
            <Button variant="outline" className="w-full rounded-full text-xs hover:bg-gray-50">Generate Script</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoScripts;
