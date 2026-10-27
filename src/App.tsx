import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ScholarshipProvider } from './context/ScholarshipContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';
import { FloatingCompareBar } from './components/FloatingCompareBar';
import { AmbientBackground } from './components/AmbientBackground';

import { HomePage } from './pages/HomePage';
import { ScholarshipListingPage } from './pages/ScholarshipListingPage';
import { ScholarshipDetailPage } from './pages/ScholarshipDetailPage';
import { AIFinderPage } from './pages/AIFinderPage';
import { ResumeCheckerPage } from './pages/ResumeCheckerPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AdminPanelPage } from './pages/AdminPanelPage';

export function App() {
  return (
    <AuthProvider>
      <ScholarshipProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-200 selection:bg-blue-500 selection:text-white relative">
            
            {/* Ambient Background Grid & Glow Engine */}
            <AmbientBackground />
            
            {/* Global Navbar */}
            <Navbar />

            {/* Main Application Body */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scholarships" element={<ScholarshipListingPage />} />
                <Route path="/scholarships/:scholarshipID" element={<ScholarshipDetailPage />} />
                <Route path="/ai-finder" element={<AIFinderPage />} />
                <Route path="/resume-checker" element={<ResumeCheckerPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin" element={<AdminPanelPage />} />
              </Routes>
            </main>

            {/* ScholarBot AI Assistant */}
            <AIChatbot />

            {/* Floating Compare Bottom Dock */}
            <FloatingCompareBar />

            {/* Global Footer */}
            <Footer />

          </div>
        </Router>
      </ScholarshipProvider>
    </AuthProvider>
  );
}

export default App;
