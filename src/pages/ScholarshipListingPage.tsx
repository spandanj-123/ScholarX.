import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScholarships } from '../context/ScholarshipContext';
import { ScholarshipCard } from '../components/ScholarshipCard';
import { CompareModal } from '../components/CompareModal';
import { 
  Filter, 
  RotateCcw, 
  Search, 
  SlidersHorizontal, 
  GraduationCap, 
  Building2, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  X
} from 'lucide-react';

export const ScholarshipListingPage: React.FC = () => {
  const { filteredScholarships, filters, setFilters, resetFilters, compareList } = useScholarships();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Check URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const typeParam = params.get('type');
    const courseParam = params.get('course');
    const categoryParam = params.get('category');
    const compareParam = params.get('compare');

    if (compareParam === 'open') {
      setCompareModalOpen(true);
    }

    if (searchParam || typeParam || courseParam || categoryParam) {
      setFilters(prev => ({
        ...prev,
        searchQuery: searchParam || prev.searchQuery,
        type: typeParam || prev.type,
        course: courseParam || prev.course,
        category: categoryParam || prev.category
      }));
    }
  }, [location.search]);

  // Reset to page 1 on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);
  const paginatedScholarships = filteredScholarships.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl">
        <div>
          <span className="px-3 py-1 bg-blue-500/30 text-blue-300 font-bold text-xs rounded-full border border-blue-400/30">
            Verified Academic Directory
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-2">
            Explore All Scholarships ({filteredScholarships.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Filter by education level, course, caste category, annual income, domicile state, and deadline.
          </p>
        </div>

        {compareList.length > 0 && (
          <button
            onClick={() => setCompareModalOpen(true)}
            className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl font-bold text-xs shadow-lg flex items-center gap-2"
          >
            <Layers className="w-4 h-4" /> Compare Selected ({compareList.length})
          </button>
        )}
      </div>

      {/* Main Grid & Filters Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR FILTERS (Desktop) */}
        <aside className="hidden lg:block space-y-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit sticky top-24 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-blue-600" /> Filter Criteria
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Education Level */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Education Level</label>
            <select
              value={filters.educationLevel}
              onChange={(e) => setFilters({ ...filters, educationLevel: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            >
              <option value="All Education Levels">All Education Levels</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 12">Class 12</option>
              <option value="Diploma">Diploma</option>
              <option value="ITI">ITI</option>
              <option value="Undergraduate">Undergraduate (UG)</option>
              <option value="Postgraduate">Postgraduate (PG)</option>
              <option value="Doctorate">Doctorate (Ph.D)</option>
            </select>
          </div>

          {/* Course */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Course / Discipline</label>
            <select
              value={filters.course}
              onChange={(e) => setFilters({ ...filters, course: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            >
              <option value="All">All Courses</option>
              <option value="Engineering">Engineering (B.Tech/BE)</option>
              <option value="Medical">Medical (MBBS/BDS)</option>
              <option value="MBA">Management (MBA)</option>
              <option value="Law">Law (LLB)</option>
              <option value="Science">Science (B.Sc/M.Sc)</option>
              <option value="Commerce">Commerce & CA</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
            </select>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Social Category / Quota</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            >
              <option value="All Categories">All Categories</option>
              <option value="General">General</option>
              <option value="SC">SC (Scheduled Caste)</option>
              <option value="ST">ST (Scheduled Tribe)</option>
              <option value="OBC">OBC (Other Backward Class)</option>
              <option value="EWS">EWS (Economically Weaker Section)</option>
              <option value="Minority">Minority Communities</option>
              <option value="Girls">Girls Only</option>
              <option value="Disability">Differently Abled</option>
            </select>
          </div>

          {/* Scholarship Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Scholarship Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            >
              <option value="All">All Types</option>
              <option value="Government">Government & State Schemes</option>
              <option value="Private">Private / CSR Foundations</option>
              <option value="International">International Grants</option>
            </select>
          </div>

          {/* Domicile State */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">State Domicile</label>
            <select
              value={filters.state}
              onChange={(e) => setFilters({ ...filters, state: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            >
              <option value="All States">All States</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="International">International</option>
            </select>
          </div>

          {/* Family Income Range */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-slate-800 dark:text-slate-200">Max Family Income</label>
              <span className="font-extrabold text-blue-600">₹{(filters.maxIncome / 100000).toFixed(1)} Lakh</span>
            </div>
            <input
              type="range"
              min={100000}
              max={1500000}
              step={50000}
              value={filters.maxIncome}
              onChange={(e) => setFilters({ ...filters, maxIncome: Number(e.target.value) })}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>₹1L</span>
              <span>₹8L</span>
              <span>₹15L+</span>
            </div>
          </div>

        </aside>

        {/* LISTINGS & SEARCH MAIN AREA */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Controls Bar */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 text-slate-400" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                placeholder="Search scholarships by name, degree, provider..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilters({ ...filters, searchQuery: '' })}
                  className="absolute right-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden w-full sm:w-auto px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4 text-blue-600" /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Sort By:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none"
              >
                <option value="newest">Newest Added</option>
                <option value="highest_amount">Highest Amount</option>
                <option value="ending_soon">Ending Soonest</option>
              </select>
            </div>

          </div>

          {/* Active Filter Badges */}
          <div className="flex flex-wrap gap-2 items-center text-xs">
            <span className="text-slate-400 font-semibold text-[11px]">Active Filters:</span>
            {filters.searchQuery && (
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 font-medium flex items-center gap-1">
                Query: "{filters.searchQuery}"
              </span>
            )}
            {filters.educationLevel !== 'All Education Levels' && (
              <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 font-medium">
                {filters.educationLevel}
              </span>
            )}
            {filters.category !== 'All Categories' && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 font-medium">
                {filters.category}
              </span>
            )}
            {filters.type !== 'All' && (
              <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 font-medium">
                {filters.type}
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-[11px] text-rose-600 dark:text-rose-400 font-bold hover:underline"
            >
              Clear All
            </button>
          </div>

          {/* Scholarship Cards Grid */}
          {paginatedScholarships.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-4">
              <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">No Scholarships Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No scholarships match your current search and filter combination. Try clearing filters or adjusting your income/course selection.
              </p>
              <button
                onClick={resetFilters}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedScholarships.map((s) => (
                <ScholarshipCard key={s.scholarshipID} scholarship={s} />
              ))}
            </div>
          )}

          {/* Pagination Bar */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-9 h-9 rounded-xl font-bold text-xs transition-colors ${
                    currentPage === idx + 1
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Compare Modal */}
      <CompareModal open={compareModalOpen} onClose={() => setCompareModalOpen(false)} />

    </div>
  );
};
