
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Video, 
  Calendar, 
  MessageSquare, 
  Target, 
  Award,
  TrendingUp,
  ArrowRight,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface JourneyStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  position: 'left' | 'right';
  stage: number;
  activeStage: number;
  setActiveStage: (stage: number) => void;
}

const JourneyStep = ({ 
  icon: Icon, 
  title, 
  description, 
  position, 
  stage, 
  activeStage,
  setActiveStage
}: JourneyStepProps) => {
  const isActive = activeStage === stage;
  const isPast = activeStage > stage;
  
  return (
    <div 
      className={`relative flex items-center ${position === 'left' ? 'justify-end' : 'justify-start'} mb-20`}
      onClick={() => setActiveStage(stage)}
    >
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-500
          ${isActive ? 'bg-primary text-white scale-125 shadow-xl pulse-glow' : isPast ? 'bg-primary/20 text-primary' : 'bg-gray-200 text-gray-500'}`}
      >
        {isPast ? <Check className="h-7 w-7" /> : <Icon className="h-7 w-7" />}
      </div>
      
      <div 
        className={`absolute top-0 ${position === 'left' ? 'right-20' : 'left-20'} 
          max-w-xs transform transition-all duration-500 cursor-pointer
          ${isActive ? 'opacity-100 translate-y-0 scale-110' : 'opacity-70 translate-y-2 scale-100'}`}
      >
        <Card 
          className={`glass-card border-2 ${isActive ? 'border-primary shadow-xl' : 'border-transparent'} rounded-2xl overflow-hidden`}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            {isActive && (
              <Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/20 border-none rounded-full">
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </Badge>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

const GrowthJourneyMap = () => {
  const [activeStage, setActiveStage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/10 to-white -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute top-[15%] right-[15%] w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-[20%] left-[10%] w-12 h-12 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-[40%] left-[20%] w-8 h-8 bg-accent/20 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute bottom-[40%] right-[30%] w-10 h-10 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2.2s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-2 rounded-full">
            Your Growth Journey
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From <span className="text-primary">Idea</span> to <span className="text-primary">Success</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our platform guides you through every step of your SaaS marketing journey with AI-powered tools designed for success.
          </p>
        </div>
        
        {/* Journey Timeline */}
        <div className={cn(
          "relative max-w-6xl mx-auto transition-all duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-light via-primary to-accent transform -translate-x-1/2 rounded-full"></div>
          
          {/* Journey steps */}
          <div className="grid grid-cols-1">
            <div className="relative grid grid-cols-2 gap-8">
              <JourneyStep 
                icon={Target}
                title="Marketing Strategy"
                description="Build your personalized marketing roadmap with AI-generated strategies tailored to your SaaS."
                position="right"
                stage={1}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />
              
              <div className="col-span-1"></div>
              
              <div className="col-span-1"></div>
              
              <JourneyStep 
                icon={Video}
                title="AI Content Creation"
                description="Create professional videos, demos and marketing content with our AI studio."
                position="left"
                stage={2}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />
              
              <JourneyStep 
                icon={Calendar}
                title="Campaign Automation"
                description="Set up automated marketing campaigns across multiple platforms with AI-powered optimization."
                position="right"
                stage={3}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />
              
              <div className="col-span-1"></div>
              
              <div className="col-span-1"></div>
              
              <JourneyStep 
                icon={MessageSquare}
                title="Community Building"
                description="Grow and engage your community with UGC contests and influencer partnerships."
                position="left"
                stage={4}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />
              
              <JourneyStep 
                icon={TrendingUp}
                title="Growth & Analytics"
                description="Track your success with advanced analytics and celebrate wins along your journey."
                position="right"
                stage={5}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />
              
              <div className="col-span-1"></div>
              
              <div className="col-span-1"></div>
              
              <JourneyStep 
                icon={Award}
                title="Success & Scaling"
                description="Scale your SaaS with proven strategies and continuous optimization."
                position="left"
                stage={6}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="mt-10 flex justify-center">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <button 
                key={step}
                className={`w-4 h-4 mx-2 rounded-full transition-all transform ${activeStage === step ? 'bg-primary scale-150' : activeStage > step ? 'bg-primary/50' : 'bg-gray-300'}`}
                onClick={() => setActiveStage(step)}
                aria-label={`Go to step ${step}`}
              />
            ))}
          </div>
          
          {/* Journey stage details - enhanced with glass card effect */}
          <div className={cn(
            "mt-16 glass-card p-10 border-2 transition-all duration-500",
            activeStage === 1 ? "border-primary" : "border-white/20"
          )}>
            <div className="flex items-center mb-6">
              {activeStage === 1 && <Target className="h-10 w-10 text-primary mr-4" />}
              {activeStage === 2 && <Video className="h-10 w-10 text-primary mr-4" />}
              {activeStage === 3 && <Calendar className="h-10 w-10 text-primary mr-4" />}
              {activeStage === 4 && <MessageSquare className="h-10 w-10 text-primary mr-4" />}
              {activeStage === 5 && <TrendingUp className="h-10 w-10 text-primary mr-4" />}
              {activeStage === 6 && <Award className="h-10 w-10 text-primary mr-4" />}
              
              <h3 className="text-3xl font-bold">
                {activeStage === 1 && "Building Your Marketing Strategy"}
                {activeStage === 2 && "Creating Engaging Content"}
                {activeStage === 3 && "Launching Automated Campaigns"}
                {activeStage === 4 && "Growing Your Community"}
                {activeStage === 5 && "Tracking Growth & Analytics"}
                {activeStage === 6 && "Achieving Success & Scaling"}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg">
              {activeStage === 1 && "Our AI analyzes your SaaS product and target market to create a personalized 90-day marketing roadmap. You'll get actionable steps, competitive insights, and everything you need to start strong."}
              {activeStage === 2 && "Create professional UGC videos without hiring actors or videographers. Our AI content studio generates high-converting scripts and uses virtual avatars to produce engaging video content in minutes."}
              {activeStage === 3 && "Set up automated multi-channel marketing campaigns with our intuitive drag-and-drop editor. Our AI optimizes ad copy, predicts ROI, and helps you maximize your marketing budget."}
              {activeStage === 4 && "Launch UGC contests, find relevant influencers, and build a thriving community around your SaaS product. Engage users and turn them into advocates with our community tools."}
              {activeStage === 5 && "Monitor your performance with our interactive dashboard. We don't just show numbers – we celebrate your wins and provide actionable insights to keep improving."}
              {activeStage === 6 && "Scale your SaaS business with confidence. Our platform grows with you, providing advanced tools and strategies as your needs evolve. We're with you every step of the way."}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {activeStage === 1 && (
                <>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Market Analysis</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Competitor Research</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Target Audience</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">90-Day Roadmap</Badge>
                </>
              )}
              {activeStage === 2 && (
                <>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">AI Video Creation</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Script Generator</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Content Repurposing</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Brand Voice</Badge>
                </>
              )}
              {activeStage === 3 && (
                <>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Multi-Channel</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">A/B Testing</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">ROI Prediction</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Automation</Badge>
                </>
              )}
              {activeStage === 4 && (
                <>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">UGC Contests</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Influencer Matching</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Community Tools</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Engagement</Badge>
                </>
              )}
              {activeStage === 5 && (
                <>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Interactive Dashboard</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Success Metrics</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Growth Tracking</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Insights</Badge>
                </>
              )}
              {activeStage === 6 && (
                <>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Scaling Strategy</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Advanced Tools</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Optimization</Badge>
                  <Badge variant="secondary" className="rounded-full text-base py-1 px-4">Long-term Success</Badge>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthJourneyMap;
