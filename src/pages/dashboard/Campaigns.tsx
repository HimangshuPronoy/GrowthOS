
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Mail,
  Plus,
  Search,
  Settings,
  TrendingUp,
  Copy,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Campaigns = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Campaign Automation</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Create and manage your marketing campaigns
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        
        <Button className="rounded-full bg-primary self-start md:self-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-3 rounded-full h-12 p-1">
          <TabsTrigger value="active" className="rounded-full">Active</TabsTrigger>
          <TabsTrigger value="scheduled" className="rounded-full">Scheduled</TabsTrigger>
          <TabsTrigger value="completed" className="rounded-full">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="mt-6 space-y-6">
          <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-white p-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      Product Launch Email Sequence
                    </CardTitle>
                    <CardDescription>5-part email sequence for new product launch</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-full">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Start Date</span>
                    <span className="font-medium">May 15, 2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Status</span>
                    <div className="flex items-center">
                      <span className="font-medium">3/5 emails sent</span>
                      <div className="ml-2 bg-gray-200 h-1 w-16 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Performance</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="font-medium">32% open rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-4">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">View Report</Button>
                </div>
              </CardContent>
            </div>
          </Card>
          
          <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-white p-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <Instagram className="mr-2 h-5 w-5 text-primary" />
                      UGC Contest Campaign
                    </CardTitle>
                    <CardDescription>Instagram contest with user-generated content</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-full">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Start Date</span>
                    <span className="font-medium">May 10, 2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">End Date</span>
                    <span className="font-medium">May 24, 2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Submissions</span>
                    <div className="flex items-center">
                      <span className="font-medium">23 submissions</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-4">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">View Entries</Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="scheduled" className="mt-6 space-y-6">
          <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-white p-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <Facebook className="mr-2 h-5 w-5 text-primary" />
                      Facebook Ad Campaign
                    </CardTitle>
                    <CardDescription>Conversion campaign for SaaS trial signups</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 rounded-full">Scheduled</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Start Date</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">May 25, 2025</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Budget</span>
                    <span className="font-medium">$1,200</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Status</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-orange-500 mr-1" />
                      <span className="font-medium">Awaiting launch</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-4">
                  <Button variant="outline" size="sm" className="rounded-full">Edit Campaign</Button>
                  <Button size="sm" className="rounded-full">Launch Now</Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-6 space-y-6">
          <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-white p-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <Twitter className="mr-2 h-5 w-5 text-primary" />
                      Twitter Ad Campaign
                    </CardTitle>
                    <CardDescription>Brand awareness campaign for product launch</CardDescription>
                  </div>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-full">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="font-medium">Apr 15 - May 1, 2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Impressions</span>
                    <span className="font-medium">54,320</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Conversions</span>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      <span className="font-medium">126 (2.4%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-4">
                  <Button variant="outline" size="sm" className="rounded-full">View Report</Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Copy className="h-4 w-4 mr-2" />
                    Clone Campaign
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
          
          <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-white p-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      Newsletter Campaign
                    </CardTitle>
                    <CardDescription>Monthly newsletter April 2025</CardDescription>
                  </div>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-full">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Sent Date</span>
                    <span className="font-medium">Apr 5, 2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Recipients</span>
                    <span className="font-medium">3,458</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Performance</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="font-medium">28% open rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-4">
                  <Button variant="outline" size="sm" className="rounded-full">View Report</Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Copy className="h-4 w-4 mr-2" />
                    Clone Campaign
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              Email Campaign
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">Create automated email sequences with smart personalization.</p>
            <Button variant="outline" className="w-full btn-hover rounded-full">Create Campaign</Button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Facebook className="h-4 w-4 text-primary" />
              </div>
              Social Ads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">Create high-converting social media ad campaigns.</p>
            <Button variant="outline" className="w-full btn-hover rounded-full">Create Campaign</Button>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-card hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              Content Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-4">Plan and schedule your content across multiple platforms.</p>
            <Button variant="outline" className="w-full btn-hover rounded-full">Create Calendar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;
