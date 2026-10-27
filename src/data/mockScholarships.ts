import { Scholarship, SuccessStory, NewsArticle } from '../types/scholarship';
import { privateUGScholarships } from './privateScholarshipsUG';
import { maharashtraScholarshipsUG } from './maharashtraScholarshipsUG';

export const INITIAL_SCHOLARSHIPS: Scholarship[] = [
  {
    scholarshipID: 'mahadbt-1',
    title: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)',
    description: 'Provide financial assistance to the Economic Backward Class (EBC) who are admitted to Diploma / Degree / Postgraduate Professional courses through Centralized Admission Process (CAP).',
    provider: 'Directorate of Technical Education (DTE), Govt of Maharashtra',
    amount: 100000,
    amountText: 'Up to 100% Tuition Fee & 100% Exam Fee Reimbursement',
    deadline: '2026-11-30',
    eligibility: 'Economic Backward Class (EBC) students admitted via CAP to Diploma, Degree & Postgraduate Professional courses. Family income up to ₹8 Lakhs.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 800000,
    category: ['General', 'EWS'],
    gender: 'All',
    officialLink: 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA86467549C6E0CFFDFD61E992C8610ED352EC9DEF886C9CD',
    documents: [
      'Mark sheet of 10th (S.S.C) & onwards.',
      'Domicile Certificate of Maharashtra State.',
      'Register Labor Certificate / Alpabhudharak (Marginal Land Holder) Certificate. (In case of not a child of Alpabhudharak or Registered Labour, then a Family Annual Income Certificate is required).',
      'Undertaking stating "In current year, not more than 2 beneficiaries from the family".',
      'CAP-related document.',
      'Hosteller documents (In case of private hostel or Paying Guest, an agreement with the owner will be required).'
    ],
    eligibilityRulesList: [
      'Applicant should have Nationality of India.',
      'Candidate should be Domicile of Maharashtra State.',
      'Applicant should be "Bonafide Student of Institute" and admitted for Professional and Technical course (Graduation / Post Graduation Degree) as mentioned in GR.',
      'Deemed University and Private university is not applicable.',
      'Candidate should be admitted through Centralized Admission Process (CAP).',
      'Applicant should not avail any other scholarship/stipend.',
      'For current Academic Year, Only 2 child from family are allowed for benefit of scheme.',
      'The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.',
      'Minimum 50 % attendance in previous semester (Exception for fresh admitted in College).',
      'During course duration, candidate should not have a gap of 2 years.',
      'Candidates are eligible those who have taken an admission under general category.',
      'Applicant should attempt every semester or annual exam.'
    ],
    grReferences: [
      'GR Dated 01st March 2018',
      'GR Dated 07th October 2017'
    ],
    feeReimbursementTable: [
      {
        incomeSlab: 'Up to Rs. 2.50 Lakh',
        studentGroup: 'Girl with professional course',
        governmentInst: '100%',
        nonGovtAided: '100%',
        partiallyAidedUnaided: '100%',
        permanentUnaided: '100%',
        examFeeWaiver: '100%'
      },
      {
        incomeSlab: 'Up to Rs. 2.50 Lakh',
        studentGroup: 'Boy',
        governmentInst: '100%',
        nonGovtAided: '100%',
        partiallyAidedUnaided: '50%',
        permanentUnaided: '50%',
        examFeeWaiver: '50%'
      },
      {
        incomeSlab: 'Rs. 2.50 Lakh to Rs. 8 Lakh',
        studentGroup: 'Girl with professional course',
        governmentInst: '100%',
        nonGovtAided: '100%',
        partiallyAidedUnaided: '100%',
        permanentUnaided: '100%',
        examFeeWaiver: '100%'
      },
      {
        incomeSlab: 'Rs. 2.50 Lakh to Rs. 8 Lakh',
        studentGroup: 'Boy',
        governmentInst: '50%',
        nonGovtAided: '50%',
        partiallyAidedUnaided: '50%',
        permanentUnaided: '50%',
        examFeeWaiver: '50%'
      }
    ],
    featured: true,
    type: 'Government',
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Tuition Fee Reimbursement: 50% to 100% based on income slab, gender, and institution type (Govt, Aided, Unaided, Permanent Unaided).',
      'Exam Fee Waiver: 100% waiver for Girl students and 50% waiver for Boy students (Income up to ₹8 Lakhs).',
      'Girl Students pursuing professional courses receive 100% tuition fee waiver across all Government and Unaided institutes.'
    ],
    applicationProcess: [
      'Register on MahaDBT Portal (mahadbt.maharashtra.gov.in)',
      'Complete 6 profile sections (Personal, Address, Qualification, Income, etc.)',
      'Select Directorate of Technical Education (DTE)',
      'Choose Rajarshi Chhatrapati Shahu Maharaj EBC Scheme and attach required documents',
      'Submit family undertaking (max 2 children) and track college desk approval'
    ],
    closingSoon: false,
    totalApplications: 42100,
    createdAt: '2026-02-01',
    faqs: [
      { question: 'Is CAP Allotment Letter compulsory?', answer: 'Yes, students admitted under Management quota or Non-CAP seats are not eligible for EBC.' }
    ]
  },
  {
    scholarshipID: 'mahadbt-2',
    title: 'Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna (Hostel Allowance)',
    description: 'Hostel maintenance allowance for children of small/marginal farmers or registered construction workers pursuing technical/professional diploma, degree, or post-graduation courses.',
    provider: 'Directorate of Technical Education (DTE), Govt of Maharashtra',
    amount: 60000,
    amountText: 'Up to ₹60,000 Annual Food, Residence & Maintenance Allowance',
    deadline: '2026-11-30',
    eligibility: 'Domicile of Maharashtra State admitted through CAP in Professional/Technical courses with family income up to ₹8 Lakhs and enrolled in a hostel or registered PG/rental accommodation.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 800000,
    category: ['General', 'EWS', 'OBC', 'VJNT', 'SBC'],
    gender: 'All',
    officialLink: 'https://www.mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3D30C2CB15631E4E31F4E2AFF5E4258B33E89887D583052E',
    documents: [
      'Mark sheet of 10th (S.S.C) & onwards.',
      'Domicile Certificate of Maharashtra State.',
      'Register Labor Certificate / Alpabhudharak (Marginal Land Holder) Certificate. (In case of not a child of Alpabhudharak or Registered Labour, then a Family Annual Income Certificate is required).',
      'Undertaking stating "In current year, not more than 2 beneficiaries from the family".',
      'CAP-related document.',
      'Hosteller documents (In case of private hostel or Paying Guest, an agreement with the owner will be required).'
    ],
    eligibilityRulesList: [
      'Applicant should have Nationality of India.',
      'Candidate should be Domicile of Maharashtra State.',
      'Applicant should be "Bonafide Student of Institute" and admitted for Professional and Technical courses (Diploma / Graduation / Post Graduation Degree) as mentioned in GR.',
      'Deemed University and Private university are not applicable.',
      'Candidate should be admitted through Centralized Admission Process (CAP).',
      'For current Academic Year, only 2 children from the family are allowed for the benefit of the scheme.',
      'The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.',
      'Minimum 50% attendance in the previous semester (Exception for freshly admitted students in College).',
      'During the course duration, the candidate should not have a gap of 2 or more years.',
      'Candidates are eligible if they have taken admission under the General category and SEBC Category.'
    ],
    grReferences: [
      'GR Dated 07th Oct 2017',
      'GR Dated 22nd Feb 2018',
      'GR Dated 01st March 2018',
      'GR Dated 18th June 2018',
      'GR Dated 11th July 2019'
    ],
    allowanceTable: [
      {
        locationCategory: 'Students pursuing higher education in cities including Mumbai city, Mumbai suburbs, Navi Mumbai, Thane, Pune, Pimpri Chinchwad and Nagpur',
        foodAllowance: 32000,
        residenceAllowance: 20000,
        subsistenceAllowance: 8000,
        totalAmount: 60000
      },
      {
        locationCategory: 'Students pursuing higher education in other revenue divisional cities and remaining C class municipal areas',
        foodAllowance: 28000,
        residenceAllowance: 15000,
        subsistenceAllowance: 8000,
        totalAmount: 51000
      },
      {
        locationCategory: 'Students pursuing higher education in other districts',
        foodAllowance: 25000,
        residenceAllowance: 12000,
        subsistenceAllowance: 6000,
        totalAmount: 43000
      },
      {
        locationCategory: 'Students pursuing higher education in Talukas',
        foodAllowance: 23000,
        residenceAllowance: 10000,
        subsistenceAllowance: 5000,
        totalAmount: 38000
      }
    ],
    featured: true,
    type: 'Government',
    bannerImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Mumbai, Pune, Thane, Navi Mumbai, Pimpri Chinchwad & Nagpur: Total ₹60,000 (Food ₹32,000 + Residence ₹20,000 + Subsistence ₹8,000)',
      'Other Revenue Divisional Cities & C-Class Municipal Areas: Total ₹51,000 (Food ₹28,000 + Residence ₹15,000 + Subsistence ₹8,000)',
      'Other Districts: Total ₹43,000 (Food ₹25,000 + Residence ₹12,000 + Subsistence ₹6,000)',
      'Talukas: Total ₹38,000 (Food ₹23,000 + Residence ₹10,000 + Subsistence ₹5,000)'
    ],
    applicationProcess: [
      'Log into MahaDBT portal (mahadbt.maharashtra.gov.in)',
      'Navigate to Directorate of Technical Education (DTE)',
      'Select Dr. Punjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna',
      'Upload 10th mark sheet, Domicile, CAP letter, Farmer/Laborer/Income certificate & Hostel rent agreement',
      'Submit family undertaking (max 2 children rule) and forward to college nodal desk'
    ],
    closingSoon: false,
    totalApplications: 24800,
    createdAt: '2026-02-05'
  },
  {
    scholarshipID: 'mahadbt-3',
    title: 'Post-Matric Scholarship & Fee Reimbursement for OBC/VJNT/SBC',
    description: 'Full/partial tuition and exam fee waiver along with maintenance stipend for OBC, VJNT, and SBC students pursuing engineering degrees.',
    provider: 'VJNT, OBC and SBC Welfare Department, Govt of Maharashtra',
    amount: 100000,
    amountText: '100% Fee Waiver (Income <= 1.5L) / 50%-100% Freeship (1.5L-8L)',
    deadline: '2026-11-30',
    eligibility: 'OBC, VJNT, or SBC category students pursuing B.E./B.Tech via CAP admission. Income <= ₹1.5L for Scholarship, up to ₹8L for Freeship.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 800000,
    category: ['OBC', 'VJNT', 'SBC'],
    gender: 'All',
    officialLink: 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB02E984835E89FEFDB316E301CE6A991F41C5D42B01A7D7E',
    documents: [
      'Aadhaar Card (Bank linked)',
      'Maharashtra Domicile Certificate',
      'Income Certificate (Tahsildar)',
      'Caste Certificate & Caste Validity Certificate',
      'CAP Allotment Letter',
      'Marksheets (10th, 12th, Semesters)',
      'College Fee Receipt & Bonafide Certificate'
    ],
    featured: true,
    type: 'Government',
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '100% tuition and exam fee waiver for income <= ₹1.5 Lakhs',
      '50% to 100% tuition fee waiver for income ₹1.5 Lakhs to ₹8 Lakhs',
      'Monthly maintenance allowance for hostellers and day scholars'
    ],
    applicationProcess: [
      'Register on MahaDBT portal with Aadhaar',
      'Select VJNT, OBC and SBC Welfare Department',
      'Select Post-Matric Scholarship or Tuition Fee Freeship Scheme',
      'Upload caste validity and income documents',
      'Submit application'
    ],
    closingSoon: false,
    totalApplications: 35600,
    createdAt: '2026-02-08'
  },
  {
    scholarshipID: 'mahadbt-4',
    title: 'Government of India Post-Matric Scholarship / Freeship for SC Students',
    description: '100% tuition fee waiver and maintenance allowance for Scheduled Caste (SC) and Navbouddha students in engineering colleges.',
    provider: 'Social Justice and Special Assistance Department, Govt of Maharashtra',
    amount: 120000,
    amountText: '100% Full Fee Waiver + Monthly Maintenance Allowance',
    deadline: '2026-11-30',
    eligibility: 'SC / Navbouddha students pursuing engineering. Scholarship for family income <= ₹2.50 Lakhs; Freeship for income > ₹2.50 Lakhs.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 1200000,
    category: ['SC'],
    gender: 'All',
    officialLink: 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ACE99921E698B1EE85995B38445F14746E1B0DD7E66FFF88B',
    documents: [
      'Aadhaar Card (Aadhaar Seeded)',
      'Maharashtra Domicile Certificate',
      'Income Certificate (Tahsildar)',
      'SC Caste Certificate & Caste Validity Certificate',
      'CAP Allotment Letter',
      '10th, 12th / Diploma Marksheets',
      'Hostel Certificate (if applicable)'
    ],
    featured: true,
    type: 'Government',
    bannerImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '100% College Tuition & Exam Fee reimbursement',
      'Monthly maintenance allowance up to ₹1,200/month',
      'Book bank and study material allowances'
    ],
    applicationProcess: [
      'Login on MahaDBT Portal',
      'Select Social Justice Department',
      'Choose SC Post-Matric Scholarship/Freeship Scheme',
      'Upload Caste Validity & Fee Receipt',
      'Submit to College Nodal Officer'
    ],
    closingSoon: false,
    totalApplications: 29800,
    createdAt: '2026-02-10'
  },
  {
    scholarshipID: 'mahadbt-5',
    title: 'Post-Matric Scholarship / Tuition Fee Waiver for ST Students',
    description: 'Comprehensive financial scheme offering 100% tuition fee waiver and living maintenance allowance for Scheduled Tribe (ST) engineering scholars.',
    provider: 'Tribal Development Department, Govt of Maharashtra',
    amount: 110000,
    amountText: '100% Fee Waiver + Living Maintenance Stipend',
    deadline: '2026-11-30',
    eligibility: 'ST category engineering students. Income <= ₹2.50 Lakhs for Scholarship; Income > ₹2.50 Lakhs for Tuition Fee Waiver.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 1000000,
    category: ['ST'],
    gender: 'All',
    officialLink: 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData',
    documents: [
      'Aadhaar Card (Seeded with bank account)',
      'Maharashtra Domicile Certificate',
      'Income Certificate (Tahsildar)',
      'ST Tribe Certificate & Tribe Validity Certificate',
      'CAP Allotment Letter',
      'Previous Academic Marksheets'
    ],
    featured: true,
    type: 'Government',
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Full tuition fee and exam fee coverage',
      'Monthly maintenance stipend',
      'Special tribal project support'
    ],
    applicationProcess: [
      'Log into MahaDBT portal',
      'Select Tribal Development Department',
      'Apply for ST Post-Matric Scheme',
      'Upload Tribe Validity and Income proof'
    ],
    closingSoon: false,
    totalApplications: 14200,
    createdAt: '2026-02-12'
  },
  {
    scholarshipID: 'mahadbt-6',
    title: 'State Minority Scholarship for Higher & Professional Courses',
    description: 'Financial aid grant for meritorious minority students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi, Jew) studying technical engineering courses.',
    provider: 'Minority Development Department, Govt of Maharashtra',
    amount: 50000,
    amountText: 'Up to ₹50,000 per year or Actual Tuition Fee',
    deadline: '2026-11-30',
    eligibility: 'Students belonging to Muslim, Christian, Sikh, Buddhist, Jain, Parsi, or Jewish communities in Maharashtra. Annual family income <= ₹8.00 Lakhs.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 800000,
    category: ['General', 'Minority'],
    gender: 'All',
    officialLink: 'https://mahadbt.maharashtra.gov.in',
    documents: [
      'Aadhaar Card',
      'Maharashtra Domicile Certificate',
      'Income Certificate (Tahsildar)',
      'Minority Community Self-Declaration Certificate',
      'CAP Allotment Letter & College Fee Receipt',
      '10th & 12th Marksheets'
    ],
    featured: true,
    type: 'Government',
    bannerImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Up to ₹50,000 direct annual grant for tuition fee',
      'Direct Bank Transfer into student account'
    ],
    applicationProcess: [
      'Log into MahaDBT portal',
      'Select Minority Development Department',
      'Choose State Minority Scholarship Scheme',
      'Attach Minority declaration and income certificate'
    ],
    closingSoon: false,
    totalApplications: 11900,
    createdAt: '2026-02-14'
  },
  {
    scholarshipID: 'sch-2',
    title: 'HDFC Bank Parivartan Educational Crisis Support Scholarship',
    description: 'Designed to assist students from economically weaker sections undergoing personal or financial crises to continue their school and higher education without interruption.',
    provider: 'HDFC Bank Parivartan Foundation',
    amount: 75000,
    amountText: 'Up to ₹75,000 per year',
    deadline: '2026-11-15',
    eligibility: 'Students from Class 1 to Postgraduate level experiencing financial distress or family crisis with annual family income less than ₹6.0 Lakh.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.hdfcbank.com/csr',
    documents: [
      'Proof of crisis/financial hardship',
      'Income Certificate or Salaried Payslip',
      'Class 10 / 12 Marksheets',
      'School/College ID Card',
      'Bank Account Passbook'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial support covering school/college fees',
      'Mentorship programs by HDFC volunteers',
      'Skill enhancement & career readiness webinars'
    ],
    applicationProcess: [
      'Fill the online application form',
      'Upload genuine proof of educational crisis or income proof',
      'Telephonic interview of shortlisted candidates',
      'Final selection and direct bank transfer'
    ],
    closingSoon: true,
    totalApplications: 8910,
    createdAt: '2026-02-01',
    faqs: [
      { question: 'What counts as a financial crisis?', answer: 'Loss of earning family member, critical illness, job loss, or sudden crop failure.' }
    ]
  },
  {
    scholarshipID: 'sch-4',
    title: 'Tata Capital Pankh Scholarship for Professional Courses',
    description: 'A CSR program supporting meritorious engineering, medical, and law students facing financial challenges in pursuing higher professional education.',
    provider: 'Tata Capital Limited',
    amount: 80000,
    amountText: 'Up to 80% of Tuition Fee or ₹80,000',
    deadline: '2026-11-30',
    eligibility: 'Students pursuing B.Tech, MBBS, LLB, or Integrated Law programs with minimum 60% marks in Class 12. Annual family income <= ₹4 Lakh.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.tatacapital.com',
    documents: [
      'Marksheet of previous qualifying exam',
      'Government ID proof (Aadhaar / Voter ID)',
      'Income Certificate (ITR / Tehsildar certificate)',
      'College Admission Fee receipt'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Up to ₹80,000 direct tuition fee reimbursement',
      'Tata Leadership Mentorship Access',
      'Priority consideration for Tata Capital internship projects'
    ],
    applicationProcess: [
      'Register on ScholarX portal',
      'Fill profile details and upload income & scorecard',
      'Initial document screening',
      'Interview by Tata CSR panel'
    ],
    closingSoon: true,
    totalApplications: 6730,
    createdAt: '2026-02-10'
  },
  {
    scholarshipID: 'sch-5',
    title: 'Commonwealth Master’s Scholarship UK',
    description: 'Fully funded scholarship awarded to high-achieving Indian graduates to pursue full-time 1-year Master’s degrees at top UK universities.',
    provider: 'Commonwealth Scholarship Commission (CSC), UK',
    amount: 2500000,
    amountText: 'Full Tuition Fee + £1,347/month stipend + Airfare',
    deadline: '2026-11-20',
    eligibility: 'Indian citizens holding an upper second-class (2:1) honors degree or equivalent undergraduate score. Must be unable to afford UK study without scholarship.',
    educationLevel: 'Postgraduate',
    course: 'General',
    state: 'International',
    incomeLimit: 1200000,
    category: ['All Categories'],
    gender: 'All',
    officialLink: 'https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/',
    documents: [
      'Official Academic Transcripts',
      'Passport Copy',
      'Two References / LORs',
      'Statement of Purpose & Development Impact Statement',
      'University Offer Letter'
    ],
    featured: true,
    type: 'International',
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Approved university tuition fees in full',
      'Monthly stipend of £1,347 (or £1,652 in London)',
      'Return flights to UK and warm clothing allowance'
    ],
    applicationProcess: [
      'Apply through CSC online application system',
      'Nomination by CSC panel',
      'Assessment of academic merit and impact on home country',
      'Official award letter issuance'
    ],
    closingSoon: false,
    totalApplications: 3100,
    createdAt: '2026-01-05'
  },
  {
    scholarshipID: 'sch-7',
    title: 'Reliance Foundation Undergraduate Scholarship',
    description: 'Empowering promising Indian students pursuing first-year undergraduate degrees in any discipline to develop into future leaders.',
    provider: 'Reliance Foundation',
    amount: 200000,
    amountText: 'Up to ₹2,00,000 over course duration',
    deadline: '2026-10-06',
    eligibility: 'First-year full-time undergraduate students with minimum 60% in Class 12. Household income less than ₹15 Lakhs (preference to under ₹2.5 Lakhs).',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 1500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'All',
    officialLink: 'https://www.scholarships.reliancefoundation.org',
    documents: [
      'Class 12 Marksheet',
      'Current College ID or Bonafide Certificate',
      'Family Income Proof',
      'Aadhaar Card'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial grant up to ₹2 Lakhs',
      'Leadership developmental workshops and alumni network access'
    ],
    applicationProcess: [
      'Online Aptitude Test (60 mins)',
      'Application submission with essays',
      'Shortlisting based on test score & financial need',
      'Final list announcement'
    ],
    closingSoon: false,
    totalApplications: 18900,
    createdAt: '2026-01-20'
  },
  {
    scholarshipID: 'sch-9',
    title: 'DAAD Wise Internship & Scholarship Program Germany',
    description: 'Working Internships in Science and Engineering for Indian students at public universities and research institutes in Germany.',
    provider: 'DAAD German Academic Exchange Service',
    amount: 180000,
    amountText: '€934/month stipend + Travel allowance (€1,050)',
    deadline: '2026-11-01',
    eligibility: 'Indian students studying B.Tech/B.E in 5th/6th semester or Integrated Dual Degree in 7th/8th semester with excellent academic record.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'International',
    incomeLimit: 1000000,
    category: ['All Categories'],
    gender: 'All',
    officialLink: 'https://www.daad.in/en/study-research-in-germany/scholarships/',
    documents: [
      'German Professor acceptance letter',
      'No Objection Certificate (NOC) from Indian college',
      'Academic CV and Motivation Letter',
      'Transcripts certified by University Controller'
    ],
    featured: false,
    type: 'International',
    bannerImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Monthly scholarship of 934 Euros for 2 to 3 months',
      'Lump sum travel subsidy of 1,050 Euros',
      'Health, accident, and personal liability insurance'
    ],
    applicationProcess: [
      'Contact German professors and secure internship placement',
      'Submit DAAD portal application',
      'Evaluation by DAAD selection committee in Bonn',
      'Visa support & stipend confirmation'
    ],
    closingSoon: false,
    totalApplications: 2100,
    createdAt: '2026-01-18'
  },
  {
    scholarshipID: 'sch-10',
    title: 'Aditya Birla Capital Scholarship for Medical & Law Students',
    description: 'Financial aid program committed to supporting students pursuing MBBS, BDS, LLB, and Allied Health sciences across India.',
    provider: 'Aditya Birla Capital Foundation',
    amount: 60000,
    amountText: 'Up to ₹60,000 per year',
    deadline: '2026-11-20',
    eligibility: 'Enrolled in 1st/2nd year of MBBS, BDS, or B.A. LLB with min 60% in previous exam and annual family income up to ₹6 Lakh.',
    educationLevel: 'Undergraduate',
    course: 'Medical',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.adityabirlacapital.com',
    documents: [
      'NEET / CLAT Scorecard',
      'College ID Card',
      'Income Certificate issued by competent government authority',
      'Recent Passport Photograph'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹60,000 yearly scholarship',
      'Health insurance cover allowance for scholar and family'
    ],
    applicationProcess: [
      'Apply online on ScholarX portal',
      'Upload NEET score and admission receipt',
      'Telephonic interview & document check'
    ],
    closingSoon: true,
    totalApplications: 5300,
    createdAt: '2026-02-12'
  },
  ...privateUGScholarships,
  ...maharashtraScholarshipsUG
];

export const MOCK_SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'st-1',
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    college: 'IIT Bombay - B.Tech Computer Science',
    scholarshipName: 'HDFC Parivartan & Reliance Foundation',
    amountAwarded: '₹2.75 Lakhs Total',
    quote: 'ScholarX matched me with the HDFC Parivartan scholarship within seconds. Coming from a single-parent family, this financial support allowed me to focus 100% on my studies.'
  },
  {
    id: 'st-2',
    name: 'Rahul Kamble',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    college: 'Government Medical College, Pune',
    scholarshipName: 'Tata Capital Pankh Scholarship',
    amountAwarded: '₹80,000 / Year',
    quote: 'I used to spend weeks searching across scattered sites. The AI Scholarship Finder gave me step-by-step document guidance and deadline alerts.'
  },
  {
    id: 'st-3',
    name: 'Ananya Roy',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    college: 'University of Oxford, UK',
    scholarshipName: 'Commonwealth Master’s Scholarship',
    amountAwarded: '£38,000 (Full Waiver + Stipend)',
    quote: 'The AI Resume Checker on ScholarX helped me polish my Statement of Purpose. It highlighted exactly where my research impact was weak before submission!'
  }
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'HDFC Bank Parivartan Scholarship 2026-27 Applications Open',
    summary: 'HDFC Bank Parivartan Foundation announces grant funding for students in professional and degree courses facing economic hardship.',
    date: '2026-07-28',
    category: 'CSR Program',
    source: 'HDFC Bank CSR',
    link: 'https://www.hdfcbank.com/csr',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-2',
    title: 'Tata Capital Increases Pankh Professional Scholarship Budget',
    summary: 'Over 5,000 fresh engineering, medical, and law students to receive up to ₹80,000 tuition fee reimbursement this academic year.',
    date: '2026-07-20',
    category: 'CSR Update',
    source: 'Education Times',
    link: 'https://www.tatacapital.com',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-3',
    title: 'Reliance Foundation Announces 5,000 New Undergraduate Scholarships',
    summary: 'Applications invited from 1st year B.Sc, B.Tech, B.Com, and MBBS students. Top scorers in AI test receive merit stipends.',
    date: '2026-07-15',
    category: 'CSR Launch',
    source: 'CSR India',
    link: 'https://www.scholarships.reliancefoundation.org',
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80'
  }
];

export const APP_STATS = {
  totalScholarships: 850,
  activeFunds: '₹100+ Crore',
  studentsBenefited: '2,50,000+',
  aiMatchAccuracy: '98.4%',
  partnerInstitutes: '900+'
};
