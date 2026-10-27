import React from 'react';
import { useScholarships } from '../context/ScholarshipContext';
import { X, Layers, Check, ExternalLink, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CompareModal: React.FC<Props> = ({ open, onClose }) => {
  const { compareList, removeFromCompare, clearCompare, applyForScholarship } = useScholarships();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              Compare Scholarships Side-by-Side
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Comparing {compareList.length} of 3 maximum selected scholarships
            </p>
          </div>

          <div className="flex items-center gap-3">
            {compareList.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-rose-600 dark:text-rose-400 font-semibold hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {compareList.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Layers className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">No Scholarships Selected for Comparison</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Click the compare icon (<Layers className="w-3.5 h-3.5 inline text-indigo-600" />) on any scholarship card to add it to your comparison list.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compareList.map((s) => (
                <div
                  key={s.scholarshipID}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 text-xs font-bold rounded-full">
                        {s.type}
                      </span>
                      <button
                        onClick={() => removeFromCompare(s.scholarshipID)}
                        className="text-slate-400 hover:text-rose-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <h4 className="font-bold text-base text-slate-900 dark:text-white line-clamp-2">
                      {s.title}
                    </h4>

                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold block uppercase">Award Amount</span>
                      <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-300">{s.amountText}</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">Provider:</span>
                        <p className="text-slate-600 dark:text-slate-400">{s.provider}</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">Education & Course:</span>
                        <p className="text-slate-600 dark:text-slate-400">{s.educationLevel} ({s.course})</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">Max Income Limit:</span>
                        <p className="text-slate-600 dark:text-slate-400">₹{(s.incomeLimit / 100000).toFixed(1)} Lakh / year</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">Category & Gender:</span>
                        <p className="text-slate-600 dark:text-slate-400">{s.category.join(', ')} ({s.gender})</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">State Domicile:</span>
                        <p className="text-slate-600 dark:text-slate-400">{s.state}</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">Deadline:</span>
                        <p className="text-slate-600 dark:text-slate-400">{s.deadline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700 space-y-2">
                    <button
                      onClick={() => applyForScholarship(s.scholarshipID, s.title, s.provider, s.amountText)}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md"
                    >
                      Apply Now
                    </button>
                    <Link
                      to={`/scholarships/${s.scholarshipID}`}
                      onClick={onClose}
                      className="block text-center w-full py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-semibold text-xs"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
