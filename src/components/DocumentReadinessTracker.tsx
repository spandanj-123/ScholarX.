import React, { useState } from 'react';
import { CheckCircle2, Circle, FileText, Download, Share2, AlertCircle, Sparkles, Printer } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  documents: string[];
  scholarshipTitle: string;
}

export const DocumentReadinessTracker: React.FC<Props> = ({ documents, scholarshipTitle }) => {
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  const toggleDoc = (index: number) => {
    setCheckedDocs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedCount = documents.filter((_, idx) => checkedDocs[idx]).length;
  const percentage = documents.length > 0 ? Math.round((completedCount / documents.length) * 100) : 0;

  const handlePrintChecklist = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Document Checklist - ${scholarshipTitle}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 30px; color: #1e293b; }
            h1 { font-size: 20px; margin-bottom: 4px; }
            .subtitle { font-size: 14px; color: #64748b; margin-bottom: 20px; }
            .doc-item { padding: 10px 0; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; font-size: 14px; }
            .checkbox { width: 16px; height: 16px; border: 2px solid #0284c7; border-radius: 4px; margin-right: 12px; }
            .checked { background: #0284c7; color: white; text-align: center; line-height: 16px; font-size: 12px; font-weight: bold; }
            .footer { margin-top: 30px; font-size: 12px; color: #94a3b8; border-top: 1px solid #cbd5e1; padding-top: 10px; }
          </style>
        </head>
        <body>
          <h1>Official Document Checklist</h1>
          <div class="subtitle">${scholarshipTitle} — Generated via ScholarX Portal</div>
          ${documents.map((doc, idx) => `
            <div class="doc-item">
              <div class="checkbox ${checkedDocs[idx] ? 'checked' : ''}">${checkedDocs[idx] ? '✓' : ''}</div>
              <div><strong>${idx + 1}.</strong> ${doc}</div>
            </div>
          `).join('')}
          <div class="footer">
            Printed on: ${new Date().toLocaleDateString('en-IN', { dateStyle: 'full' })} | Please ensure all scanned copies are below 250KB in PDF/JPEG format for MahaDBT.
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
      
      {/* Header & Readiness Gauge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Interactive Document Readiness Tracker</h3>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              Live Checker
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Check off documents you have prepared to check your MahaDBT application readiness score.
          </p>
        </div>

        <button
          onClick={handlePrintChecklist}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors shrink-0"
        >
          <Printer className="w-3.5 h-3.5" /> Print Checklist
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-700 dark:text-slate-300">
            {completedCount} of {documents.length} Documents Ready
          </span>
          <span className={`${percentage === 100 ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}`}>
            {percentage}% Ready
          </span>
        </div>

        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full rounded-full ${
              percentage === 100 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-500'
            }`}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5">
        {documents.map((doc, idx) => {
          const isDone = !!checkedDocs[idx];
          return (
            <div
              key={idx}
              onClick={() => toggleDoc(idx)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                isDone
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 text-slate-900 dark:text-white'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-300'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                )}
              </div>
              <div className="flex-1 text-xs sm:text-sm font-medium leading-snug">
                <span className={isDone ? 'line-through opacity-80' : ''}>{doc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary alert */}
      {percentage === 100 ? (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
          <span><strong>All set!</strong> You have all required documents ready. You can safely proceed to upload them on the MahaDBT portal.</span>
        </div>
      ) : (
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Tip: Scan all required documents in PDF format between 100KB – 250KB before applying on MahaDBT.</span>
        </div>
      )}

    </div>
  );
};
