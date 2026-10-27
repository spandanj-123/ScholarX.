import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Users, 
  Building2, 
  CheckCircle, 
  Globe,
  HeartHandshake
} from 'lucide-react';
import { APP_STATS } from '../data/mockScholarships';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero / Vision Statement */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wide">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          Our Mission
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Democratizing Financial Aid for Every Scholar
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          ScholarX was founded to solve a critical issue: millions of deserving students miss out on scholarships simply due to complex guidelines, fragmented portals, and missed deadlines.
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">
            {APP_STATS.totalScholarships}+
          </div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Verified Grants</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
            {APP_STATS.activeFunds}
          </div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Total Disbursed</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">
            {APP_STATS.studentsBenefited}
          </div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Students Guided</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">
            {APP_STATS.aiMatchAccuracy}
          </div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">AI Match Accuracy</div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Why Students & Foundations Trust ScholarX</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Built with rigorous data standards, state-level verification, and student-first transparency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">100% Zero Fake Grants Guarantee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every government scheme, CSR grant, and university scholarship is cross-checked against official Gazette notifications and audited corporate reports before listing.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">AI Natural Language Matching</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our Gemini-powered discovery engine matches student profiles considering income limits, state domicile, caste category, single girl child quotas, and disability status.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Free Access for Every Scholar</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              ScholarX is completely free for students. We partner with philanthropic foundations and corporate CSR trusts to ensure financial aid remains accessible to all.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
