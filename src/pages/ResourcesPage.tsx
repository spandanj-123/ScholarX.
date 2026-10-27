import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Search, 
  ShieldCheck,
  Video,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Globe
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'guides' | 'checklists' | 'templates'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const RESOURCES = [
    {
      id: 1,
      title: "Complete NSP 2.0 Direct Bank Transfer (DBT) Guide 2026",
      category: "guides",
      type: "PDF Guide",
      size: "2.4 MB",
      downloads: "42,100+",
      description: "Step-by-step instructions for National Scholarship Portal registration, Aadhaar seeding with bank account, and institutional verification.",
      icon: FileText,
      color: "text-blue-600 bg-blue-50 dark:bg-blue-950/60"
    },
    {
      id: 2,
      title: "Winning SOP & Statement of Purpose Master Template",
      category: "templates",
      type: "DOCX Template",
      size: "1.1 MB",
      downloads: "38,500+",
      description: "Proven paragraph-by-paragraph framework for writing high-scoring SOPs for HDFC Parivartan, Tata Capital, and Chevening scholarships.",
      icon: BookOpen,
      color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60"
    },
    {
      id: 3,
      title: "Universal Government Income & Caste Document Checklist",
      category: "checklists",
      type: "Interactive PDF",
      size: "850 KB",
      downloads: "56,000+",
      description: "State-by-state list of valid issuing authorities, Tehsildar seals, non-creamy layer criteria, and mandatory affidavit formats.",
      icon: CheckCircle,
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60"
    },
    {
      id: 4,
      title: "Corporate CSR Scholarship Application Strategy",
      category: "guides",
      type: "PDF E-Book",
      size: "3.8 MB",
      downloads: "29,400+",
      description: "How private foundations evaluate annual family income, academic marks, and personal hardship essays.",
      icon: ShieldCheck,
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/60"
    }
  ];

  const FAQS = [
    {
      question: "Can I apply for multiple scholarships simultaneously?",
      answer: "Yes! Students can apply for multiple private or CSR scholarships. However, under Indian Government rules, you can typically claim financial disbursal from only ONE government scheme per academic year."
    },
    {
      question: "What is Aadhaar Seeding for Direct Bank Transfer (DBT)?",
      answer: "Aadhaar Seeding connects your 12-digit Aadhaar number directly to your bank account's NPCI mapper. This is required for NSP and state portal funds to reach your account smoothly."
    },
    {
      question: "What should I do if my annual family income certificate is delayed?",
      answer: "You can upload an officially issued salary slip, IT return copy, or an interim affidavit notarized by a magistrate while your Revenue Department certificate is processed."
    },
    {
      question: "How does ScholarHub AI verify scholarship authenticity?",
      answer: "Every scholarship listed on ScholarHub AI undergoes a strict 3-stage audit: official gazette verification, corporate CSR filing check, and active helpline validation."
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wide">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Scholarship Success Toolkit
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Guides, Checklists & Free Resources
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Master the scholarship application process with free downloadable templates, state document checklists, and expert guides.
        </p>
      </div>

      {/* Official Government Portals Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-500/20 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Direct Access Portals
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Official Government Scholarship Portals
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-md">
            Direct verified links to state and national government scholarship applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Rajarshi Chhatrapati Shahu Maharaj EBC Official Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3 hover:border-blue-400/50 transition-all group">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Govt of Maharashtra (DTE)</span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  Rajarshi Chhatrapati Shahu Maharaj EBC Portal
                </h3>
              </div>
              <span className="p-2 rounded-xl bg-blue-500/20 text-blue-300 shrink-0">
                <Globe className="w-5 h-5" />
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Official MahaDBT portal for 50% tuition and exam fee waiver reimbursement scheme for Open / EWS / General category students.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA86467549C6E0CFFDFD61E992C8610ED352EC9DEF886C9CD"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 transition-all shadow-md"
              >
                Direct Scheme Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3 hover:border-amber-400/50 transition-all group">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Govt of Maharashtra (DTE)</span>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  Dr. Punjabrao Deshmukh Hostel Scheme
                </h3>
              </div>
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
                <Globe className="w-5 h-5" />
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Official portal for Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna providing up to ₹30,000/yr hostel allowance for children of farmers & construction workers.
            </p>
            <div className="pt-2">
              <a
                href="https://www.mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3D30C2CB15631E4E31F4E2AFF5E4258B33E89887D583052E"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 transition-all shadow-md"
              >
                Direct Punjabrao Deshmukh Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* National Scholarship Portal Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3 hover:border-blue-400/50 transition-all group">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Government of India</span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  National Scholarship Portal (NSP 2.0)
                </h3>
              </div>
              <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300 shrink-0">
                <Globe className="w-5 h-5" />
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Central portal for Central Sector Scheme, AICTE Pragati, Post-Matric SC/ST, and Minority welfare grants with Aadhaar DBT disbursal.
            </p>
            <div className="pt-2">
              <a
                href="https://scholarships.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-md"
              >
                Visit NSP Official Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`}
        >
          All Resources
        </button>
        <button
          onClick={() => setActiveCategory('guides')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'guides' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`}
        >
          E-Books & Guides
        </button>
        <button
          onClick={() => setActiveCategory('checklists')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'checklists' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`}
        >
          Document Checklists
        </button>
        <button
          onClick={() => setActiveCategory('templates')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'templates' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`}
        >
          SOP & Essay Templates
        </button>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => {
          const IconComp = res.icon;
          return (
            <div 
              key={res.id} 
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className={`p-3 rounded-2xl ${res.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    {res.type} • {res.size}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {res.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  {res.downloads} Downloads
                </span>
                <button
                  onClick={() => alert(`Downloading resource: ${res.title}`)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" /> Free Download
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-6 max-w-4xl mx-auto shadow-sm">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" /> Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Everything you need to know about scholarship eligibility and application submission</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
