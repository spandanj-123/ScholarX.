import React from 'react';
import { Scholarship } from '../types/scholarship';
import { Printer, Download, X, GraduationCap, CheckCircle } from 'lucide-react';

interface Props {
  scholarship: Scholarship;
  open: boolean;
  onClose: () => void;
}

export const PDFExportModal: React.FC<Props> = ({ scholarship, open, onClose }) => {
  if (!open) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Modal Bar */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <span className="font-bold text-sm flex items-center gap-2">
            <Printer className="w-4 h-4 text-blue-400" /> Scholarship Printable Summary (PDF)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Save / Print PDF
            </button>
            <button onClick={onClose} className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper View */}
        <div className="flex-1 overflow-auto p-8 bg-white text-slate-900 font-sans space-y-6" id="printable-scholarship">
          
          {/* Header */}
          <div className="border-b-2 border-blue-600 pb-4 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-xl text-slate-900">ScholarHub AI</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Official Scholarship Information Datasheet</p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <p>Generated: {new Date().toLocaleDateString()}</p>
              <p className="font-bold text-blue-600">ID: {scholarship.scholarshipID}</p>
            </div>
          </div>

          {/* Title & Provider */}
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">{scholarship.type} SCHOLARSHIP</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">{scholarship.title}</h2>
            <p className="text-sm font-semibold text-slate-600 mt-0.5">{scholarship.provider}</p>
          </div>

          {/* Key Overview Grid */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="font-bold text-slate-500 block">Award Amount</span>
              <span className="text-base font-extrabold text-emerald-600">{scholarship.amountText}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 block">Application Deadline</span>
              <span className="text-base font-extrabold text-rose-600">{scholarship.deadline}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 block">Eligible Education & Course</span>
              <span className="font-semibold text-slate-800">{scholarship.educationLevel} ({scholarship.course})</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 block">Income & Domicile</span>
              <span className="font-semibold text-slate-800">Max ₹{(scholarship.incomeLimit/100000).toFixed(1)} Lakh | {scholarship.state}</span>
            </div>
          </div>

          {/* Description & Eligibility */}
          <div className="space-y-4 text-xs">
            <div>
              <h4 className="font-bold text-sm text-slate-900 border-b pb-1 mb-2">Description</h4>
              <p className="text-slate-700 leading-relaxed">{scholarship.description}</p>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-900 border-b pb-1 mb-2">Eligibility Criteria</h4>
              <p className="text-slate-700 leading-relaxed">{scholarship.eligibility}</p>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-900 border-b pb-1 mb-2">Required Verification Documents</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                {scholarship.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-900 border-b pb-1 mb-2">Official Portal</h4>
              <p className="text-slate-700 font-mono text-[11px]">{scholarship.officialLink}</p>
            </div>
          </div>

          <div className="pt-6 border-t text-[10px] text-slate-400 text-center">
            ScholarHub AI Information Sheet • Verified Academic Resource
          </div>

        </div>

      </div>
    </div>
  );
};
