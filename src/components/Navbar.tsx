import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useScholarships } from '../context/ScholarshipContext';
import { 
  GraduationCap, 
  Sparkles, 
  Search, 
  Bookmark, 
  User, 
  LogOut, 
  Bell, 
  Moon, 
  Sun, 
  LayoutDashboard, 
  ShieldAlert, 
  Layers, 
  FileCheck,
  CheckCircle,
  Menu,
  X,
  Building2
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, isAuthenticated, isAdmin, logout, switchRole } = useAuth();
  const { compareList, darkMode, toggleDarkMode, notifications, markNotificationRead } = useScholarships();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickSearch, setQuickSearch] = useState('');

  const unreadNotifs = notifications.filter(n => !n.read).length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      navigate(`/scholarships?search=${encodeURIComponent(quickSearch)}`);
      setSearchOpen(false);
      setQuickSearch('');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-3 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-header rounded-2xl shadow-sm h-16 px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-300">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extrabold tracking-tight brand-gradient-text">
            ScholarX
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link 
            to="/" 
            className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive('/') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
          >
            Home
          </Link>

          <Link 
            to="/scholarships" 
            className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive('/scholarships') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
          >
            Scholarships
          </Link>

          <Link 
            to="/ai-finder" 
            className={`flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive('/ai-finder') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            ScholarBot AI
          </Link>

          <Link 
            to="/resources" 
            className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive('/resources') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
          >
            Resources
          </Link>

          <Link 
            to="/about" 
            className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${isActive('/about') ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}
          >
            About
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Compare Button */}
          {compareList.length > 0 && (
            <button
              onClick={() => navigate('/scholarships?compare=open')}
              className="px-2.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-indigo-100 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              Compare ({compareList.length})
            </button>
          )}

          {/* Quick Search Toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              {unreadNotifs > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
              )}
            </button>

            {/* Notifications Dropdown */}
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-blue-600" /> Notifications
                  </h4>
                  <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
                    {unreadNotifs} New
                  </span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-64 overflow-y-auto my-2">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`py-2.5 px-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors ${!n.read ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''}`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-semibold text-xs text-slate-900 dark:text-white">{n.title}</span>
                        <span className="text-[10px] text-slate-400">{n.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">{n.message}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/dashboard"
                  onClick={() => setNotifOpen(false)}
                  className="block text-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2"
                >
                  View All in Dashboard &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* User Auth or Dashboard */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => switchRole(user?.role === 'admin' ? 'student' : 'admin')}
                className={`hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${user?.role === 'admin' ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800' : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'}`}
                title="Click to toggle Demo Student/Admin role"
              >
                {user?.role === 'admin' ? <ShieldAlert className="w-3.5 h-3.5 text-amber-600" /> : <User className="w-3.5 h-3.5" />}
                Role: <span className="capitalize">{user?.role}</span>
              </button>

              <Link
                to={isAdmin ? "/admin" : "/dashboard"}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/30"
                />
                <span className="hidden sm:block text-xs font-semibold text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                  {user?.name}
                </span>
              </Link>

              <button
                onClick={logout}
                className="p-2 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Quick Search Overlay */}
      {searchOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-3">
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto relative flex items-center">
            <Search className="w-5 h-5 absolute left-3 text-slate-400" />
            <input
              type="text"
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              placeholder="Search by scholarship title, engineering, OBC, government, state..."
              className="w-full pl-10 pr-24 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white border border-transparent focus:border-blue-500 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Home
          </Link>
          <Link
            to="/scholarships"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Scholarships
          </Link>
          <Link
            to="/ai-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            AI Finder
          </Link>
          <Link
            to="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Resources
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Contact
          </Link>

          {/* Theme Switcher Row */}
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="flex items-center gap-2">
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
              <span>{darkMode ? "Light Theme Mode" : "Dark Theme Mode"}</span>
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
              {darkMode ? "Dark On" : "Light On"}
            </span>
          </button>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LayoutDashboard className="w-4 h-4 text-blue-600" />
                Student Dashboard
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-amber-600 dark:text-amber-400 font-bold hover:bg-amber-50 dark:hover:bg-amber-950/40"
                >
                  <ShieldAlert className="w-4 h-4" />
                  Admin Control Panel
                </Link>
              )}
            </>
          ) : (
            <div className="pt-2 flex gap-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-1/2 text-center py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-1/2 text-center py-2 rounded-xl bg-blue-600 text-white font-bold text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
