export type EducationLevel = 
  | 'Class 10'
  | 'Class 12'
  | 'Diploma'
  | 'Undergraduate'
  | 'Postgraduate'
  | 'Doctorate'
  | 'ITI'
  | 'All Education Levels';

export type CourseType = 
  | 'Engineering'
  | 'Medical'
  | 'MBA'
  | 'Law'
  | 'Arts & Humanities'
  | 'Science'
  | 'Commerce'
  | 'Diploma/ITI'
  | 'General';

export type CategoryType = 
  | 'General'
  | 'SC'
  | 'ST'
  | 'OBC'
  | 'VJNT'
  | 'SBC'
  | 'EWS'
  | 'Minority'
  | 'Girls'
  | 'Disability'
  | 'All Categories';

export type ScholarshipType = 'Government' | 'State' | 'Private' | 'International';

export interface ScholarshipFAQ {
  question: string;
  answer: string;
}

export interface AllowanceTier {
  locationCategory: string;
  foodAllowance: number;
  residenceAllowance: number;
  subsistenceAllowance: number;
  totalAmount: number;
}

export interface FeeReimbursementRow {
  incomeSlab: string;
  studentGroup: string;
  governmentInst: string;
  nonGovtAided: string;
  partiallyAidedUnaided: string;
  permanentUnaided: string;
  examFeeWaiver: string;
}

export interface Scholarship {
  scholarshipID: string;
  title: string;
  description: string;
  provider: string;
  amount: number;
  amountText: string;
  deadline: string; // YYYY-MM-DD
  eligibility: string;
  educationLevel: EducationLevel;
  course: CourseType;
  state: string;
  incomeLimit: number; // In INR, e.g. 300000 = 3 Lakh
  category: CategoryType[];
  gender: 'Male' | 'Female' | 'All';
  officialLink: string;
  documents: string[];
  featured: boolean;
  type: ScholarshipType;
  bannerImage: string;
  benefits: string[];
  applicationProcess: string[];
  faqs?: ScholarshipFAQ[];
  closingSoon?: boolean;
  totalApplications?: number;
  createdAt: string;
  allowanceTable?: AllowanceTier[];
  feeReimbursementTable?: FeeReimbursementRow[];
  eligibilityRulesList?: string[];
  grReferences?: string[];
}

export interface UserProfile {
  userID: string;
  name: string;
  email: string;
  phone: string;
  role: 'student' | 'admin';
  education: EducationLevel;
  course?: CourseType;
  state: string;
  income: string; // e.g. "< 1.5 Lakh", "< 3 Lakh", "< 8 Lakh", "> 8 Lakh"
  incomeNum: number;
  category: CategoryType;
  gender: 'Male' | 'Female' | 'Other';
  disabilityStatus: boolean;
  minority: boolean;
  savedScholarships: string[]; // array of scholarshipIDs
  appliedScholarships?: string[];
  viewedScholarships?: string[];
  avatar?: string;
  createdAt: string;
}

export interface ScholarshipFilter {
  searchQuery: string;
  educationLevel: string;
  course: string;
  category: string;
  type: string;
  state: string;
  maxIncome: number;
  minAmount: number;
  sortBy: 'newest' | 'highest_amount' | 'ending_soon';
}

export interface ScholarshipApplication {
  applicationID: string;
  userID: string;
  scholarshipID: string;
  scholarshipTitle: string;
  provider: string;
  amountText: string;
  status: 'Submitted' | 'Under Review' | 'Shortlisted' | 'Accepted' | 'Rejected';
  appliedAt: string;
  updatedAt: string;
  documentsUploaded?: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'info' | 'alert' | 'success';
}

export interface SuccessStory {
  id: string;
  name: string;
  photo: string;
  college: string;
  scholarshipName: string;
  amountAwarded: string;
  quote: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  source: string;
  link: string;
  imageUrl: string;
}

export interface AIMatchResult {
  scholarshipID: string;
  matchScore: number; // 0 - 100
  reason: string;
  eligibilityBreakdown: {
    incomeMatch: boolean;
    educationMatch: boolean;
    categoryMatch: boolean;
    stateMatch: boolean;
  };
}

export interface ResumeCheckResult {
  overallScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  recommendedScholarships: string[];
}
