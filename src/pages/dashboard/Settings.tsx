
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Bell, User, Lock, CreditCard, Globe, Moon, Sun, ToggleLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SettingsPage = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [language, setLanguage] = useState('en');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const { toast } = useToast();

  const saveSettings = (type: string) => {
    toast({
      title: "Settings Saved",
      description: `Your ${type} settings have been updated`
    });
  };
  
  return (
    <div className="container mx-auto py-6">
      <div className="mb-4">
        <h1 className="text-lg font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500 text-xs mt-1">
          Configure your account and application preferences
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4 rounded-full">
          <TabsTrigger value="general" className="rounded-full text-xs">
            <SettingsIcon className="mr-2 h-3.5 w-3.5" />
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-full text-xs">
            <Bell className="mr-2 h-3.5 w-3.5" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="profile" className="rounded-full text-xs">
            <User className="mr-2 h-3.5 w-3.5" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-full text-xs">
            <Lock className="mr-2 h-3.5 w-3.5" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="rounded-full text-xs">
            <CreditCard className="mr-2 h-3.5 w-3.5" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-sm">General Settings</CardTitle>
              <CardDescription className="text-xs">
                Manage your application preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Theme</label>
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    variant={theme === 'light' ? 'default' : 'outline'} 
                    className="text-xs rounded-full flex items-center gap-1.5" 
                    onClick={() => setTheme('light')}
                  >
                    <Sun className="h-3.5 w-3.5" />
                    Light
                  </Button>
                  <Button 
                    size="sm"
                    variant={theme === 'dark' ? 'default' : 'outline'} 
                    className="text-xs rounded-full flex items-center gap-1.5" 
                    onClick={() => setTheme('dark')}
                  >
                    <Moon className="h-3.5 w-3.5" />
                    Dark
                  </Button>
                  <Button 
                    size="sm"
                    variant={theme === 'system' ? 'default' : 'outline'} 
                    className="text-xs rounded-full flex items-center gap-1.5" 
                    onClick={() => setTheme('system')}
                  >
                    <ToggleLeft className="h-3.5 w-3.5" />
                    System
                  </Button>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Language</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full text-xs h-9">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en" className="text-xs">English</SelectItem>
                    <SelectItem value="es" className="text-xs">Spanish</SelectItem>
                    <SelectItem value="fr" className="text-xs">French</SelectItem>
                    <SelectItem value="de" className="text-xs">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">Enable analytics</span>
                <Switch defaultChecked />
              </div>
              
              <div className="pt-2">
                <Button className="rounded-full text-xs w-full sm:w-auto" onClick={() => saveSettings('general')}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-sm">Notification Settings</CardTitle>
              <CardDescription className="text-xs">
                Manage how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">Email Notifications</p>
                    <p className="text-xs text-gray-500">Receive updates, newsletters and promotions</p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">Push Notifications</p>
                    <p className="text-xs text-gray-500">Receive alerts even when you're not using the app</p>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">Marketing Communications</p>
                    <p className="text-xs text-gray-500">Receive marketing and promotional materials</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="pt-2">
                <Button className="rounded-full text-xs w-full sm:w-auto" onClick={() => saveSettings('notification')}>
                  Update Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {["profile", "security", "billing"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-sm">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Settings
                </CardTitle>
                <CardDescription className="text-xs">
                  Configure your {tab} settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="inline-flex h-10 w-10 rounded-full bg-gray-100 items-center justify-center mb-2">
                    {tab === 'profile' && <User className="h-5 w-5 text-gray-500" />}
                    {tab === 'security' && <Lock className="h-5 w-5 text-gray-500" />}
                    {tab === 'billing' && <CreditCard className="h-5 w-5 text-gray-500" />}
                  </div>
                  <h3 className="text-sm font-medium mb-1">Settings Available</h3>
                  <p className="text-xs text-gray-500 mb-3">
                    These settings can be configured from your account page
                  </p>
                  <Button 
                    className="rounded-full text-xs" 
                    onClick={() => window.location.href = '/dashboard/account'}
                  >
                    Go to Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SettingsPage;
