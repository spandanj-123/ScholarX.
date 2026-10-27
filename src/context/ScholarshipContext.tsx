import React, { createContext, useContext, useState, useEffect } from 'react';
import { Scholarship, ScholarshipFilter, ScholarshipApplication, NotificationItem } from '../types/scholarship';
import { INITIAL_SCHOLARSHIPS } from '../data/mockScholarships';

interface ScholarshipContextType {
  scholarships: Scholarship[];
  filteredScholarships: Scholarship[];
  filters: ScholarshipFilter;
  setFilters: React.Dispatch<React.SetStateAction<ScholarshipFilter>>;
  resetFilters: () => void;
  
  // Compare Feature
  compareList: Scholarship[];
  addToCompare: (scholarship: Scholarship) => boolean;
  removeFromCompare: (scholarshipID: string) => void;
  clearCompare: () => void;

  // Recently Viewed
  recentlyViewed: Scholarship[];
  addToRecentlyViewed: (scholarship: Scholarship) => void;

  // Applications
  applications: ScholarshipApplication[];
  applyForScholarship: (scholarshipID: string, scholarshipTitle: string, provider: string, amountText: string) => boolean;

  // Admin CRUD
  addScholarship: (newScholarship: Omit<Scholarship, 'scholarshipID' | 'createdAt'>) => void;
  updateScholarship: (id: string, updated: Partial<Scholarship>) => void;
  deleteScholarship: (id: string) => void;

  // App UI state
  darkMode: boolean;
  toggleDarkMode: () => void;
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
}

const DEFAULT_FILTERS: ScholarshipFilter = {
  searchQuery: '',
  educationLevel: 'All Education Levels',
  course: 'All',
  category: 'All Categories',
  type: 'All',
  state: 'All States',
  maxIncome: 1500000,
  minAmount: 0,
  sortBy: 'newest'
};

const INITIAL_APPLICATIONS: ScholarshipApplication[] = [
  {
    applicationID: 'app-101',
    userID: 'user-demo-123',
    scholarshipID: 'sch-2',
    scholarshipTitle: 'HDFC Bank Parivartan Educational Crisis Support Scholarship',
    provider: 'HDFC Bank Parivartan Foundation',
    amountText: 'Up to ₹75,000 per year',
    status: 'Under Review',
    appliedAt: '2026-02-28',
    updatedAt: '2026-03-05'
  }
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Deadline Approaching',
    message: 'HDFC Parivartan Scholarship closes in 15 days. Complete your application now!',
    date: '2 Hours ago',
    read: false,
    type: 'alert'
  },
  {
    id: 'notif-2',
    title: 'Application Status Update',
    message: 'Your application for HDFC Bank Parivartan Scholarship is currently Under Review by the CSR Selection Committee.',
    date: '1 Day ago',
    read: false,
    type: 'info'
  },
  {
    id: 'notif-3',
    title: 'New Matched Scholarship',
    message: '3 new engineering scholarships matching your profile were added today.',
    date: '2 Days ago',
    read: true,
    type: 'success'
  }
];

const ScholarshipContext = createContext<ScholarshipContextType | undefined>(undefined);

export const ScholarshipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scholarships, setScholarships] = useState<Scholarship[]>(() => {
    return INITIAL_SCHOLARSHIPS;
  });

  const [filters, setFilters] = useState<ScholarshipFilter>(DEFAULT_FILTERS);
  const [compareList, setCompareList] = useState<Scholarship[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Scholarship[]>([]);
  const [applications, setApplications] = useState<ScholarshipApplication[]>(() => {
    const saved = localStorage.getItem('scholarhub_applications');
    return saved ? JSON.parse(saved) : INITIAL_APPLICATIONS;
  });
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('scholarhub_darkmode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('scholarhub_scholarships', JSON.stringify(scholarships));
  }, [scholarships]);

  useEffect(() => {
    localStorage.setItem('scholarhub_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('scholarhub_darkmode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  // Compare functions
  const addToCompare = (scholarship: Scholarship): boolean => {
    if (compareList.find(s => s.scholarshipID === scholarship.scholarshipID)) {
      return false;
    }
    if (compareList.length >= 3) {
      alert("You can compare up to 3 scholarships at a time.");
      return false;
    }
    setCompareList(prev => [...prev, scholarship]);
    return true;
  };

  const removeFromCompare = (scholarshipID: string) => {
    setCompareList(prev => prev.filter(s => s.scholarshipID !== scholarshipID));
  };

  const clearCompare = () => setCompareList([]);

  // Recently Viewed
  const addToRecentlyViewed = (scholarship: Scholarship) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(s => s.scholarshipID !== scholarship.scholarshipID);
      return [scholarship, ...filtered].slice(0, 8);
    });
  };

  // Applications
  const applyForScholarship = (scholarshipID: string, scholarshipTitle: string, provider: string, amountText: string): boolean => {
    if (applications.some(a => a.scholarshipID === scholarshipID)) {
      return false; // Already applied
    }
    const newApp: ScholarshipApplication = {
      applicationID: 'app-' + Date.now(),
      userID: 'user-demo-123',
      scholarshipID,
      scholarshipTitle,
      provider,
      amountText,
      status: 'Submitted',
      appliedAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setApplications(prev => [newApp, ...prev]);

    // Add notification
    setNotifications(prev => [
      {
        id: 'notif-' + Date.now(),
        title: 'Application Submitted',
        message: `Your application for "${scholarshipTitle}" was submitted successfully.`,
        date: 'Just now',
        read: false,
        type: 'success'
      },
      ...prev
    ]);
    return true;
  };

  // Admin CRUD
  const addScholarship = (newItem: Omit<Scholarship, 'scholarshipID' | 'createdAt'>) => {
    const fullItem: Scholarship = {
      ...newItem,
      scholarshipID: 'sch-' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setScholarships(prev => [fullItem, ...prev]);
  };

  const updateScholarship = (id: string, updated: Partial<Scholarship>) => {
    setScholarships(prev => prev.map(s => s.scholarshipID === id ? { ...s, ...updated } : s));
  };

  const deleteScholarship = (id: string) => {
    setScholarships(prev => prev.filter(s => s.scholarshipID !== id));
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // Filtered scholarships calculation
  const filteredScholarships = scholarships.filter(s => {
    // Search query match
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchesTitle = s.title.toLowerCase().includes(q);
      const matchesProvider = s.provider.toLowerCase().includes(q);
      const matchesCourse = s.course.toLowerCase().includes(q);
      const matchesState = s.state.toLowerCase().includes(q);
      if (!matchesTitle && !matchesProvider && !matchesCourse && !matchesState) return false;
    }

    // Education Level
    if (filters.educationLevel !== 'All Education Levels' && filters.educationLevel !== 'All') {
      if (s.educationLevel !== filters.educationLevel) return false;
    }

    // Course
    if (filters.course !== 'All' && filters.course !== 'All Courses') {
      if (s.course !== filters.course && s.course !== 'General') return false;
    }

    // Category
    if (filters.category !== 'All Categories' && filters.category !== 'All') {
      if (!s.category.includes(filters.category as any) && !s.category.includes('All Categories')) return false;
    }

    // Scholarship Type
    if (filters.type !== 'All') {
      if (filters.type === 'Government') {
        if (s.type !== 'Government' && s.type !== 'State') return false;
      } else if (s.type !== filters.type) {
        return false;
      }
    }

    // Domicile / State
    if (filters.state !== 'All States' && filters.state !== 'All') {
      if (s.state !== filters.state && s.state !== 'All States' && s.state !== 'International') return false;
    }

    // Income
    if (filters.maxIncome && s.incomeLimit > filters.maxIncome) return false;

    // Minimum Amount
    if (filters.minAmount && s.amount < filters.minAmount) return false;

    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'highest_amount') {
      return b.amount - a.amount;
    }
    if (filters.sortBy === 'ending_soon') {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    // Default newest
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <ScholarshipContext.Provider
      value={{
        scholarships,
        filteredScholarships,
        filters,
        setFilters,
        resetFilters,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        recentlyViewed,
        addToRecentlyViewed,
        applications,
        applyForScholarship,
        addScholarship,
        updateScholarship,
        deleteScholarship,
        darkMode,
        toggleDarkMode,
        notifications,
        markNotificationRead
      }}
    >
      {children}
    </ScholarshipContext.Provider>
  );
};

export const useScholarships = () => {
  const context = useContext(ScholarshipContext);
  if (!context) throw new Error('useScholarships must be used within ScholarshipProvider');
  return context;
};
