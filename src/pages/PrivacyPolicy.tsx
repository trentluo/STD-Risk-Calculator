import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            <i className="fa-solid fa-lock-shield text-blue-600 mr-2"></i>
            STD Risk Calculator Privacy Policy
          </h1>
          
          <div className="prose max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p className="leading-relaxed">STD Risk Calculator ("we", "our", "us") is committed to protecting your privacy in compliance with GDPR, CCPA, and other data protection regulations. This comprehensive policy explains our data practices for our STD risk assessment tool and educational services.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information Collection</h2>
              <p>When using our services, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Assessment Data:</strong> Anonymous responses to risk assessment questions (behaviors, symptoms, etc.)</li>
                <li><strong>Technical Data:</strong> Browser type, IP address (anonymized), device characteristics</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, navigation paths (via Google Analytics)</li>
                <li><strong>Contact Data:</strong> Only if you voluntarily contact us via our form</li>
              </ul>
              <p className="mt-4 text-sm bg-blue-50 p-3 rounded-md">
                <i className="fa-solid fa-info-circle text-blue-600 mr-2"></i>
                All health-related data is fully anonymized and cannot be traced back to individual users.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Data Usage</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Provide personalized STD risk assessments based on CDC guidelines</li>
                <li>Improve algorithm accuracy through aggregated, anonymized data analysis</li>
                <li>Enhance user experience and website functionality</li>
                <li>Generate anonymized statistical reports about STD risk factors</li>
                <li>Respond to user inquiries and provide support</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h2>
              <p>We implement robust security measures including:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>End-to-end SSL/TLS encryption for all data transmissions</li>
                <li>Quarterly security audits by third-party cybersecurity firms</li>
                <li>Strict access controls with multi-factor authentication</li>
                <li>Regular security training for all personnel</li>
                <li>Data minimization principles in all processing activities</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
              <p>Under data protection laws, you have the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-blue-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-700">Access & Portability</h3>
                  <p className="text-sm text-gray-600 mt-1">Request a copy of your personal data in machine-readable format</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md">
                  <h3 className="font-medium text-green-700">Rectification</h3>
                  <p className="text-sm text-gray-600 mt-1">Correct inaccurate or incomplete personal data</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-md">
                  <h3 className="font-medium text-purple-700">Erasure</h3>
                  <p className="text-sm text-gray-600 mt-1">Request deletion of your personal data under certain conditions</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-md">
                  <h3 className="font-medium text-yellow-700">Restriction</h3>
                  <p className="text-sm text-gray-600 mt-1">Limit processing of your data while disputes are resolved</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Policy Updates</h2>
              <p>We may update this policy to reflect:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Changes in data protection laws</li>
                <li>New features or services</li>
                <li>Evolving security best practices</li>
              </ul>
              <p className="mt-3">Significant changes will be:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Announced prominently on our website for 30 days</li>
                <li>Notified to registered users via email</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-800">Data Protection Officer</h3>
                <p className="text-gray-600 mt-1">
                  <i className="fa-solid fa-envelope text-blue-600 mr-2"></i>
                  <a href="mailto:privacy@stdriskcalculator.com" className="text-blue-600 hover:text-blue-800">privacy@stdriskcalculator.com</a>
                </p>
                <p className="text-gray-600 mt-2">
                  <i className="fa-solid fa-calendar-check text-blue-600 mr-2"></i>
                  Last updated: May 25, 2025
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}