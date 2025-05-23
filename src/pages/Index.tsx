
import { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  BarChart3, 
  Calendar, 
  Check, 
  CheckCircle, 
  ChevronRight,
  Globe,
  Lightbulb,
  MessageSquare,
  Star,
  Target,
  Video
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import HeroAnimation from '@/components/HeroAnimation';

// Lazy load components for suspense
const GrowthJourneyMap = lazy(() => import('@/components/GrowthJourneyMap'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full py-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-8 w-36 loading-pulse mb-6"></div>
      <div className="h-16 w-full max-w-md loading-pulse mb-6"></div>
      <div className="h-4 w-full max-w-lg loading-pulse mb-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-40 w-full loading-pulse"></div>
        <div className="h-40 w-full loading-pulse"></div>
        <div className="h-40 w-full loading-pulse"></div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <Card className={cn(
      "border-none shadow-card hover:shadow-lg transition-all enhanced-card", 
      "opacity-0 animate-pop"
    )} 
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
      <div className="p-6">
        <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

const TestimonialCard = ({ name, role, company, quote, image, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-card p-6 opacity-0 animate-fade-in" 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
      <div className="flex items-center mt-3 text-yellow-400">
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, description, features, isPopular = false, delay = 0 }) => {
  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden opacity-0 animate-fade-in",
        isPopular ? "border-2 border-primary shadow-lg" : "border border-gray-200 shadow-card"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {isPopular && (
        <div className="bg-primary text-white py-2 px-4 text-center">
          <p className="text-sm font-medium">Most Popular</p>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={cn(
            "w-full btn-hover", 
            isPopular ? "bg-primary text-white" : "bg-white text-primary border border-primary"
          )}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <div className={cn(
                "inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4 transition-all",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                AI-Powered Marketing Platform
              </div>
              <h1 className={cn(
                "text-4xl md:text-5xl font-bold leading-tight mb-6 transition-all",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
               style={{transitionDelay: "100ms"}}>
                Empower Your SaaS <span className="text-primary">Marketing</span> Strategy with AI
              </h1>
              <p className={cn(
                "text-xl text-gray-600 mb-8 transition-all",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
               style={{transitionDelay: "200ms"}}>
                Launch, grow, and scale your app with confidence using our AI-powered marketing platform built specifically for SaaS founders.
              </p>
              <div className={cn(
                "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )} 
              style={{transitionDelay: "300ms"}}>
                <Link to="/dashboard">
                  <Button size="lg" className="bg-primary text-white w-full sm:w-auto btn-hover rounded-full shadow-lg hover:shadow-primary/30">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[500px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Grow</h2>
            <p className="text-xl text-gray-600">
              Our platform combines AI-powered marketing tools with an intuitive design to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Target}
              title="Marketing Strategy Engine"
              description="Generate personalized 90-day marketing roadmaps tailored to your specific SaaS product and goals."
              delay={100}
            />
            <FeatureCard
              icon={Video}
              title="AI Content Studio"
              description="Create professional UGC videos with AI avatars and generate high-converting scripts in minutes."
              delay={300}
            />
            <FeatureCard
              icon={Calendar}
              title="Campaign Automation"
              description="Set up automated campaigns with ad copy generation and ROI prediction across platforms."
              delay={500}
            />
            <FeatureCard
              icon={BarChart3}
              title="Success Dashboard"
              description="Track your progress with interactive journey maps and celebrate key achievements along the way."
              delay={700}
            />
            <FeatureCard
              icon={Globe}
              title="Community Building"
              description="Launch UGC contests, find influencers, and monitor brand mentions across social channels."
              delay={900}
            />
            <FeatureCard
              icon={Lightbulb}
              title="Resource Library"
              description="Access a curated collection of articles, videos, and case studies to fuel your marketing success."
              delay={1100}
            />
          </div>
        </div>
      </section>

      {/* Growth Journey Map with Suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <GrowthJourneyMap />
      </Suspense>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Our platform makes marketing simple and effective, even if you're not a marketing expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center enhanced-card p-8">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Define Your Goals</h3>
              <p className="text-gray-600">
                Tell us about your SaaS and your marketing objectives to get started.
              </p>
            </div>

            <div className="text-center enhanced-card p-8">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Generate Strategy</h3>
              <p className="text-gray-600">
                Our AI creates a personalized roadmap with actionable steps and timelines.
              </p>
            </div>

            <div className="text-center enhanced-card p-8">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Execute & Grow</h3>
              <p className="text-gray-600">
                Use our tools to implement your plan and track your results as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Hear from SaaS founders who have transformed their marketing with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Alex Morgan"
              role="Founder & CEO"
              company="DataSync"
              quote="The marketing roadmap was exactly what I needed. As a technical founder, marketing was always my weak point, but this platform made it simple and effective."
              image="https://i.pravatar.cc/150?img=32"
              delay={200}
            />
            <TestimonialCard
              name="Sarah Chen"
              role="Co-founder"
              company="TaskFlow"
              quote="The AI content studio saved us thousands of dollars in video production costs. We created professional product demos in minutes instead of weeks."
              image="https://i.pravatar.cc/150?img=26"
              delay={400}
            />
            <TestimonialCard
              name="Michael Lawson"
              role="Marketing Director"
              company="DevTools Pro"
              quote="I love how the platform celebrates our wins. The motivational approach keeps our team engaged and excited about marketing efforts."
              image="https://i.pravatar.cc/150?img=12"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="79"
              description="Perfect for early-stage SaaS startups"
              features={[
                "Marketing Strategy Engine",
                "Basic AI Content Studio",
                "Campaign Templates",
                "Progress Dashboard",
                "Email Support"
              ]}
              delay={200}
            />
            <PricingCard
              title="Growth"
              price="149"
              description="For scaling SaaS businesses"
              features={[
                "Everything in Starter",
                "Full AI Content Studio",
                "Campaign Automation",
                "ROI Prediction",
                "Community Tools",
                "Priority Support"
              ]}
              isPopular={true}
              delay={400}
            />
            <PricingCard
              title="Enterprise"
              price="299"
              description="For established SaaS companies"
              features={[
                "Everything in Growth",
                "Custom Integrations",
                "Dedicated Account Manager",
                "Team Collaboration",
                "Advanced Analytics",
                "White-label Options"
              ]}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[2rem] mx-4 my-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of SaaS founders who are growing their businesses with confidence.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary text-white btn-hover rounded-full shadow-lg hover:shadow-primary/30">
                Get Started Free <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="font-bold text-xl">GrowthOS</span>
              </div>
              <p className="text-gray-500 text-sm">
                Empowering SaaS founders with AI-powered marketing tools.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 GrowthOS. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300",
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
