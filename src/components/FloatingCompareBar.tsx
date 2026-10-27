import React, { useState } from 'react';
import { useScholarships } from '../context/ScholarshipContext';
import { CompareModal } from './CompareModal';
import { Layers, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingCompareBar: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare } = useScholarships();
  const [modalOpen, setModalOpen] = useState(false);

  if (compareList.length === 0) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4 pointer-events-auto"
        >
          <div className="bg-slate-900/95 text-white dark:bg-slate-900/95 backdrop-blur-xl border border-white/15 rounded-3xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3">
            
            {/* Left Items List */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-1 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              
              <div className="flex items-center gap-1.5 min-w-0">
                {compareList.map((item) => (
                  <div
                    key={item.scholarshipID}
                    className="flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded-xl text-xs font-semibold text-slate-200 border border-white/10 shrink-0 max-w-[140px] truncate"
                  >
                    <span className="truncate">{item.title}</span>
                    <button
                      type="button"
                      onClick={() => removeFromCompare(item.scholarshipID)}
                      className="text-slate-400 hover:text-white p-0.5 rounded"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={clearCompare}
                className="text-slate-400 hover:text-white text-xs font-semibold px-2 py-1"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/30 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>Compare ({compareList.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      <CompareModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
