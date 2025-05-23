
import { useState, useEffect } from 'react';
import { Video, BarChart3, Calendar, Zap, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const HeroAnimation = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('analytics');
  
  useEffect(() => {
    // Add a small delay to make the animation more noticeable
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    // Create tab cycling for automatic demo
    const tabCycle = setInterval(() => {
      setActiveTab(current => {
        switch (current) {
          case 'analytics': return 'content';
          case 'content': return 'campaigns';
          case 'campaigns': return 'analytics';
          default: return 'analytics';
        }
      });
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(tabCycle);
    };
  }, []);
  
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Animated background shapes */}
      <div className="absolute top-[5%] right-[15%] w-20 h-20 rounded-full bg-primary/10 animate-float"></div>
      <div className="absolute top-[25%] left-[10%] w-12 h-12 rounded-full bg-primary/20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-[15%] right-[20%] w-16 h-16 rounded-full bg-accent/20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[60%] left-[5%] w-14 h-14 rounded-full bg-secondary/10 animate-float" style={{animationDelay: '1.5s'}}></div>
      
      {/* Main dashboard card */}
      <div className={cn(
        "bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6 max-w-md w-full transition-all duration-700",
        loaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
      )}>
        <div className="flex items-center space-x-5 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-2xl">G</span>
          </div>
          <div>
            <h3 className="font-bold text-2xl">GrowthOS Dashboard</h3>
            <p className="text-gray-500">Your marketing journey</p>
          </div>
        </div>
        
        {/* Dashboard tabs */}
        <div className="flex border-b border-gray-200 mb-5">
          <button 
            className={cn(
              "px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors",
              activeTab === 'analytics' 
                ? "text-primary border-b-2 border-primary" 
                : "text-gray-500 hover:text-primary"
            )}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Analytics</span>
          </button>
          <button 
            className={cn(
              "px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors",
              activeTab === 'content' 
                ? "text-primary border-b-2 border-primary" 
                : "text-gray-500 hover:text-primary"
            )}
            onClick={() => setActiveTab('content')}
          >
            <Video className="w-4 h-4" />
            <span>Content</span>
          </button>
          <button 
            className={cn(
              "px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors",
              activeTab === 'campaigns' 
                ? "text-primary border-b-2 border-primary" 
                : "text-gray-500 hover:text-primary"
            )}
            onClick={() => setActiveTab('campaigns')}
          >
            <Calendar className="w-4 h-4" />
            <span>Campaigns</span>
          </button>
        </div>
        
        <div className="space-y-5">
          {/* Analytics Tab Content */}
          <div className={cn(
            "transition-all duration-500",
            activeTab === 'analytics' 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 absolute -translate-x-5"
          )}>
            {activeTab === 'analytics' && (
              <>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Marketing Performance</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-3 rounded-xl text-center">
                      <div className="text-2xl font-bold text-green-600">32%</div>
                      <p className="text-xs text-green-700">Conversion Rate</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl text-center">
                      <div className="text-2xl font-bold text-blue-600">12.4k</div>
                      <p className="text-xs text-blue-700">Monthly Visits</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Growth Trend</h4>
                  <div className="h-24 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-3 flex items-end">
                    <div className="w-1/12 h-4 bg-primary/30 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-8 bg-primary/40 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-6 bg-primary/50 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-10 bg-primary/60 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-12 bg-primary/50 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-14 bg-primary/60 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-10 bg-primary/70 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-16 bg-primary/80 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-14 bg-primary/90 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-20 bg-primary rounded-sm mr-1 animate-pulse"></div>
                    <div className="w-1/12 h-16 bg-primary/60 rounded-sm mr-1"></div>
                    <div className="w-1/12 h-12 bg-primary/40 rounded-sm"></div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Content Tab */}
          <div className={cn(
            "transition-all duration-500", 
            activeTab === 'content' 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 absolute -translate-x-5"
          )}>
            {activeTab === 'content' && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Video className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-medium">AI Videos</h3>
                    <p className="text-xs text-gray-500 mt-1">12 created</p>
                    <div className="mt-2 bg-white/50 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-2/3"></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Zap className="h-6 w-6 text-purple-500 mb-2" />
                    <h3 className="font-medium">UGC Scripts</h3>
                    <p className="text-xs text-gray-500 mt-1">8 generated</p>
                    <div className="mt-2 bg-white/50 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Recent Content</h3>
                    <Button variant="ghost" className="text-xs h-7 px-2">View All</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                        <Video className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">Product Demo</h4>
                        <p className="text-xs text-gray-500">Created 2 days ago</p>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                        <Video className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">Testimonial Video</h4>
                        <p className="text-xs text-gray-500">Created yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Campaigns Tab */}
          <div className={cn(
            "transition-all duration-500", 
            activeTab === 'campaigns' 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 absolute -translate-x-5"
          )}>
            {activeTab === 'campaigns' && (
              <>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-xl">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Active Campaigns</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">5 running</span>
                  </div>
                  
                  <div className="mt-3 space-y-2.5">
                    <div className="bg-white p-2.5 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-2">
                          <Trophy className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Product Launch</h4>
                          <div className="flex items-center mt-1">
                            <div className="h-1.5 bg-gray-100 rounded-full w-24">
                              <div className="h-full bg-primary rounded-full w-3/4"></div>
                            </div>
                            <span className="text-xs text-gray-500 ml-2">75%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-2.5 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                          <Users className="h-4 w-4 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Referral Program</h4>
                          <div className="flex items-center mt-1">
                            <div className="h-1.5 bg-gray-100 rounded-full w-24">
                              <div className="h-full bg-purple-500 rounded-full w-1/2"></div>
                            </div>
                            <span className="text-xs text-gray-500 ml-2">50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-amber-50 p-3 rounded-xl text-center">
                    <div className="text-amber-500 font-bold text-xl">24</div>
                    <p className="text-xs text-amber-700 mt-1">Days Active</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <div className="text-blue-500 font-bold text-xl">68%</div>
                    <p className="text-xs text-blue-700 mt-1">Goal Progress</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Notification indicator */}
        <div className={cn(
          "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full",
          loaded ? "animate-pulse" : ""
        )}>
          3
        </div>
      </div>
      
      {/* Floating notification */}
      <div className={cn(
        "absolute top-5 right-0 transform translate-x-1/3 bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-xs transition-all duration-1000",
        loaded ? "opacity-100" : "opacity-0 translate-y-4"
      )} style={{transitionDelay: "1200ms"}}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-sm">Campaign launched!</p>
            <p className="text-xs text-gray-500 mt-1">Your email campaign is now active</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
          <Button variant="ghost" className="h-8 text-xs px-2">Dismiss</Button>
          <Button className="h-8 text-xs px-2 bg-primary text-white ml-2">View</Button>
        </div>
      </div>
      
      {/* Bottom floating chart card */}
      <div className={cn(
        "absolute -bottom-10 -left-10 bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-1000 max-w-[200px]",
        loaded ? "opacity-100" : "opacity-0 translate-y-4"
      )} style={{transitionDelay: "1500ms"}}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium">Conversions</h4>
          <span className="text-xs text-green-500 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            24%
          </span>
        </div>
        <div className="flex items-end h-14 space-x-1">
          {[3, 4, 2, 5, 7, 4, 6].map((h, i) => (
            <div 
              key={i} 
              className={`flex-1 bg-primary rounded-sm transition-all duration-500 ${loaded ? '' : 'h-0'}`} 
              style={{
                height: `${h * 10}%`, 
                opacity: 0.6 + (i * 0.05), 
                transitionDelay: `${1800 + (i * 100)}ms`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
