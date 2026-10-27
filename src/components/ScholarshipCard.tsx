import React from 'react';
import { Link } from 'react-router-dom';
import { Scholarship } from '../types/scholarship';
import { useAuth } from '../context/AuthContext';
import { useScholarships } from '../context/ScholarshipContext';
import { 
  IndianRupee, 
  Calendar, 
  Building2, 
  GraduationCap, 
  Bookmark, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  scholarship: Scholarship;
}

export const ScholarshipCard: React.FC<Props> = ({ scholarship }) => {
  const { user, toggleSavedScholarship } = useAuth();
  const { compareList, addToCompare, removeFromCompare } = useScholarships();

  const isSaved = user?.savedScholarships?.includes(scholarship.scholarshipID) || false;
  const isCompared = compareList.some(s => s.scholarshipID === scholarship.scholarshipID);

  // Calculate days left
  const calculateDaysLeft = (deadlineStr: string) => {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = calculateDaysLeft(scholarship.deadline);

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
    >
      
      {/* Top Header Row */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
              scholarship.type === 'Government' 
                ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900' 
                : scholarship.type === 'International' 
                ? 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900' 
                : 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900'
            }`}>
              {scholarship.type}
            </span>

            {scholarship.featured && (
              <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border border-amber-100 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (isCompared) removeFromCompare(scholarship.scholarshipID);
                else addToCompare(scholarship);
              }}
              className={`p-2 rounded-xl border transition-all ${
                isCompared 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isCompared ? "Remove from compare" : "Compare scholarship"}
            >
              <Layers className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleSavedScholarship(scholarship.scholarshipID);
              }}
              className={`p-2 rounded-xl border transition-all ${
                isSaved 
                  ? 'bg-rose-500 text-white border-rose-500 shadow-sm' 
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-rose-500'
              }`}
              title={isSaved ? "Remove bookmark" : "Bookmark scholarship"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Provider */}
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
          <Building2 className="w-3.5 h-3.5" /> {scholarship.provider}
        </p>

        <Link to={`/scholarships/${scholarship.scholarshipID}`}>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
            {scholarship.title}
          </h3>
        </Link>

        <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
          {scholarship.eligibility}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
            {scholarship.educationLevel}
          </span>
          <span className="px-2.5 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 text-[11px] font-semibold">
            {scholarship.course}
          </span>
          <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
            {scholarship.state}
          </span>
        </div>
      </div>

      {/* Footer Metrics Row */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Award Amount</p>
          <p className="text-lg font-black text-blue-600 dark:text-blue-400">{scholarship.amountText}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deadline</p>
            <p className={`text-xs font-bold ${daysLeft <= 15 ? 'text-rose-500' : 'text-slate-700 dark:text-slate-300'}`}>
              {daysLeft > 0 ? `${daysLeft} Days` : 'Closed'}
            </p>
          </div>

          <Link
            to={`/scholarships/${scholarship.scholarshipID}`}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center gap-1 group-hover:translate-x-0.5"
          >
            Apply Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </motion.div>
  );
};
