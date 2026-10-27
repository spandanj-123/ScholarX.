import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScholarships } from '../context/ScholarshipContext';
import { Sparkles, GraduationCap, Users, IndianRupee, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InteractiveEligibilityMatcher: React.FC = () => {
  const { scholarships, setFilters } = useScholarships();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedLevel, setSelectedLevel] = useState<string>('Undergraduate');
  const [selectedCategory, setSelectedCategory] = useState<string>('Open / General / EWS');
  const [selectedIncome, setSelectedIncome] = useState<number>(250000);
  const [selectedState, setSelectedState] = useState<string>('Maharashtra');

  // Education levels
  const levels = [
    { label: 'Undergraduate (B.E/B.Tech/B.Sc/B.Com)', value: 'Undergraduate', icon: '🎓' },
    { label: 'Diploma / Polytechnic', value: 'Diploma', icon: '📐' },
    { label: 'Postgraduate (M.Tech/MBA/M.Sc)', value: 'Postgraduate', icon: '🏛️' },
    { label: 'School (Class 1-12)', value: 'School', icon: '🎒' }
  ];

  // Categories
  const categories = [
    { label: 'Open / General / EWS / EBC', value: 'Open / General / EWS', badge: 'EBC 50-100% Waiver' },
    { label: 'OBC (Other Backward Class)', value: 'OBC', badge: '50% Fee & Freeship' },
    { label: 'SC / ST', value: 'SC / ST', badge: '100% Fee & Maintenance' },
    { label: 'VJNT / SBC / SEBC', value: 'VJNT / SBC / SEBC', badge: 'Full Reimbursement' }
  ];

  // Income options
  const incomeOptions = [
    { label: 'Below ₹1.5 Lakh / Marginal Farmer', value: 150000, desc: 'Full fee waiver + Punjabrao Hostel eligible' },
    { label: '₹1.5 Lakh to ₹2.5 Lakh', value: 250000, desc: '100% girl fee waiver & 50-100% boy fee waiver' },
    { label: '₹2.5 Lakh to ₹8.0 Lakh', value: 800000, desc: 'EBC 50% tuition waiver & 50-100% exam fee waiver' },
    { label: 'Above ₹8.0 Lakh', value: 1500000, desc: 'Merit-based CSR & International Grants' }
  ];

  // Compute matched scholarships count
  const matchedScholarships = scholarships.filter(s => {
    const incomePass = selectedIncome <= s.incomeLimit;
    const statePass = selectedState === 'All' || s.state === selectedState || s.state === 'All India';
    return incomePass && statePass;
  });

  const handleApplyFilters = () => {
    setFilters(prev => ({
      ...prev,
      educationLevel: selectedLevel,
      category: selectedCategory.includes('Open') ? 'Open / General / EWS' : selectedCategory.includes('OBC') ? 'OBC' : selectedCategory.includes('SC') ? 'SC' : 'All Categories',
      incomeLimit: selectedIncome,
      state: selectedState
    }));
    navigate('/scholarships');
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
      
      {/* Decorative gradient highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      {/* Top Wizard Steps Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-[10px] font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> 3-Step Instant Scheme Matcher
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Find What You Qualify For in 30 Seconds
          </h3>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s as any)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                step === s
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : step > s
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
              }`}
            >
              <span>Step {s}</span>
              {step > s && <CheckCircle2 className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Step Content */}
      <div className="py-6">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: EDUCATION LEVEL */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 1 of 3</span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  What is your current or upcoming academic course level?
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {levels.map((lvl) => (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => {
                      setSelectedLevel(lvl.value);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      selectedLevel === lvl.value
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-600 ring-2 ring-blue-500/20'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lvl.icon}</span>
                      <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{lvl.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: CATEGORY */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 2 of 3</span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Select your Social / Caste Category (CAP Allotment category)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      selectedCategory === cat.value
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-600 ring-2 ring-blue-500/20'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">{cat.label}</span>
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">{cat.badge}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: INCOME & STATE */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 3 of 3</span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  What is your Annual Family Income according to Tehsildar Certificate?
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {incomeOptions.map((inc) => (
                  <button
                    key={inc.value}
                    type="button"
                    onClick={() => setSelectedIncome(inc.value)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedIncome === inc.value
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-600 ring-2 ring-blue-500/20'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">{inc.label}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">{inc.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Dynamic Results & Match Count Bar */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-lg">
            {matchedScholarships.length}
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">
              {matchedScholarships.length} Eligible Government & CSR Schemes Found
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Matched for: {selectedLevel} • {selectedCategory.split('/')[0]} • ≤ ₹{(selectedIncome/100000).toFixed(1)}L
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {step > 1 && (
            <button
              onClick={() => setStep((prev) => (prev - 1) as any)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
            >
              Back
            </button>
          )}

          <button
            onClick={handleApplyFilters}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            <span>View All {matchedScholarships.length} Matches</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
