import React, { useState } from 'react';
import { Home, Utensils, MapPin, Sparkles, Building2, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TierInfo {
  name: string;
  categoryTitle: string;
  examples: string[];
  food: number;
  residence: number;
  subsistence: number;
  total: number;
}

const TIERS: TierInfo[] = [
  {
    name: 'tier1',
    categoryTitle: 'Tier 1: Mega Metropolitan Areas',
    examples: ['Mumbai MMR', 'Pune City', 'Nagpur', 'Thane', 'Navi Mumbai', 'Pimpri-Chinchwad'],
    food: 32000,
    residence: 20000,
    subsistence: 8000,
    total: 60000
  },
  {
    name: 'tier2',
    categoryTitle: 'Tier 2: Divisional Cities / C-Class Municipalities',
    examples: ['Nashik', 'Chhatrapati Sambhajinagar (Aurangabad)', 'Amravati', 'Kolhapur', 'Solapur', 'Nanded'],
    food: 28000,
    residence: 15000,
    subsistence: 8000,
    total: 51000
  },
  {
    name: 'tier3',
    categoryTitle: 'Tier 3: Other District Headquarters',
    examples: ['Jalgaon', 'Satara', 'Sangli', 'Latur', 'Dhule', 'Chandrapur', 'Akola', 'Ratnagiri', 'Ahmednagar'],
    food: 25000,
    residence: 12000,
    subsistence: 6000,
    total: 43000
  },
  {
    name: 'tier4',
    categoryTitle: 'Tier 4: Taluka Headquarters & Rural Areas',
    examples: ['Baramati', 'Karad', 'Sangamner', 'Panvel Taluka', 'All other Taluka places in Maharashtra'],
    food: 23000,
    residence: 10000,
    subsistence: 5000,
    total: 38000
  }
];

export const HostelAllowanceCalculator: React.FC = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [durationMonths, setDurationMonths] = useState(10); // standard academic year is 10 months

  const activeTier = TIERS[selectedTierIndex];
  const monthlyFood = Math.round(activeTier.food / 10);
  const monthlyResidence = Math.round(activeTier.residence / 10);
  const monthlySubsistence = Math.round(activeTier.subsistence / 10);
  const monthlyTotal = monthlyFood + monthlyResidence + monthlySubsistence;

  return (
    <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5" /> Hostel Allowance Simulator
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Dr. Panjabrao Deshmukh Hostel Allowance Matrix
          </h3>
        </div>
        <span className="text-xs text-slate-300 max-w-xs">
          Calculate hostel, meal, and subsistence maintenance allowances across cities in Maharashtra.
        </span>
      </div>

      {/* Tier Selector Tabs */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
          Select Your Higher Education Institute Location:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TIERS.map((tier, idx) => (
            <button
              key={tier.name}
              type="button"
              onClick={() => setSelectedTierIndex(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all border ${
                selectedTierIndex === idx
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-300'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs mb-1">
                <span>Tier {idx + 1}</span>
                <span className="text-[11px] font-black opacity-90">₹{tier.total.toLocaleString('en-IN')}/yr</span>
              </div>
              <p className="text-[11px] text-slate-300 line-clamp-1 font-medium">{tier.categoryTitle.split(':')[1]}</p>
              <p className="text-[10px] text-slate-400 mt-1 truncate">{tier.examples.join(', ')}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Breakdown Cards with Motion */}
      <motion.div 
        key={activeTier.name}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">{activeTier.categoryTitle}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activeTier.examples.map((ex, i) => (
              <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                {ex}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Pillars Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Food Allowance */}
          <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <Utensils className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Food Allowance</span>
            </div>
            <div className="text-2xl font-black text-white">
              ₹{activeTier.food.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-slate-400">≈ ₹{monthlyFood.toLocaleString('en-IN')}/month for 10 months mess expenses</p>
          </div>

          {/* Residence Allowance */}
          <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-teal-400">
              <Building2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Residence Allowance</span>
            </div>
            <div className="text-2xl font-black text-white">
              ₹{activeTier.residence.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-slate-400">≈ ₹{monthlyResidence.toLocaleString('en-IN')}/month for hostel / PG room rent</p>
          </div>

          {/* Subsistence Allowance */}
          <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Subsistence / Misc</span>
            </div>
            <div className="text-2xl font-black text-white">
              ₹{activeTier.subsistence.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-slate-400">≈ ₹{monthlySubsistence.toLocaleString('en-IN')}/month for books, travel & living</p>
          </div>

        </div>

        {/* Total Grand Allowance Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-bold text-emerald-100 uppercase tracking-widest block">
              Total Annual Grant Credited Directly to Student Bank Account
            </span>
            <div className="text-3xl font-black">
              ₹{activeTier.total.toLocaleString('en-IN')} / Academic Year
            </div>
          </div>

          <div className="text-right sm:border-l border-white/20 sm:pl-6">
            <span className="text-xs font-semibold text-emerald-100 block">Monthly Equivalent</span>
            <span className="text-xl font-extrabold text-white">₹{monthlyTotal.toLocaleString('en-IN')} / mo</span>
          </div>
        </div>

      </motion.div>

    </div>
  );
};
