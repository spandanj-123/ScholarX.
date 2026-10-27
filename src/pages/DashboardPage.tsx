import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useScholarships } from '../context/ScholarshipContext';
import { ScholarshipCard } from '../components/ScholarshipCard';
import { UserProfile, EducationLevel, CourseType, CategoryType } from '../types/scholarship';
import { 
  User, 
  FileCheck, 
  Bookmark, 
  Sparkles, 
  Clock, 
  Calendar, 
  Edit3, 
  CheckCircle2, 
  Award, 
  LayoutDashboard, 
  Save, 
  Building2,
  TrendingUp
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const { scholarships, applications, recentlyViewed } = useScholarships();

  const [activeTab, setActiveTab] = useState<'profile' | 'applications' | 'saved' | 'recommended' | 'history'>('applications');
  const [editingProfile, setEditingProfile] = useState(false);

  // Form state for profile edit
  const [profileForm, setProfileForm] = useState<Partial<UserProfile>>({
    name: user?.name || '',
    phone: user?.phone || '',
    education: user?.education || 'Undergraduate',
    course: user?.course || 'Engineering',
    state: user?.state || 'Maharashtra',
    income: user?.income || '< 3 Lakh',
    category: user?.category || 'OBC',
    gender: user?.gender || 'Male'
  });

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <User className="w-12 h-12 text-slate-300 mx-auto" />
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Student Login Required</h2>
        <p className="text-xs text-slate-500">Please sign in to access your scholarship applications dashboard.</p>
      </div>
    );
  }

  // Saved scholarships
  const savedScholarships = scholarships.filter((s) => user.savedScholarships.includes(s.scholarshipID));

  // Recommended scholarships based on user's course & education
  const recommendedScholarships = scholarships.filter(
    (s) => s.educationLevel === user.education || s.course === user.course || s.state === user.state
  );

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    setEditingProfile(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Student Welcome Header Card */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"}
            alt={user.name}
            className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-400/30 shadow-md"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white">{user.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-300 text-[10px] font-bold border border-blue-400/30">
                Student Account
              </span>
            </div>
            <p className="text-xs text-slate-300">
              {user.education} • {user.course} • {user.state} ({user.category} Quota)
            </p>
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="flex gap-4 text-center">
          <div className="px-4 py-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <span className="text-[10px] text-slate-300 font-semibold block">Applications</span>
            <span className="text-lg font-black text-emerald-400">{applications.length}</span>
          </div>
          <div className="px-4 py-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <span className="text-[10px] text-slate-300 font-semibold block">Bookmarked</span>
            <span className="text-lg font-black text-blue-300">{savedScholarships.length}</span>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 no-scrollbar font-bold text-xs">
        <button
          onClick={() => setActiveTab('applications')}
          className={`px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'applications' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <FileCheck className="w-4 h-4" /> Application Tracker ({applications.length})
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          className={`px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'saved' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <Bookmark className="w-4 h-4" /> Bookmarked Grants ({savedScholarships.length})
        </button>

        <button
          onClick={() => setActiveTab('recommended')}
          className={`px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'recommended' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" /> AI Recommended
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'profile' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <User className="w-4 h-4" /> Edit Profile
        </button>
      </div>

      {/* Applications Tracker Panel */}
      {activeTab === 'applications' && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" /> Tracked Applications
          </h3>

          {applications.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <FileCheck className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">No Active Applications Yet</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore scholarships and click "Apply Now" to record and track your nodal officer verification status here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {applications.map((app) => (
                <div
                  key={app.applicationID}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">
                      App ID: {app.applicationID}
                    </span>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">
                      {app.scholarshipTitle}
                    </h4>
                    <p className="text-xs text-slate-500">{app.provider}</p>
                    <div className="text-xs text-slate-400 pt-1">
                      Applied Date: <span className="font-semibold text-slate-700 dark:text-slate-300">{app.appliedAt}</span>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto flex flex-col items-start sm:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Status: {app.status}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      {app.amountText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bookmarked Grants Panel */}
      {activeTab === 'saved' && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-rose-500" /> Bookmarked Scholarships
          </h3>

          {savedScholarships.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <Bookmark className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">No Bookmarked Grants</h4>
              <p className="text-xs text-slate-500">Click the bookmark heart icon on any scholarship card to save it for quick reference.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedScholarships.map((s) => (
                <ScholarshipCard key={s.scholarshipID} scholarship={s} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* AI Recommended Grants Panel */}
      {activeTab === 'recommended' && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" /> Recommended for {user.course} Students
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedScholarships.map((s) => (
              <ScholarshipCard key={s.scholarshipID} scholarship={s} />
            ))}
          </div>
        </div>
      )}

      {/* Profile Editor Panel */}
      {activeTab === 'profile' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" /> Student Profile & Criteria
            </h3>
            <button
              onClick={() => setEditingProfile(!editingProfile)}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> {editingProfile ? 'Cancel Edit' : 'Edit Profile'}
            </button>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Full Name</label>
                <input
                  type="text"
                  disabled={!editingProfile}
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-70 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Phone Number</label>
                <input
                  type="text"
                  disabled={!editingProfile}
                  value={profileForm.phone}
                  onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-70 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Education Level</label>
                <select
                  disabled={!editingProfile}
                  value={profileForm.education}
                  onChange={(e) => setProfileForm({ ...profileForm, education: e.target.value as EducationLevel })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-70 text-slate-900 dark:text-white"
                >
                  <option value="Undergraduate">Undergraduate (UG)</option>
                  <option value="Postgraduate">Postgraduate (PG)</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Doctorate">Doctorate (Ph.D)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Course Stream</label>
                <select
                  disabled={!editingProfile}
                  value={profileForm.course}
                  onChange={(e) => setProfileForm({ ...profileForm, course: e.target.value as CourseType })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-70 text-slate-900 dark:text-white"
                >
                  <option value="Engineering">Engineering (B.Tech)</option>
                  <option value="Medical">Medical (MBBS)</option>
                  <option value="MBA">Management (MBA)</option>
                  <option value="Law">Law (LLB)</option>
                  <option value="Science">Science (B.Sc)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">State Domicile</label>
                <input
                  type="text"
                  disabled={!editingProfile}
                  value={profileForm.state}
                  onChange={(e) => setProfileForm({ ...profileForm, state: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-70 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category / Quota</label>
                <select
                  disabled={!editingProfile}
                  value={profileForm.category}
                  onChange={(e) => setProfileForm({ ...profileForm, category: e.target.value as CategoryType })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-70 text-slate-900 dark:text-white"
                >
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="EWS">EWS</option>
                  <option value="General">General</option>
                </select>
              </div>
            </div>

            {editingProfile && (
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5 mt-4"
              >
                <Save className="w-4 h-4" /> Save Updated Details
              </button>
            )}
          </form>
        </div>
      )}

    </div>
  );
};
