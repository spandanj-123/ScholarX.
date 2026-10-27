import React, { useState } from 'react';
import { IndianRupee, Sparkles, Calculator, CheckCircle2, Building2, User, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const FeeBenefitCalculator: React.FC = () => {
  const [gender, setGender] = useState<'Girl' | 'Boy'>('Girl');
  const [incomeRange, setIncomeRange] = useState<'under2.5L' | '2.5Lto8L'>('under2.5L');
  const [instituteType, setInstituteType] = useState<'govt' | 'aided' | 'partiallyUnaided' | 'permanentUnaided'>('partiallyUnaided');
  const [tuitionFee, setTuitionFee] = useState<number>(85000);
  const [examFee, setExamFee] = useState<number>(4000);

  // Official Fee Waiver calculation rules (As per GR dated 01st March 2018 / 07th October 2017):
  // Tuition Fee Waiver:
  // Income <= 2.5L:
  // - Girl: 100% across Govt, Non-Govt Aided, Partially Aided/Unaided, Permanent Unaided
  // - Boy: Govt 100%, Non-Govt Aided 100%, Partially Aided/Unaided 50%, Permanent Unaided 50%
  // Income 2.5L - 8.0L:
  // - Girl: 100% across Govt, Non-Govt Aided, Partially Aided/Unaided, Permanent Unaided
  // - Boy: Govt 50%, Non-Govt Aided 50%, Partially Aided/Unaided 50%, Permanent Unaided 50%
  // Exam Fee Waiver (Income up to 8L):
  // - Girl: 100%
  // - Boy: 50%

  let tuitionWaiverPercent = 50;
  if (gender === 'Girl') {
    tuitionWaiverPercent = 100;
  } else {
    // Boy
    if (incomeRange === 'under2.5L') {
      if (instituteType === 'govt' || instituteType === 'aided') {
        tuitionWaiverPercent = 100;
      } else {
        tuitionWaiverPercent = 50;
      }
    } else {
      tuitionWaiverPercent = 50;
    }
  }

  const examWaiverPercent = gender === 'Girl' ? 100 : 50;

  const tuitionSaved = (tuitionFee * tuitionWaiverPercent) / 100;
  const examSaved = (examFee * examWaiverPercent) / 100;
  const totalSaved = tuitionSaved + examSaved;
  const totalPayableOriginal = tuitionFee + examFee;
  const netStudentPayable = totalPayableOriginal - totalSaved;

  return (
    <div className="bg-gradient-to-br from-blue-900/90 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-extrabold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Interactive Scheme Simulator
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            EBC Fee Waiver & Savings Calculator
          </h3>
        </div>
        <span className="text-xs text-slate-300 max-w-xs">
          Simulate official fee concessions under Rajarshi Chhatrapati Shahu Maharaj EBC Yojna in real time.
        </span>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Gender Selection */}
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-2">
          <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
            <span>Student Gender</span>
            {gender === 'Girl' && (
              <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                100% Tuition Waiver
              </span>
            )}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender('Girl')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                gender === 'Girl'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              👧 Girl Student
            </button>
            <button
              type="button"
              onClick={() => setGender('Boy')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                gender === 'Boy'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              👦 Boy Student
            </button>
          </div>
        </div>

        {/* Income Range Selection */}
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-2">
          <label className="text-xs font-bold text-slate-300 block">
            Annual Family Income
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIncomeRange('under2.5L')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                incomeRange === 'under2.5L'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              ≤ ₹2.50 Lakh
            </button>
            <button
              type="button"
              onClick={() => setIncomeRange('2.5Lto8L')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                incomeRange === '2.5Lto8L'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              ₹2.5L – ₹8.00 Lakh
            </button>
          </div>
        </div>

        {/* Institute Type */}
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-2">
          <label className="text-xs font-bold text-slate-300 block">
            College / Institute Type
          </label>
          <select
            value={instituteType}
            onChange={(e) => setInstituteType(e.target.value as any)}
            className="w-full py-2 px-3 rounded-xl bg-slate-800 text-white text-xs font-semibold border border-white/20 focus:outline-none focus:border-blue-400"
          >
            <option value="govt">Government Institute</option>
            <option value="aided">Non-Govt Aided Institute</option>
            <option value="partiallyUnaided">Partially Aided / Unaided</option>
            <option value="permanentUnaided">Permanent Unaided Institute</option>
          </select>
        </div>

      </div>

      {/* Fee Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300">College Annual Tuition Fee</span>
            <span className="font-extrabold text-blue-300">₹{tuitionFee.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="300000"
            step="5000"
            value={tuitionFee}
            onChange={(e) => setTuitionFee(Number(e.target.value))}
            className="w-full accent-blue-400 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>₹10,000</span>
            <span>₹1.5 Lakh</span>
            <span>₹3.0 Lakh</span>
          </div>
        </div>

        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300">University Exam Fee</span>
            <span className="font-extrabold text-blue-300">₹{examFee.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="15000"
            step="500"
            value={examFee}
            onChange={(e) => setExamFee(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>₹1,000</span>
            <span>₹8,000</span>
            <span>₹15,000</span>
          </div>
        </div>
      </div>

      {/* Live Calculated Output Display */}
      <motion.div 
        key={`${gender}-${incomeRange}-${instituteType}-${tuitionFee}-${examFee}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-emerald-500/40 shadow-inner grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center"
      >
        <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0">
          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
            Government Waiver
          </span>
          <div className="text-xl sm:text-2xl font-black text-blue-300 flex items-center justify-center gap-1">
            <span>{tuitionWaiverPercent}% Tuition</span>
          </div>
          <span className="text-[11px] text-slate-400 block">+ {examWaiverPercent}% Exam Fee Waiver</span>
        </div>

        <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0">
          <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
            Total Scholarship Reimbursed
          </span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400">
            ₹{totalSaved.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-emerald-200 block font-semibold">Direct Bank Reimbursement</span>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
            Net Student Payable Fee
          </span>
          <div className="text-xl sm:text-2xl font-black text-white">
            ₹{netStudentPayable.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-slate-400 block">Out of ₹{totalPayableOriginal.toLocaleString('en-IN')} total fee</span>
        </div>
      </motion.div>

    </div>
  );
};
