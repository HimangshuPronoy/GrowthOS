
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardLayout = () => {
  const { user, profile } = useAuth();
  
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    }
    return user?.email?.substring(0, 2).toUpperCase() || "U";
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-100 shadow-subtle">
          <div className="flex items-center justify-end py-3 px-6">
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-600 hover:text-primary rounded-full w-7 h-7 flex items-center justify-center">
                    <Bell className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72 rounded-xl">
                  <DropdownMenuLabel className="text-xs">Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-[300px] overflow-auto">
                    <DropdownMenuItem className="p-3 cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-medium">Welcome to GrowthOS!</p>
                        <p className="text-xs text-gray-500">Get started by exploring our AI video scripts.</p>
                        <p className="text-[10px] text-gray-400 mt-1">Just now</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <div className="flex items-center space-x-2">
                <div className="text-right hidden md:block">
                  <p className="text-xs font-medium">{profile?.full_name || user?.email || 'User'}</p>
                  <p className="text-[10px] text-gray-500">Premium Plan</p>
                </div>
                <Avatar className="h-7 w-7">
                  <AvatarImage src={profile?.avatar_url || ""} />
                  <AvatarFallback className="text-xs">{getInitials()}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
