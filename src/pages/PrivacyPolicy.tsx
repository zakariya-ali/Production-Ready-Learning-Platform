import React from 'react';
import { Shield, Eye, Database, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center border border-amber-500/30">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-amber-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-4 text-gray-400">
              Last updated: June 2025
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8 space-y-8">
            
            {/* Information We Collect */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account or profile</li>
                  <li>Enroll in courses or purchase books</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p>This may include your name, email address, phone number, payment information, and learning preferences.</p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our educational services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about courses, events, and news</li>
                  <li>Personalize your learning experience</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Information Sharing and Disclosure</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>We may share your information in the following situations:</p>
                <div className="space-y-3">
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-2">With Service Providers</h4>
                    <p className="text-sm">We work with third-party companies who help us provide our services, such as payment processors and email providers.</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-2">For Legal Reasons</h4>
                    <p className="text-sm">We may disclose information if required by law or to protect our rights and safety.</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-2">With Your Consent</h4>
                    <p className="text-sm">We may share information for any other purpose with your explicit consent.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-400 mb-2">Encryption</h4>
                    <p className="text-sm">All data is encrypted in transit and at rest using industry-standard encryption.</p>
                  </div>
                  <div className="bg-blue-950/20 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Access Controls</h4>
                    <p className="text-sm">Strict access controls ensure only authorized personnel can access your data.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-rose-400" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and data</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Object to processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-r from-amber-950/20 to-yellow-950/20 rounded-xl p-6 border border-amber-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="text-amber-100 space-y-2">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="space-y-1">
                  <p><strong>Email:</strong> privacy@thinkofit.com</p>
                  <p><strong>Phone:</strong> +1 (555) 987-6543</p>
                  <p><strong>Address:</strong> 123 Privacy Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="text-center">
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Policy Updates</h3>
                <p className="text-gray-300 text-sm">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;