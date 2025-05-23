
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Sparkles, 
  Target, 
  BarChart3, 
  Download,
  Layers,
  ArrowRight,
  Bookmark,
  Calendar,
  Copy
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Strategy = () => {
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [goals, setGoals] = useState('');
  const [generating, setGenerating] = useState(false);
  const [planGenerated, setPlanGenerated] = useState(false);
  const { toast } = useToast();
  const [viewingDetailedPlan, setViewingDetailedPlan] = useState(false);

  const generateStrategy = () => {
    if (!businessType || !targetAudience || !goals) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setGenerating(true);
    
    setTimeout(() => {
      setGenerating(false);
      setPlanGenerated(true);
      
      toast({
        title: "Strategy Generated",
        description: "Your marketing strategy has been created"
      });
    }, 2000);
  };

  const viewDetailedPlan = () => {
    setViewingDetailedPlan(true);
    toast({
      title: "Detailed Plan View",
      description: "Viewing the complete marketing strategy"
    });
  };

  const duplicateStrategy = (name: string) => {
    toast({
      title: "Strategy Duplicated",
      description: `"${name}" has been duplicated to your drafts`
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-bold tracking-tight">Marketing Strategy</h1>
        <p className="text-gray-500 text-xs mt-1">
          Generate AI-powered marketing strategies for your business
        </p>
      </div>

      <Tabs defaultValue={planGenerated ? "plan" : "generator"} className="w-full">
        <TabsList className="grid grid-cols-3 mb-5 rounded-full h-9">
          <TabsTrigger value="generator" className="rounded-full text-xs">
            <Sparkles className="mr-2 h-3 w-3" />
            Strategy Generator
          </TabsTrigger>
          <TabsTrigger value="plan" className="rounded-full text-xs" disabled={!planGenerated}>
            <Layers className="mr-2 h-3 w-3" />
            Marketing Plan
          </TabsTrigger>
          <TabsTrigger value="saved" className="rounded-full text-xs">
            <Bookmark className="mr-2 h-3 w-3" />
            Saved Strategies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="mt-0">
          <Card className="border-none shadow-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary-light to-white p-5">
              <CardTitle className="text-base">AI Strategy Generator</CardTitle>
              <CardDescription className="text-xs">Create data-driven marketing strategies in minutes</CardDescription>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="business" className="text-xs">Business Type*</Label>
                  <Input 
                    id="business" 
                    placeholder="E.g., SaaS productivity tool, E-commerce clothing brand"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="rounded-lg text-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="audience" className="text-xs">Target Audience*</Label>
                  <Input 
                    id="audience" 
                    placeholder="E.g., Marketing teams at mid-size companies"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="rounded-lg text-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-xs">Business Goals*</Label>
                  <Textarea 
                    id="goals" 
                    placeholder="E.g., Increase trial sign-ups by 20%, improve user retention"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    className="rounded-lg text-xs min-h-[100px]"
                  />
                </div>
              </div>
              
              <Button 
                onClick={generateStrategy} 
                className="rounded-full w-full hover:bg-primary/90 hover:scale-[1.02] transition-all text-xs"
                disabled={generating}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {generating ? (
                  <>Generating Strategy <Progress className="ml-3 w-20 h-2" value={30} />
                  </>
                ) : (
                  "Generate Marketing Strategy"
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plan" className="mt-0">
          <Card className="border-none shadow-card rounded-xl">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-sm">Q3 2025 Marketing Strategy</CardTitle>
                  <CardDescription className="text-xs mt-1">Generated for {businessType}</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="rounded-full text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Export PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <div className="space-y-5">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-xs font-medium flex items-center mb-2">
                    <Target className="h-4 w-4 mr-2 text-primary" />
                    Executive Summary
                  </h3>
                  <p className="text-xs text-gray-600">
                    This strategy focuses on increasing market penetration among {targetAudience} through a combination of content marketing, targeted ads, and community building. The plan aims to {goals.toLowerCase()} over the next quarter with measurable KPIs and actionable tactics.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xs font-medium mb-2">Key Strategy Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Card className="shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="text-xs font-medium mb-2">Content Marketing</h4>
                        <ul className="text-xs space-y-1 list-disc pl-4 text-gray-600">
                          <li>Weekly blog articles targeting key industry problems</li>
                          <li>Bi-weekly video tutorials showcasing product features</li>
                          <li>Monthly webinars with industry experts</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="text-xs font-medium mb-2">Paid Advertising</h4>
                        <ul className="text-xs space-y-1 list-disc pl-4 text-gray-600">
                          <li>Google search campaigns focusing on high-intent keywords</li>
                          <li>LinkedIn ads targeting decision-makers at mid-size companies</li>
                          <li>Retargeting campaigns for website visitors</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="text-xs font-medium mb-2">Customer Retention</h4>
                        <ul className="text-xs space-y-1 list-disc pl-4 text-gray-600">
                          <li>Personalized onboarding sequences for new customers</li>
                          <li>Customer success check-ins at 30, 60, and 90 days</li>
                          <li>Loyalty program with referral incentives</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-medium mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Implementation Timeline
                  </h3>
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-[15px] w-[2px] bg-gray-200"></div>
                    <div className="space-y-4 relative ml-8 mt-4">
                      <div className="relative">
                        <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-xs font-medium">Month 1: Foundation</h4>
                        <p className="text-xs text-gray-600 mt-1">Content calendar creation, ad campaign setup, audience research</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary/70"></div>
                        <h4 className="text-xs font-medium">Month 2: Launch & Optimize</h4>
                        <p className="text-xs text-gray-600 mt-1">Deploy campaigns, A/B testing, performance analysis</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary/40"></div>
                        <h4 className="text-xs font-medium">Month 3: Scale & Refine</h4>
                        <p className="text-xs text-gray-600 mt-1">Scale successful channels, refine messaging, prepare Q4 strategy</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-xs font-medium flex items-center mb-2">
                    <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                    Expected Outcomes
                  </h3>
                  <ul className="text-xs space-y-1 list-disc pl-4 text-gray-600">
                    <li>20% increase in qualified leads by end of quarter</li>
                    <li>15% improvement in customer retention rates</li>
                    <li>30% growth in social media engagement and brand awareness</li>
                    <li>Establishment of thought leadership in the industry vertical</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-5 flex justify-end">
              <Button className="rounded-full text-xs" onClick={viewDetailedPlan}>
                View Detailed Plan
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
          
          {viewingDetailedPlan && (
            <Card className="border-none shadow-card rounded-xl mt-4 p-4">
              <CardHeader>
                <CardTitle className="text-sm">Detailed Implementation Plan</CardTitle>
                <CardDescription className="text-xs">Complete tactical breakdown for {businessType}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-xs font-medium mb-2">Week-by-Week Action Items</h4>
                  <div className="space-y-2 text-xs">
                    <p>A comprehensive weekly breakdown of all marketing tasks and responsibilities is available for your team to implement.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Q2 2025 Growth Strategy</CardTitle>
                <CardDescription className="text-xs">Focus: Customer Acquisition</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-gray-600">Strategy focusing on new market entry and customer acquisition through content marketing and partnerships.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs text-gray-500">Created: May 2, 2025</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full h-7 text-xs"
                    onClick={() => duplicateStrategy("Q2 2025 Growth Strategy")}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Duplicate
                  </Button>
                </div>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Enterprise Client Strategy</CardTitle>
                <CardDescription className="text-xs">Focus: B2B Sales</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-gray-600">B2B sales strategy targeting enterprise clients with personalized outreach and account-based marketing.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs text-gray-500">Created: April 18, 2025</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full h-7 text-xs"
                    onClick={() => duplicateStrategy("Enterprise Client Strategy")}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Duplicate
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Strategy;
