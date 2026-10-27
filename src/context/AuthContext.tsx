import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, EducationLevel, CategoryType, CourseType } from '../types/scholarship';
import { auth, googleProvider } from '../services/firebase';
import { signInWithPopup, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<boolean>;
  registerStudent: (details: Partial<UserProfile>) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (details: Partial<UserProfile>) => void;
  toggleSavedScholarship: (scholarshipID: string) => void;
  switchRole: (role: 'student' | 'admin') => void;
}

const DEFAULT_DEMO_USER: UserProfile = {
  userID: 'user-demo-123',
  name: 'Aarav Sharma',
  email: 'aarav.sharma@example.com',
  phone: '+91 98765 43210',
  role: 'student',
  education: 'Undergraduate',
  course: 'Engineering',
  state: 'Maharashtra',
  income: '< 3 Lakh',
  incomeNum: 280000,
  category: 'OBC',
  gender: 'Male',
  disabilityStatus: false,
  minority: false,
  savedScholarships: ['sch-1', 'sch-3', 'sch-7'],
  appliedScholarships: ['sch-1'],
  viewedScholarships: ['sch-1', 'sch-2', 'sch-3'],
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  createdAt: '2026-03-01'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('scholarhub_user');
    return saved ? JSON.parse(saved) : DEFAULT_DEMO_USER;
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('scholarhub_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('scholarhub_user');
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        // Hydrate from Firebase user
        setUser((prev) => ({
          userID: fbUser.uid,
          name: fbUser.displayName || prev?.name || 'Student Scholar',
          email: fbUser.email || prev?.email || 'user@example.com',
          phone: fbUser.phoneNumber || prev?.phone || '+91 98765 43210',
          role: fbUser.email === 'devjjj087@gmail.com' ? 'admin' : (prev?.role || 'student'),
          education: prev?.education || 'Undergraduate',
          course: prev?.course || 'Engineering',
          state: prev?.state || 'Maharashtra',
          income: prev?.income || '< 3 Lakh',
          incomeNum: prev?.incomeNum || 280000,
          category: prev?.category || 'OBC',
          gender: prev?.gender || 'Male',
          disabilityStatus: prev?.disabilityStatus || false,
          minority: prev?.minority || false,
          savedScholarships: prev?.savedScholarships || ['sch-1', 'sch-3'],
          appliedScholarships: prev?.appliedScholarships || ['sch-1'],
          viewedScholarships: prev?.viewedScholarships || [],
          avatar: fbUser.photoURL || prev?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
          createdAt: prev?.createdAt || new Date().toISOString()
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.warn("Google sign in popup closed or pending. Using quick demo login.");
      setUser(DEFAULT_DEMO_USER);
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email: string, _pass: string): Promise<boolean> => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const isAdminEmail = email.toLowerCase().includes('admin') || email === 'devjjj087@gmail.com';
    setUser({
      ...DEFAULT_DEMO_USER,
      email,
      name: email.split('@')[0].toUpperCase(),
      role: isAdminEmail ? 'admin' : 'student'
    });
    setLoading(false);
    return true;
  };

  const registerStudent = async (details: Partial<UserProfile>): Promise<boolean> => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const newUser: UserProfile = {
      userID: 'usr-' + Date.now(),
      name: details.name || 'New Student',
      email: details.email || 'student@example.com',
      phone: details.phone || '',
      role: 'student',
      education: (details.education as EducationLevel) || 'Undergraduate',
      course: (details.course as CourseType) || 'Engineering',
      state: details.state || 'Maharashtra',
      income: details.income || '< 3 Lakh',
      incomeNum: details.incomeNum || 250000,
      category: (details.category as CategoryType) || 'OBC',
      gender: details.gender || 'Male',
      disabilityStatus: details.disabilityStatus || false,
      minority: details.minority || false,
      savedScholarships: [],
      appliedScholarships: [],
      viewedScholarships: [],
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    setLoading(false);
    return true;
  };

  const logout = async () => {
    try {
      await fbSignOut(auth);
    } catch (e) {
      // ignore
    }
    setUser(null);
  };

  const updateProfile = (details: Partial<UserProfile>) => {
    if (!user) return;
    setUser({ ...user, ...details });
  };

  const toggleSavedScholarship = (scholarshipID: string) => {
    if (!user) return;
    const isSaved = user.savedScholarships.includes(scholarshipID);
    const updated = isSaved
      ? user.savedScholarships.filter((id) => id !== scholarshipID)
      : [...user.savedScholarships, scholarshipID];
    setUser({ ...user, savedScholarships: updated });
  };

  const switchRole = (role: 'student' | 'admin') => {
    if (!user) return;
    setUser({ ...user, role });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        loading,
        loginWithGoogle,
        loginWithEmail,
        registerStudent,
        logout,
        updateProfile,
        toggleSavedScholarship,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
