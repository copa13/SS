import React, { useState } from 'react';
import {
  Smartphone,
  Moon,
  Sun,
  Code,
  Layers,
  Sparkles,
  RefreshCw,
  AlertTriangle,
  FolderOpen,
  FileText,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  Info,
  LogIn,
  LogOut,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import {
  mockStudentProfile,
  aptitudeQuestions,
  mockSkills,
  mockCareerMatches,
  mockSkillGaps,
  mockPathwayModules,
  mockProjects,
  mockReadinessPillars,
  initialGuidanceMessages,
} from './data/mockData';
import { AndroidPhoneFrame } from './components/AndroidPhoneFrame';
import { M3BottomNav, M3LoadingState, M3EmptyState, M3ErrorState } from './components/M3CommonComponents';
import { SplashScreenView } from './components/screens/SplashScreenView';
import { LoginScreenView } from './components/screens/LoginScreenView';
import { EnterNameScreenView } from './components/screens/EnterNameScreenView';
import { EnterAgeScreenView } from './components/screens/EnterAgeScreenView';
import { EnterLocationScreenView } from './components/screens/EnterLocationScreenView';
import { EnterEducationScreenView } from './components/screens/EnterEducationScreenView';
import { HomeScreenView } from './components/screens/HomeScreenView';
import { ProfileScreenView } from './components/screens/ProfileScreenView';
import { AptitudeAssessmentView } from './components/screens/AptitudeAssessmentView';
import { SkillAssessmentView } from './components/screens/SkillAssessmentView';
import { AICareerGuidanceView } from './components/screens/AICareerGuidanceView';
import { CareerMatchView } from './components/screens/CareerMatchView';
import { SkillGapView } from './components/screens/SkillGapView';
import { LearningPathwayView } from './components/screens/LearningPathwayView';
import { PracticalProjectsView } from './components/screens/PracticalProjectsView';
import { CareerReadinessView } from './components/screens/CareerReadinessView';
import { ReadinessReportView } from './components/screens/ReadinessReportView';
import { CodeInspectorDrawer } from './components/CodeInspectorDrawer';
import { StudentProfile, GuidanceMessage } from './types/career';
import confetti from 'canvas-confetti';

export default function App() {
  // Navigation & Screen selection
  const [currentRoute, setCurrentRoute] = useState<string>('splash');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [deviceSize, setDeviceSize] = useState<'pixel' | 'galaxy' | 'compact'>('pixel');
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [language, setLanguage] = useState<'mr' | 'en'>('en');
  const [screenState, setScreenState] = useState<'normal' | 'loading' | 'empty' | 'error'>('normal');
  const [isCodeDrawerOpen, setIsCodeDrawerOpen] = useState<boolean>(false);

  // Dynamic application state
  const [profile, setProfile] = useState<StudentProfile>(mockStudentProfile);
  const [skills, setSkills] = useState(mockSkills);
  const [projects, setProjects] = useState(mockProjects);
  const [pathwayModules, setPathwayModules] = useState(mockPathwayModules);
  const [guidanceMessages, setGuidanceMessages] = useState<GuidanceMessage[]>(initialGuidanceMessages);

  const isMr = language === 'mr';

  // Complete list of screens including Splash + 00 Login + 10 sequential stages
  const screenList = [
    {
      id: 'splash',
      stepNum: 'स्पलॅश',
      name: isMr ? 'स्पलॅश स्क्रीन (Tree & Monkey Animation)' : 'Splash Screen (Tree & Monkey Animation)',
      category: isMr ? 'स्वागत' : 'Intro',
      desc: isMr
        ? 'हिरवेगार झाड, फांद्यांवरून खाली येणारे माकड, "Hi there students" आणि लॉगिन स्क्रीन ओढणारे ॲनिमेशन.'
        : 'Big lush tree, monkey descending from branches, "Hi there students" and pull-down login animation.',
      kotlinFile: 'SplashScreen.kt',
    },
    {
      id: 'login',
      stepNum: '००',
      name: isMr ? '००. SIS लॉगिन (Phone / Gmail)' : '00. SIS Login (Phone / Gmail)',
      category: isMr ? 'प्रवेश' : 'Auth',
      desc: isMr
        ? 'SIS - स्वच्छ डिझाइन, Phone Number किंवा Gmail वर Send OTP.'
        : 'SIS - Clean design, Send OTP via Phone Number or Gmail.',
      kotlinFile: 'LoginScreen.kt',
    },
    {
      id: 'enter-name',
      stepNum: '०.१',
      name: isMr ? 'Enter Your Full Name' : 'Enter Your Full Name',
      category: isMr ? 'नाव' : 'Name',
      desc: isMr
        ? 'स्वच्छ स्क्रीन: फक्त विद्यार्थ्याचे नाव प्रविष्ट करून Next टॅप करा.'
        : 'Clean screen: Enter full name and tap Next.',
      kotlinFile: 'EnterNameScreen.kt',
    },
    {
      id: 'enter-age',
      stepNum: '०.२',
      name: isMr ? 'Age किंवा Date of Birth' : 'Age or Date of Birth',
      category: isMr ? 'वय' : 'Age',
      desc: isMr
        ? 'विद्यार्थ्याचे वय किंवा जन्मतारीख प्रविष्ट करा अथवा "skip this question" निवडा.'
        : 'Enter age or date of birth, or skip this question.',
      kotlinFile: 'EnterAgeScreen.kt',
    },
    {
      id: 'enter-location',
      stepNum: '०.३',
      name: isMr ? 'Address (State, District, Taluka, Village)' : 'Address (State, District, Taluka, Village)',
      category: isMr ? 'पत्ता' : 'Address',
      desc: isMr
        ? 'पत्ता प्रविष्ट करा: State, District, Taluka आणि Village.'
        : 'Enter address details: State, District, Taluka, and Village.',
      kotlinFile: 'EnterLocationScreen.kt',
    },
    {
      id: 'enter-education',
      stepNum: '०.४',
      name: isMr ? 'Current Education Level' : 'Current Education Level',
      category: isMr ? 'शिक्षण' : 'Education',
      desc: isMr
        ? 'सध्याचे शिक्षण स्तर (10th, 12th, ITI, Diploma, Graduation, PG, इतर) निवडा.'
        : 'Select Current Education Level (10th, 12th, ITI, Diploma, etc.).',
      kotlinFile: 'EnterEducationScreen.kt',
    },
    {
      id: 'home',
      stepNum: '—',
      name: isMr ? 'डॅशबोर्ड / मुख्यपृष्ठ' : 'Dashboard / Home',
      category: isMr ? 'आढावा' : 'Overview',
      desc: isMr
        ? '१० टप्प्यांचा संपूर्ण करिअर प्रवास आणि मुख्य प्रगती आढावा.'
        : 'Complete 10-step career roadmap overview.',
      kotlinFile: 'HomeScreen.kt',
    },
    {
      id: 'profile',
      stepNum: '०१',
      name: isMr ? '०१. विद्यार्थी प्रोफाइल' : '01. Student Profile',
      category: isMr ? 'नोंदणी' : 'Profile',
      desc: isMr
        ? 'विद्यार्थ्याचं नाव, शिक्षण, आवडी, सध्याची skills आणि career preferences नोंदवणे.'
        : 'Register student name, education, interests, current skills, and career preferences.',
      kotlinFile: 'StudentProfileScreen.kt',
    },
    {
      id: 'aptitude',
      stepNum: '०२',
      name: isMr ? '०२. आवड आणि ॲप्टिट्यूड चाचणी' : '02. Interest & Aptitude Assessment',
      category: isMr ? 'चाचणी' : 'Assessment',
      desc: isMr
        ? 'प्रश्नांची उत्तरं घेऊन विद्यार्थ्याची आवड, aptitude आणि विचार करण्याची क्षमता समजून घेणे.'
        : 'Evaluate student interests, cognitive thinking, and aptitudes via structured questions.',
      kotlinFile: 'AptitudeAssessmentScreen.kt',
    },
    {
      id: 'skills',
      stepNum: '०३',
      name: isMr ? '०३. कौशल्य मूल्यमापन' : '03. Skill Assessment',
      category: isMr ? 'मूल्यमापन' : 'Skills',
      desc: isMr
        ? 'विद्यार्थ्याच्या technical आणि professional skills तपासून प्रत्येक skill चा score तयार करणे.'
        : 'Assess technical and professional skills to generate individual competency scores.',
      kotlinFile: 'SkillAssessmentScreen.kt',
    },
    {
      id: 'guidance',
      stepNum: '०४',
      name: isMr ? '०४. AI करिअर मार्गदर्शन' : '04. AI Career Guidance',
      category: isMr ? 'मार्गदर्शन' : 'Guidance',
      desc: isMr
        ? 'Profile, aptitude, education आणि skills यांच्या आधारे योग्य career पर्याय सुचवणे.'
        : 'Recommend suitable career paths based on profile, aptitude, education, and skills.',
      kotlinFile: 'AICareerGuidanceScreen.kt',
    },
    {
      id: 'matches',
      stepNum: '०५',
      name: isMr ? '०५. करिअर मॅच व स्पष्टीकरण' : '05. Career Match & Explanation',
      category: isMr ? 'शोध' : 'Discovery',
      desc: isMr
        ? 'Career पर्यायांचा suitability score दाखवणे आणि प्रत्येक career का योग्य वाटतो ते समजावणे.'
        : 'Show suitability match scores and explain why each career fits the student.',
      kotlinFile: 'CareerMatchScreen.kt',
    },
    {
      id: 'skillgap',
      stepNum: '०६',
      name: isMr ? '०६. कौशल्यातील त्रुटी (Skill-Gap)' : '06. Skill-Gap Identification',
      category: isMr ? 'विश्लेषण' : 'Analysis',
      desc: isMr
        ? 'निवडलेल्या career साठी लागणाऱ्या skills आणि विद्यार्थ्याच्या सध्याच्या skills मधील फरक शोधणे.'
        : 'Identify gaps between target career requirements and current student skills.',
      kotlinFile: 'SkillGapScreen.kt',
    },
    {
      id: 'pathway',
      stepNum: '०७',
      name: isMr ? '०७. शिक्षण ते करिअर मार्ग' : '07. Learning-to-Career Pathway',
      category: isMr ? 'रोडमॅप' : 'Roadmap',
      desc: isMr
        ? 'काय शिकायचं, कोणत्या क्रमाने शिकायचं आणि पुढे कोणता टप्पा पूर्ण करायचा हे दाखवणे.'
        : 'Roadmap showing what to learn, in what order, and what milestone to achieve next.',
      kotlinFile: 'LearningPathwayScreen.kt',
    },
    {
      id: 'projects',
      stepNum: '०८',
      name: isMr ? '०८. प्रात्यक्षिक प्रकल्प व प्रगती' : '08. Practical Projects & Progress',
      category: isMr ? 'प्रकल्प' : 'Projects',
      desc: isMr
        ? 'Skills चा सराव करण्यासाठी projects देणे आणि त्यांची प्रगती track करणे.'
        : 'Provide hands-on projects to practice skills and track milestone progress.',
      kotlinFile: 'PracticalProjectsScreen.kt',
    },
    {
      id: 'readiness',
      stepNum: '०९',
      name: isMr ? '०९. पुनर्मूल्यांकन व सुधारणा' : '09. Re-assessment & Improvement',
      category: isMr ? 'सज्जता' : 'Readiness',
      desc: isMr
        ? 'पुन्हा assessment घेऊन आधीच्या आणि आताच्या scores मधील बदल पाहणे.'
        : 'Re-assess to visualize score growth, comparing before vs after improvement.',
      kotlinFile: 'CareerReadinessScreen.kt',
    },
    {
      id: 'report',
      stepNum: '१०',
      name: isMr ? '१०. करिअर सज्जता अहवाल (PDF)' : '10. Career Readiness Report (PDF)',
      category: isMr ? 'अहवाल' : 'Report',
      desc: isMr
        ? 'Readiness score, strengths, weaknesses, remaining gaps आणि पुढील recommendations असलेला report व PDF.'
        : 'Comprehensive report with readiness index, strengths, gaps, and PDF export.',
      kotlinFile: 'CareerReadinessReportScreen.kt',
    },
  ];

  // Screen state change handlers
  const handleUpdateProfile = (updated: Partial<StudentProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const handleUpdateSkillLevel = (skillId: string, level: number) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === skillId ? { ...s, currentLevel: level } : s))
    );
  };

  const handleToggleProjectMilestone = (projectId: string, milestoneId: string) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id !== projectId) return proj;
        const updatedMilestones = proj.milestones.map((m) =>
          m.id === milestoneId ? { ...m, isDone: !m.isDone } : m
        );
        const doneCount = updatedMilestones.filter((m) => m.isDone).length;
        const progressPercentage = Math.round((doneCount / updatedMilestones.length) * 100);
        return {
          ...proj,
          milestones: updatedMilestones,
          progressPercentage,
          status: progressPercentage === 100 ? 'Completed' : 'In Progress',
        };
      })
    );
  };

  const handleTogglePathwayItem = (moduleId: string, itemId: string) => {
    setPathwayModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== moduleId) return mod;
        const updatedItems = mod.items.map((item) =>
          item.id === itemId ? { ...item, isCompleted: !item.isCompleted } : item
        );
        const isCompleted = updatedItems.every((item) => item.isCompleted);
        return { ...mod, items: updatedItems, isCompleted };
      })
    );
  };

  const handleSendGuidanceMessage = (userQuery: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: GuidanceMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: userQuery,
      timestamp: time,
    };

    let reply = isMr
      ? `तुमच्या ${profile.major} पार्श्वभूमी आणि Kotlin मधील प्रमाणित कौशल्यांच्या आधारे ${profile.targetRole} हे करिअर तुमच्यासाठी सर्वात सुसंगत आहे.`
      : `Based on your ${profile.major} background and verified proficiency in Kotlin, your strongest trajectory remains ${profile.targetRole}.`;

    let actionCard: GuidanceMessage['actionCard'] = undefined;

    if (userQuery.toLowerCase().includes('gap') || userQuery.includes('कौशल्य') || userQuery.includes('कमी')) {
      reply = isMr
        ? `दोन महत्त्वाच्या कौशल्यांची कमतरता आढळली आहे: Cloud Deployments (Docker) आणि Vector Database Indexing. हे पूर्ण केल्यास तुमचा सज्जता स्कोअर ८४% वरून ९२% होईल.`
        : `I identified 2 high-priority skill gaps: Cloud Deployments (Docker/GCP) and Vector Database embeddings indexing. Closing these will elevate your readiness score to 92%.`;
      actionCard = {
        title: isMr ? '०६. कौशल्यातील त्रुटी विश्लेषण' : 'Inspect Skill-Gap Analysis',
        description: isMr ? 'गरजेची कौशल्ये vs सध्याची कौशल्ये' : 'View competency comparisons against hiring bars',
        route: 'skillgap',
        actionLabel: isMr ? 'त्रुटी टूल उघडा' : 'Open Skill-Gap Tool',
      };
    } else if (userQuery.toLowerCase().includes('project') || userQuery.includes('प्रकल्प')) {
      reply = isMr
        ? `AI ॲप्लिकेशन इंजिनीअर पदासाठी तुमचा Semantic Search प्रकल्प अतिशय चांगला आहे. EYC Native ॲप पूर्ण केल्यास पूर्ण पोर्टफोलिओ तयार होईल.`
        : `For junior AI Application Engineering roles, your current Semantic Search project is a strong highlight. Finishing the capstone EYC native mobile app will provide complete verifiable proof.`;
      actionCard = {
        title: isMr ? '०८. प्रॅक्टिकल प्रोजेक्ट्स' : 'Practical Project Tracker',
        description: isMr ? 'टप्पे आणि GitHub कोड' : 'Track milestones and link GitHub code repositories',
        route: 'projects',
        actionLabel: isMr ? 'प्रकल्प पहा' : 'View Projects',
      };
    } else if (userQuery.toLowerCase().includes('readiness') || userQuery.includes('अहवाल') || userQuery.includes('report')) {
      reply = isMr
        ? `तुमचा एकूण करिअर सज्जता इंडेक्स ८४% आहे. तुम्ही आता अधिकृत स्वाक्षरी केलेला PDF अहवाल डाऊनलोड करू शकता.`
        : `Your overall career readiness index is 84%. You have strong aptitude alignment (92%). You can generate an official signed PDF report for mentors or recruiters.`;
      actionCard = {
        title: isMr ? '१०. करिअर सज्जता अहवाल (PDF)' : 'Career Readiness Report',
        description: isMr ? 'अधिकृत अहवाल व PDF एक्सपोर्ट' : 'Official verified student readiness summary with PDF export',
        route: 'report',
        actionLabel: isMr ? 'अहवाल पहा' : 'View Official Report',
      };
    }

    const aiReplyMsg: GuidanceMessage = {
      id: `ai_${Date.now() + 1}`,
      sender: 'ai',
      text: reply,
      timestamp: time,
      actionCard,
    };

    setGuidanceMessages((prev) => [...prev, userMsg, aiReplyMsg]);
  };

  const handleReAssess = () => {
    setProfile((prev) => ({
      ...prev,
      overallReadinessScore: Math.min(prev.overallReadinessScore + 4, 98),
      completedAssessmentsCount: prev.completedAssessmentsCount + 1,
    }));
  };

  const handleOtpVerified = (contactInfo: { contact: string; method: 'phone' | 'gmail' }) => {
    setIsLoggedIn(true);
    setProfile((prev) => ({
      ...prev,
      email: contactInfo.contact,
    }));
    setCurrentRoute('enter-name');
  };

  const handleNameSubmitted = (enteredName: string, avatarUrl?: string) => {
    setProfile((prev) => ({
      ...prev,
      name: enteredName,
      ...(avatarUrl ? { avatarUrl } : {}),
    }));
    setCurrentRoute('enter-age');
  };

  const handleAgeSubmitted = (data: { age?: string; dateOfBirth?: string }) => {
    setProfile((prev) => ({
      ...prev,
      ...(data.age ? { age: data.age } : {}),
      ...(data.dateOfBirth ? { dateOfBirth: data.dateOfBirth } : {}),
    }));
    setCurrentRoute('enter-location');
  };

  const handleAgeSkipped = () => {
    setCurrentRoute('home');
  };

  const handleLocationSubmitted = (data: {
    state: string;
    district: string;
    taluka: string;
    village: string;
    fullLocation: string;
  }) => {
    setProfile((prev) => ({
      ...prev,
      location: data.fullLocation || prev.location,
      state: data.state || prev.state,
      district: data.district || prev.district,
      taluka: data.taluka || prev.taluka,
      village: data.village || prev.village,
    }));
    setCurrentRoute('enter-education');
  };

  const handleEducationSubmitted = (educationLevel: string) => {
    setProfile((prev) => ({
      ...prev,
      educationLevel,
    }));
    confetti({ particleCount: 50, spread: 60 });
    setCurrentRoute('home');
  };

  // Render active screen inside Android frame
  const renderScreenContent = () => {
    if (screenState === 'loading') {
      return <M3LoadingState isDarkTheme={isDarkTheme} />;
    }
    if (screenState === 'empty') {
      return (
        <M3EmptyState
          title={isMr ? 'माहिती उपलब्ध नाही' : 'No Data Recorded'}
          description={
            isMr
              ? 'तुम्ही अजून ही चाचणी सुरू केलेली नाही. खालील बटणावर टॅप करून तुमचे मूल्यांकन सुरू करा.'
              : 'You have not started this assessment yet. Tap below to begin your personalized career evaluation.'
          }
          actionLabel={isMr ? 'मूल्यांकन सुरू करा' : 'Start Evaluation'}
          onAction={() => setScreenState('normal')}
          isDarkTheme={isDarkTheme}
        />
      );
    }
    if (screenState === 'error') {
      return (
        <M3ErrorState
          onRetry={() => setScreenState('normal')}
          isDarkTheme={isDarkTheme}
        />
      );
    }

    // Explicit Route Rendering
    switch (currentRoute) {
      case 'splash':
        return (
          <SplashScreenView
            onContinue={() => setCurrentRoute('login')}
            language={language}
            onLanguageChange={(l) => setLanguage(l)}
            isDarkTheme={isDarkTheme}
            onToggleTheme={(dark) => setIsDarkTheme(dark)}
          />
        );
      case 'login':
        return (
          <LoginScreenView
            onOtpVerified={handleOtpVerified}
            onBack={() => setCurrentRoute('splash')}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'enter-name':
        return (
          <EnterNameScreenView
            initialName={profile.name}
            initialAvatarUrl={profile.avatarUrl}
            onContinue={handleNameSubmitted}
            onBack={() => setCurrentRoute('login')}
            onSkip={() => setCurrentRoute('home')}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'enter-age':
        return (
          <EnterAgeScreenView
            initialAge={profile.age}
            initialDob={profile.dateOfBirth}
            avatarUrl={profile.avatarUrl}
            name={profile.name}
            onContinue={handleAgeSubmitted}
            onBack={() => setCurrentRoute('enter-name')}
            onSkip={handleAgeSkipped}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'enter-location':
        return (
          <EnterLocationScreenView
            initialState={profile.state}
            initialDistrict={profile.district}
            initialTaluka={profile.taluka}
            initialVillage={profile.village}
            initialLocation={profile.location}
            avatarUrl={profile.avatarUrl}
            name={profile.name}
            onContinue={handleLocationSubmitted}
            onBack={() => setCurrentRoute('enter-age')}
            onSkip={() => setCurrentRoute('home')}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'enter-education':
        return (
          <EnterEducationScreenView
            initialEducationLevel={profile.educationLevel}
            avatarUrl={profile.avatarUrl}
            name={profile.name}
            onContinue={handleEducationSubmitted}
            onBack={() => setCurrentRoute('enter-location')}
            onSkip={() => setCurrentRoute('home')}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'home':
        return (
          <HomeScreenView
            profile={profile}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
            onLanguageChange={(l) => setLanguage(l)}
            onToggleTheme={(dark) => setIsDarkTheme(dark)}
          />
        );
      case 'profile':
        return (
          <ProfileScreenView
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'aptitude':
        return (
          <AptitudeAssessmentView
            questions={aptitudeQuestions}
            onComplete={() => setCurrentRoute('skills')}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'skills':
        return (
          <SkillAssessmentView
            skills={skills}
            onUpdateSkillLevel={handleUpdateSkillLevel}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'guidance':
        return (
          <AICareerGuidanceView
            messages={guidanceMessages}
            onSendMessage={handleSendGuidanceMessage}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'matches':
        return (
          <CareerMatchView
            careers={mockCareerMatches}
            onSelectCareer={() => {}}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'skillgap':
        return (
          <SkillGapView
            targetRole={profile.targetRole}
            gapItems={mockSkillGaps}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'pathway':
        return (
          <LearningPathwayView
            modules={pathwayModules}
            onToggleItem={handleTogglePathwayItem}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'projects':
        return (
          <PracticalProjectsView
            projects={projects}
            onToggleMilestone={handleToggleProjectMilestone}
            onSubmitProject={() => {}}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'readiness':
        return (
          <CareerReadinessView
            overallScore={profile.overallReadinessScore}
            targetRole={profile.targetRole}
            pillars={mockReadinessPillars}
            onReAssess={handleReAssess}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      case 'report':
        return (
          <ReadinessReportView
            profile={profile}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
          />
        );
      default:
        return (
          <HomeScreenView
            profile={profile}
            onNavigate={(route) => setCurrentRoute(route)}
            isDarkTheme={isDarkTheme}
            language={language}
            onLanguageChange={(l) => setLanguage(l)}
            onToggleTheme={(dark) => setIsDarkTheme(dark)}
          />
        );
    }
  };

  const currentScreenMeta = screenList.find((s) => s.id === currentRoute) || screenList[1];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Application Header */}
      <header
        className={`h-16 border-b backdrop-blur-md px-4 lg:px-8 flex items-center justify-between gap-3 sticky top-0 z-40 transition-colors duration-300 ${
          isDarkTheme
            ? 'border-slate-800 bg-slate-900/90 text-white'
            : 'border-slate-200 bg-white/95 text-slate-900 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-sky-600 to-cyan-500 text-white flex items-center justify-center font-black tracking-tight shadow-md shadow-sky-500/20 text-sm">
            SIS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-tight">
                SIS — Smart Intelligence Students
              </h1>
              <span className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                isDarkTheme ? 'bg-sky-950 text-sky-300 border border-sky-800' : 'bg-sky-50 text-sky-700 border border-sky-200'
              }`}>
                Kotlin · Jetpack Compose · Material 3
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {isMr ? '१० टप्प्यांची करिअर मार्गदर्शन व कौशल्य प्रणाली' : '10-Step AI Career Guidance & Skill-Gap Platform'}
            </p>
          </div>
        </div>

        {/* Global Toolbar Actions */}
        <div className="flex items-center gap-2">
          {/* Splash Screen Button */}
          <button
            onClick={() => setCurrentRoute('splash')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
              currentRoute === 'splash'
                ? 'bg-sky-500 text-white border-sky-400 shadow-sm'
                : isDarkTheme
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
            title="स्पलॅश स्क्रीन पहा / View Splash Screen"
          >
            <span>👋</span>
            <span>{isMr ? 'स्पलॅश' : 'Splash'}</span>
          </button>

          {/* Login Screen Quick Toggle */}
          <button
            onClick={() => setCurrentRoute(currentRoute === 'login' ? 'profile' : 'login')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
              currentRoute === 'login'
                ? 'bg-sky-500 text-white border-sky-400 shadow-sm'
                : isDarkTheme
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <LogIn className="w-3.5 h-3.5 text-sky-400" />
            <span>{isMr ? 'लॉगिन स्क्रीन' : 'Login Screen'}</span>
          </button>

          {/* Language Switcher (मराठी MR / English EN) */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
              isDarkTheme
                ? 'bg-slate-800 hover:bg-slate-700 text-sky-300 border-slate-700'
                : 'bg-white hover:bg-slate-100 text-sky-600 border-slate-200 shadow-xs'
            }`}
            title="भाषा बदला / Switch Language"
          >
            <span className="text-[11px]">🌐</span>
            <span>{language === 'mr' ? 'मराठी (MR)' : 'English (EN)'}</span>
          </button>

          {/* Theme switch */}
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`p-2 rounded-xl transition-colors ${
              isDarkTheme
                ? 'bg-slate-800 hover:bg-slate-700 text-amber-400'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
            }`}
            title={isDarkTheme ? 'Switch to Material 3 Light' : 'Switch to Material 3 Dark'}
          >
            {isDarkTheme ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-500" />}
          </button>

          {/* Inspect Code Button */}
          <button
            onClick={() => setIsCodeDrawerOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <Code className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Kotlin Compose Code</span>
          </button>
        </div>
      </header>

      {/* Main Studio Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Control & 10-Step Navigator Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Workflow Stepper Card */}
          <div
            className={`p-4 rounded-3xl border shadow-xl space-y-3 transition-colors ${
              isDarkTheme
                ? 'bg-slate-900/80 border-slate-800 text-white'
                : 'bg-white border-slate-200/90 shadow-slate-100 text-slate-900'
            }`}
          >
            <div
              className={`flex items-center justify-between border-b pb-2 ${
                isDarkTheme ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                  isDarkTheme ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                <Layers className="w-4 h-4 text-sky-400" />
                <span>{isMr ? '१० टप्प्यांचा अचूक मार्ग (Workflow)' : '10-Step App Workflow'}</span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                  isDarkTheme
                    ? 'bg-sky-500/10 text-sky-400'
                    : 'bg-sky-50 text-sky-700 border border-sky-200 font-bold'
                }`}
              >
                {currentScreenMeta.kotlinFile}
              </span>
            </div>

            {/* Steps List */}
            <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
              {screenList.map((screen) => {
                const isActive = currentRoute === screen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      setCurrentRoute(screen.id);
                      setScreenState('normal');
                    }}
                    className={`w-full text-left p-2.5 rounded-2xl transition-all border flex items-start gap-2.5 ${
                      isActive
                        ? isDarkTheme
                          ? 'bg-sky-500/20 border-sky-500 text-white shadow-xs'
                          : 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20'
                        : isDarkTheme
                        ? 'bg-slate-800/40 border-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white'
                        : 'bg-slate-50/70 border-slate-100 hover:bg-slate-100/80 text-slate-700'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5 ${
                        isActive
                          ? isDarkTheme
                            ? 'bg-sky-500 text-white'
                            : 'bg-white text-sky-600 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 text-slate-400 border border-slate-700'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      {screen.stepNum}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold truncate">
                          {screen.name}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded ml-1 ${
                            isActive && !isDarkTheme
                              ? 'bg-white/20 text-white font-bold'
                              : isDarkTheme
                              ? 'bg-slate-800 text-slate-400'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {screen.category}
                        </span>
                      </div>
                      <p
                        className={`text-[10px] mt-0.5 line-clamp-1 leading-snug ${
                          isActive && !isDarkTheme
                            ? 'text-white/90'
                            : isDarkTheme
                            ? 'text-slate-400'
                            : 'text-slate-500'
                        }`}
                      >
                        {screen.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Simulation Controls */}
          <div className="p-4 rounded-3xl bg-slate-900/60 border border-slate-800 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300">
                {isMr ? 'सिम्युलेशन स्क्रीन स्थिती (State):' : 'Screen States:'}
              </span>
              <div className="flex gap-1">
                {(['normal', 'loading', 'empty', 'error'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setScreenState(st)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase transition-colors ${
                      screenState === st
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
              <span className="font-bold text-slate-300">
                {isMr ? 'डिव्हाइस आकार:' : 'Android Viewport:'}
              </span>
              <div className="flex gap-1">
                {(['pixel', 'galaxy', 'compact'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setDeviceSize(sz)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold capitalize transition-colors ${
                      deviceSize === sz
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {sz === 'pixel' ? 'Pixel 8' : sz === 'galaxy' ? 'Galaxy S24' : 'Compact'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Phone Simulator Frame (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <AndroidPhoneFrame isDarkTheme={isDarkTheme} deviceSize={deviceSize}>
            {/* Screen Content Render */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {renderScreenContent()}
            </div>

            {/* Material 3 Bottom Nav shown for core tabs when not on Login, Splash, Enter Name, Enter Age, Enter Location, or Enter Education */}
            {currentRoute !== 'login' &&
              currentRoute !== 'splash' &&
              currentRoute !== 'enter-name' &&
              currentRoute !== 'enter-age' &&
              currentRoute !== 'enter-location' &&
              currentRoute !== 'enter-education' && (
              <M3BottomNav
                currentTab={
                  currentRoute === 'home'
                    ? 'home'
                    : currentRoute === 'aptitude' || currentRoute === 'skills'
                    ? 'assessments'
                    : currentRoute === 'matches' || currentRoute === 'guidance'
                    ? 'matches'
                    : currentRoute === 'pathway' || currentRoute === 'projects' || currentRoute === 'skillgap'
                    ? 'pathway'
                    : 'profile'
                }
                onSelectTab={(tab) => {
                  setScreenState('normal');
                  if (tab === 'home') setCurrentRoute('home');
                  if (tab === 'assessments') setCurrentRoute('aptitude');
                  if (tab === 'matches') setCurrentRoute('matches');
                  if (tab === 'pathway') setCurrentRoute('pathway');
                  if (tab === 'profile') setCurrentRoute('profile');
                }}
                isDarkTheme={isDarkTheme}
              />
            )}
          </AndroidPhoneFrame>
        </div>
      </main>

      {/* Kotlin Code Inspector Drawer */}
      <CodeInspectorDrawer
        isOpen={isCodeDrawerOpen}
        onClose={() => setIsCodeDrawerOpen(false)}
        activeRouteKotlinFile={currentScreenMeta.kotlinFile}
      />
    </div>
  );
}
