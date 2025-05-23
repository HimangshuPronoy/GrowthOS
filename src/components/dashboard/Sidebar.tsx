
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Map,
  Layout,
  PanelLeft,
  Settings,
  User,
  Video,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  active: boolean;
  collapsed: boolean;
}

const SidebarItem = ({ icon: Icon, label, path, active, collapsed }: SidebarItemProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center py-2 px-4 mb-1 rounded-full transition-all",
        active 
          ? "bg-primary/10 text-primary"
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <Icon className={cn("h-4 w-4", active ? "text-primary" : "text-gray-500")} />
      {!collapsed && <span className="ml-3 text-xs font-medium">{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: Layout, label: 'Dashboard', path: '/dashboard' },
    { icon: BarChart3, label: 'Marketing Strategy', path: '/dashboard/strategy' },
    { icon: Video, label: 'AI Video Scripts', path: '/dashboard/video-scripts' },
    { icon: Sparkles, label: 'UGC Content', path: '/dashboard/ugc' },
    { icon: Map, label: 'Marketing Map', path: '/dashboard/map' },
    { icon: User, label: 'Account', path: '/dashboard/account' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div
      className={cn(
        "flex flex-col h-screen py-4 transition-all duration-300 ease-in-out bg-white border-r border-gray-100 shadow-subtle",
        collapsed ? "w-[60px]" : "w-[200px]"
      )}
    >
      <div className="flex items-center px-4 mb-6">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-sm">GrowthOS</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">G</span>
          </div>
        )}
      </div>

      <div className="flex-1 px-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={currentPath === item.path || currentPath.startsWith(item.path + '/')}
            collapsed={collapsed}
          />
        ))}
      </div>

      <div className="px-3 mt-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex justify-center py-2 rounded-full"
        >
          <PanelLeft className={cn("h-4 w-4 text-gray-500 transition-transform", collapsed && "rotate-180")} />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
