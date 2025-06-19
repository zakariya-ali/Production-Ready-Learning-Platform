import React from 'react';
import { FileText, Users, CreditCard, Shield, AlertTriangle, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
                <FileText className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-amber-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our educational platform and services.
            </p>
            <div className="mt-4 text-gray-400">
              Last updated: June 2025
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8 space-y-8">
            
            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>By accessing and using THINKOFIT's educational platform, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <div className="bg-blue-950/20 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Important:</strong> If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">User Accounts</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>
                <div className="space-y-3">
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-2">Account Security</h4>
                    <p className="text-sm">You are responsible for safeguarding the password and all activities under your account.</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-2">Account Termination</h4>
                    <p className="text-sm">We reserve the right to terminate accounts that violate our terms or policies.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Course Access and Usage */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Course Access and Usage</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>Our courses and educational materials are provided for personal, non-commercial use only.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Course access is granted for the duration specified at purchase</li>
                  <li>You may not share your account credentials with others</li>
                  <li>Content may not be downloaded, copied, or redistributed</li>
                  <li>Commercial use of our materials is strictly prohibited</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <CreditCard className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Payment Terms</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>All payments are processed securely through our payment partners.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-400 mb-2">Refund Policy</h4>
                    <p className="text-sm">30-day money-back guarantee on all courses and digital products.</p>
                  </div>
                  <div className="bg-green-950/20 border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Subscription Terms</h4>
                    <p className="text-sm">Subscriptions auto-renew unless cancelled before the renewal date.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-rose-400" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>The service and its original content, features, and functionality are and will remain the exclusive property of THINKOFIT and its licensors.</p>
                <div className="bg-rose-950/20 border border-rose-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-rose-400 mb-2">Copyright Protection</h4>
                  <p className="text-sm">All course materials, videos, texts, and assessments are protected by copyright laws.</p>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Prohibited Uses</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>You may not use our service:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>For any unlawful purpose</li>
                    <li>To harass or harm others</li>
                    <li>To impersonate others</li>
                    <li>To transmit viruses or malicious code</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>To violate intellectual property rights</li>
                    <li>To collect user information</li>
                    <li>To interfere with service operation</li>
                    <li>For commercial purposes without permission</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-gray-400" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>In no event shall THINKOFIT, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                  <p className="text-sm">This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our service.</p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">Governing Law</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-amber-950/20 to-yellow-950/20 rounded-xl p-6 border border-amber-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="text-amber-100 space-y-2">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="space-y-1">
                  <p><strong>Email:</strong> legal@thinkofit.com</p>
                  <p><strong>Phone:</strong> +1 (555) 987-6543</p>
                  <p><strong>Address:</strong> 123 Legal Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="text-center">
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Changes to Terms</h3>
                <p className="text-gray-300 text-sm">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
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

export default TermsOfService;