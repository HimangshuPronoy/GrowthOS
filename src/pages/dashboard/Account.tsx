
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Account = () => {
  const { profile, updateProfile } = useAuth();
  const [newsletter, setNewsletter] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleUpdateProfile = () => {
    updateProfile({ full_name: fullName })
      .then(() => {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully"
        });
      });
  };
  
  return (
    <div className="container mx-auto py-6">
      <div className="mb-5">
        <h1 className="text-lg font-bold tracking-tight">Account Settings</h1>
        <p className="text-gray-500 text-xs mt-1">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full md:w-[400px]">
        <TabsList className="rounded-full">
          <TabsTrigger value="profile" className="text-xs rounded-full">
            <User className="mr-1.5 h-3.5 w-3.5" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs rounded-full">
            <Bell className="mr-1.5 h-3.5 w-3.5" />
            Notifications
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-sm">Profile Information</CardTitle>
              <CardDescription className="text-xs">Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  value={fullName} 
                  onChange={(e) => setFullName(e.target.value)} 
                  className="text-xs h-9" 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="rounded-full text-xs" 
                onClick={handleUpdateProfile}
              >
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-sm">Notification Preferences</CardTitle>
              <CardDescription className="text-xs">Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-center justify-between">
                <label htmlFor="newsletter" className="text-xs font-medium text-gray-700">Email Newsletter</label>
                <Switch id="newsletter" checked={newsletter} onCheckedChange={setNewsletter} />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="notifications" className="text-xs font-medium text-gray-700">Push Notifications</label>
                <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full text-xs">Update Notifications</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Account;
