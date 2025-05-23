
import React from 'react';
import { 
  Gift, 
  Badge, 
  ChevronRight, 
  Calendar,
  Video,
  Sparkles 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge as UIBadge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community Building</h1>
          <p className="text-muted-foreground">Grow your audience and build a loyal community around your SaaS.</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Link to="/dashboard/ugc">
            <Button variant="default" className="font-medium">
              <Video className="mr-2 h-4 w-4" /> Create UGC Video
            </Button>
          </Link>
          <Link to="/dashboard/content">
            <Button variant="outline">
              <Sparkles className="mr-2 h-4 w-4" /> Create Content
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="ugc" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ugc">UGC Contests</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="mentions">Brand Mentions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ugc" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Active Contest</CardTitle>
                <CardDescription>Show us how you use GrowthOS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Ends in 5 days</span>
                  </div>
                  <UIBadge>$500 Prize</UIBadge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Submissions</span>
                    <span className="font-medium">24/50</span>
                  </div>
                  <Progress value={48} />
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Details <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Completed Contest</CardTitle>
                <CardDescription>Share your growth story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Ended 2 weeks ago</span>
                  </div>
                  <UIBadge variant="outline">Completed</UIBadge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Submissions</span>
                    <span className="font-medium">42/50</span>
                  </div>
                  <Progress value={84} />
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Results <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-dashed border-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-muted-foreground">Create New Contest</CardTitle>
                <CardDescription>Launch a UGC contest for your audience</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <Button variant="outline">
                  <Gift className="mr-2 h-4 w-4" /> Create Contest
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="influencers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Influencer Outreach</CardTitle>
              <CardDescription>Connect with influencers in your niche</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">SaaS Growth Expert • 45K followers</p>
                    </div>
                  </div>
                  <Button size="sm">Contact</Button>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Mark Smith</p>
                      <p className="text-sm text-muted-foreground">Tech Reviewer • 78K followers</p>
                    </div>
                  </div>
                  <Button size="sm">Contact</Button>
                </div>
                
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/100?img=3" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Amy Lee</p>
                      <p className="text-sm text-muted-foreground">Product Hunt Launcher • 32K followers</p>
                    </div>
                  </div>
                  <Button size="sm">Contact</Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                View All Influencers <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mentions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Brand Mentions</CardTitle>
              <CardDescription>Monitor what people are saying about your brand</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">Twitter</span>
                    </div>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                  <p className="text-sm mb-2">
                    "Just discovered @GrowthOS and I'm blown away by how easy it makes content planning! Game changer for my SaaS marketing strategy."
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://i.pravatar.cc/100?img=4" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">@techcreator</span>
                    </div>
                    <UIBadge variant="outline" className="text-green-500">Positive</UIBadge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="h-4 w-4 text-purple-500" />
                      <span className="font-medium">Product Hunt</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Yesterday</span>
                  </div>
                  <p className="text-sm mb-2">
                    "GrowthOS has completely transformed how we approach marketing. The AI suggestions are spot on and save us hours every week."
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                        <AvatarFallback>SB</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Sarah Brown</span>
                    </div>
                    <UIBadge variant="outline" className="text-green-500">Positive</UIBadge>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                View All Mentions <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
