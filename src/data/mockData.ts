import {
  StudentProfile,
  AssessmentQuestion,
  SkillItem,
  CareerMatch,
  SkillGapItem,
  PathwayModule,
  PracticalProject,
  CareerReadinessPillar,
  GuidanceMessage,
  AptitudeResultSummary,
  HistoricalAssessmentComparison,
  VisualPathwayStage,
} from '../types/career';

export const mockStudentProfile: StudentProfile = {
  id: 'std_9021',
  // 1. Full Name
  name: 'Atharva Patil',
  // 2. Profile Photo
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
  // 3. Age / Date of Birth
  age: '20',
  dateOfBirth: '2004-05-18',
  // 4. City / State
  location: 'Pune, Maharashtra',
  // 5. Preferred Language
  preferredLanguage: 'English',
  // 6. Current Education Level
  educationLevel: 'Diploma',
  // 7. Education Status
  educationStatus: 'Studying',
  // 8. Course / Stream
  stream: 'Computer Science',
  // 9. Institute Name
  university: 'Government Polytechnic Pune',
  // 10. Passing / Expected Year
  graduationYear: '2026',
  // 11. Academic Performance
  gpa: '8.4 CGPA (82%)',
  // 12. Career Interests
  careerInterestsList: ['Web/App Development', 'AI', 'Software'],
  // 13. Current Skills
  currentSkillsList: ['JavaScript', 'HTML/CSS', 'Python', 'React', 'SQL'],
  // 14. Skill Level
  skillLevel: 'Intermediate',
  // 15. Interests & Strengths
  strengthsList: ['Coding', 'Logical Thinking', 'Problem Solving'],
  // 16. Career Goal
  careerGoalType: 'Job',
  // 17. Preferred Industry
  preferredIndustry: 'IT',
  // 18. Preferred Work Mode
  workMode: 'Hybrid',
  // 19. Learning Preference
  learningPreference: 'Practical Projects',
  // 20. Daily Learning Time
  dailyLearningTime: '1–2 hours',
  // 21. Career Experience
  careerExperience: 'Fresher',
  // 22. Short-Term Goal
  shortTermGoal: 'Build full-stack web applications and master Python programming.',
  // 23. Long-Term Career Goal
  longTermGoal: 'Work as a Senior Software Developer or AI Engineer in a top tech company.',
  // 24. Current Challenges
  currentChallenges: ['Interview Preparation', 'Experience is low'],
  // 25. Additional Notes
  additionalNotes: 'Interested in practical hands-on projects and career guidance.',

  email: 'atharva.patil@engineering.edu',
  degree: 'Diploma in Engineering',
  major: 'Computer Engineering',
  targetRole: 'Software Developer',
  bio: 'Computer Engineering student passionate about practical coding and web development.',
  portfolioUrl: 'https://atharvapatil.dev',
  githubUrl: 'https://github.com/atharva-code',
  linkedinUrl: 'https://linkedin.com/in/atharva-patil',
  completedAssessmentsCount: 3,
  overallReadinessScore: 78,
  profileCompletionProgress: 92,
  academicGoals: [
    'Master React & Android UI development',
    'Deploy cloud-ready web applications',
    'Prepare for tech campus interviews',
  ],
  interests: ['Coding', 'AI & Machine Learning', 'UI/UX Design', 'Problem Solving'],
};

export const mockAptitudeSummary: AptitudeResultSummary = {
  hollandCode: 'IRC (Investigative - Realistic - Conventional)',
  topTrait: 'Investigative (96%)',
  scores: [
    { trait: 'Investigative', score: 96, description: 'Excels at complex algorithmic decomposition, data research, and logic synthesis.' },
    { trait: 'Realistic', score: 88, description: 'Prefers hands-on system building, writing robust code, and hardware/tooling execution.' },
    { trait: 'Conventional', score: 82, description: 'Strong discipline for test suites, architectural design patterns, and clean code standards.' },
    { trait: 'Artistic', score: 76, description: 'Values intuitive UX ergonomics, accessible design systems, and aesthetic craft.' },
    { trait: 'Social', score: 70, description: 'Effective collaborator in engineering sprints, peer code reviews, and pair programming.' },
    { trait: 'Enterprising', score: 64, description: 'Capable of presenting technical project demos and communicating product value.' },
  ],
};

export const mockHistoricalComparisons: HistoricalAssessmentComparison[] = [
  {
    date: 'August 12, 2026',
    attemptName: 'Initial Baseline Assessment',
    overallScore: 64,
    aptitudeScore: 89,
    technicalScore: 58,
    portfolioScore: 45,
    softSkillScore: 72,
    deltaFromPrevious: 0,
  },
  {
    date: 'September 18, 2026',
    attemptName: 'Mid-Pathway Re-assessment',
    overallScore: 72,
    aptitudeScore: 91,
    technicalScore: 70,
    portfolioScore: 62,
    softSkillScore: 78,
    deltaFromPrevious: 8,
  },
  {
    date: 'October 8, 2026',
    attemptName: 'Current Re-assessment',
    overallScore: 78,
    aptitudeScore: 92,
    technicalScore: 78,
    portfolioScore: 75,
    softSkillScore: 84,
    deltaFromPrevious: 6,
  },
];

export const mockVisualPathwayStages: VisualPathwayStage[] = [
  { stepNumber: 1, title: 'Current Skills', description: 'Kotlin, Compose Basics, OOP, Git fundamentals verified.', status: 'Completed', keyArtifact: '4 skills verified' },
  { stepNumber: 2, title: 'Missing Skills', description: 'Cloud containerization, vector embeddings & testing gaps identified.', status: 'Completed', keyArtifact: '2 critical gaps prioritized' },
  { stepNumber: 3, title: 'Learning Resources', description: 'Official Android documentation, GCP Cloud Run modules, Compose Codelabs.', status: 'Completed', keyArtifact: '6 course modules finished' },
  { stepNumber: 4, title: 'Practice Activities', description: 'Code katas in StateFlow backpressure, custom Compose Layouts, unit tests.', status: 'Completed', keyArtifact: '12 interactive drills' },
  { stepNumber: 5, title: 'Practical Projects', description: 'Semantic Search Engine & EYC Native Capstone client development.', status: 'Active', keyArtifact: '75% capstone progress' },
  { stepNumber: 6, title: 'Improvement & Refinement', description: 'Benchmarking UI frame latency, adding Room caching and offline mode.', status: 'Active', keyArtifact: 'Profiler audit' },
  { stepNumber: 7, title: 'Re-assessment', description: 'Re-evaluating score against junior AI engineer hiring rubrics.', status: 'Upcoming', keyArtifact: 'Score increased +14% to 78%' },
  { stepNumber: 8, title: 'Career Ready', description: 'Official verified portfolio & signed readiness report for recruiters.', status: 'Upcoming', keyArtifact: 'Target: 85%+ score threshold' },
];

export const aptitudeQuestions: AssessmentQuestion[] = [
  {
    id: 'apt_1',
    category: 'Investigative',
    question: 'How much do you enjoy analyzing complex data patterns and formulating hypotheses?',
    description: 'Investigative types thrive on research, deep analytical problem solving, and intellectual challenge.',
    options: [
      { label: 'Not at all interested', score: 1 },
      { label: 'Slightly interested', score: 2 },
      { label: 'Moderately interested', score: 3 },
      { label: 'Strongly interested', score: 4 },
      { label: 'Extremely passionate', score: 5 },
    ],
  },
  {
    id: 'apt_2',
    category: 'Realistic',
    question: 'How comfortable are you building tangible systems, writing production code, and debugging infrastructure?',
    description: 'Realistic aptitude measures hands-on technical execution, tooling mastery, and practical craft.',
    options: [
      { label: 'Dislike hands-on building', score: 1 },
      { label: 'Prefer theoretical study', score: 2 },
      { label: 'Comfortable with basic builds', score: 3 },
      { label: 'Thrive on practical implementation', score: 4 },
      { label: 'Love architecting end-to-end systems', score: 5 },
    ],
  },
  {
    id: 'apt_3',
    category: 'Artistic',
    question: 'When designing applications, how much do you value intuitive ergonomics and visual elegance?',
    description: 'Artistic focus encompasses creative layout design, human empathy, and creative problem solving.',
    options: [
      { label: 'Care only about raw function', score: 1 },
      { label: 'Secondary consideration', score: 2 },
      { label: 'Appreciate clean aesthetics', score: 3 },
      { label: 'Deeply care about user joy', score: 4 },
      { label: 'Obsessed with design craft & UX', score: 5 },
    ],
  },
  {
    id: 'apt_4',
    category: 'Enterprising',
    question: 'How energized are you when pitching product ideas, leading project sprints, or defining business strategy?',
    description: 'Enterprising traits relate to leadership, persuasion, stakeholder communication, and business impact.',
    options: [
      { label: 'Prefer individual contributor tasks', score: 1 },
      { label: 'Neutral towards leadership', score: 2 },
      { label: 'Comfortable pitching ideas', score: 3 },
      { label: 'Enjoy guiding team direction', score: 4 },
      { label: 'Eager to found projects & lead teams', score: 5 },
    ],
  },
  {
    id: 'apt_5',
    category: 'Conventional',
    question: 'How systematically do you approach testing, code documentation, and CI/CD version control discipline?',
    description: 'Conventional aptitude measures organizational precision, rigorous testing, and structured workflows.',
    options: [
      { label: 'Find processes tedious', score: 1 },
      { label: 'Do minimal required tests', score: 2 },
      { label: 'Follow standard team rules', score: 3 },
      { label: 'Strong appreciation for order', score: 4 },
      { label: 'Relentless about quality & reliability', score: 5 },
    ],
  },
  {
    id: 'apt_6',
    category: 'Social',
    question: 'How rewarding do you find mentoring junior students, team pair-programming, and collaborative feedback?',
    description: 'Social aptitude tracks teaching, peer collaboration, empathy, and community building.',
    options: [
      { label: 'Work best alone', score: 1 },
      { label: 'Occasional check-ins only', score: 2 },
      { label: 'Enjoy team discussions', score: 3 },
      { label: 'Thrive in collaborative squads', score: 4 },
      { label: 'Dedicated community mentor & teammate', score: 5 },
    ],
  },
];

export const mockSkills: SkillItem[] = [
  { id: 'sk_1', name: 'Kotlin & Jetpack Compose', category: 'Technical', currentLevel: 4, targetLevel: 5, isVerified: true, priority: 'High' },
  { id: 'sk_2', name: 'Python & LLM Orchestration', category: 'Technical', currentLevel: 4, targetLevel: 5, isVerified: true, priority: 'High' },
  { id: 'sk_3', name: 'REST & GraphQL APIs', category: 'Technical', currentLevel: 4, targetLevel: 4, isVerified: true, priority: 'Medium' },
  { id: 'sk_4', name: 'Vector DBs & Embeddings', category: 'Technical', currentLevel: 3, targetLevel: 4, isVerified: false, priority: 'High' },
  { id: 'sk_5', name: 'Cloud Infrastructure (GCP/AWS)', category: 'Technical', currentLevel: 2, targetLevel: 4, isVerified: false, priority: 'High' },
  { id: 'sk_6', name: 'System Architecture Design', category: 'Technical', currentLevel: 3, targetLevel: 4, isVerified: true, priority: 'High' },
  { id: 'sk_7', name: 'Design Systems & Material 3', category: 'Domain & Tools', currentLevel: 4, targetLevel: 4, isVerified: true, priority: 'Medium' },
  { id: 'sk_8', name: 'Git & Trunk-Based Development', category: 'Domain & Tools', currentLevel: 4, targetLevel: 4, isVerified: true, priority: 'Low' },
  { id: 'sk_9', name: 'Technical Communication', category: 'Soft Skills', currentLevel: 4, targetLevel: 5, isVerified: true, priority: 'High' },
  { id: 'sk_10', name: 'Cross-functional Collaboration', category: 'Soft Skills', currentLevel: 4, targetLevel: 4, isVerified: true, priority: 'Medium' },
  { id: 'sk_11', name: 'Problem Decomposition', category: 'Soft Skills', currentLevel: 4, targetLevel: 5, isVerified: true, priority: 'High' },
];

export const mockCareerMatches: CareerMatch[] = [
  {
    id: 'car_1',
    title: 'AI Application Engineer',
    category: 'Applied AI & Software Engineering',
    overallMatch: 94,
    aptitudeMatch: 96,
    skillMatch: 88,
    interestMatch: 98,
    salaryRange: '$125,000 - $165,000',
    growthOutlook: '+28% Projected Growth',
    workEnvironment: 'Hybrid / High Autonomy Tech Teams',
    description: 'Bridges production software engineering with modern foundational AI models. Builds resilient client apps, agentic workflows, and latency-optimized inference pipelines.',
    whyFitExplanation: [
      'Exceptional alignment between your high Investigative aptitude (96%) and engineering rigor.',
      'Strong proficiency in Kotlin, modern mobile architectures, and API orchestration.',
      'Demonstrated portfolio enthusiasm for user ergonomics combined with intelligent model backends.',
    ],
    coreCompetencies: [
      'Client-side state management & reactive architecture',
      'Prompt engineering & RAG retrieval systems',
      'Asynchronous streaming & edge inference',
      'Robust unit & UI component testing',
    ],
    dayInTheLife: 'You will collaborate with designers to prototype intelligent interfaces, configure embeddings retrieval services, optimize client memory footprint, and measure real-world user latency.',
    hiringTrend: 'Very High Demand',
  },
  {
    id: 'car_2',
    title: 'Full-Stack Android Developer',
    category: 'Mobile & Cloud Systems',
    overallMatch: 89,
    aptitudeMatch: 91,
    skillMatch: 92,
    interestMatch: 84,
    salaryRange: '$115,000 - $150,000',
    growthOutlook: '+18% Projected Growth',
    workEnvironment: 'Agile Product Squads',
    description: 'Designs and delivers native mobile applications with clean architectural patterns (MVI/MVVM), Jetpack Compose, Material 3, and integrated cloud backends.',
    whyFitExplanation: [
      'Proven mastery of Jetpack Compose declarative UI and Kotlin coroutines.',
      'Consistent attention to Material Design guidelines and accessible components.',
      'Solid base in RESTful networking and local SQLite/Room caching.',
    ],
    coreCompetencies: [
      'Jetpack Compose, Flow, Coroutines',
      'Dependency injection (Hilt/Koin)',
      'Offline-first synchronization & Room DB',
      'Play Store release automation & CI/CD',
    ],
    dayInTheLife: 'You will implement pixel-perfect Figma designs, refactor ViewModel state flows, profile memory leaks using Android Studio Profiler, and review pull requests with fellow engineers.',
    hiringTrend: 'High Demand',
  },
  {
    id: 'car_3',
    title: 'AI Product Specialist / Tech PM',
    category: 'Product Strategy & Innovation',
    overallMatch: 82,
    aptitudeMatch: 85,
    skillMatch: 76,
    interestMatch: 86,
    salaryRange: '$120,000 - $155,000',
    growthOutlook: '+22% Projected Growth',
    workEnvironment: 'Cross-functional Collaborative Hubs',
    description: 'Guides early-stage AI feature definitions, translates user needs into product specs, tests prompt edge cases, and aligns technical feasibility with business value.',
    whyFitExplanation: [
      'High balance between technical literacy and interpersonal communication.',
      'Strong ability to explain complex algorithmic trade-offs to non-engineering stakeholders.',
    ],
    coreCompetencies: [
      'User journey mapping & product discovery',
      'A/B testing & telemetry metric definition',
      'API evaluation & latency trade-off analysis',
      'Agile roadmap prioritization',
    ],
    dayInTheLife: 'Conduct user discovery interviews, draft PRDs for new model features, analyze retention metrics, and run sprint planning with the core engineering team.',
    hiringTrend: 'High Demand',
  },
];

export const mockSkillGaps: SkillGapItem[] = [
  {
    skillName: 'Cloud Deployments & Docker Containers',
    currentScore: 42,
    requiredScore: 80,
    status: 'Critical Gap',
    recommendation: 'Complete module 3.2 on containerizing FastAPI services and deploying to Google Cloud Run.',
  },
  {
    skillName: 'Vector Database Indexing (Chroma / Pinecone)',
    currentScore: 55,
    requiredScore: 85,
    status: 'Critical Gap',
    recommendation: 'Build a semantic document search indexing project with HNSW cosine similarity.',
  },
  {
    skillName: 'Jetpack Compose Advanced Animations & Canvas',
    currentScore: 70,
    requiredScore: 85,
    status: 'Moderate Gap',
    recommendation: 'Practice custom layout measurements and AnimatedContent transitions for dashboard cards.',
  },
  {
    skillName: 'Kotlin Coroutines & Flow Backpressure',
    currentScore: 82,
    requiredScore: 85,
    status: 'Met',
    recommendation: 'Maintain depth by studying StateFlow vs SharedFlow replay buffer strategies.',
  },
  {
    skillName: 'Unit Testing with JUnit 5 & MockK',
    currentScore: 68,
    requiredScore: 80,
    status: 'Moderate Gap',
    recommendation: 'Write test suites verifying ViewModel state machines and repository error fallbacks.',
  },
];

export const mockPathwayModules: PathwayModule[] = [
  {
    id: 'pm_1',
    phase: 1,
    phaseName: 'Phase 1: Native Architecture & Compose Core',
    title: 'Modern Android & Declarative UI Mastery',
    description: 'Establish foundational mastery over Material 3 tokens, composable state hoisting, and unidirectional data flow.',
    estimatedWeeks: 4,
    isCompleted: true,
    items: [
      { id: 'pi_1', title: 'Material 3 Dynamic Color & Typography System', type: 'Course', isCompleted: true },
      { id: 'pi_2', title: 'State Hoisting, Recomposition Optimization & DerivedState', type: 'Course', isCompleted: true },
      { id: 'pi_3', title: 'Navigation 3 & Deep Linking in Compose', type: 'Course', isCompleted: true },
      { id: 'pi_4', title: 'Mini-project: Student Study Planner UI', type: 'Project', isCompleted: true },
    ],
  },
  {
    id: 'pm_2',
    phase: 2,
    phaseName: 'Phase 2: Data, Asynchronous Flows & Networking',
    title: 'Reactive Pipelines & Client-Side Caching',
    description: 'Integrate robust network layers with OkHttp, Retrofit/Ktor, and Room database for offline-first experiences.',
    estimatedWeeks: 5,
    isCompleted: true,
    items: [
      { id: 'pi_5', title: 'Kotlin Flow Operators (combine, flatMapLatest, debounce)', type: 'Course', isCompleted: true },
      { id: 'pi_6', title: 'Offline-First Architecture with Room & WorkManager', type: 'Course', isCompleted: true },
      { id: 'pi_7', title: 'Secure Token Storage with EncryptedSharedPreferences', type: 'Reading', isCompleted: true },
      { id: 'pi_8', title: 'Project: Real-time Transit Tracker with WebSockets', type: 'Project', isCompleted: true },
    ],
  },
  {
    id: 'pm_3',
    phase: 3,
    phaseName: 'Phase 3: Applied AI & Practical Engineering',
    title: 'On-Device & Streaming AI Integration',
    description: 'Connect native Android frontends to streaming generative endpoints and local vector storage.',
    estimatedWeeks: 6,
    isCompleted: false,
    items: [
      { id: 'pi_9', title: 'Server-Sent Events (SSE) & Token Streaming in Compose', type: 'Course', isCompleted: true },
      { id: 'pi_10', title: 'Vector Embeddings & Semantic Search on Mobile', type: 'Course', isCompleted: false },
      { id: 'pi_11', title: 'Containerizing Backend APIs with Docker & Cloud Run', type: 'Course', isCompleted: false },
      { id: 'pi_12', title: 'Capstone Project: AI Career Guidance Assistant (EYC)', type: 'Project', isCompleted: false },
    ],
  },
  {
    id: 'pm_4',
    phase: 4,
    phaseName: 'Phase 4: Career Launch & Technical Interviewing',
    title: 'Portfolio Polishing & System Design Rounds',
    description: 'Refine GitHub repositories, conduct mock architecture interviews, and compile readiness reports.',
    estimatedWeeks: 3,
    isCompleted: false,
    items: [
      { id: 'pi_13', title: 'Mobile System Design: Large-Scale Feed & Chat App', type: 'Reading', isCompleted: false },
      { id: 'pi_14', title: 'Technical Interview Simulation (Data Structures & Compose)', type: 'Certification', isCompleted: false },
      { id: 'pi_15', title: 'Verified Career Readiness Re-Assessment', type: 'Certification', isCompleted: false },
    ],
  },
];

export const mockProjects: PracticalProject[] = [
  {
    id: 'proj_1',
    title: 'AI Career Guidance Assistant (EYC Native)',
    domain: 'Mobile AI & Material 3',
    difficulty: 'Advanced',
    estimatedHours: 45,
    description: 'Full native Android application implementing career path matching, skill-gap radars, interactive roadmap timelines, and offline report generation.',
    skillsAcquired: ['Jetpack Compose', 'M3 Design System', 'Kotlin Coroutines', 'PDF Generation', 'State Machines'],
    status: 'In Progress',
    progressPercentage: 75,
    milestones: [
      { id: 'm1', title: 'Design System & Theme Tokens Setup', isDone: true },
      { id: 'm2', title: 'Aptitude & Skill Assessment Modules', isDone: true },
      { id: 'm3', title: 'Interactive Career Match & Explanation Screens', isDone: true },
      { id: 'm4', title: 'Readiness Report Engine & PDF Export Routine', isDone: false },
      { id: 'm5', title: 'Automated UI Tests with Compose Test Rule', isDone: false },
    ],
    githubRepo: 'https://github.com/alexrivera-tech/eyc-career-guidance',
  },
  {
    id: 'proj_2',
    title: 'Semantic Document Search with Vector Indexing',
    domain: 'Applied AI & Cloud',
    difficulty: 'Intermediate',
    estimatedHours: 25,
    description: 'A microservice utilizing embeddings models and HNSW cosine similarity to perform instant semantic query searches over academic syllabi.',
    skillsAcquired: ['Python', 'FastAPI', 'ChromaDB', 'Docker', 'Google Cloud Run'],
    status: 'Completed',
    progressPercentage: 100,
    milestones: [
      { id: 'm6', title: 'Text chunking & token counting pipeline', isDone: true },
      { id: 'm7', title: 'Vector similarity indexing in ChromaDB', isDone: true },
      { id: 'm8', title: 'REST API endpoints with latency benchmarking', isDone: true },
      { id: 'm9', title: 'Containerization and deployment to Cloud Run', isDone: true },
    ],
    githubRepo: 'https://github.com/alexrivera-tech/semantic-syllabus-search',
    liveDemoUrl: 'https://syllabus-search-demo.run.app',
  },
  {
    id: 'proj_3',
    title: 'Distributed Real-Time Collaborative Canvas',
    domain: 'Systems & Networking',
    difficulty: 'Advanced',
    estimatedHours: 35,
    description: 'Low-latency collaborative sketching canvas with WebSocket event broadcasts, conflict-free replicated data, and local undo/redo trees.',
    skillsAcquired: ['Kotlin Multiplatform', 'WebSockets', 'Canvas 2D API', 'Concurrency'],
    status: 'Not Started',
    progressPercentage: 0,
    milestones: [
      { id: 'm10', title: 'WebSocket server handshake & room management', isDone: false },
      { id: 'm11', title: 'Vector path compression protocol', isDone: false },
      { id: 'm12', title: 'Client-side smooth spline interpolation', isDone: false },
      { id: 'm13', title: 'Stress test with 50 concurrent active users', isDone: false },
    ],
  },
];

export const mockReadinessPillars: CareerReadinessPillar[] = [
  {
    name: 'Aptitude & Role Alignment',
    score: 92,
    status: 'Exceptional',
    feedback: 'Your analytical mindset and creative problem solving match AI Engineering roles in top percentiles.',
  },
  {
    name: 'Technical Competence',
    score: 78,
    status: 'On Track',
    feedback: 'Strong in modern Android, Kotlin, and Compose. Closing cloud containerization gaps will push this above 88%.',
  },
  {
    name: 'Practical Project Portfolio',
    score: 75,
    status: 'Good Progress',
    feedback: 'Two verified repositories with clean architecture. Completing the EYC capstone will provide complete proof of craft.',
  },
  {
    name: 'Professional Readiness & Soft Skills',
    score: 84,
    status: 'Ready for Interviewing',
    feedback: 'Clear technical communication and structured decomposition. Ready for behavioral and technical screens.',
  },
];

export const initialGuidanceMessages: GuidanceMessage[] = [
  {
    id: 'msg_1',
    sender: 'ai',
    text: 'Hello Alex! I analyzed your latest aptitude assessment and coursework history. You show a 94% alignment with AI Application Engineering roles. How would you like to elevate your career today?',
    timestamp: '10:14 AM',
    suggestedFollowUps: [
      'What are my biggest skill gaps for AI Application Engineer?',
      'How does my score compare to industry junior expectations?',
      'Help me choose my next practical portfolio project',
    ],
  },
];
