import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles, Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 mb-16 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3 border border-blue-200 dark:border-blue-900">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Never Miss a Deadline
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Get Weekly Scholarship Alerts & Deadline Reminders
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Join over 4,50,000+ Indian & International students receiving verified grant alerts customized for their education level.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your student email address"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </form>
          </div>
          {subscribed && (
            <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/50 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Successfully subscribed! You will receive verified weekly scholarship alerts.
            </div>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white">
                Scholar<span className="text-blue-600 dark:text-blue-400">X</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              ScholarX is a premium AI-powered scholarship discovery platform. We connect high-school, undergraduate, postgraduate, and international scholars with verified government, private, and university grants.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> support@scholarx.org</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home Discovery</Link></li>
              <li><Link to="/scholarships" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Scholarship Listings</Link></li>
              <li><Link to="/ai-finder" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">AI Assistant</Link></li>
              <li><Link to="/resources" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources & Guides</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About ScholarX</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Scholarship Types</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><Link to="/scholarships?type=Government" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Government & State Schemes</Link></li>
              <li><Link to="/scholarships" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Merit & Need-Based Grants</Link></li>
              <li><Link to="/scholarships?type=Private" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Private & Corporate CSR Grants</Link></li>
              <li><Link to="/scholarships?type=International" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">International & Global Grants</Link></li>
              <li><Link to="/scholarships?course=Engineering" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Engineering & Technical Grants</Link></li>
              <li><Link to="/scholarships?category=Girls" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Women & Girl Student Scholarships</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-xs">Contact & Help</h4>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Innovation Hub, BKC Financial Center, Mumbai, MH 400051</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Toll-Free Helpline: 1800-200-SCHOLARX</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                ScholarX is an independent academic discovery platform. All trademarks belong to their respective government and foundation providers.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 ScholarX Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-900 dark:hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-900 dark:hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-900 dark:hover:text-slate-300 cursor-pointer">Security Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
