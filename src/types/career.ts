export interface StudentProfile {
  id: string;
  // 1. Full Name
  name: string;
  // 2. Profile Photo
  avatarUrl: string;
  // 3. Age / Date of Birth
  age?: string;
  dateOfBirth?: string;
  // 4. City / State / Detailed Address
  location: string;
  state?: string;
  district?: string;
  taluka?: string;
  village?: string;
  // 5. Preferred Language
  preferredLanguage?: 'Marathi' | 'Hindi' | 'English' | 'Other' | string;
  // 6. Current Education Level
  educationLevel?: '10th' | '12th' | 'ITI' | 'Diploma' | 'Graduation' | 'Post-Graduation' | 'Other' | string;
  // 7. Education Status
  educationStatus?: 'Studying' | 'Completed' | 'Discontinued' | string;
  // 8. Course / Stream
  stream?: 'COPA' | 'IT' | 'Computer Science' | 'Mechanical' | 'Electrical' | 'Other' | string;
  // 9. Institute Name (Optional)
  university: string;
  // 10. Passing / Expected Year
  graduationYear: string;
  // 11. Academic Performance (Percentage / CGPA / Grade)
  gpa?: string;
  // 12. Career Interests
  careerInterestsList?: string[];
  // 13. Current Skills
  currentSkillsList?: string[];
  // 14. Skill Level
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  // 15. Interests & Strengths
  strengthsList?: string[];
  // 16. Career Goal
  careerGoalType?: 'Job' | 'Freelancing' | 'Business' | 'Higher Studies' | string;
  // 17. Preferred Industry
  preferredIndustry?: 'IT' | 'Banking' | 'Education' | 'Healthcare' | 'Government' | 'Other' | string;
  // 18. Preferred Work Mode
  workMode?: 'Office' | 'Remote' | 'Hybrid' | 'No Preference' | string;
  // 19. Learning Preference
  learningPreference?: 'Videos' | 'Reading' | 'Practical Projects' | 'Interactive Lessons' | string;
  // 20. Daily Learning Time
  dailyLearningTime?: 'Under 30 min' | '30–60 min' | '1–2 hours' | '2+ hours' | string;
  // 21. Career Experience
  careerExperience?: 'Fresher' | 'Internship' | 'Experienced' | string;
  // 22. Short-Term Goal
  shortTermGoal?: string;
  // 23. Long-Term Career Goal
  longTermGoal?: string;
  // 24. Current Challenges
  currentChallenges?: string[];
  // 25. Additional Notes
  additionalNotes?: string;

  // Metadata & legacy fields
  email: string;
  degree: string;
  major: string;
  targetRole: string;
  bio: string;
  portfolioUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  completedAssessmentsCount: number;
  overallReadinessScore: number;
  profileCompletionProgress: number; // e.g. 85%
  profileCompletionPercentage?: number;
  academicGoals: string[];
  interests: string[];
}

export interface AptitudeResultSummary {
  hollandCode: string;
  topTrait: string;
  dominantTrait?: string;
  topScore?: number;
  breakdown?: {
    category: string;
    score: number;
  }[];
  scores: {
    trait: 'Investigative' | 'Realistic' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';
    score: number;
    description: string;
  }[];
}

export interface HistoricalAssessmentComparison {
  date: string;
  attemptName: string;
  overallScore: number;
  aptitudeScore: number;
  technicalScore: number;
  portfolioScore: number;
  softSkillScore: number;
  deltaFromPrevious: number;
}

export interface VisualPathwayStage {
  id?: string;
  stepNumber: number;
  title: string;
  description: string;
  status: 'Completed' | 'Active' | 'Upcoming';
  isDone?: boolean;
  isCurrent?: boolean;
  keyArtifact: string;
}

export interface AssessmentQuestion {
  id: string;
  category: 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional' | string;
  question: string;
  questionText?: string;
  description?: string;
  options: {
    id?: string;
    label?: string;
    text?: string;
    score: number;
  }[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical' | 'Soft Skills' | 'Domain & Tools' | string;
  currentLevel: number; // 1 to 5
  targetLevel: number; // 1 to 5
  isVerified: boolean;
  priority: 'High' | 'Medium' | 'Low' | string;
}

export interface CareerMatch {
  id: string;
  title: string;
  category: string;
  overallMatch: number; // percentage (e.g., 94)
  matchPercentage?: number;
  rank?: number;
  aptitudeMatch: number;
  skillMatch: number;
  interestMatch: number;
  salaryRange: string;
  averageSalaryRange?: string;
  growthOutlook: string;
  workEnvironment: string;
  marketDemand?: string;
  description: string;
  whyFitExplanation: string[];
  explanation?: string;
  matchedStrengths?: string[];
  requiredSkills?: string[];
  coreCompetencies: string[];
  dayInTheLife: string;
  hiringTrend: 'High Demand' | 'Very High Demand' | 'Stable' | string;
}

export interface SkillGapItem {
  skillName: string;
  currentScore: number; // 0 - 100
  requiredScore: number; // 0 - 100
  currentLevel?: number; // 1 - 5
  requiredLevel?: number; // 1 - 5
  status: 'Met' | 'Moderate Gap' | 'Critical Gap' | string;
  recommendation: string;
  recommendedAction?: string;
}

export interface PathwayModule {
  id: string;
  title: string;
  phase: number;
  phaseNumber?: number;
  phaseName: string;
  description: string;
  estimatedWeeks: number;
  estimatedDuration?: string;
  isCompleted: boolean;
  items: {
    id: string;
    title: string;
    type: 'Course' | 'Project' | 'Reading' | 'Certification' | string;
    duration?: string;
    isCompleted: boolean;
  }[];
}

export interface PracticalProject {
  id: string;
  title: string;
  domain: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  estimatedHours: number;
  description: string;
  skillsAcquired: string[];
  skillsDemonstrated?: string[];
  status: 'Not Started' | 'In Progress' | 'Under Review' | 'Completed' | string;
  progressPercentage: number;
  milestones: {
    id: string;
    title: string;
    isDone: boolean;
  }[];
  githubRepo?: string;
  repoUrl?: string;
  liveDemoUrl?: string;
}

export interface CareerReadinessPillar {
  name: string;
  score: number; // 0 - 100
  status: string;
  feedback: string;
}

export interface GuidanceMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  actionCard?: {
    title: string;
    description: string;
    route: string;
    actionLabel: string;
  };
}
