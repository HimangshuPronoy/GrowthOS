
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 transition-all duration-300 hover:translate-x-[-5px]">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to GrowthOS ("we," "our," or "us"). By accessing or using our platform, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              GrowthOS provides AI-powered growth marketing tools and strategies for businesses. Our platform includes various features for content creation, campaign management, strategy development, and community engagement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Account Registration</h2>
            <p className="text-gray-700 mb-4">
              To use certain features of our platform, you must register for an account. You agree to keep your account information accurate and up-to-date. You are responsible for maintaining the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. User Data</h2>
            <p className="text-gray-700 mb-4">
              Our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> explains how we collect, use, and protect your personal data. By using our platform, you agree to our data practices as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality available through our platform, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, is the property of GrowthOS or our content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. User Content</h2>
            <p className="text-gray-700 mb-4">
              You retain all your rights in any content you submit, post or display on or through our platform. By submitting content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Prohibited Uses</h2>
            <p className="text-gray-700 mb-4">
              You may not use our platform for any unlawful purpose or in a way that violates these Terms. This includes but is not limited to: distributing harmful content, attempting to gain unauthorized access to our systems, misrepresenting your identity, or engaging in fraudulent activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and access to our platform immediately, without prior notice or liability, for any reason, including but not limited to, a breach of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting a notice on our platform or sending you an email. Your continued use of our platform after such modifications will constitute your acknowledgment and agreement to the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at support@growthos.com.
            </p>
          </section>

          <div className="mt-12 text-gray-500 text-sm">
            <p>Last Updated: May 20, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
