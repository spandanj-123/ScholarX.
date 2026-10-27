import React, { useState } from 'react';
import { useScholarships } from '../context/ScholarshipContext';
import { useAuth } from '../context/AuthContext';
import { Scholarship } from '../types/scholarship';
import { 
  ShieldAlert, 
  Plus, 
  Trash2, 
  Edit, 
  Download, 
  BarChart2, 
  Users, 
  Building2, 
  Award, 
  Search, 
  X, 
  Save, 
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

export const AdminPanelPage: React.FC = () => {
  const { scholarships, addScholarship, updateScholarship, deleteScholarship, applications } = useScholarships();
  const { isAdmin, user } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Scholarship | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState<Omit<Scholarship, 'scholarshipID' | 'createdAt'>>({
    title: '',
    provider: '',
    type: 'Government',
    amount: 50000,
    amountText: '₹50,000 / year',
    deadline: '2026-06-30',
    eligibility: '',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    incomeLimit: 300000,
    category: ['OBC', 'SC'],
    state: 'Maharashtra',
    gender: 'All',
    description: '',
    benefits: ['Full tuition waiver', 'Books allowance ₹10,000'],
    documents: ['Aadhaar Card', 'Income Certificate', 'Mark Sheets'],
    applicationProcess: ['Register on official portal', 'Upload income proof', 'Nodal officer verification'],
    officialLink: 'https://scholarships.gov.in',
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    featured: false,
    closingSoon: false
  });

  const filtered = scholarships.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      provider: '',
      type: 'Government',
      amount: 50000,
      amountText: '₹50,000 / year',
      deadline: '2026-06-30',
      eligibility: 'Minimum 60% in 12th board exams.',
      educationLevel: 'Undergraduate',
      course: 'Engineering',
      incomeLimit: 300000,
      category: ['OBC'],
      state: 'Maharashtra',
      gender: 'All',
      description: 'Provides annual financial grant to deserving engineering students.',
      benefits: ['Annual stipend ₹50,000'],
      documents: ['Income Certificate', 'Aadhaar Card'],
      applicationProcess: ['Apply online at official portal'],
      officialLink: 'https://scholarships.gov.in',
      bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      featured: false,
      closingSoon: false
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (s: Scholarship) => {
    setEditingItem(s);
    setFormData({
      title: s.title,
      provider: s.provider,
      type: s.type,
      amount: s.amount,
      amountText: s.amountText,
      deadline: s.deadline,
      eligibility: s.eligibility,
      educationLevel: s.educationLevel,
      course: s.course,
      incomeLimit: s.incomeLimit,
      category: s.category,
      state: s.state,
      gender: s.gender,
      description: s.description,
      benefits: s.benefits,
      documents: s.documents,
      applicationProcess: s.applicationProcess,
      officialLink: s.officialLink,
      bannerImage: s.bannerImage,
      featured: s.featured,
      closingSoon: s.closingSoon
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      updateScholarship(editingItem.scholarshipID, formData);
    } else {
      addScholarship(formData);
    }
    setModalOpen(false);
  };

  const handleExportCSV = () => {
    window.open('/api/admin/export-csv', '_blank');
  };

  // Chart Data
  const chartData = [
    { name: 'Government', count: scholarships.filter((s) => s.type === 'Government').length },
    { name: 'Private CSR', count: scholarships.filter((s) => s.type === 'Private').length },
    { name: 'International', count: scholarships.filter((s) => s.type === 'International').length }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#8B5CF6'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30 mb-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" /> Admin Control Dashboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">ScholarHub Platform Management</h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Logged in as {user?.name || 'Administrator'} ({user?.email})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" /> Export CSV Data
          </button>
          <button
            onClick={handleOpenAdd}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Scholarship
          </button>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 block">Total Active Grants</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white">{scholarships.length}</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 block">Submitted Applications</span>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{applications.length}</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 block">Featured Spotlight</span>
          <div className="text-2xl font-black text-amber-500">{scholarships.filter(s => s.featured).length}</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 block">Managed Grant Budget</span>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400">₹42.5 Cr</div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-blue-600" /> Scholarship Distribution by Type
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CRUD Table */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Scholarship Directory Table</h3>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search table..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase font-bold text-[10px]">
                <th className="py-3 px-2">Title</th>
                <th className="py-3 px-2">Provider</th>
                <th className="py-3 px-2">Type</th>
                <th className="py-3 px-2">Amount</th>
                <th className="py-3 px-2">Deadline</th>
                <th className="py-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {filtered.map((s) => (
                <tr key={s.scholarshipID} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 px-2 font-bold text-slate-900 dark:text-white max-w-xs truncate">{s.title}</td>
                  <td className="py-3 px-2 text-slate-600 dark:text-slate-300 max-w-xs truncate">{s.provider}</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 font-bold">
                      {s.type}
                    </span>
                  </td>
                  <td className="py-3 px-2 font-bold text-emerald-600 dark:text-emerald-400">{s.amountText}</td>
                  <td className="py-3 px-2 text-slate-500">{s.deadline}</td>
                  <td className="py-3 px-2 text-right space-x-2">
                    <button
                      onClick={() => handleOpenEdit(s)}
                      className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                      title="Edit"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${s.title}"?`)) {
                          deleteScholarship(s.scholarshipID);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 space-y-4 my-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {editingItem ? 'Edit Scholarship' : 'Add New Scholarship'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="p-1.5 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Provider</label>
                  <input
                    type="text"
                    required
                    value={formData.provider}
                    onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="International">International</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Amount Text</label>
                  <input
                    type="text"
                    required
                    value={formData.amountText}
                    onChange={(e) => setFormData({ ...formData, amountText: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Deadline Date</label>
                  <input
                    type="date"
                    required
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Eligibility Overview</label>
                <textarea
                  rows={2}
                  value={formData.eligibility}
                  onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                  className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md"
                >
                  Save Scholarship
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
