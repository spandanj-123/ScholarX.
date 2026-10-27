import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useScholarships } from '../context/ScholarshipContext';
import { ScholarshipCard } from '../components/ScholarshipCard';
import { InteractiveEligibilityMatcher } from '../components/InteractiveEligibilityMatcher';
import { APP_STATS, MOCK_SUCCESS_STORIES, MOCK_NEWS } from '../data/mockScholarships';
import { 
  Search, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  Globe, 
  Clock, 
  Award, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck, 
  Layers,
  ChevronLeft,
  ChevronRight,
  Zap,
  Activity,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORY_SHORTCUTS = [
  { label: 'Maharashtra UG Schemes', icon: '🏛️', query: 'Maharashtra', desc: '50+ MahaDBT, DHE & University Grants' },
  { label: 'Private CSR Scholarships', icon: '💎', query: 'Private', desc: '50+ Verified Corporate Grants' },
  { label: 'EBC / Open 100% Waiver', icon: '⚡', query: 'EBC', desc: 'Tuition & Exam Fee Concession' },
  { label: 'Hostel Maintenance', icon: '🏠', query: 'Panjabrao', desc: 'Up to ₹60,000 Annual Grant' },
  { label: 'Engineering (B.Tech)', icon: '⚙️', query: 'Engineering', desc: 'CAP & CSR Grants' },
  { label: 'Medical & MBBS', icon: '🩺', query: 'Medical', desc: 'State & Foundation Funds' },
];

const TICKER_ITEMS = [
  '⚡ 50+ New Maharashtra UG Schemes Added (MahaDBT, DHE, DMER, SARTHI, BARTI, TRTI)',
  '💎 50+ Private CSR Grants Live (Kotak Kanya, Infosys STEM, SBI Asha, Siemens, L\'Oréal)',
  '🎓 EBC Girls 100% Tuition Fee Waiver Across All Maharashtra Colleges',
  '💰 Dr. Panjabrao Deshmukh Hostel Grant: ₹60,000/yr Active for 2026-27',
  '🏛️ University Grants Active: SPPU Pune, MU Mumbai, BAMU, SUK Kolhapur, KBCNMU',
  '🛡️ 100% Verified Official GR Reference Data & Direct Portal Links',
];

export const HomePage: React.FC = () => {
  const { scholarships, setFilters } = useScholarships();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExamCourse, setSelectedExamCourse] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedState, setSelectedState] = useState('All');

  // Hero Auto Slider state
  const featuredScholarships = scholarships.filter(s => s.featured);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (featuredScholarships.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredScholarships.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredScholarships.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({
      ...prev,
      searchQuery: searchTerm,
      course: selectedExamCourse !== 'All' ? selectedExamCourse : 'All Courses',
      category: selectedCategory !== 'All' ? selectedCategory : 'All Categories',
      state: selectedState !== 'All' ? selectedState : 'All States'
    }));
    navigate('/scholarships');
  };

  const handleCategoryShortcut = (query: string) => {
    if (query === 'Private') {
      setFilters(prev => ({
        ...prev,
        type: 'Private',
        searchQuery: '',
        state: 'All States'
      }));
    } else if (query === 'Maharashtra') {
      setFilters(prev => ({
        ...prev,
        state: 'Maharashtra',
        searchQuery: ''
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        searchQuery: query
      }));
    }
    navigate('/scholarships');
  };

  // Sections data
  const allGovernmentScholarships = scholarships.filter(s => s.type === 'Government' || s.type === 'State');
  const governmentScholarships = allGovernmentScholarships.slice(0, 6);
  const allPrivateScholarships = scholarships.filter(s => s.type === 'Private');
  const privateScholarships = allPrivateScholarships.slice(0, 6);
  const internationalScholarships = scholarships.filter(s => s.type === 'International').slice(0, 3);
  const closingSoonScholarships = scholarships.filter(s => s.closingSoon || new Date(s.deadline).getTime() - new Date().getTime() < 30 * 86400000).slice(0, 3);

  return (
    <div className="space-y-16 pb-16 relative">
      
      {/* LIVE SCHEME NEWS TICKER BAR */}
      <div className="bg-slate-900/90 dark:bg-slate-950/90 text-white border-y border-white/10 py-2.5 overflow-hidden backdrop-blur-md">
        <div className="animate-marquee flex items-center gap-8 text-xs font-semibold tracking-wide select-none">
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{item}</span>
              <span className="text-slate-600 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO SECTION WITH SOPHISTICATED GLASS ARCHITECTURE */}
      <section className="relative overflow-hidden pt-6 sm:pt-10 pb-16">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 z-10">
          
          {/* Top Headline */}
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white"
            >
              Fund Your Future With <br className="hidden sm:block" />
              <span className="creative-gradient-text">Zero Guesswork</span>
            </motion.h1>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-1"
            >
              <Link
                to="/scholarships"
                className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                <Search className="w-4 h-4" /> Explore 500+ Scholarships
              </Link>
            </motion.div>
          </div>

          {/* Unified Search & Filters Glass Console */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 max-w-4xl mx-auto space-y-4"
          >
            <form onSubmit={handleSearchSubmit} className="space-y-4">
              
              {/* Main Search Input with Glass Styling */}
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-blue-600 dark:text-blue-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by scholarship name, engineering, MBBS, EBC, or provider..."
                  className="w-full pl-12 pr-28 sm:pr-32 py-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold placeholder-slate-400 text-xs sm:text-sm focus:outline-none border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-inner transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 sm:px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/25 transition-all hover:scale-105 flex items-center gap-1.5"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Quick Select Filter Dropdowns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                
                {/* Course */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Course / Field</label>
                  <select
                    value={selectedExamCourse}
                    onChange={(e) => setSelectedExamCourse(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-semibold text-xs transition-colors"
                  >
                    <option value="All">All Courses</option>
                    <option value="Engineering">Engineering (B.Tech)</option>
                    <option value="Medical">Medical (MBBS/BDS)</option>
                    <option value="MBA">Management (MBA)</option>
                    <option value="Law">Law (LLB)</option>
                    <option value="Science">Science (B.Sc)</option>
                    <option value="Diploma/ITI">Diploma / ITI</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-semibold text-xs transition-colors"
                  >
                    <option value="All">All Categories</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                    <option value="EWS">EWS / EBC</option>
                    <option value="General">General / Open</option>
                    <option value="Girls">Girls Only</option>
                    <option value="Disability">Differently Abled</option>
                  </select>
                </div>

                {/* State Domicile */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">State Domicile</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-semibold text-xs transition-colors"
                  >
                    <option value="All">All India / All States</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="International">International (Abroad)</option>
                  </select>
                </div>

                {/* AI Match Button */}
                <div className="flex items-end">
                  <Link
                    to="/ai-finder"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 uppercase tracking-wide shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Instant Match
                  </Link>
                </div>

              </div>

            </form>
          </motion.div>

          {/* QUICK CATEGORY SHORTCUT CHIPS */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {CATEGORY_SHORTCUTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryShortcut(item.query)}
                  className="p-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-800 text-left transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <div className="text-xl mb-1">{item.icon}</div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-400 line-clamp-1">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Spotlight Card */}
          {featuredScholarships.length > 0 && (
            <div className="pt-2 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-600 dark:text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 uppercase tracking-wide font-bold">
                  <Zap className="w-4 h-4 fill-current text-amber-400" /> Featured Spotlight Grant
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredScholarships.length) % featuredScholarships.length)}
                    className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredScholarships.length)}
                    className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Slide Card */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-center shadow-xl shadow-slate-200/40 dark:shadow-slate-950/40"
                >
                  <img
                    src={featuredScholarships[currentSlide].bannerImage}
                    alt={featuredScholarships[currentSlide].title}
                    className="w-full md:w-56 h-36 object-cover rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
                  />
                  <div className="flex-1 space-y-2">
                    <span className="px-3 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 text-[10px] font-bold uppercase tracking-wide">
                      {featuredScholarships[currentSlide].provider}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
                      {featuredScholarships[currentSlide].title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      {featuredScholarships[currentSlide].description}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Award Amount</p>
                        <p className="text-lg font-black text-blue-600 dark:text-blue-400">
                          {featuredScholarships[currentSlide].amountText}
                        </p>
                      </div>
                      <Link
                        to={`/scholarships/${featuredScholarships[currentSlide].scholarshipID}`}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>
      </section>

      {/* 3-STEP INSTANT ELIGIBILITY MATCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveEligibilityMatcher />
      </section>

      {/* GOVERNMENT SCHOLARSHIPS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" /> Government Scholarships & Schemes
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Official MahaDBT, DHE, DMER & State University Schemes (EBC Fee Waiver, Dr. Panjabrao Hostel Grant, Swadhar, SARTHI, BARTI)
            </p>
          </div>

          <Link
            to="/scholarships?type=Government"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Explore All Government & State ({allGovernmentScholarships.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governmentScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.scholarshipID} scholarship={scholarship} />
          ))}
        </div>
      </section>

      {/* PRIVATE & CSR SCHOLARSHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" /> Corporate & Foundation CSR Grants ({allPrivateScholarships.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Verified private CSR grants open now for UG students: Kotak Kanya, Infosys STEM, SBI Asha, Siemens, L'Oréal, Dr. Reddy's & more
            </p>
          </div>
          <Link to="/scholarships?type=Private" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            Explore All Private ({allPrivateScholarships.length}) <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privateScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.scholarshipID} scholarship={scholarship} />
          ))}
        </div>
      </section>

      {/* INTERNATIONAL SCHOLARSHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" /> International Fellowships & Study Abroad
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Commonwealth UK, DAAD Germany, Fulbright US, and Chevening Fellowships
            </p>
          </div>
          <Link to="/scholarships?type=International" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            View International List <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.scholarshipID} scholarship={scholarship} />
          ))}
        </div>
      </section>

      {/* SCHOLARSHIPS CLOSING SOON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-rose-500/10 dark:bg-rose-950/20 p-6 rounded-3xl border border-rose-200 dark:border-rose-900/50 space-y-6 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-600 animate-pulse" /> Scholarships Closing Soon
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Deadlines ending in the next 30 days. Don’t miss your opportunity to apply!
              </p>
            </div>
            <Link to="/scholarships?sortBy=ending_soon" className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1">
              View All Urgent Grants <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {closingSoonScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.scholarshipID} scholarship={scholarship} />
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM STATISTICS WITH CREATIVE RADIAL CARDS */}
      <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl text-slate-900 dark:text-white py-14 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Data-Driven Impact</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Empowering Indian & Global Scholars</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Transforming financial aid discovery with verified datasets & AI accuracy</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:-translate-y-1 transition-all">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white">{APP_STATS.totalScholarships}+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">Verified Schemes</div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:-translate-y-1 transition-all">
              <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white">{APP_STATS.activeFunds}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">Disbursed Pool</div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:-translate-y-1 transition-all">
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white">{APP_STATS.studentsBenefited}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">Students Guided</div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:-translate-y-1 transition-all">
              <Sparkles className="w-8 h-8 text-amber-500 dark:text-amber-400 mx-auto mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white">{APP_STATS.aiMatchAccuracy}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1">AI Match Precision</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Student Impact</span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">ScholarX Success Stories</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">See how real students funded their dream education using ScholarX</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-blue-500/30 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{story.name}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{story.college}</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800">
                    Awarded: {story.amountAwarded}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST SCHOLARSHIP NEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" /> Latest Scholarship News & Policy Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_NEWS.map((article) => (
            <div
              key={article.id}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                  {article.category} • {article.date}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 mt-2">
                  {article.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {article.summary}
                </p>
              </div>
              <div className="p-4 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-right">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Read Source <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
