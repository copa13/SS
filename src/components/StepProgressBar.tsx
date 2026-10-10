import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Compass } from 'lucide-react';

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  num: number;
  titleMr: string;
  titleEn: string;
  descMr: string;
  descEn: string;
  kotlinFile: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'profile',
    stepNumber: '01',
    num: 1,
    titleMr: 'विद्यार्थी प्रोफाइल',
    titleEn: 'Student Profile',
    descMr: 'विद्यार्थ्याचं नाव, शिक्षण, आवडी, सध्याची skills आणि career preferences नोंदवणे.',
    descEn: 'Register student name, education, interests, current skills, and career preferences.',
    kotlinFile: 'StudentProfileScreen.kt',
  },
  {
    id: 'aptitude',
    stepNumber: '02',
    num: 2,
    titleMr: 'आवड आणि ॲप्टिट्यूड चाचणी',
    titleEn: 'Interest & Aptitude Assessment',
    descMr: 'प्रश्नांची उत्तरं घेऊन विद्यार्थ्याची आवड, aptitude आणि विचार करण्याची क्षमता समजून घेणे.',
    descEn: 'Evaluate student interests, cognitive thinking, and aptitudes via structured questions.',
    kotlinFile: 'AptitudeAssessmentScreen.kt',
  },
  {
    id: 'skills',
    stepNumber: '03',
    num: 3,
    titleMr: 'कौशल्य मूल्यमापन',
    titleEn: 'Skill Assessment',
    descMr: 'विद्यार्थ्याच्या technical आणि professional skills तपासून प्रत्येक skill चा score तयार करणे.',
    descEn: 'Assess technical and professional skills to generate individual competency scores.',
    kotlinFile: 'SkillAssessmentScreen.kt',
  },
  {
    id: 'guidance',
    stepNumber: '04',
    num: 4,
    titleMr: 'AI करिअर मार्गदर्शन',
    titleEn: 'AI-Based Career Guidance',
    descMr: 'Profile, aptitude, education आणि skills यांच्या आधारे योग्य career पर्याय सुचवणे.',
    descEn: 'Recommend suitable career paths based on profile, aptitude, education, and skills.',
    kotlinFile: 'AICareerGuidanceScreen.kt',
  },
  {
    id: 'matches',
    stepNumber: '05',
    num: 5,
    titleMr: 'करिअर मॅच व स्पष्टीकरण',
    titleEn: 'Career Match & Explanation',
    descMr: 'Career पर्यायांचा suitability score दाखवणे आणि प्रत्येक career का योग्य वाटतो ते समजावणे.',
    descEn: 'Show suitability match scores and explain why each career fits the student.',
    kotlinFile: 'CareerMatchScreen.kt',
  },
  {
    id: 'skillgap',
    stepNumber: '06',
    num: 6,
    titleMr: 'कौशल्यातील त्रुटी (Skill-Gap)',
    titleEn: 'Skill-Gap Identification',
    descMr: 'निवडलेल्या career साठी लागणाऱ्या skills आणि विद्यार्थ्याच्या सध्याच्या skills मधील फरक शोधणे.',
    descEn: 'Identify gaps between target career requirements and current student skills.',
    kotlinFile: 'SkillGapScreen.kt',
  },
  {
    id: 'pathway',
    stepNumber: '07',
    num: 7,
    titleMr: 'शिक्षण ते करिअर मार्ग',
    titleEn: 'Learning-to-Career Pathway',
    descMr: 'काय शिकायचं, कोणत्या क्रमाने शिकायचं आणि पुढे कोणता टप्पा पूर्ण करायचा हे दाखवणे.',
    descEn: 'Roadmap showing what to learn, in what order, and what milestone to achieve next.',
    kotlinFile: 'LearningPathwayScreen.kt',
  },
  {
    id: 'projects',
    stepNumber: '08',
    num: 8,
    titleMr: 'प्रात्यक्षिक प्रकल्प व प्रगती',
    titleEn: 'Practical Projects & Progress',
    descMr: 'Skills चा सराव करण्यासाठी projects देणे आणि त्यांची प्रगती track करणे.',
    descEn: 'Provide hands-on projects to practice skills and track milestone progress.',
    kotlinFile: 'PracticalProjectsScreen.kt',
  },
  {
    id: 'readiness',
    stepNumber: '09',
    num: 9,
    titleMr: 'पुनर्मूल्यांकन व सुधारणा',
    titleEn: 'Re-assessment & Improvement',
    descMr: 'पुन्हा assessment घेऊन आधीच्या आणि आताच्या scores मधील बदल पाहणे.',
    descEn: 'Re-assess to visualize score growth, comparing before vs after improvement.',
    kotlinFile: 'CareerReadinessScreen.kt',
  },
  {
    id: 'report',
    stepNumber: '10',
    num: 10,
    titleMr: 'करिअर सज्जता अहवाल (PDF)',
    titleEn: 'Career Readiness Report',
    descMr: 'Readiness score, strengths, weaknesses, remaining gaps आणि शिफारसी असलेला report व PDF.',
    descEn: 'Comprehensive report with readiness index, strengths, gaps, and PDF export.',
    kotlinFile: 'CareerReadinessReportScreen.kt',
  },
];

interface StepProgressBarProps {
  currentRoute: string;
  onSelectStep: (route: string) => void;
  language: 'mr' | 'en';
  isDarkTheme: boolean;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  currentRoute,
  onSelectStep,
  language,
  isDarkTheme,
}) => {
  const isMr = language === 'mr';
  const currentStep = WORKFLOW_STEPS.find((s) => s.id === currentRoute);

  if (!currentStep) return null;

  const currentIndex = WORKFLOW_STEPS.findIndex((s) => s.id === currentRoute);
  const prevStep = currentIndex > 0 ? WORKFLOW_STEPS[currentIndex - 1] : null;
  const nextStep = currentIndex < WORKFLOW_STEPS.length - 1 ? WORKFLOW_STEPS[currentIndex + 1] : null;

  return (
    <div
      className={`border-b px-4 py-2.5 transition-colors select-none ${
        isDarkTheme ? 'bg-slate-900/90 border-slate-800' : 'bg-blue-50/70 border-blue-100'
      }`}
    >
      {/* Top Banner with Step Number and Title */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-blue-600 text-white shadow-xs">
            {isMr ? `टप्पा ${currentStep.stepNumber}` : `STEP ${currentStep.stepNumber}`}
          </span>
          <h2 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
            {isMr ? currentStep.titleMr : currentStep.titleEn}
          </h2>
        </div>

        {/* Progress Fraction */}
        <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">
          {currentStep.num} / {WORKFLOW_STEPS.length}
        </span>
      </div>

      {/* Exact Marathi Description from prompt */}
      <p className="text-[10.5px] leading-tight text-slate-600 dark:text-slate-300 mb-2 font-medium">
        {isMr ? currentStep.descMr : currentStep.descEn}
      </p>

      {/* 10 Step Interactive Indicator Dots / Bar */}
      <div className="flex items-center justify-between gap-1 pt-1">
        {WORKFLOW_STEPS.map((step, idx) => {
          const isDone = idx < currentIndex;
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              title={`${step.stepNumber}. ${isMr ? step.titleMr : step.titleEn}`}
              className={`h-2 flex-1 rounded-full transition-all ${
                isCurrent
                  ? 'bg-blue-600 ring-2 ring-blue-400 ring-offset-1 dark:ring-offset-slate-900'
                  : isDone
                  ? 'bg-emerald-500'
                  : isDarkTheme
                  ? 'bg-slate-700/80 hover:bg-slate-600'
                  : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
