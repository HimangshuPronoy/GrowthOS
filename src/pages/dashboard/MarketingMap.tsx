
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Map, 
  Download, 
  Share2, 
  PanelLeft,
  ArrowRight,
  Target,
  BarChart3,
  CheckCircle,
  Calendar,
  User,
  Smartphone,
  Globe,
  MessageSquare
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MarketingMap = () => {
  const [appType, setAppType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');
  const [timeframe, setTimeframe] = useState('3-months');
  const [showSidebar, setShowSidebar] = useState(true);
  const [planGenerated, setPlanGenerated] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  
  // Marketing funnel stages
  const stages = [
    { id: 'awareness', name: 'Awareness', color: '#E3F2FD', icon: Globe },
    { id: 'acquisition', name: 'Acquisition', color: '#BBDEFB', icon: User },
    { id: 'activation', name: 'Activation', color: '#90CAF9', icon: CheckCircle },
    { id: 'retention', name: 'Retention', color: '#64B5F6', icon: Smartphone },
    { id: 'referral', name: 'Referral', color: '#42A5F5', icon: MessageSquare },
  ];
  
  // App marketing channels for each stage
  const channels = {
    awareness: [
      { name: 'App Store Optimization', description: 'Optimize your app listing with targeted keywords, compelling screenshots, and description', status: 'Essential' },
      { name: 'Content Marketing', description: 'Blog posts, videos, and infographics about your app features and benefits', status: 'Recommended' },
      { name: 'Social Media', description: 'Build presence on platforms where your target users are most active', status: 'Essential' },
    ],
    acquisition: [
      { name: 'Search Ads', description: 'Run ads on Google and Apple Search to capture high-intent users', status: 'Recommended' },
      { name: 'Social Media Ads', description: 'Target specific demographics and interests on social platforms', status: 'Essential' },
      { name: 'Influencer Marketing', description: 'Partner with relevant influencers to demo and review your app', status: 'Optional' },
    ],
    activation: [
      { name: 'Onboarding Flow', description: 'Create a smooth, intuitive onboarding experience to showcase core value', status: 'Essential' },
      { name: 'First-time User Experience', description: 'Optimize the initial app experience to demonstrate immediate value', status: 'Essential' },
      { name: 'Push Notifications', description: 'Strategic early notifications to engage users with core features', status: 'Recommended' },
    ],
    retention: [
      { name: 'Email Marketing', description: 'Send regular updates, tips and personalized content', status: 'Essential' },
      { name: 'Loyalty Program', description: 'Reward continued usage and engagement with perks', status: 'Recommended' },
      { name: 'Feature Updates', description: 'Regular app updates with new features and improvements', status: 'Essential' },
    ],
    referral: [
      { name: 'In-app Referral Program', description: 'Incentivize users to invite friends with rewards for both parties', status: 'Essential' },
      { name: 'User Reviews Campaign', description: 'Prompt satisfied users to leave positive app store reviews', status: 'Essential' },
      { name: 'Social Sharing Features', description: 'Make it easy to share achievements or content from within the app', status: 'Recommended' },
    ],
  };

  // Timeline milestones based on selected timeframe
  const getTimeline = () => {
    if (timeframe === '1-month') {
      return [
        { title: 'Week 1', description: 'Setup ASO, initial social profiles, and basic analytics' },
        { title: 'Week 2', description: 'Launch first ad campaigns and optimize onboarding flow' },
        { title: 'Week 3', description: 'Implement retention email sequence and push notifications' },
        { title: 'Week 4', description: 'Review metrics, adjust strategy, and plan next iterations' },
      ];
    } else if (timeframe === '3-months') {
      return [
        { title: 'Month 1', description: 'Foundation - ASO, content creation, social setup, initial ad campaigns' },
        { title: 'Month 2', description: 'Growth - Scale successful channels, launch referral program, optimize activation' },
        { title: 'Month 3', description: 'Optimization - Refine all channels based on data, enhance retention tactics' },
      ];
    } else {
      return [
        { title: 'Months 1-2', description: 'Foundation - Market research, ASO, content strategy, social presence' },
        { title: 'Months 3-4', description: 'Growth - Paid acquisition, referral program launch, retention optimization' },
        { title: 'Months 5-6', description: 'Scale - Expand successful channels, partnerships, loyalty program' },
      ];
    }
  };

  const generateMarketingPlan = async () => {
    if (!appType || !targetAudience || !budget) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields to generate a plan",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsLoading(true);
      
      setTimeout(() => {
        setPlanGenerated(true);
        setIsLoading(false);
        toast({
          title: "Marketing Plan Generated",
          description: "Your app marketing plan is ready to view"
        });
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error generating plan",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  const handleCustomizePlan = () => {
    setIsCustomizing(true);
    toast({
      title: "Customization Mode",
      description: "You can now customize your marketing plan"
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold tracking-tight">App Marketing Plan</h1>
          <p className="text-gray-500 text-xs mt-1">
            Create a comprehensive marketing strategy for your mobile or web app
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <PanelLeft className="h-3.5 w-3.5" />
          </Button>
          
          {planGenerated && (
            <Button variant="outline" size="sm" className="rounded-full text-xs">
              <Download className="h-3.5 w-3.5 mr-1" />
              <span>Export</span>
            </Button>
          )}
          
          {planGenerated && (
            <Button size="sm" className="rounded-full text-xs">
              <Share2 className="h-3.5 w-3.5 mr-1" />
              <span>Share</span>
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue={planGenerated ? "plan" : "generator"} className="w-full">
        <TabsList className="grid grid-cols-2 mb-5 rounded-full h-8">
          <TabsTrigger value="generator" className="rounded-full text-xs">
            <Map className="mr-2 h-3.5 w-3.5" />
            Plan Generator
          </TabsTrigger>
          <TabsTrigger value="plan" className="rounded-full text-xs" disabled={!planGenerated}>
            <Target className="mr-2 h-3.5 w-3.5" />
            Marketing Plan
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="mt-0">
          <Card className="border-none shadow-md rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-white p-4">
              <CardTitle className="text-sm">App Marketing Plan Generator</CardTitle>
              <CardDescription className="text-xs">Create a customized marketing strategy for your application</CardDescription>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="appType" className="text-xs">App Type*</Label>
                  <Input 
                    id="appType" 
                    placeholder="E.g., Fitness app, SaaS tool, E-commerce app"
                    value={appType}
                    onChange={(e) => setAppType(e.target.value)}
                    className="rounded-lg text-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="audience" className="text-xs">Target Audience*</Label>
                  <Input 
                    id="audience" 
                    placeholder="E.g., Fitness enthusiasts, Small business owners"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="rounded-lg text-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-xs">Marketing Budget*</Label>
                  <Input 
                    id="budget" 
                    placeholder="E.g., $1,000/month, $5,000 total"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="rounded-lg text-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeframe" className="text-xs">Timeframe</Label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger className="text-xs h-8 rounded-lg">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month" className="text-xs">1 Month Plan</SelectItem>
                      <SelectItem value="3-months" className="text-xs">3 Month Plan</SelectItem>
                      <SelectItem value="6-months" className="text-xs">6 Month Plan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={generateMarketingPlan} 
                className="rounded-full w-full hover:bg-primary/90 hover:scale-[1.02] transition-all text-xs"
                disabled={isLoading}
              >
                <Map className="mr-2 h-3.5 w-3.5" />
                {isLoading ? (
                  <>Generating Plan <Progress className="ml-3 w-20 h-2" value={30} />
                  </>
                ) : (
                  "Generate App Marketing Plan"
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plan" className="mt-0">
          <div className="flex h-[calc(100vh-220px)]">
            {showSidebar && (
              <div className="w-60 border-r border-gray-100 pr-4 mr-4 overflow-y-auto flex-shrink-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-medium mb-2">Plan Details</h3>
                    <Card className="p-3 bg-gray-50">
                      <div className="space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">App Type:</span>
                          <span className="text-xs font-medium">{appType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Audience:</span>
                          <span className="text-xs font-medium">{targetAudience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Budget:</span>
                          <span className="text-xs font-medium">{budget}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Timeframe:</span>
                          <span className="text-xs font-medium">
                            {timeframe === '1-month' ? '1 Month' : 
                             timeframe === '3-months' ? '3 Months' : '6 Months'}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-medium mb-2">Marketing Funnel</h3>
                    <div className="space-y-1">
                      {stages.map(stage => (
                        <div 
                          key={stage.id}
                          className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <div 
                            className="w-4 h-4 rounded-full flex items-center justify-center mr-2" 
                            style={{ backgroundColor: stage.color }}
                          >
                            <stage.icon className="h-2.5 w-2.5 text-primary" />
                          </div>
                          <span className="text-xs">{stage.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-medium mb-2">Key Metrics</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <span>Downloads/Signups</span>
                          <span className="font-medium">100%</span>
                        </div>
                        <Progress value={100} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <span>Activation Rate</span>
                          <span className="font-medium">60%</span>
                        </div>
                        <Progress value={60} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <span>Retention Rate</span>
                          <span className="font-medium">40%</span>
                        </div>
                        <Progress value={40} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <span>Referral Rate</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <Progress value={20} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex-1 overflow-auto">
              <Card className="border-none shadow-md rounded-xl mb-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{appType} Marketing Plan</CardTitle>
                      <CardDescription className="text-xs mt-1">
                        For {targetAudience} • {timeframe === '1-month' ? '1 Month' : 
                             timeframe === '3-months' ? '3 Months' : '6 Months'} Plan
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <h3 className="text-xs font-medium flex items-center mb-2">
                        <Target className="h-3.5 w-3.5 mr-1.5 text-primary" />
                        Executive Summary
                      </h3>
                      <p className="text-xs text-gray-600">
                        This {timeframe === '1-month' ? '1-month' : 
                             timeframe === '3-months' ? '3-month' : '6-month'} marketing plan focuses on establishing and growing {appType} in the market, 
                        targeting {targetAudience}. The strategy follows a full-funnel approach from awareness to referral, with a 
                        budget of {budget}. Key focus areas include app store optimization, targeted user acquisition, 
                        onboarding optimization, retention tactics, and viral growth mechanisms.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium mb-2.5">Marketing Funnel Strategy</h3>
                      
                      {stages.map((stage) => (
                        <div key={stage.id} className="mb-4">
                          <div className="flex items-center mb-2">
                            <div 
                              className="w-5 h-5 rounded-full flex items-center justify-center mr-2" 
                              style={{ backgroundColor: stage.color }}
                            >
                              <stage.icon className="h-3 w-3 text-primary" />
                            </div>
                            <h4 className="text-xs font-medium">{stage.name} Stage</h4>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {channels[stage.id as keyof typeof channels].map((channel, idx) => (
                              <Card key={idx} className="shadow-sm">
                                <CardContent className="p-3">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="text-xs font-medium">{channel.name}</h5>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                      channel.status === 'Essential' 
                                        ? 'bg-green-100 text-green-800' 
                                        : channel.status === 'Recommended'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {channel.status}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-gray-600">{channel.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-medium mb-2 flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" />
                        Implementation Timeline
                      </h3>
                      
                      <div className="relative">
                        <div className="absolute top-0 bottom-0 left-[15px] w-[1px] bg-gray-200"></div>
                        <div className="space-y-3 relative ml-8 mt-3">
                          {getTimeline().map((milestone, index) => (
                            <div key={index} className="relative">
                              <div className="absolute -left-8 w-3 h-3 rounded-full bg-primary"></div>
                              <h4 className="text-xs font-medium">{milestone.title}</h4>
                              <p className="text-[10px] text-gray-600 mt-0.5">{milestone.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-3">
                      <h3 className="text-xs font-medium flex items-center mb-2">
                        <BarChart3 className="h-3.5 w-3.5 mr-1.5 text-primary" />
                        Key Performance Indicators
                      </h3>
                      <ul className="text-xs space-y-1 list-disc pl-4 text-gray-600">
                        <li>App store ranking improvement for key search terms</li>
                        <li>User acquisition cost (CAC) below industry average</li>
                        <li>Day 1, 7, and 30 retention rates above industry benchmarks</li>
                        <li>User activation rate (completion of key in-app actions)</li>
                        <li>Referral rate per active user</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-4 pt-0 pb-4">
                  <Button 
                    size="sm" 
                    className="rounded-full text-xs ml-auto"
                    onClick={handleCustomizePlan}
                  >
                    Customize Plan
                    <ArrowRight className="ml-1.5 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {isCustomizing && (
        <Card className="mt-4 p-4 border-dashed border-primary/30">
          <CardHeader className="p-2">
            <CardTitle className="text-sm">Plan Customization</CardTitle>
            <CardDescription className="text-xs">Fine-tune your marketing plan</CardDescription>
          </CardHeader>
          <CardContent className="p-2 space-y-3">
            <div className="space-y-1">
              <Label className="text-xs">Adjust Budget Allocation</Label>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs">
                    <span>Awareness</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-1.5" />
                </div>
                <div>
                  <div className="flex justify-between text-xs">
                    <span>Acquisition</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-1.5" />
                </div>
                <div>
                  <div className="flex justify-between text-xs">
                    <span>Retention</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-1.5" />
                </div>
              </div>
            </div>
            
            <Button size="sm" className="w-full text-xs rounded-full">
              Apply Changes
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MarketingMap;
