import { Scholarship } from '../types/scholarship';

export const privateUGScholarships: Scholarship[] = [
  {
    scholarshipID: 'priv-ug-1',
    title: 'Kotak Kanya Scholarship Program',
    description: 'A dedicated CSR initiative by Kotak Education Foundation providing financial support to meritorious girl students from underprivileged families pursuing professional undergraduate degree courses.',
    provider: 'Kotak Education Foundation',
    amount: 150000,
    amountText: 'Up to ₹1,50,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Meritorious girl students who scored 75%+ in Class 12 board exams and secured admission to 1st year of professional graduation (Engineering, MBBS, Architecture, Design, Integrated LLB). Annual family income must be ≤ ₹6,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://kotakeducation.org/kotak-kanya-scholarship/',
    documents: [
      'Class 10 and Class 12 Marksheets',
      'Bonafide Certificate and Fee Structure from College',
      'College Admission / CAP Allotment Letter',
      'Income Certificate issued by authorized government authority / Form 16 / ITR',
      'Aadhaar Card and Student Bank Account Details',
      'Recent Passport Size Photograph'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Annual grant of ₹1,50,000 until graduation to cover tuition fees, books, and living expenses',
      'Holistic grooming, personality development workshops, and English proficiency training',
      'Access to exclusive corporate mentors and leadership coaching from Kotak leaders'
    ],
    applicationProcess: [
      'Register online at Kotak Education Foundation portal or Buddy4Study',
      'Upload academic records, entrance exam rank proof, and income documentation',
      'Shortlisting based on merit cum need criteria',
      'Virtual panel interview and background check',
      'Disbursement directly into candidate bank account'
    ],
    closingSoon: false,
    totalApplications: 14200,
    createdAt: '2026-08-01',
    faqs: [
      { question: 'Is this scholarship open to all years of college?', answer: 'It is strictly for first-year female students admitted to professional degree courses.' },
      { question: 'Can students who received a partial state scholarship apply?', answer: 'Yes, provided the total grant does not exceed total actual college expenses.' }
    ]
  },
  {
    scholarshipID: 'priv-ug-2',
    title: 'Infosys Foundation STEM Stars Scholarship',
    description: 'Infosys Foundation initiative championing underprivileged women across India entering higher education in Science, Technology, Engineering, and Mathematics (STEM).',
    provider: 'Infosys Foundation',
    amount: 100000,
    amountText: 'Up to ₹1,00,000 per year (Tuition + Living Expenses)',
    deadline: '2026-11-15',
    eligibility: 'Female students enrolled in 1st year of undergraduate STEM programs (B.Tech, B.E., Integrated M.Tech, MBBS, B.Sc Biotech) at NIRF-ranked or accredited institutions with family income ≤ ₹8 Lakhs.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 800000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.infosys.com/infosys-foundation.html',
    documents: [
      'Class 12 Marksheet with minimum 75% or equivalent CGPA',
      'NIRF accredited Institute Admission proof & College ID',
      'Government authorized Family Income Certificate',
      'Electricity Bill / Ration Card for address verification',
      'Aadhaar Card'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial scholarship up to ₹1,00,000 per annum covering tuition, books, and living allowances',
      'Opportunity to participate in tech hackathons and STEM mentorship sessions by Infosys engineers',
      'Assistance in internships and innovation projects'
    ],
    applicationProcess: [
      'Submit application through the Infosys Foundation STEM portal',
      'Document verification and cross-referencing with NIRF institute records',
      'Telephonic/Video screening interview',
      'Final scholarship award and recurring annual renewal upon maintaining 7.0 CGPA'
    ],
    closingSoon: false,
    totalApplications: 18500,
    createdAt: '2026-08-05'
  },
  {
    scholarshipID: 'priv-ug-3',
    title: 'SBIF Asha Scholarship Program for Undergraduate Students',
    description: 'SBI Foundation flagship scholarship committed to providing financial assistance to meritorious students from low-income families pursuing undergraduate studies in top NIRF 100 institutions.',
    provider: 'SBI Foundation',
    amount: 50000,
    amountText: '₹50,000 per academic year',
    deadline: '2026-10-31',
    eligibility: 'Students pursuing 1st year of any undergraduate course (B.A., B.Sc., B.Com., B.Tech, MBBS) in top 100 NIRF-ranked colleges with at least 75% marks in Class 12. Household income must not exceed ₹3,00,000 per annum.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.sbifoundation.in/asha-scholarship',
    documents: [
      'Class 12 Marksheet',
      'Government Income Certificate (Tahsildar/DM/SDM)',
      'Admission Letter / College ID Card',
      'Bank Account Passbook / Cancelled Cheque',
      'Aadhaar Card'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Direct grant of ₹50,000 into the bank account of the scholar',
      'Covers college tuition, exam fees, textbooks, and essential stationery',
      'Certificate of excellence from SBI Foundation'
    ],
    applicationProcess: [
      'Register online on Buddy4Study / SBI Foundation portal',
      'Submit verified academic details and NIRF college admission slip',
      'Internal shortlisting based on socioeconomic criteria',
      'Direct transfer of scholarship funds via DBT'
    ],
    closingSoon: true,
    totalApplications: 23100,
    createdAt: '2026-08-10'
  },
  {
    scholarshipID: 'priv-ug-4',
    title: 'Santoor Women\'s Scholarship Program',
    description: 'A recurrent annual scholarship program by Wipro Consumer Care and Wipro Cares supporting young women from disadvantaged backgrounds wishing to pursue higher education after Class 12.',
    provider: 'Wipro Consumer Care & Lighting and Wipro Cares',
    amount: 24000,
    amountText: '₹24,000 per year until graduation',
    deadline: '2026-11-20',
    eligibility: 'Girl students from Andhra Pradesh, Karnataka, Telangana, or Chhattisgarh who have passed Class 10 from local government school, Class 12 from government junior college, and enrolled in a full-time 3-year or 4-year undergraduate course.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 350000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.santoorscholarship.com/',
    documents: [
      'Class 10 & 12 Marksheets from Government institutions',
      'College Identity Card or Bonafide Certificate',
      'Aadhaar Card',
      'Applicant Bank Account Passbook'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹24,000 annual financial aid every year until graduation',
      'Preference to candidates with interest in humanities, sciences, commerce, or social work'
    ],
    applicationProcess: [
      'Online registration on the Santoor Scholarship portal',
      'Verification of government schooling certificates',
      'Shortlisting and merit list publication',
      'Disbursement directly into student bank account'
    ],
    closingSoon: false,
    totalApplications: 9600,
    createdAt: '2026-08-12'
  },
  {
    scholarshipID: 'priv-ug-5',
    title: 'Siemens Scholarship Program for Engineering UG',
    description: 'Siemens India prestigious CSR initiative offering 100% financial and professional sponsorship to meritorious 1st-year government engineering college students.',
    provider: 'Siemens India CSR',
    amount: 120000,
    amountText: '100% Tuition Fee + ₹50,000 Books & Tech Allowance',
    deadline: '2026-11-10',
    eligibility: '1st-year students of Government Engineering Colleges across India pursuing B.Tech/B.E. in Mechanical, Electrical, Electronics, Instrumentation, CS, or IT. Minimum 60% in Class 10 and 50% in Class 12 PCM. Family income ≤ ₹2,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 200000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.siemens.com/in/en/company/sustainability/corporate-citizenship/siemens-scholarship-program.html',
    documents: [
      'Class 10 and Class 12 PCM Marksheet',
      'Government Engineering College Admission Letter / Fee Receipt',
      'Family Income Certificate issued by competent revenue authority',
      'Aadhaar Card'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Full reimbursement of college tuition fees and examination fees for all 4 years',
      'Generous annual allowance for books, laptops, stationery, and hostel expenses',
      'Comprehensive German dual education style technical training and Siemens internships'
    ],
    applicationProcess: [
      'Submit application via Siemens Scholarship portal',
      'Screening based on financial disadvantage and academic merit',
      'Online technical and behavioral assessment',
      'In-person or video panel interview'
    ],
    closingSoon: false,
    totalApplications: 11200,
    createdAt: '2026-08-15'
  },
  {
    scholarshipID: 'priv-ug-6',
    title: 'L\'Oréal India For Young Women In Science Scholarship',
    description: 'An empowering nationwide scholarship program encouraging economically disadvantaged young women to pursue undergraduate education in scientific disciplines.',
    provider: 'L\'Oréal India Foundation',
    amount: 85000,
    amountText: 'Up to ₹2,50,000 total (₹85,000/year)',
    deadline: '2026-11-25',
    eligibility: 'Female students who passed Class 12 Science stream with minimum 85% in PCM/PCB during the current academic year, admitted to a graduation course in Science, Engineering, Medicine, Biotechnology, or Pharmacy. Family income ≤ ₹6,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Science',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.loreal.com/en/india/articles/commitments/for-young-women-in-science-scholarships-india/',
    documents: [
      'Attested copy of Class 10 & Class 12 mark sheets',
      'College admission letter and original fee receipt',
      'Income Certificate (Salary slip / Form 16 / Tehsildar certificate)',
      'Essay on scientific aspirations and career ambitions'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial aid of ₹85,000 per year covering college fees and lab research expenses',
      'Interaction with leading women scientists and research fellows across the globe',
      'Lifetime inclusion in the L\'Oréal Women in Science alumni network'
    ],
    applicationProcess: [
      'Fill online application on Buddy4Study / L\'Oréal portal',
      'Document screening and validation',
      'Telephonic interviews of top shortlisted candidates',
      'Final jury presentation and award ceremony'
    ],
    closingSoon: false,
    totalApplications: 13400,
    createdAt: '2026-08-18'
  },
  {
    scholarshipID: 'priv-ug-7',
    title: 'Dr. Reddy\'s Foundation Sashakt Scholarship',
    description: 'Encouraging young women across India to pursue pure and applied science careers at premier Indian universities and research institutes.',
    provider: 'Dr. Reddy\'s Foundation',
    amount: 80000,
    amountText: '₹2,40,000 total (₹80,000/year for 3 years)',
    deadline: '2026-11-30',
    eligibility: 'Young women who have completed Class 12 with high scores and secured admission in B.Sc. Pure/Applied Science (Physics, Chemistry, Math, Biology, Biochemistry) in recognized lead institutions (such as St. Stephen\'s, Miranda House, Loyola, Fergusson, St. Xavier\'s).',
    educationLevel: 'Undergraduate',
    course: 'Science',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.sashaktscholarship.org/',
    documents: [
      'Class 10 and 12 Board Marksheets',
      'College Admission confirmation and fee receipt',
      'Household Income Proof',
      'Statement of Purpose describing commitment to scientific research'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹80,000 annual scholarship covering tuition, books, and lab apparatus',
      'Mentorship by prominent scientists and researchers from Dr. Reddy\'s Laboratories',
      'Special funding for undergraduate scientific project work and paper presentations'
    ],
    applicationProcess: [
      'Online application on the Sashakt Scholarship portal',
      'Review of scientific aptitude essay and academic transcripts',
      'Video interview with scientific advisory council',
      'Direct disbursement to college and student'
    ],
    closingSoon: false,
    totalApplications: 7800,
    createdAt: '2026-08-20'
  },
  {
    scholarshipID: 'priv-ug-8',
    title: 'Legrand Empowering Scholarship Program',
    description: 'CSR initiative by Legrand India providing financial assistance to meritorious girl students and differently-abled scholars pursuing undergraduate degrees in Engineering and Architecture.',
    provider: 'Legrand India',
    amount: 60000,
    amountText: 'Up to ₹60,000 per year or 70% of tuition fee',
    deadline: '2026-11-15',
    eligibility: 'Girl students, differently-abled students, or transgender students enrolled in 1st year of B.Tech/B.E, B.Arch, or B.Sc (Computer Science / IT) with minimum 70% in Class 10 & 12. Annual family income < ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls', 'Disability'],
    gender: 'All',
    officialLink: 'https://www.legrand.co.in/about-us/csr',
    documents: [
      'Class 10 and 12 Marksheets',
      'College Admission Proof / CAP Allotment Order',
      'Family Income Certificate',
      'Disability Certificate (if applying under special category)',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial support up to ₹60,000/year or 70% of tuition fee for the complete course duration',
      'Mentorship sessions by senior leaders from Legrand India',
      'Special internships and skill building modules'
    ],
    applicationProcess: [
      'Submit application online via Buddy4Study or Legrand CSR portal',
      'Shortlisting based on academic merit and socio-economic need',
      'Telephonic interviews of candidates',
      'Direct grant transfer'
    ],
    closingSoon: false,
    totalApplications: 10400,
    createdAt: '2026-08-22'
  },
  {
    scholarshipID: 'priv-ug-9',
    title: 'Rolls-Royce Unnati Scholarship for Women Engineering Students',
    description: 'Flagship CSR initiative of Rolls-Royce India supporting young women pursuing professional engineering degrees across recognized institutes.',
    provider: 'Rolls-Royce India Pvt. Ltd.',
    amount: 35000,
    amountText: '₹35,000 one-time financial grant + Mentorship',
    deadline: '2026-11-30',
    eligibility: 'Female students pursuing 1st, 2nd, or 3rd year of undergraduate engineering (B.Tech/B.E.) in Aerospace, Marine, Electronics, Mechanical, or Computer Science in AICTE recognized colleges. Minimum 60% in Class 10 & 12.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.rolls-royce.com/country-sites/india.aspx',
    documents: [
      'Class 10 & 12 Marksheet',
      'Current College ID Card and Semester Marksheet',
      'Family Income Certificate',
      'Aadhaar Card and Student Bank Passbook'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹35,000 direct grant to assist in academic expenses and hardware',
      'Curated mentorship program connecting scholars with global aerospace engineers',
      'Career readiness workshops and resume review sessions'
    ],
    applicationProcess: [
      'Apply online with engineering branch details and semester grade sheet',
      'Shortlisting on merit-cum-means criteria',
      'Virtual interview round with Rolls-Royce CSR panel',
      'Fund disbursement'
    ],
    closingSoon: false,
    totalApplications: 8900,
    createdAt: '2026-08-25'
  },
  {
    scholarshipID: 'priv-ug-10',
    title: 'Colgate Keep India Smiling Foundational Scholarship for UG',
    description: 'Colgate-Palmolive India CSR initiative offering foundational financial backing to students from disadvantaged communities pursuing higher education.',
    provider: 'Colgate-Palmolive (India) Limited',
    amount: 30000,
    amountText: '₹30,000 per year (Up to ₹1,20,000 over course)',
    deadline: '2026-12-15',
    eligibility: 'Students admitted to 1st year of 3-year or 4-year undergraduate degree courses (B.A., B.Sc., B.Com., B.Tech, BDS). Minimum 60% in Class 12 board exams. Annual family income must be less than ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.colgate.com/en-in/mission/keep-india-smiling',
    documents: [
      'Class 12 Marksheet',
      'College Admission Letter / Fee Receipt',
      'Government Income Certificate or BPL Card',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹30,000 annual scholarship deposited directly into student account',
      'Career guidance webinars and mental wellness sessions conducted by Colgate volunteers'
    ],
    applicationProcess: [
      'Online application on Colgate Keep India Smiling portal',
      'Upload marksheet, income proof, and college ID',
      'Telephonic verification and document audit',
      'Scholarship grant confirmation'
    ],
    closingSoon: false,
    totalApplications: 27500,
    createdAt: '2026-08-26'
  },
  {
    scholarshipID: 'priv-ug-11',
    title: 'Sitaram Jindal Foundation Scholarship for UG Courses',
    description: 'A long-standing charitable trust providing widespread financial assistance to meritorious undergraduate students belonging to economically challenged backgrounds.',
    provider: 'Sitaram Jindal Foundation',
    amount: 24000,
    amountText: 'Up to ₹24,000 per year (Category B & C)',
    deadline: '2026-12-31',
    eligibility: 'Students enrolled in regular undergraduate courses (B.A., B.Sc., B.Com, BBA, BCA, B.Tech, MBBS). Minimum 60% marks for boys and 55% for girls in Class 12. Family income limit is ₹4,00,000 for salaried and ₹2,50,000 for non-salaried.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.sitaramjindalfoundation.org/scholarships.php',
    documents: [
      'Class 10 and Class 12 Marks Cards',
      'Income Certificate issued by Tahsildar / BDO',
      'College Principal recommendation and seal on application form',
      'Hostel certificate (for hostellers eligible for additional allowance)'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Monthly scholarship paid directly or quarterly to cover tuition and maintenance fees',
      'Additional monthly hostel allowance for outstation scholars'
    ],
    applicationProcess: [
      'Download and complete physical application form from foundation website',
      'Obtain verification seal from College Principal',
      'Mail or upload completed documents to Jindal Foundation Bangalore office',
      'Direct cheque/NEFT disbursement to verified students'
    ],
    closingSoon: false,
    totalApplications: 19800,
    createdAt: '2026-08-28'
  },
  {
    scholarshipID: 'priv-ug-12',
    title: 'Federal Bank Hormis Memorial Foundation Scholarship',
    description: 'Federal Bank CSR initiative commemorating founder K.P. Hormis, reimbursing college tuition fees for meritorious students in professional undergraduate courses.',
    provider: 'Federal Bank Hormis Memorial Foundation',
    amount: 100000,
    amountText: '100% of Tuition Fees (Up to ₹1,00,000/year)',
    deadline: '2026-11-20',
    eligibility: 'Students admitted on merit under Government / Merit quota in 1st year of MBBS, B.Tech, B.Sc Agriculture, or B.Sc Nursing in Gujarat, Karnataka, Kerala, Maharashtra, Punjab, or Tamil Nadu. Family income ≤ ₹3,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Medical',
    state: 'Maharashtra',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.federalbank.co.in/corporate-social-responsibility',
    documents: [
      'Entrance Exam Rank card and CAP Allotment Memo',
      'Class 12 Marksheet',
      'Income Certificate from Village Officer / Revenue Authority',
      'College Fee Structure signed by Principal',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Reimbursement of 100% tuition and laboratory fees up to ₹1 Lakh per year',
      'Special funding for PC / Laptop in 1st year for professional studies',
      'Priority consideration for bank summer internships'
    ],
    applicationProcess: [
      'Apply online through Federal Bank CSR portal',
      'Submit attested documents at nearest Federal Bank branch',
      'State-wise interview and document verification',
      'Direct NEFT release to the educational institute'
    ],
    closingSoon: false,
    totalApplications: 6200,
    createdAt: '2026-08-30'
  },
  {
    scholarshipID: 'priv-ug-13',
    title: 'Vivo for Education Scholarship Program for Undergraduates',
    description: 'A targeted initiative by Vivo India to ensure continuity of undergraduate higher education for bright students facing severe economic constraints.',
    provider: 'Vivo India CSR',
    amount: 50000,
    amountText: '₹50,000 one-time financial assistance',
    deadline: '2026-11-30',
    eligibility: 'Students enrolled in 1st year of any undergraduate degree (B.A., B.Sc., B.Com., BBA, B.Tech, etc.) with minimum 80% marks in Class 12 board examination. Annual family income must be ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.vivo.com/in/about-vivo/csr',
    documents: [
      'Class 12 Marksheet',
      'College Admission Letter / Fee Receipt',
      'Family Income Certificate issued by Tehsildar / Competent Authority',
      'Aadhaar Card and Student Bank Details'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'One-time grant of ₹50,000 to cover annual college tuition fees and study materials',
      'Certificate of merit from Vivo India CSR'
    ],
    applicationProcess: [
      'Submit application through Buddy4Study / Vivo portal',
      'Initial document screening and cross-verification',
      'Telephonic interview of shortlisted students',
      'Direct bank account disbursement'
    ],
    closingSoon: false,
    totalApplications: 14700,
    createdAt: '2026-09-01'
  },
  {
    scholarshipID: 'priv-ug-14',
    title: 'DLF Foundation Raghvendra Scholarship for UG Engineering & Tech',
    description: 'DLF Foundation scholarship nurturing gifted engineering students who demonstrate high academic excellence but face financial hardships in paying university fees.',
    provider: 'DLF Foundation',
    amount: 50000,
    amountText: 'Up to ₹50,000 per academic year',
    deadline: '2026-12-10',
    eligibility: '1st-year students pursuing B.Tech/B.E in recognized government or private universities with JEE Mains percentile above 80. Annual household income must be ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.dlffoundation.co.in/education.php',
    documents: [
      'JEE Mains Scorecard and Class 12 Marksheet',
      'College Admission Letter and Fee Receipt',
      'Income Certificate / ITR of parents',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Annual financial award up to ₹50,000 covering university tuition',
      'Specialized personality and soft skills coaching program',
      'Access to corporate leadership mentorship series'
    ],
    applicationProcess: [
      'Online application on the DLF Foundation portal',
      'Document evaluation and academic merit ranking',
      'Personal interview with DLF Foundation Trustees',
      'Formal scholarship sanction'
    ],
    closingSoon: false,
    totalApplications: 6900,
    createdAt: '2026-09-02'
  },
  {
    scholarshipID: 'priv-ug-15',
    title: 'Ericsson Empowering Girl Child Scholarship for STEM Undergraduates',
    description: 'Corporate social responsibility program by Ericsson India designed to reduce gender disparity in tech by funding girl students in undergraduate engineering.',
    provider: 'Ericsson India',
    amount: 50000,
    amountText: '₹50,000 per year until course completion',
    deadline: '2026-11-25',
    eligibility: 'Female students currently enrolled in 2nd or 3rd year of B.Tech/B.E. (Computer Science, Information Technology, Electronics, Telecommunication) in AICTE-approved institutions with minimum 6.5 CGPA and family income ≤ ₹6,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.ericsson.com/en/about-us/sustainability-and-corporate-responsibility',
    documents: [
      'Class 12 marksheet and all previous semester engineering transcripts',
      'College ID Card',
      'Income proof / Salary Slip / BPL Certificate',
      'Bank Account Passbook'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 annual scholarship to offset university expenses',
      'Exclusive technology webinars on 5G, Cloud, and AI by Ericsson engineers',
      'Fast-track screening for Ericsson summer internship openings'
    ],
    applicationProcess: [
      'Online registration on the partner portal',
      'Shortlisting based on academic grades and need-based criteria',
      'Virtual panel discussion and verification',
      'Fund transfer to beneficiary'
    ],
    closingSoon: false,
    totalApplications: 9300,
    createdAt: '2026-09-03'
  },
  {
    scholarshipID: 'priv-ug-16',
    title: 'Titan Kanya Empowerment Scholarship for UG Girls',
    description: 'Titan Company Limited CSR initiative empowering girl students from economically weaker sections to pursue graduation and vocational degrees without dropouts.',
    provider: 'Titan Company Limited',
    amount: 35000,
    amountText: 'Up to ₹35,000 per year',
    deadline: '2026-11-30',
    eligibility: 'Girl students entering 1st year of any recognized undergraduate degree (B.A., B.Sc., B.Com., B.Tech, B.Des) with minimum 65% in Class 12. Annual family income must not exceed ₹4,50,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 450000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.titancompany.in/corporate-social-responsibility',
    documents: [
      'Class 10 & 12 Marksheets',
      'College Bonafide Certificate & Admission Receipt',
      'Income Certificate issued by competent revenue authority',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial support up to ₹35,000 per year for tuition and books',
      'Career readiness and communication mentoring modules',
      'Titan leadership interaction workshops'
    ],
    applicationProcess: [
      'Submit application via Titan CSR / Buddy4Study platform',
      'Document evaluation by CSR committee',
      'Telephonic interaction with shortlisted candidates',
      'Award disbursement directly to student account'
    ],
    closingSoon: false,
    totalApplications: 11100,
    createdAt: '2026-09-04'
  },
  {
    scholarshipID: 'priv-ug-17',
    title: 'Cummins Scholarship Program for Degree in Engineering',
    description: 'Cummins India Foundation provides complete financial assistance, mentorship, and laptops to deserving students from economically distressed backgrounds in engineering disciplines.',
    provider: 'Cummins India Foundation',
    amount: 60000,
    amountText: 'Full Tuition Reimbursement (Up to ₹60,000/yr) + Laptop',
    deadline: '2026-11-15',
    eligibility: '1st-year students pursuing B.E./B.Tech or Diploma in Engineering with minimum 60% in Class 12 / previous exam. Candidates must reside in Pune, Jamshedpur, Dewas, Phaltan, or surrounding areas. Annual family income ≤ ₹3,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.cummins.com/en/in/company/corporate-responsibility/cummins-india-foundation',
    documents: [
      'Class 10 and Class 12 Marksheets',
      'CAP Allotment Letter & College Fee Structure',
      'Family Income Certificate / BPL Card',
      'Electricity Bill for address verification',
      'Aadhaar Card'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Complete tuition and exam fee coverage throughout the degree',
      'High-performance laptop for engineering simulations and coding',
      'Dedicated one-on-one senior engineer mentor from Cummins'
    ],
    applicationProcess: [
      'Register on the Cummins Scholarship portal',
      'Aptitude test and family financial audit',
      'Home verification visit by Cummins volunteer team',
      'Final panel interview and award disbursement'
    ],
    closingSoon: false,
    totalApplications: 7400,
    createdAt: '2026-09-05'
  },
  {
    scholarshipID: 'priv-ug-18',
    title: 'Schaeffler India Hope Engineering Scholarship',
    description: 'Schaeffler India CSR scholarship financing promising engineering undergraduates to complete their professional education without financial strain.',
    provider: 'Schaeffler India Limited',
    amount: 75000,
    amountText: 'Up to ₹75,000 per year or 80% tuition fee',
    deadline: '2026-11-30',
    eligibility: '1st-year students of B.Tech/B.E. in Mechanical, Production, Mechatronics, Automobile, or Electrical Engineering with at least 60% marks in Class 12 science. Family income ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.schaeffler.co.in/en/sustainability/csr/',
    documents: [
      'Class 12 Marksheet',
      'College Admission Letter / Fee Receipt',
      'Family Income Certificate',
      'Aadhaar Card & Bank Passbook'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Up to ₹75,000 annual scholarship covering college tuition and lab fees',
      'Technical mentorship and industry exposure visits to Schaeffler plants',
      'Internship opportunities for top performing scholars'
    ],
    applicationProcess: [
      'Apply online via Buddy4Study Schaeffler portal',
      'Shortlisting based on academic score and financial verification',
      'Telephonic interview with Schaeffler CSR panel',
      'Scholarship grant release'
    ],
    closingSoon: false,
    totalApplications: 8500,
    createdAt: '2026-09-06'
  },
  {
    scholarshipID: 'priv-ug-19',
    title: 'Alstom India Vidyasaarathi Scholarship for UG Engineering',
    description: 'Alstom India scholarship on Vidyasaarathi portal promoting engineering education for students from communities neighboring Alstom manufacturing facilities.',
    provider: 'Alstom Transport India Limited',
    amount: 75000,
    amountText: '₹75,000 per academic year',
    deadline: '2026-12-15',
    eligibility: 'Full-time undergraduate engineering students (B.E./B.Tech) in Mechanical, Electrical, Electronics, or Civil with minimum 65% in Class 12. Preference to students from Bihar, West Bengal, Tamil Nadu, Andhra Pradesh, and Maharashtra. Family income ≤ ₹6,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.vidyasaarathi.co.in/Vidyasaarathi/scholarship',
    documents: [
      'Class 10 & 12 Marksheets',
      'College Bonafide Certificate & Fee Structure',
      'Income Certificate from competent revenue officer',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Direct grant of ₹75,000 per year towards tuition fees',
      'Opportunity to interact with railway and transit technology engineers'
    ],
    applicationProcess: [
      'Register and log in on Vidyasaarathi portal',
      'Select Alstom India Undergraduate Engineering Scholarship',
      'Upload required scanned documents',
      'Verification by NSDL team and grant transfer'
    ],
    closingSoon: false,
    totalApplications: 6700,
    createdAt: '2026-09-07'
  },
  {
    scholarshipID: 'priv-ug-20',
    title: 'ACC Vidyasaarathi Scholarship for Undergraduate Students',
    description: 'ACC Limited CSR program supporting youth pursuing graduation courses near plant locations and across India.',
    provider: 'ACC Limited',
    amount: 30000,
    amountText: '₹30,000 per academic year',
    deadline: '2026-12-20',
    eligibility: 'Students pursuing 1st or 2nd year of regular undergraduate degree courses (B.A., B.Sc., B.Com., BBA, BCA) with minimum 60% in Class 12. Annual family income must be ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.vidyasaarathi.co.in/Vidyasaarathi/scholarship',
    documents: [
      'Class 12 Marksheet',
      'College ID card / Bonafide certificate',
      'Income certificate from Tahsildar / SDM',
      'Bank passbook copy'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹30,000 per year to cover tuition fees, books, and study materials',
      'Skill building webinars facilitated by ACC CSR'
    ],
    applicationProcess: [
      'Submit application on Vidyasaarathi portal',
      'Document check and income verification',
      'Final shortlist approval by ACC Foundation',
      'Direct electronic bank credit'
    ],
    closingSoon: false,
    totalApplications: 9200,
    createdAt: '2026-09-08'
  },
  {
    scholarshipID: 'priv-ug-21',
    title: 'JSW Udaan Scholarship for Undergraduate Courses',
    description: 'JSW Foundation educational grant on Vidyasaarathi helping deserving undergraduates meet their academic expenses without taking heavy education loans.',
    provider: 'JSW Foundation',
    amount: 50000,
    amountText: 'Up to ₹50,000 per academic year',
    deadline: '2026-12-31',
    eligibility: 'Students pursuing 1st year of any recognized undergraduate degree (B.Tech, MBBS, B.Com, B.Sc) with minimum 60% marks in Class 12. Household income must not exceed ₹8,00,000 per annum.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 800000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.jsw.in/foundation/education',
    documents: [
      'Class 10 and 12 mark sheets',
      'College admission letter with fee breakdown',
      'Income Certificate / ITR of parents',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Direct scholarship grant up to ₹50,000 per year until course completion',
      'Mentorship support by JSW young professionals'
    ],
    applicationProcess: [
      'Fill application on Vidyasaarathi portal under JSW Udaan scheme',
      'Document verification and cross-checking',
      'Merit-cum-means assessment',
      'Bank disbursement'
    ],
    closingSoon: false,
    totalApplications: 12800,
    createdAt: '2026-09-09'
  },
  {
    scholarshipID: 'priv-ug-22',
    title: 'NSDL Shiksha Sahyog Scholarship for Undergraduate Studies',
    description: 'National Securities Depository Limited (NSDL) CSR initiative providing higher education financial security to bright students from economically challenged homes.',
    provider: 'NSDL e-Governance CSR',
    amount: 35000,
    amountText: '₹35,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Students enrolled in 1st/2nd year of 3-year or 4-year undergraduate programs with minimum 60% in Class 12. Annual family income must be ≤ ₹3,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.vidyasaarathi.co.in/Vidyasaarathi/scholarship',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate & Fee Receipt',
      'Income Certificate from competent government authority',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹35,000 annual scholarship covering college fees',
      'Financial literacy webinars conducted by NSDL capital markets experts'
    ],
    applicationProcess: [
      'Apply online on Vidyasaarathi',
      'Submit academic transcripts and income certificate',
      'NSDL CSR verification',
      'Fund transfer to college or student account'
    ],
    closingSoon: false,
    totalApplications: 10100,
    createdAt: '2026-09-10'
  },
  {
    scholarshipID: 'priv-ug-23',
    title: 'Timken India Scholarship for Mechanical & Automobile UG',
    description: 'Timken India CSR scholarship assisting promising students pursuing undergraduate engineering degrees in core manufacturing and automotive branches.',
    provider: 'Timken India Limited',
    amount: 50000,
    amountText: '₹50,000 per year',
    deadline: '2026-12-15',
    eligibility: 'Students enrolled in 1st or 2nd year of B.Tech/B.E. in Mechanical, Automobile, Industrial, or Production Engineering with at least 65% in Class 12. Annual family income ≤ ₹4,50,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 450000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.timken.com/en-in/careers/corporate-social-responsibility/',
    documents: [
      'Class 10 and 12 marks cards',
      'Current engineering semester grade card',
      'College ID & fee structure',
      'Income proof issued by Tehsildar'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 annual scholarship towards tuition fees and practical training kits',
      'Interaction with Timken industrial bearings and precision components design team'
    ],
    applicationProcess: [
      'Apply through Vidyasaarathi portal',
      'Verification of engineering enrolment and income certificates',
      'Approval by Timken CSR Committee',
      'Fund disbursement'
    ],
    closingSoon: false,
    totalApplications: 5400,
    createdAt: '2026-09-11'
  },
  {
    scholarshipID: 'priv-ug-24',
    title: 'Kind Circle Scholarship for Meritorious Undergraduates',
    description: 'A compassionate community trust providing timely financial assistance to college students facing severe sudden life hardships, loss of primary earning parent, or illness.',
    provider: 'Kind Circle Trust',
    amount: 24000,
    amountText: 'Up to ₹24,000 per year',
    deadline: '2026-11-30',
    eligibility: 'Undergraduate students pursuing general or professional courses with minimum 65% marks in Class 12. Household income must be ≤ ₹4,00,000, with preference to students with crisis situations.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.kindcircle.org/',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate & Fee Slip',
      'Proof of family financial crisis (if applicable) or Income Certificate',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Direct grant of up to ₹24,000 per year to prevent dropout',
      'Career mentoring and emotional support from volunteer network'
    ],
    applicationProcess: [
      'Apply online with personal statement describing educational aspirations',
      'Document evaluation by Kind Circle vetting team',
      'Telephonic counseling call',
      'Direct transfer to scholar'
    ],
    closingSoon: false,
    totalApplications: 7200,
    createdAt: '2026-09-12'
  },
  {
    scholarshipID: 'priv-ug-25',
    title: 'JK Lakshmi Vidya Scholarship for UG Students',
    description: 'JK Lakshmi Cement CSR scholarship providing financial security to college students from underprivileged families in states where company operates.',
    provider: 'JK Lakshmi Cement CSR',
    amount: 40000,
    amountText: '₹40,000 per academic year',
    deadline: '2026-12-15',
    eligibility: 'Students pursuing undergraduate degree courses (B.A., B.Com, B.Sc., B.Tech) with minimum 60% marks in Class 12. Priority to candidates residing in Rajasthan, Gujarat, Haryana, MP, or UP. Annual family income ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.jklakshmicement.com/csr',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate / Admission Receipt',
      'Income Certificate issued by Tehsildar',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹40,000 per academic year for course tuition and exam fees',
      'Academic guidance webinars by industry mentors'
    ],
    applicationProcess: [
      'Online application on Vidyasaarathi portal',
      'Document verification and regional scrutiny',
      'Selection approval by JK Lakshmi CSR panel',
      'Direct bank account transfer'
    ],
    closingSoon: false,
    totalApplications: 6300,
    createdAt: '2026-09-13'
  },
  {
    scholarshipID: 'priv-ug-26',
    title: 'DXC Progressing Minds Scholarship for STEM Undergraduates',
    description: 'DXC Technology initiative supporting female and transgender students pursuing undergraduate degrees in Science, Technology, Engineering, and Mathematics (STEM).',
    provider: 'DXC Technology India',
    amount: 50000,
    amountText: '₹50,000 per year',
    deadline: '2026-11-20',
    eligibility: 'Female or transgender students in 1st, 2nd, or 3rd year of undergraduate STEM courses (B.Tech, B.E., BCA, B.Sc IT/CS/Data Science) with minimum 60% in previous exam. Annual family income ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'All',
    officialLink: 'https://www.dxc.com/in/en/about-us/corporate-responsibility',
    documents: [
      'Class 12 Marksheet and semester scorecards',
      'College ID Card & Bonafide Certificate',
      'Income Certificate from authorized government official',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Financial award of ₹50,000 to cover academic and digital learning fees',
      'Workshops on cloud computing, cybersecurity, and full-stack software development'
    ],
    applicationProcess: [
      'Online submission via Buddy4Study partner portal',
      'Merit-cum-means assessment and document vetting',
      'Telephonic interview with selection panel',
      'Scholarship sanction'
    ],
    closingSoon: false,
    totalApplications: 8800,
    createdAt: '2026-09-14'
  },
  {
    scholarshipID: 'priv-ug-27',
    title: 'Tata Trusts Medical and Healthcare Undergraduate Grant',
    description: 'Tata Trusts merit-cum-need grant offering major tuition fee reimbursements for medical and healthcare undergraduate students in government and aided institutions.',
    provider: 'Sir Ratan Tata Trust & Allied Trusts',
    amount: 75000,
    amountText: 'Up to ₹75,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Students pursuing 2nd, 3rd, or 4th year of MBBS, BDS, Bachelor of Physiotherapy (BPT), or B.Sc. Nursing in government recognized institutions. Minimum 60% marks in previous professional examinations. Family income ≤ ₹4,50,000.',
    educationLevel: 'Undergraduate',
    course: 'Medical',
    state: 'All States',
    incomeLimit: 450000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.tatatrusts.org/our-work/individual-grants-programme/education-grants',
    documents: [
      'NEET Scorecard and Previous Year Medical University Marksheets',
      'College Fee Receipt and Bonafide Certificate',
      'Family Income Certificate / Form 16',
      'Aadhaar Card and Student Bank Passbook'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Tuition fee reimbursement up to ₹75,000 per year',
      'Relief from high medical book, stethoscope, and lab equipment expenses',
      'Prestigious recognition from Tata Trusts'
    ],
    applicationProcess: [
      'Apply online on Tata Trusts Individual Grants Education Portal',
      'Upload verified university marksheets and hospital fee structure',
      'Trust review committee verification',
      'Direct disbursement via RTGS/NEFT'
    ],
    closingSoon: false,
    totalApplications: 5200,
    createdAt: '2026-09-15'
  },
  {
    scholarshipID: 'priv-ug-28',
    title: 'Mahindra All India Talent Scholarship (MAITS) for Undergraduates',
    description: 'K. C. Mahindra Education Trust scholarship established in 1995 helping meritorious students from lower-income strata pursue job-oriented diploma and undergraduate programs.',
    provider: 'K. C. Mahindra Education Trust',
    amount: 10000,
    amountText: '₹10,000 per year for 3 consecutive years',
    deadline: '2026-11-15',
    eligibility: 'Students admitted to 1st year of polytechnic diploma or undergraduate technical degree programs across India who have passed Class 10/12 with minimum 65% marks. Preference to girl students, differently-abled, and children of armed personnel.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls', 'Disability'],
    gender: 'All',
    officialLink: 'https://www.kcmet.org/what-we-do-Scholarships-Grants.aspx',
    documents: [
      'Class 10 and 12 Marksheet',
      'Admission Letter / Fee Receipt of Polytechnic or Degree College',
      'Income Certificate issued by Tehsildar / Competent Authority',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹10,000 annual grant for 3 years to cover tuition, instruments, and books',
      'Mahindra Trust Alumnus certificate upon course completion'
    ],
    applicationProcess: [
      'Submit online application via K. C. Mahindra Education Trust portal',
      'Shortlisting based on academic percentage and socio-economic background',
      'In-person or virtual interview at regional Mahindra centers',
      'Award ceremony and fund credit'
    ],
    closingSoon: false,
    totalApplications: 15300,
    createdAt: '2026-09-16'
  },
  {
    scholarshipID: 'priv-ug-29',
    title: 'LIC HFL Vidyadhan Scholarship for Undergraduates',
    description: 'LIC Housing Finance Limited (LIC HFL) CSR scholarship program aiming to empower underprivileged undergraduate students to pursue quality higher education.',
    provider: 'LIC Housing Finance Limited',
    amount: 25000,
    amountText: '₹25,000 per year for 3 years',
    deadline: '2026-11-20',
    eligibility: 'Students enrolled in 1st year of any 3-year bachelor\'s degree program (B.A., B.Sc., B.Com.) in recognized colleges across India with minimum 60% in Class 12. Annual family income must be ≤ ₹3,60,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 360000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.lichousing.com/csr',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate & Fee Slip',
      'Income Certificate (Tahsildar / Salary Slip / Form 16)',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹25,000 annual scholarship for 3 years to take care of college fees and study material expenses',
      'Certificate of excellence from LIC HFL'
    ],
    applicationProcess: [
      'Register on Buddy4Study under LIC HFL Vidyadhan Scheme',
      'Upload academic records and household income certificate',
      'Document scrutiny and telephonic verification',
      'Direct account disbursement'
    ],
    closingSoon: false,
    totalApplications: 17600,
    createdAt: '2026-09-17'
  },
  {
    scholarshipID: 'priv-ug-30',
    title: 'Sterling and Wilson Solar Scholarship for STEM Undergraduates',
    description: 'CSR initiative by Sterling and Wilson Renewable Energy encouraging students to build careers in clean energy, electrical, and renewable technology engineering.',
    provider: 'Sterling and Wilson Renewable Energy',
    amount: 40000,
    amountText: '₹40,000 per academic year',
    deadline: '2026-12-10',
    eligibility: 'Students pursuing 1st or 2nd year of B.Tech/B.E. in Electrical, Mechanical, Civil, or Renewable Energy Engineering with minimum 60% in Class 12. Family income must not exceed ₹4,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.sterlingandwilsonre.com/csr',
    documents: [
      'Class 12 Marksheet and engineering semester grade sheet',
      'College Bonafide Certificate and Fee Structure',
      'Income Certificate issued by Tehsildar',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹40,000 per year towards university tuition fees',
      'Webinars on solar PV plant design and sustainable clean tech trends'
    ],
    applicationProcess: [
      'Submit application on Vidyasaarathi portal',
      'Verification of engineering enrolment and income certificates',
      'Final list approval by Sterling and Wilson CSR Committee',
      'Bank credit'
    ],
    closingSoon: false,
    totalApplications: 4900,
    createdAt: '2026-09-18'
  },
  {
    scholarshipID: 'priv-ug-31',
    title: 'Muthoot M. George Higher Education Scholarship for UG',
    description: 'Muthoot Finance CSR initiative supporting bright students pursuing professional degrees in Medicine, Engineering, Nursing, Commerce, and Agriculture.',
    provider: 'Muthoot M. George Foundation',
    amount: 50000,
    amountText: 'Up to ₹50,000 per year until graduation',
    deadline: '2026-11-20',
    eligibility: '1st-year students pursuing MBBS, B.Tech, B.Sc. Agriculture, or B.Com in recognized government or aided colleges with at least 80% marks in Class 12. Family income ≤ ₹2,50,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 250000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.muthootgroup.com/csr',
    documents: [
      'Class 12 Marksheet',
      'College Admission Letter / Fee Receipt',
      'Income Certificate from Village Officer / Tehsildar',
      'Aadhaar Card and Student Bank Account Details'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 annual grant to meet tuition and living costs',
      'Opportunity to intern in Muthoot Group CSR and community development initiatives'
    ],
    applicationProcess: [
      'Apply online on the Muthoot Group website or collect form from nearest Muthoot branch',
      'Regional screening and home verification',
      'Award ceremony and cheque distribution'
    ],
    closingSoon: false,
    totalApplications: 8100,
    createdAt: '2026-09-19'
  },
  {
    scholarshipID: 'priv-ug-32',
    title: 'Sarojini Damodaran Foundation Vidyadhan Scholarship for UG',
    description: 'Vidyadhan program by Sarojini Damodaran Foundation, initiated by SD Shibulal (co-founder of Infosys), providing sustained multi-year scholarships for underprivileged college students.',
    provider: 'Sarojini Damodaran Foundation (SDF)',
    amount: 60000,
    amountText: '₹60,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Students who completed Class 12 with 90%+ marks (or 80% for students with disability) and have taken admission in an undergraduate degree course. Annual family income must be ≤ ₹2,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 200000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Disability'],
    gender: 'All',
    officialLink: 'https://www.vidyadhan.org/',
    documents: [
      'Class 10 & 12 Marksheet',
      'College Bonafide Certificate & Fee Slip',
      'Income Certificate from Tahsildar / Revenue Authority',
      'Aadhaar Card'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹60,000 per year until degree completion',
      'Two-day residential life skills training and career planning bootcamps',
      'Lifelong mentorship by alumni and corporate executives'
    ],
    applicationProcess: [
      'Online application on Vidyadhan portal (vidyadhan.org)',
      'Online written aptitude and English test',
      'Personal interview with trustees and educationists',
      'Scholarship grant sanction'
    ],
    closingSoon: false,
    totalApplications: 16400,
    createdAt: '2026-09-20'
  },
  {
    scholarshipID: 'priv-ug-33',
    title: 'G. P. Birla Educational Foundation Scholarship for UG',
    description: 'Trust established by industrialist G. P. Birla granting prestigious scholarships to meritorious students across West Bengal and India pursuing higher studies.',
    provider: 'G. P. Birla Educational Foundation',
    amount: 50000,
    amountText: '₹50,000 per year + ₹7,000 Book Allowance',
    deadline: '2026-12-31',
    eligibility: 'Students who have passed Class 12 with 85%+ from state board or 90%+ from CBSE/ISC and taken admission in 1st year of Science, Commerce, Arts, Engineering, or Medicine. Annual family income ≤ ₹3,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://gpbirlaedufoundation.com/',
    documents: [
      'Class 12 Board Marksheet',
      'College Admission confirmation and fee receipt',
      'Income Certificate (Form 16 / ITR / Tahsildar certificate)',
      'College Principal recommendation'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 annual scholarship covering tuition fees',
      '₹7,000 one-time additional grant for university textbooks and stationery',
      'Honorary certificate from the Birla educational trust'
    ],
    applicationProcess: [
      'Download application form from foundation portal or apply online',
      'Attestation from College Principal',
      'Expert panel evaluation',
      'Direct cheque / bank transfer'
    ],
    closingSoon: false,
    totalApplications: 7100,
    createdAt: '2026-09-21'
  },
  {
    scholarshipID: 'priv-ug-34',
    title: 'Concord Biotech Vidyasaarathi Scholarship for Science & Pharma UG',
    description: 'Concord Biotech CSR program supporting underprivileged students pursuing undergraduate education in B.Pharm, B.Sc. Chemistry, Microbiology, or Biotechnology.',
    provider: 'Concord Biotech Limited',
    amount: 40000,
    amountText: '₹40,000 per academic year',
    deadline: '2026-12-15',
    eligibility: 'Students pursuing 1st or 2nd year of B.Pharm or B.Sc. (Chemistry, Biology, Biotechnology) with minimum 60% in Class 12. Annual family income must be ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Science',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.vidyasaarathi.co.in/Vidyasaarathi/scholarship',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate & Fee Receipt',
      'Income Certificate from competent revenue officer',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹40,000 per academic year for course fees and laboratory journals',
      'Interaction sessions on biopharma manufacturing standards'
    ],
    applicationProcess: [
      'Apply on Vidyasaarathi portal',
      'Scrutiny of pharma / science course documents',
      'Selection approval by Concord Biotech CSR team',
      'Direct bank account transfer'
    ],
    closingSoon: false,
    totalApplications: 4100,
    createdAt: '2026-09-21'
  },
  {
    scholarshipID: 'priv-ug-35',
    title: 'TransUnion CIBIL Scholarship for Undergraduates in Commerce & Tech',
    description: 'TransUnion CIBIL CSR scholarship promoting financial inclusion by supporting students in Commerce, Economics, Statistics, Data Science, and Computer Engineering degrees.',
    provider: 'TransUnion CIBIL',
    amount: 40000,
    amountText: '₹40,000 per academic year',
    deadline: '2026-12-20',
    eligibility: 'Students enrolled in 1st/2nd year of B.Com, B.A. Economics, B.Sc. Statistics, BCA, or B.Tech CS with minimum 65% in Class 12. Annual family income ≤ ₹6,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Commerce',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.transunioncibil.com/about-us/corporate-social-responsibility',
    documents: [
      'Class 12 Marksheet and College Fee Receipt',
      'College Bonafide Certificate',
      'Income Certificate / ITR',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹40,000 per year towards tuition fees and certification exams',
      'Financial wellness and data analytics orientation modules'
    ],
    applicationProcess: [
      'Submit application via Vidyasaarathi or partner portal',
      'Document validation by NSDL team',
      'Award approval and grant disbursement'
    ],
    closingSoon: false,
    totalApplications: 6500,
    createdAt: '2026-09-22'
  },
  {
    scholarshipID: 'priv-ug-36',
    title: 'Brillio STEM Scholarship for Young Women Undergraduates',
    description: 'Brillio CSR program dedicated to fostering female talent in technology by funding computer engineering and IT undergraduate degrees.',
    provider: 'Brillio Technologies',
    amount: 50000,
    amountText: '₹50,000 per academic year',
    deadline: '2026-11-25',
    eligibility: 'Female students pursuing 1st or 2nd year of B.Tech/B.E in Computer Science, Artificial Intelligence, or IT with minimum 65% in Class 12. Annual family income ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.brillio.com/sustainability-csr/',
    documents: [
      'Class 12 Marksheet',
      'College ID Card & Bonafide Certificate',
      'Income Certificate issued by Tehsildar',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 annual scholarship covering tuition and computing equipment',
      'Direct mentorship by senior female architects and data scientists at Brillio',
      'Priority consideration for tech internship drives'
    ],
    applicationProcess: [
      'Online application on the Brillio CSR portal',
      'Aptitude and coding challenge screening',
      'Virtual panel interview',
      'Award release'
    ],
    closingSoon: false,
    totalApplications: 7800,
    createdAt: '2026-09-22'
  },
  {
    scholarshipID: 'priv-ug-37',
    title: 'Persistent Foundation Girls in Engineering Scholarship (UG)',
    description: 'Persistent Foundation empowering meritorious girl students from Maharashtra, Goa, and Madhya Pradesh pursuing undergraduate degrees in Computer Engineering and IT.',
    provider: 'Persistent Foundation',
    amount: 50000,
    amountText: '₹50,000 per year until degree completion',
    deadline: '2026-11-30',
    eligibility: 'Girl students admitted to 1st year of B.E./B.Tech in Computer Science, IT, or Artificial Intelligence with minimum 65% in Class 12 and family income ≤ ₹5,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'Maharashtra',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.persistentfoundation.org/initiatives/education/',
    documents: [
      'Class 10 and 12 mark sheets',
      'CAP Allotment Letter & College Fee Receipt',
      'Income Certificate (Tahsildar / Competent Authority)',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 per year until graduation',
      'Mentoring by Persistent Systems tech leads',
      'Special hackathons and cloud lab access'
    ],
    applicationProcess: [
      'Submit application on Persistent Foundation website',
      'Academic and financial screening',
      'Virtual personal interview',
      'Award disbursement'
    ],
    closingSoon: false,
    totalApplications: 5900,
    createdAt: '2026-09-23'
  },
  {
    scholarshipID: 'priv-ug-38',
    title: 'Cyient Foundation Scholarship for Undergraduates in Engineering',
    description: 'Cyient Foundation CSR scholarship supporting students from financially challenged families in completing professional undergraduate engineering education.',
    provider: 'Cyient Foundation',
    amount: 45000,
    amountText: '₹45,000 per academic year',
    deadline: '2026-12-15',
    eligibility: '1st-year students pursuing B.Tech/B.E in Aerospace, Mechanical, Electrical, or Computer Science with minimum 65% in Class 12. Annual family income must not exceed ₹4,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.cyient.com/about-us/corporate-social-responsibility',
    documents: [
      'Class 12 Marksheet',
      'College ID Card & Bonafide Certificate',
      'Income Certificate from Tahsildar',
      'Aadhaar Card and Student Bank Passbook'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹45,000 annual scholarship covering tuition fees and textbooks',
      'Webinars on geospatial analytics and mechanical design systems'
    ],
    applicationProcess: [
      'Register on Cyient Foundation portal or Vidyasaarathi',
      'Document verification and background check',
      'Approval by CSR trustees',
      'Disbursement via direct bank transfer'
    ],
    closingSoon: false,
    totalApplications: 4700,
    createdAt: '2026-09-23'
  },
  {
    scholarshipID: 'priv-ug-39',
    title: 'Schneider Electric India Foundation Scholarship for UG',
    description: 'Schneider Electric CSR initiative aiding engineering students from economically disadvantaged families, especially those specializing in energy and electrical engineering.',
    provider: 'Schneider Electric India Foundation',
    amount: 50000,
    amountText: '₹50,000 per academic year',
    deadline: '2026-12-20',
    eligibility: 'Students pursuing 1st or 2nd year of B.E./B.Tech in Electrical, Electronics, Energy Engineering, or Automation with minimum 65% in Class 12. Annual family income ≤ ₹4,50,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 450000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.se.com/in/en/about-us/sustainability/foundation.jsp',
    documents: [
      'Class 12 Marksheet and semester scorecards',
      'College Admission Slip & Fee Structure',
      'Income Certificate from Tehsildar',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 per year towards tuition fees and energy lab projects',
      'Interaction with smart grid and energy automation specialists'
    ],
    applicationProcess: [
      'Apply online on the Schneider Foundation portal',
      'Document check and shortlisting',
      'Telephonic interview with CSR committee',
      'Fund transfer to beneficiary'
    ],
    closingSoon: false,
    totalApplications: 6100,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-40',
    title: 'Marubeni India Meritorious Scholarship for UG Students',
    description: 'Japanese global trading firm Marubeni Corporation CSR initiative rewarding high-achieving undergraduate students facing financial barriers.',
    provider: 'Marubeni India Pvt. Ltd.',
    amount: 50000,
    amountText: '₹50,000 one-time merit scholarship',
    deadline: '2026-12-15',
    eligibility: '1st-year students pursuing full-time technical and professional undergraduate courses (Engineering, Science, Commerce) with minimum 75% in Class 12. Family income ≤ ₹4,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.marubeni.com/in/en/csr/',
    documents: [
      'Class 10 and 12 mark sheets',
      'College ID Card / Fee Receipt',
      'Income Certificate issued by Tehsildar / SDO',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 lump sum scholarship into student account',
      'Certificate of achievement from Marubeni Corporation Japan / India'
    ],
    applicationProcess: [
      'Online application on Buddy4Study Marubeni portal',
      'Screening based on academic ranking and income proof',
      'Telephonic verification',
      'Direct account credit'
    ],
    closingSoon: false,
    totalApplications: 9500,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-41',
    title: 'North South Foundation (NSF) India College Scholarship for UG',
    description: 'Prestigious diaspora trust providing deep scholarships to top rankers in state CET/JEE/NEET entering undergraduate medical, engineering, and agriculture colleges.',
    provider: 'North South Foundation (NSF)',
    amount: 30000,
    amountText: 'Up to ₹30,000 per year until graduation',
    deadline: '2026-12-31',
    eligibility: 'Students entering 1st year of Professional graduation (B.Tech, MBBS, BDS, B.V.Sc, B.Sc Agri) who ranked in the top 10% in Class 10 & 12 board exams and CET/JEE/NEET. Family income ≤ ₹1,50,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 150000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.northsouth.org/public/india/scholarships',
    documents: [
      'Class 10 & 12 Marksheets and Entrance Rank Card',
      'College Admission Proof / CAP Allotment Order',
      'Income Certificate (Tahsildar / Village Officer)',
      'Aadhaar Card and Student Bank Passbook'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Up to ₹30,000 per year throughout the entire 4 or 5-year degree duration',
      'Personal volunteer mentor assigned from NSF chapter in US / India',
      'Support in campus placement and soft skills coaching'
    ],
    applicationProcess: [
      'Register on the North South Foundation portal',
      'Submit marksheet, entrance rank, and parent income documents',
      'In-person interview and home visit by NSF volunteer coordinators',
      'Scholarship grant release'
    ],
    closingSoon: false,
    totalApplications: 8400,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-42',
    title: 'Ashok Leyland Scholarship for Automobile & Mechanical UG',
    description: 'Ashok Leyland CSR program aiding meritorious engineering students from rural and underprivileged backgrounds in advancing automotive and mechanical careers.',
    provider: 'Ashok Leyland Limited',
    amount: 40000,
    amountText: '₹40,000 per academic year',
    deadline: '2026-12-10',
    eligibility: 'Students pursuing 1st or 2nd year of B.E./B.Tech in Automobile, Mechanical, Production, or Mechatronics Engineering with minimum 65% in Class 12. Annual family income ≤ ₹4,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 400000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.ashokleyland.com/en/sustainability',
    documents: [
      'Class 12 Marksheet and semester scorecards',
      'College Bonafide Certificate & Fee Slip',
      'Income Certificate from Tahsildar',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹40,000 per year towards tuition fees and practical training',
      'Plant tours and interactive lectures on EV mobility and powertrain design'
    ],
    applicationProcess: [
      'Apply online on Vidyasaarathi portal',
      'Automotive engineering course verification',
      'Scrutiny by Ashok Leyland CSR panel',
      'Grant disbursement'
    ],
    closingSoon: false,
    totalApplications: 5100,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-43',
    title: 'Medhavi National Scholarship Scheme (Swadhan UG Program)',
    description: 'A nationwide online merit exam scholarship program under the Human Resources Development Mission providing direct monetary grants to college undergrads.',
    provider: 'Medhavi National Scholarship Mission',
    amount: 20000,
    amountText: '₹20,000 one-time merit cash award',
    deadline: '2026-11-15',
    eligibility: 'Any student currently enrolled in an undergraduate degree course (B.A., B.Sc., B.Com, B.Tech, MBBS) between the age of 16 to 28 years with minimum 50% in Class 12.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 1000000,
    category: ['All Categories'],
    gender: 'All',
    officialLink: 'https://www.medhavionline.org/',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate or College ID',
      'Aadhaar Card and Student Bank Account'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Direct cash prize of ₹20,000 transferred within 7 days of online exam results',
      'No income certificate mandatory; strictly merit-based based on general aptitude test'
    ],
    applicationProcess: [
      'Download Medhavi App from Google Play Store',
      'Register for the Swadhan UG Scholarship examination',
      'Appear in online 30-minute mobile test from home',
      'Direct DBT transfer to top 20% scorers'
    ],
    closingSoon: false,
    totalApplications: 31200,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-44',
    title: 'Glow & Lovely Careers College Scholarship for Young Women (UG)',
    description: 'Hindustan Unilever CSR initiative encouraging young women across India to pursue university education and build self-reliant professional careers.',
    provider: 'Hindustan Unilever Foundation',
    amount: 50000,
    amountText: '₹50,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Women aged 15-30 years who passed Class 12 with at least 60% and secured admission to a recognized undergraduate degree course. Annual household income must be ≤ ₹6,00,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 600000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS', 'Girls'],
    gender: 'Female',
    officialLink: 'https://www.glowandlovelycareers.in/en/scholarships',
    documents: [
      'Class 10 and 12 mark sheets',
      'College ID and admission fee receipt',
      'Income Certificate / BPL Card',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 per year towards college tuition fees and books',
      'Free access to English speaking and interview preparation courses on Glow & Lovely portal',
      'Career counseling webinars with leading women industry executives'
    ],
    applicationProcess: [
      'Register on the Glow & Lovely Careers platform',
      'Upload academic records and write short essay on career goals',
      'Telephonic interview with CSR panel',
      'Scholarship grant transfer'
    ],
    closingSoon: false,
    totalApplications: 21900,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-45',
    title: 'ONGC Foundation Scholarship for Meritorious UG Students',
    description: 'ONGC Foundation CSR scheme providing financial aid to students from economically disadvantaged families pursuing engineering and medical undergraduate degrees.',
    provider: 'ONGC Foundation',
    amount: 48000,
    amountText: '₹48,000 per year (₹4,000 per month)',
    deadline: '2026-11-15',
    eligibility: '1st-year students pursuing B.E./B.Tech or MBBS in recognized universities with minimum 60% in Class 12. Annual family income must be ≤ ₹2,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 200000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://ongcscholar.org/',
    documents: [
      'Class 12 Marksheet',
      'College Admission Letter / CAP Receipt',
      'Income Certificate issued by Tehsildar / SDO',
      'Caste Certificate (if applicable)',
      'Aadhaar Card and Student Bank Passbook'
    ],
    featured: true,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹4,000 monthly stipend (₹48,000 annually) throughout the 4 or 5-year degree',
      'Support in paying tuition, hostel room rent, and examination fees',
      'Special preference to students from ONGC operational states'
    ],
    applicationProcess: [
      'Submit application online on the ONGC Scholar portal',
      'Zonal shortlisting across 5 zones of India',
      'Verification by ONGC regional offices',
      'Direct DBT credit to scholar accounts'
    ],
    closingSoon: false,
    totalApplications: 18700,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-46',
    title: 'Coal India Limited (CIL) Merit Scholarship for Engineering & Medical UG',
    description: 'Coal India Limited CSR initiative covering tuition and hostel expenses for meritorious students from coal-bearing districts pursuing professional engineering and medical studies.',
    provider: 'Coal India Limited',
    amount: 60000,
    amountText: '100% Tuition Fee + Hostel Allowance (Up to ₹60,000/yr)',
    deadline: '2026-12-05',
    eligibility: 'Students pursuing 1st year of B.Tech or MBBS in Government or centrally funded institutes who secured admission via JEE/NEET. Family income must be ≤ ₹3,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.coalindia.in/csr/',
    documents: [
      'JEE / NEET Scorecard and Allotment Letter',
      'Class 12 Marksheet',
      'Income Certificate issued by Revenue Authority',
      'Hostel Allotment Certificate (if applicable)',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Reimbursement of tuition, library, and examination fees',
      'Monthly hostel mess allowance for outstation hostellers',
      'Pre-placement training assistance'
    ],
    applicationProcess: [
      'Download form from Coal India CSR website or apply online',
      'Attestation from Institute Registrar or Principal',
      'Evaluation by Coal India CSR Directorate',
      'Disbursement to student bank account'
    ],
    closingSoon: false,
    totalApplications: 6800,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-47',
    title: 'IndusInd Bank Scholarship Program for Meritorious Undergraduates',
    description: 'IndusInd Bank CSR scheme promoting inclusive higher education by funding deserving students in commerce, management, and technology degrees.',
    provider: 'IndusInd Bank Limited',
    amount: 30000,
    amountText: '₹30,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Students in 1st year of B.Com, BBA, B.A. Economics, or B.Tech with minimum 65% in Class 12. Annual household income ≤ ₹3,00,000.',
    educationLevel: 'Undergraduate',
    course: 'Commerce',
    state: 'All States',
    incomeLimit: 300000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.indusind.com/in/en/about-us/csr.html',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate & Fee Slip',
      'Income Certificate (Tahsildar / Village Officer)',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹30,000 annual scholarship deposited directly into student account',
      'Banking fundamentals and financial market literacy mentorship'
    ],
    applicationProcess: [
      'Online application on the partner portal',
      'Document scrutiny and income verification',
      'Final approval and electronic credit'
    ],
    closingSoon: false,
    totalApplications: 8300,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-48',
    title: 'Glenmark Foundation Scholarship for Medical & Pharmacy UG',
    description: 'Glenmark Pharmaceuticals CSR program helping financially challenged students complete MBBS, BAMS, BDS, and B.Pharm undergraduate courses.',
    provider: 'Glenmark Foundation',
    amount: 60000,
    amountText: 'Up to ₹60,000 per academic year',
    deadline: '2026-12-15',
    eligibility: 'Students in 1st or 2nd year of MBBS, BAMS, BDS, or B.Pharm with minimum 65% in Class 12 science (PCB). Household income must not exceed ₹5,00,000 per annum.',
    educationLevel: 'Undergraduate',
    course: 'Medical',
    state: 'All States',
    incomeLimit: 500000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.glenmarkfoundation.org/',
    documents: [
      'NEET Scorecard and Class 12 Marksheet',
      'College Fee Structure & Bonafide Certificate',
      'Income Certificate from Tehsildar / SDO',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Up to ₹60,000 per year towards university tuition and clinical equipment',
      'Access to Glenmark healthcare webinars and public health symposiums'
    ],
    applicationProcess: [
      'Submit application on Vidyasaarathi portal',
      'Verification of medical/pharma admission and revenue certificates',
      'Review by Glenmark CSR committee',
      'Direct account credit'
    ],
    closingSoon: false,
    totalApplications: 5700,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-49',
    title: 'Havells Powering Education Scholarship for UG Engineering',
    description: 'Havells India CSR initiative supporting brilliant minds in 1st and 2nd year of undergraduate engineering from economically disadvantaged families.',
    provider: 'Havells India Limited',
    amount: 50000,
    amountText: '₹50,000 per academic year',
    deadline: '2026-11-30',
    eligibility: 'Students pursuing 1st or 2nd year of B.E./B.Tech in Electrical, Electronics, Mechanical, or Computer Science with minimum 65% in Class 12. Annual family income ≤ ₹4,50,000.',
    educationLevel: 'Undergraduate',
    course: 'Engineering',
    state: 'All States',
    incomeLimit: 450000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.havells.com/en/about-havells/corporate-social-responsibility.html',
    documents: [
      'Class 12 Marksheet',
      'College ID Card & Bonafide Certificate',
      'Income Certificate from Tahsildar',
      'Aadhaar Card and Student Bank Passbook'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹50,000 annual scholarship covering college fees and software simulation licenses',
      'Mentorship sessions with Havells R&D engineers on IoT and smart electricals'
    ],
    applicationProcess: [
      'Register online on Buddy4Study / Havells CSR portal',
      'Shortlisting based on academic grades and need assessment',
      'Telephonic interview with selection committee',
      'Direct bank account transfer'
    ],
    closingSoon: false,
    totalApplications: 7300,
    createdAt: '2026-09-24'
  },
  {
    scholarshipID: 'priv-ug-50',
    title: 'TVS Motor Srinivasan Services Trust Scholarship for UG Students',
    description: 'Srinivasan Services Trust (social arm of TVS Motor Company) supporting underprivileged youth from rural communities pursuing technical and regular undergraduate degrees.',
    provider: 'Srinivasan Services Trust (TVS Motor)',
    amount: 40000,
    amountText: '₹40,000 per academic year',
    deadline: '2026-12-15',
    eligibility: 'Students from rural communities entering 1st year of full-time undergraduate degree courses (B.Tech, B.Sc, B.Com, BCA) with at least 60% in Class 12. Household income must be ≤ ₹3,50,000.',
    educationLevel: 'Undergraduate',
    course: 'General',
    state: 'All States',
    incomeLimit: 350000,
    category: ['General', 'OBC', 'SC', 'ST', 'EWS'],
    gender: 'All',
    officialLink: 'https://www.tvsmotor.com/sustainability/community-development',
    documents: [
      'Class 12 Marksheet',
      'College Bonafide Certificate & Fee Slip',
      'Income Certificate issued by Tehsildar',
      'Rural Domicile Proof / Gram Panchayat Certificate',
      'Aadhaar Card'
    ],
    featured: false,
    type: 'Private',
    bannerImage: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '₹40,000 annual scholarship for college fees and study material',
      'Rural youth leadership development and digital skills sessions'
    ],
    applicationProcess: [
      'Submit application via Srinivasan Services Trust portal or regional field centers',
      'Gram Panchayat recommendation and document verification',
      'SST Trust review committee selection',
      'Direct grant transfer'
    ],
    closingSoon: false,
    totalApplications: 6200,
    createdAt: '2026-09-24'
  }
];
