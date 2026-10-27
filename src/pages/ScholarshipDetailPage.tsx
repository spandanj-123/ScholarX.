import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useScholarships } from '../context/ScholarshipContext';
import { useAuth } from '../context/AuthContext';
import { ScholarshipCard } from '../components/ScholarshipCard';
import { PDFExportModal } from '../components/PDFExportModal';
import { FeeBenefitCalculator } from '../components/FeeBenefitCalculator';
import { HostelAllowanceCalculator } from '../components/HostelAllowanceCalculator';
import { DocumentReadinessTracker } from '../components/DocumentReadinessTracker';
import { AudioReaderButton } from '../components/AudioReaderButton';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Calendar, 
  IndianRupee, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Share2, 
  Bookmark, 
  Printer, 
  ExternalLink, 
  Layers, 
  HelpCircle, 
  FileText, 
  Award, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export const ScholarshipDetailPage: React.FC = () => {
  const { scholarshipID } = useParams<{ scholarshipID: string }>();
  const { scholarships, applyForScholarship, applications, addToCompare, compareList } = useScholarships();
  const { user, toggleSavedScholarship } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'benefits' | 'documents' | 'process' | 'faqs'>('overview');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const scholarship = scholarships.find((s) => s.scholarshipID === scholarshipID);

  if (!scholarship) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Scholarship Not Found</h2>
        <p className="text-sm text-slate-500">The scholarship ID you requested does not exist or has expired.</p>
        <Link to="/scholarships" className="inline-block px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs">
          Return to Scholarship Directory
        </Link>
      </div>
    );
  }

  const isSaved = user?.savedScholarships?.includes(scholarship.scholarshipID) || false;
  const isApplied = applications.some((a) => a.scholarshipID === scholarship.scholarshipID);
  const isCompared = compareList.some((s) => s.scholarshipID === scholarship.scholarshipID);

  // Similar scholarships
  const similarScholarships = scholarships
    .filter((s) => s.scholarshipID !== scholarship.scholarshipID && (s.course === scholarship.course || s.type === scholarship.type))
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleApply = () => {
    const success = applyForScholarship(
      scholarship.scholarshipID,
      scholarship.title,
      scholarship.provider,
      scholarship.amountText
    );
    if (success) {
      alert("Application submitted successfully! Track status in your Student Dashboard.");
    } else {
      alert("You have already submitted an application for this scholarship.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to listings
      </button>

      {/* Detail Hero Banner Card */}
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
        <div className="h-64 sm:h-80 relative bg-slate-900">
          <img
            src={scholarship.bannerImage}
            alt={scholarship.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white font-bold text-xs rounded-full shadow">
              {scholarship.type}
            </span>
            <span className="px-3 py-1 bg-slate-900/80 text-slate-200 backdrop-blur-md font-bold text-xs rounded-full border border-white/10">
              {scholarship.educationLevel}
            </span>
          </div>

          {/* Action Icons */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <AudioReaderButton
              title={scholarship.title}
              textToRead={`${scholarship.description}. Offered by ${scholarship.provider}. Award value is ${scholarship.amountText}. Deadline is ${scholarship.deadline}. Eligibility: ${scholarship.eligibility}`}
            />
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full bg-slate-900/80 text-white backdrop-blur-md hover:bg-slate-800 transition-colors"
              title="Share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleSavedScholarship(scholarship.scholarshipID)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${isSaved ? 'bg-rose-500 text-white' : 'bg-slate-900/80 text-white hover:bg-slate-800'}`}
              title="Bookmark scholarship"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setPdfModalOpen(true)}
              className="p-2.5 rounded-full bg-slate-900/80 text-white backdrop-blur-md hover:bg-slate-800 transition-colors"
              title="Print PDF Summary"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Provider Banner Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
              <Building2 className="w-4 h-4" /> {scholarship.provider}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
              {scholarship.title}
            </h1>
          </div>
        </div>

        {/* Quick Details Bar */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400 font-medium block">Award Amount</span>
            <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">{scholarship.amountText}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 font-medium block">Application Deadline</span>
            <span className="text-base font-extrabold text-rose-600 dark:text-rose-400">{scholarship.deadline}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 font-medium block">Course / Field</span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scholarship.course}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 font-medium block">State Domicile</span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scholarship.state}</span>
          </div>
        </div>
      </div>

      {copied && (
        <div className="p-3 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 rounded-xl text-xs font-semibold text-center animate-in fade-in">
          Scholarship link copied to clipboard!
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Tabbed Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 no-scrollbar text-xs font-bold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${activeTab === 'eligibility' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}`}
            >
              Eligibility Criteria
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${activeTab === 'benefits' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}`}
            >
              Benefits
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${activeTab === 'documents' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}`}
            >
              Documents Required
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${activeTab === 'process' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}`}
            >
              How to Apply
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${activeTab === 'faqs' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'}`}
            >
              FAQs
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            
            {activeTab === 'overview' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Scholarship Summary</h3>
                <p>{scholarship.description}</p>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-900/50 space-y-2">
                  <h4 className="font-bold text-blue-900 dark:text-blue-300">Key Takeaway</h4>
                  <p className="text-xs text-blue-800 dark:text-blue-200">
                    This scholarship provides comprehensive support for eligible {scholarship.educationLevel} students in {scholarship.course} courses with annual family income up to ₹{(scholarship.incomeLimit/100000).toFixed(1)} Lakh.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'eligibility' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Detailed Eligibility Rules</h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {scholarship.eligibility}
                  </p>
                </div>

                {scholarship.grReferences && scholarship.grReferences.length > 0 && (
                  <div className="p-4 bg-blue-50/70 dark:bg-blue-950/40 rounded-2xl border border-blue-200/80 dark:border-blue-900/50 space-y-2">
                    <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider block">Official Government Resolutions (GR)</span>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.grReferences.map((gr, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
                          📜 {gr}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {scholarship.eligibilityRulesList && scholarship.eligibilityRulesList.length > 0 ? (
                  <div className="space-y-2.5">
                    <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wider">Criteria Breakdown</h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {scholarship.eligibilityRulesList.map((rule, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3 border border-slate-200/50 dark:border-slate-800">
                          <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            {String.fromCharCode(97 + idx)}
                          </span>
                          <span className="leading-snug">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white">Category Quotas:</span>
                      <p className="text-slate-600 dark:text-slate-400">{scholarship.category.join(', ')}</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white">Gender Eligibility:</span>
                      <p className="text-slate-600 dark:text-slate-400">{scholarship.gender}</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white">Max Family Income:</span>
                      <p className="text-slate-600 dark:text-slate-400">₹{(scholarship.incomeLimit/100000).toFixed(1)} Lakh / year</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white">State Domicile:</span>
                      <p className="text-slate-600 dark:text-slate-400">{scholarship.state}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">Financial & Academic Benefits</h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Government / CSR Entitlements</span>
                </div>
                
                {/* Interactive Fee Simulator for EBC / Open / Tuition Waiver schemes */}
                {scholarship.feeReimbursementTable && scholarship.feeReimbursementTable.length > 0 && (
                  <div className="space-y-6">
                    <FeeBenefitCalculator />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wider">Official Tuition & Exam Fee Matrix (GR Rates)</h4>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                          Verified MahaDBT Rates
                        </span>
                      </div>
                      
                      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                              <th className="p-3.5 min-w-[150px]">Income Slab</th>
                              <th className="p-3.5 min-w-[170px]">Student Group</th>
                              <th className="p-3.5 text-center min-w-[90px]">Govt Inst.</th>
                              <th className="p-3.5 text-center min-w-[110px]">Non-Govt Aided</th>
                              <th className="p-3.5 text-center min-w-[130px]">Partially Aided / Unaided</th>
                              <th className="p-3.5 text-center min-w-[120px]">Permanent Unaided</th>
                              <th className="p-3.5 text-center font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">Exam Fee Waiver</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                            {scholarship.feeReimbursementTable.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="p-3.5 font-bold text-slate-900 dark:text-white">{row.incomeSlab}</td>
                                <td className="p-3.5 font-medium">{row.studentGroup}</td>
                                <td className="p-3.5 text-center font-semibold">{row.governmentInst}</td>
                                <td className="p-3.5 text-center font-semibold">{row.nonGovtAided}</td>
                                <td className="p-3.5 text-center font-semibold">{row.partiallyAidedUnaided}</td>
                                <td className="p-3.5 text-center font-semibold">{row.permanentUnaided}</td>
                                <td className="p-3.5 text-center font-black text-blue-600 dark:text-blue-400">{row.examFeeWaiver}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Interactive Hostel Allowance Simulator for Punjabrao Deshmukh scheme */}
                {scholarship.allowanceTable && scholarship.allowanceTable.length > 0 && (
                  <div className="space-y-6">
                    <HostelAllowanceCalculator />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wider">Allowance Distribution Matrix by Location</h4>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          Official Disbursal Rates
                        </span>
                      </div>
                      
                      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                              <th className="p-3.5 min-w-[220px]">Higher Education Location / Area</th>
                              <th className="p-3.5 text-right min-w-[100px]">Food Allowance</th>
                              <th className="p-3.5 text-right min-w-[110px]">Residence Allowance</th>
                              <th className="p-3.5 text-right min-w-[120px]">Subsistence Allowance</th>
                              <th className="p-3.5 text-right font-black text-emerald-600 dark:text-emerald-400 min-w-[110px]">Total Amount</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                            {scholarship.allowanceTable.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="p-3.5 font-medium leading-relaxed">{row.locationCategory}</td>
                                <td className="p-3.5 text-right font-semibold">₹{row.foodAllowance.toLocaleString('en-IN')}</td>
                                <td className="p-3.5 text-right font-semibold">₹{row.residenceAllowance.toLocaleString('en-IN')}</td>
                                <td className="p-3.5 text-right font-semibold">₹{row.subsistenceAllowance.toLocaleString('en-IN')}</td>
                                <td className="p-3.5 text-right font-black text-emerald-600 dark:text-emerald-400 text-sm">₹{row.totalAmount.toLocaleString('en-IN')}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wider">Summary of Benefits</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {scholarship.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-4">
                <DocumentReadinessTracker
                  documents={scholarship.documents}
                  scholarshipTitle={scholarship.title}
                />
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Step-by-step Application Guide</h3>
                <div className="space-y-3">
                  {scholarship.applicationProcess.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                {scholarship.faqs && scholarship.faqs.length > 0 ? (
                  <div className="space-y-3">
                    {scholarship.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-y-1">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-blue-600" /> {faq.question}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">No specific FAQs added for this scholarship yet.</p>
                )}
              </div>
            )}

          </div>

        </div>

        {/* Right Action Sidebar */}
        <div className="space-y-6">
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm sticky top-24">
            <div className="text-center space-y-1 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Award Value</span>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{scholarship.amountText}</div>
            </div>

            <button
              onClick={handleApply}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm shadow-xl transition-all ${
                isApplied
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
              }`}
            >
              {isApplied ? 'Application Submitted ✓' : 'Apply Now on ScholarHub'}
            </button>

            <a
              href={scholarship.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              Official Website Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <button
                onClick={() => addToCompare(scholarship)}
                className="hover:text-blue-600 font-semibold flex items-center gap-1"
              >
                <Layers className="w-3.5 h-3.5" /> Compare
              </button>
              <button
                onClick={() => setPdfModalOpen(true)}
                className="hover:text-blue-600 font-semibold flex items-center gap-1"
              >
                <Printer className="w-3.5 h-3.5" /> Download PDF
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Similar Scholarships */}
      {similarScholarships.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Similar Recommended Grants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarScholarships.map((s) => (
              <ScholarshipCard key={s.scholarshipID} scholarship={s} />
            ))}
          </div>
        </div>
      )}

      {/* PDF Modal */}
      <PDFExportModal
        scholarship={scholarship}
        open={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />

    </div>
  );
};
