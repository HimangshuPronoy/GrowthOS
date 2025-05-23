
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AIAssistant from "@/components/dashboard/AIAssistant";
import { useAuth } from "@/context/AuthContext";
import { Video, Sparkles, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, profile } = useAuth();
  
  return (
    <div className="container p-6 mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 text-xs mt-1">
          Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}! What would you like to create today?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-0.5">
              <CardTitle className="text-base font-medium">AI Video Scripts</CardTitle>
              <CardDescription className="text-xs">Create compelling video scripts</CardDescription>
            </div>
            <Video className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600 mb-3">Generate professional scripts for product demos, explainer videos, and ads.</p>
            <Link to="/dashboard/video-scripts">
              <Button className="w-full rounded-full text-xs hover:bg-primary/90 hover:scale-[1.02] transition-all">
                Create Script
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-0.5">
              <CardTitle className="text-base font-medium">UGC Content</CardTitle>
              <CardDescription className="text-xs">User-generated content ideas</CardDescription>
            </div>
            <Sparkles className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600 mb-3">Generate ideas and scripts for authentic user-generated content.</p>
            <Link to="/dashboard/ugc">
              <Button className="w-full rounded-full text-xs hover:bg-primary/90 hover:scale-[1.02] transition-all">
                Create UGC Content
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-0.5">
              <CardTitle className="text-base font-medium">Marketing Map</CardTitle>
              <CardDescription className="text-xs">Create your app marketing plan</CardDescription>
            </div>
            <Map className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600 mb-3">Build a comprehensive marketing strategy for your app or product.</p>
            <Link to="/dashboard/map">
              <Button className="w-full rounded-full text-xs hover:bg-primary/90 hover:scale-[1.02] transition-all">
                Create Plan
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mb-5">
        <Card className="shadow-md border-none">
          <CardHeader>
            <CardTitle className="text-base">Need marketing ideas?</CardTitle>
            <CardDescription className="text-xs">Our AI assistant can help you generate marketing strategies</CardDescription>
          </CardHeader>
          <CardContent>
            <AIAssistant />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
