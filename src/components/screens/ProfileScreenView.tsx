import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  Pencil,
  User,
  Camera,
  Calendar,
  MapPin,
  Globe,
  GraduationCap,
  Briefcase,
  Target,
  Award,
  Clock,
  Sparkles,
  BookOpen,
  Building,
  Plus,
  Save,
  CheckCircle2,
  Compass,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { StudentProfile } from '../../types/career';

interface ProfileScreenViewProps {
  profile: StudentProfile;
  onUpdateProfile: (updated: Partial<StudentProfile>) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const ProfileScreenView: React.FC<ProfileScreenViewProps> = ({
  profile,
  onUpdateProfile,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 1. Full Name
  const [name, setName] = useState(profile.name || 'Atharva Patil');

  // Avatar Photo (Managed via camera icon on avatar)
  const [avatarUrl, setAvatarUrl] = useState(
    profile.avatarUrl ||
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'
  );

  // 2. Age (Age किंवा Date of Birth)
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth || '2004-05-18');
  const [age, setAge] = useState(profile.age || '20');

  // 3. City / State (Address details)
  const [location, setLocation] = useState(profile.location || 'Pune, Maharashtra');
  const [stateVal, setStateVal] = useState(profile.state || 'Maharashtra');
  const [district, setDistrict] = useState(profile.district || 'Pune');
  const [taluka, setTaluka] = useState(profile.taluka || 'Haveli');
  const [village, setVillage] = useState(profile.village || 'Pune City');

  // 4. Preferred Language
  const [preferredLanguage, setPreferredLanguage] = useState(
    profile.preferredLanguage || 'English'
  );
  const [customLanguage, setCustomLanguage] = useState('');

  // 5. Current Education Level
  const [educationLevel, setEducationLevel] = useState(profile.educationLevel || 'Diploma');

  // 6. Education Status
  const [educationStatus, setEducationStatus] = useState(profile.educationStatus || 'Studying');

  // 7. Course / Stream
  const [stream, setStream] = useState(profile.stream || 'Computer Science');
  const [customStream, setCustomStream] = useState('');

  // 8. Institute Name
  const [university, setUniversity] = useState(profile.university || 'Government Polytechnic Pune');

  // 9. Passing / Expected Year
  const [graduationYear, setGraduationYear] = useState(profile.graduationYear || '2026');

  // 10. Academic Performance
  const [gpa, setGpa] = useState(profile.gpa || '8.4 CGPA (82%)');

  // 11. Career Interests
  const [careerInterests, setCareerInterests] = useState<string[]>(
    profile.careerInterestsList || ['Software', 'Web/App Development', 'AI']
  );

  // 12. Current Skills
  const [currentSkills, setCurrentSkills] = useState<string[]>(
    profile.currentSkillsList || ['Python', 'JavaScript', 'HTML/CSS', 'SQL']
  );
  const [newSkillInput, setNewSkillInput] = useState('');

  // 13. Skill Level
  const [skillLevel, setSkillLevel] = useState(profile.skillLevel || 'Intermediate');

  // 14. Interests & Strengths
  const [strengths, setStrengths] = useState<string[]>(
    profile.strengthsList || ['Coding', 'Logical Thinking', 'Problem Solving']
  );

  // 15. Career Goal
  const [careerGoalType, setCareerGoalType] = useState(profile.careerGoalType || 'Job');

  // 16. Preferred Industry
  const [preferredIndustry, setPreferredIndustry] = useState(profile.preferredIndustry || 'IT');

  // 17. Preferred Work Mode
  const [workMode, setWorkMode] = useState(profile.workMode || 'Hybrid');

  // 18. Learning Preference
  const [learningPreference, setLearningPreference] = useState(
    profile.learningPreference || 'Practical Projects'
  );

  // 19. Daily Learning Time
  const [dailyLearningTime, setDailyLearningTime] = useState(
    profile.dailyLearningTime || '1–2 hours'
  );

  // 20. Career Experience
  const [careerExperience, setCareerExperience] = useState(profile.careerExperience || 'Fresher');

  // 21. Short-Term Goal
  const [shortTermGoal, setShortTermGoal] = useState(
    profile.shortTermGoal ||
      'Build full-stack web applications and master Python programming.'
  );

  // 22. Long-Term Career Goal
  const [longTermGoal, setLongTermGoal] = useState(
    profile.longTermGoal || 'Work as a Senior Software Developer or AI Engineer in a top tech company.'
  );

  // 23. Current Challenges
  const [currentChallenges, setCurrentChallenges] = useState<string[]>(
    profile.currentChallenges || ['Interview Preparation', 'Experience is low']
  );
  const [customChallenge, setCustomChallenge] = useState('');

  // 24. Additional Notes
  const [additionalNotes, setAdditionalNotes] = useState(
    profile.additionalNotes || 'Interested in practical hands-on projects and career guidance.'
  );

  // Keep internal state in sync with profile prop changes
  useEffect(() => {
    if (profile.name) setName(profile.name);
    if (profile.avatarUrl) setAvatarUrl(profile.avatarUrl);
    if (profile.dateOfBirth) setDateOfBirth(profile.dateOfBirth);
    if (profile.age) setAge(profile.age);
    if (profile.location) setLocation(profile.location);
    if (profile.state) setStateVal(profile.state);
    if (profile.district) setDistrict(profile.district);
    if (profile.taluka) setTaluka(profile.taluka);
    if (profile.village) setVillage(profile.village);
    if (profile.preferredLanguage) setPreferredLanguage(profile.preferredLanguage);
    if (profile.educationLevel) setEducationLevel(profile.educationLevel);
    if (profile.educationStatus) setEducationStatus(profile.educationStatus);
    if (profile.stream) setStream(profile.stream);
    if (profile.university) setUniversity(profile.university);
    if (profile.graduationYear) setGraduationYear(profile.graduationYear);
    if (profile.gpa) setGpa(profile.gpa);
    if (profile.careerInterestsList) setCareerInterests(profile.careerInterestsList);
    if (profile.currentSkillsList) setCurrentSkills(profile.currentSkillsList);
    if (profile.skillLevel) setSkillLevel(profile.skillLevel);
    if (profile.strengthsList) setStrengths(profile.strengthsList);
    if (profile.careerGoalType) setCareerGoalType(profile.careerGoalType);
    if (profile.preferredIndustry) setPreferredIndustry(profile.preferredIndustry);
    if (profile.workMode) setWorkMode(profile.workMode);
    if (profile.learningPreference) setLearningPreference(profile.learningPreference);
    if (profile.dailyLearningTime) setDailyLearningTime(profile.dailyLearningTime);
    if (profile.careerExperience) setCareerExperience(profile.careerExperience);
    if (profile.shortTermGoal) setShortTermGoal(profile.shortTermGoal);
    if (profile.longTermGoal) setLongTermGoal(profile.longTermGoal);
    if (profile.currentChallenges) setCurrentChallenges(profile.currentChallenges);
    if (profile.additionalNotes) setAdditionalNotes(profile.additionalNotes);
  }, [profile]);

  // Auto calculate age when DOB changes
  const handleDobChange = (dobString: string) => {
    setDateOfBirth(dobString);
    if (!dobString) return;
    const birthDate = new Date(dobString);
    if (!isNaN(birthDate.getTime())) {
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      if (calculatedAge >= 0 && calculatedAge <= 120) {
        setAge(calculatedAge.toString());
      }
    }
  };

  // Image file upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setAvatarUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Avatar presets
  const avatarPresets = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
  ];

  // Dynamic Profile Completion Calculation
  const calculateCompletion = (): number => {
    let filled = 0;
    const totalFields = 24;
    if (name) filled++;
    if (age || dateOfBirth) filled++;
    if (location || stateVal || district) filled++;
    if (preferredLanguage) filled++;
    if (educationLevel) filled++;
    if (educationStatus) filled++;
    if (stream) filled++;
    if (university) filled++;
    if (graduationYear) filled++;
    if (gpa) filled++;
    if (careerInterests.length > 0) filled++;
    if (currentSkills.length > 0) filled++;
    if (skillLevel) filled++;
    if (strengths.length > 0) filled++;
    if (careerGoalType) filled++;
    if (preferredIndustry) filled++;
    if (workMode) filled++;
    if (learningPreference) filled++;
    if (dailyLearningTime) filled++;
    if (careerExperience) filled++;
    if (shortTermGoal) filled++;
    if (longTermGoal) filled++;
    if (currentChallenges.length > 0) filled++;
    if (additionalNotes) filled++;

    return Math.round((filled / totalFields) * 100);
  };

  const completionPercentage = calculateCompletion();

  // Multi-select toggle helper
  const toggleSelection = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((x) => x !== item));
    } else {
      setList([...list, item]);
    }
  };

  // Add custom skill
  const handleAddSkill = () => {
    if (!newSkillInput.trim()) return;
    if (!currentSkills.includes(newSkillInput.trim())) {
      setCurrentSkills([...currentSkills, newSkillInput.trim()]);
    }
    setNewSkillInput('');
  };

  // Save profile updates
  const handleSaveProfile = () => {
    const formattedLocation = [village, taluka, district, stateVal].filter(Boolean).join(', ') || location;

    onUpdateProfile({
      name,
      avatarUrl,
      age,
      dateOfBirth,
      location: formattedLocation,
      state: stateVal,
      district,
      taluka,
      village,
      preferredLanguage: preferredLanguage === 'Other' && customLanguage ? customLanguage : preferredLanguage,
      educationLevel,
      educationStatus,
      stream: stream === 'Other' && customStream ? customStream : stream,
      university,
      graduationYear,
      gpa,
      careerInterestsList: careerInterests,
      currentSkillsList: currentSkills,
      skillLevel,
      strengthsList: strengths,
      careerGoalType,
      preferredIndustry,
      workMode,
      learningPreference,
      dailyLearningTime,
      careerExperience,
      shortTermGoal,
      longTermGoal,
      currentChallenges:
        customChallenge && !currentChallenges.includes(customChallenge)
          ? [...currentChallenges, customChallenge]
          : currentChallenges,
      additionalNotes,
      profileCompletionProgress: completionPercentage,
    });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3500);
  };

  return (
    <div
      className={`flex-1 flex flex-col justify-between transition-colors duration-300 ${
        isDarkTheme ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div>
        {/* ========================================================================= */}
        {/* TOP HEADER: ONLY BACK ARROW ON LEFT, PROFILE IN CENTER */}
        {/* ========================================================================= */}
        <div
          className={`h-14 px-3 flex items-center justify-between border-b relative sticky top-0 z-30 transition-colors ${
            isDarkTheme
              ? 'bg-slate-900/95 border-slate-800 backdrop-blur-md'
              : 'bg-white/95 border-slate-200 backdrop-blur-md shadow-xs'
          }`}
        >
          {/* Top Left: ONLY Back Arrow */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer active:scale-95 ${
              isDarkTheme
                ? 'hover:bg-slate-800 text-slate-200'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title={isMr ? 'Back' : 'Back'}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center: Profile Title */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <h1 className="text-sm font-black tracking-tight text-slate-900 dark:text-white">
              {isMr ? 'प्रोफाईल' : 'Profile'}
            </h1>
          </div>

          {/* Right Placeholder to balance spacing */}
          <div className="w-9" />
        </div>

        {/* ========================================================================= */}
        {/* SUBHEADER ROW: ON LEFT SIDE -> "Edit your profile" WITH PENCIL ICON */}
        {/* ========================================================================= */}
        <div className="px-4 pt-3 pb-2 flex items-center justify-between gap-2">
          {/* Left Side: Edit your profile button with Pencil icon */}
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold border transition-all cursor-pointer active:scale-95 shadow-xs ${
              isEditing
                ? 'bg-sky-500 text-white border-sky-400 shadow-sky-500/20'
                : isDarkTheme
                ? 'bg-slate-900 border-slate-700 text-sky-400 hover:bg-slate-800 hover:border-sky-500'
                : 'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100 hover:border-sky-300'
            }`}
          >
            <Pencil className="w-3.5 h-3.5" />
            <span>Edit your profile</span>
          </button>

          {/* Right Action buttons if in Edit mode */}
          {isEditing && (
            <div className="flex items-center gap-2 animate-fadeIn">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                  isDarkTheme
                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isMr ? 'Cancel' : 'Cancel'}
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                className="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isMr ? 'Save' : 'Save'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Save success toast banner */}
        {saveSuccess && (
          <div className="mx-4 mb-2 p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-center gap-2 text-xs font-bold animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              {isMr
                ? 'Profile details saved successfully!'
                : 'Profile details saved successfully!'}
            </span>
          </div>
        )}

        {/* Profile Card Header Summary with Camera on Avatar */}
        <div className="px-4 pb-2">
          {/* Hidden File Input for photo upload */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          <div
            className={`p-4 rounded-3xl border shadow-sm ${
              isDarkTheme
                ? 'bg-slate-900/90 border-slate-800'
                : 'bg-white border-slate-200/80 shadow-slate-100/70'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative group shrink-0">
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-sky-400/50 shadow-md"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 p-1.5 bg-sky-500 text-white rounded-full text-[10px] shadow-sm hover:bg-sky-600 active:scale-90 transition-transform cursor-pointer"
                  title="Choose Profile Photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-extrabold text-slate-900 dark:text-white truncate">
                    {name || 'Student Name'}
                  </h2>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isDarkTheme
                        ? 'bg-sky-500/20 text-sky-400'
                        : 'bg-sky-50 text-sky-700 border border-sky-100'
                    }`}
                  >
                    {stream}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                  <span className="truncate">{location || [district, stateVal].filter(Boolean).join(', ')}</span>
                  <span>•</span>
                  <span>{educationLevel}</span>
                </p>

                {/* Preset Avatars quick selection row when editing */}
                {isEditing && (
                  <div className="flex items-center gap-1.5 mt-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400">Avatars:</span>
                    {avatarPresets.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Preset ${i}`}
                        onClick={() => setAvatarUrl(img)}
                        className={`w-6 h-6 rounded-lg object-cover cursor-pointer border transition-transform hover:scale-105 ${
                          avatarUrl === img ? 'border-sky-500 ring-1 ring-sky-400' : 'border-transparent opacity-70'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Profile Completion Bar */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>Profile Completion</span>
                </span>
                <span className="font-black text-sky-500 dark:text-sky-400">
                  {completionPercentage}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-sky-400 to-sky-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ALL PROFILE OPTIONS "EKAKHALI EK" (ENGLISH LABELS & ENGLISH NUMBERS 1..24) */}
        {/* (Photo selection removed from list, placed on avatar above) */}
        {/* ========================================================================= */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-270px)]">
          {/* Helper banner if currently in View Mode */}
          {!isEditing && (
            <div
              onClick={() => setIsEditing(true)}
              className={`p-3 rounded-2xl border flex items-center justify-between gap-2 text-xs cursor-pointer transition-all ${
                isDarkTheme
                  ? 'bg-sky-950/30 border-sky-900/60 text-sky-300 hover:bg-sky-950/50'
                  : 'bg-sky-50/70 border-sky-200 text-sky-800 hover:bg-sky-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Pencil className="w-4 h-4 text-sky-500 shrink-0" />
                <span className="font-semibold">
                  Click "Edit your profile" on the left to edit any details.
                </span>
              </div>
              <span className="text-[11px] font-bold underline shrink-0">
                Edit Now ➔
              </span>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* 1. Full Name */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-500" />
                <span>1. Full Name</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Text Field</span>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-semibold border transition-all ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-sky-400'
                    : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-400 focus:bg-white'
                }`}
              />
            ) : (
              <p className="text-xs font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                {name || <span className="text-slate-400 italic">Empty</span>}
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 2. Age (Age किंवा Date of Birth) */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                <span>2. Age</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Age or Date of Birth</span>
            </div>

            {isEditing ? (
              <div className="space-y-3">
                {/* Date of Birth on top */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Date of Birth (Select date to auto-calculate age):
                  </label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => handleDobChange(e.target.value)}
                    className={`w-full px-3 py-2 rounded-2xl text-xs font-semibold border ${
                      isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                {/* Age below */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Age:
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    className={`w-full px-3.5 py-2 rounded-2xl text-xs font-semibold border ${
                      isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                <div>
                  <span className="text-[11px] text-slate-400 block">Date of Birth (DOB)</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {dateOfBirth || '—'}
                  </span>
                </div>
                <div className="border-l border-slate-200 dark:border-slate-700 pl-3">
                  <span className="text-[11px] text-slate-400 block">Age</span>
                  <span className="text-xs font-bold text-sky-500">
                    {age ? `${age} years` : '—'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 3. City / State (Address Details) */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>3. City / State</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Text Field</span>
            </div>

            {isEditing ? (
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={stateVal}
                      onChange={(e) => setStateVal(e.target.value)}
                      placeholder="State"
                      className={`w-full px-3 py-2 rounded-2xl text-xs font-semibold border ${
                        isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      District
                    </label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="District"
                      className={`w-full px-3 py-2 rounded-2xl text-xs font-semibold border ${
                        isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Taluka
                    </label>
                    <input
                      type="text"
                      value={taluka}
                      onChange={(e) => setTaluka(e.target.value)}
                      placeholder="Taluka"
                      className={`w-full px-3 py-2 rounded-2xl text-xs font-semibold border ${
                        isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Village / City
                    </label>
                    <input
                      type="text"
                      value={village}
                      onChange={(e) => setVillage(e.target.value)}
                      placeholder="Village / City"
                      className={`w-full px-3 py-2 rounded-2xl text-xs font-semibold border ${
                        isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Full Address / City & State
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Full Address / City & State"
                    className={`w-full px-3 py-2 rounded-2xl text-xs font-semibold border ${
                      isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>
                  {location || [village, taluka, district, stateVal].filter(Boolean).join(', ') || '—'}
                </span>
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 4. Preferred Language */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>4. Preferred Language</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Marathi, Hindi, English, Other</span>
            </div>

            {isEditing ? (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {['Marathi', 'Hindi', 'English', 'Other'].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setPreferredLanguage(lang)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        preferredLanguage === lang
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                {preferredLanguage === 'Other' && (
                  <input
                    type="text"
                    value={customLanguage}
                    onChange={(e) => setCustomLanguage(e.target.value)}
                    placeholder="Enter Preferred Language"
                    className={`w-full px-3 py-2 rounded-2xl text-xs border ${
                      isDarkTheme ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                )}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {preferredLanguage}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 5. Current Education Level */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
                <span>5. Current Education Level</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">10th, 12th, ITI, Diploma...</span>
            </div>

            {isEditing ? (
              <div className="flex flex-wrap gap-1.5">
                {['10th', '12th', 'ITI', 'Diploma', 'Graduation', 'Post-Graduation', 'Other'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setEducationLevel(lvl)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      educationLevel === lvl
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {educationLevel}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 6. Education Status */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
                <span>6. Education Status</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Studying, Completed, Discontinued</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-3 gap-2">
                {['Studying', 'Completed', 'Discontinued'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setEducationStatus(st)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      educationStatus === st
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
                {educationStatus}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 7. Course / Stream */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                <span>7. Course / Stream</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">COPA, IT, CS, Mech, Elec, Other</span>
            </div>

            {isEditing ? (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {['COPA', 'IT', 'Computer Science', 'Mechanical', 'Electrical', 'Other'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setStream(c)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        stream === c
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                {stream === 'Other' && (
                  <input
                    type="text"
                    value={customStream}
                    onChange={(e) => setCustomStream(e.target.value)}
                    placeholder="Course / Stream"
                    className={`w-full px-3 py-2 rounded-2xl text-xs border ${
                      isDarkTheme ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                )}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {stream}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 8. Institute Name (Optional) */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-sky-500" />
                <span>8. Institute Name</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Text Field — Optional</span>
            </div>

            {isEditing ? (
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Institute Name"
                className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-semibold border ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            ) : (
              <p className="text-xs font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                {university || <span className="text-slate-400 italic">Not specified (Optional)</span>}
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 9. Passing / Expected Year */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                <span>9. Passing / Expected Year</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Year Picker</span>
            </div>

            {isEditing ? (
              <select
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                className={`w-full px-3 py-2.5 rounded-2xl text-xs font-semibold border ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                {['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'].map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold">
                {graduationYear}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 10. Academic Performance (Optional) */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-500" />
                <span>10. Academic Performance</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Optional</span>
            </div>

            {isEditing ? (
              <input
                type="text"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                placeholder="Percentage, CGPA or Grade"
                className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-semibold border ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            ) : (
              <p className="text-xs font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                {gpa || <span className="text-slate-400 italic">Not specified (Optional)</span>}
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 11. Career Interests */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-500" />
                <span>11. Career Interests</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Multiple Selection</span>
            </div>

            {isEditing ? (
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Software',
                  'Web/App Development',
                  'AI',
                  'Data Science',
                  'Cybersecurity',
                  'Networking',
                  'Cloud',
                  'UI/UX',
                  'Database',
                  'Government Exams',
                  'Other',
                  'Not Sure Yet',
                ].map((ci) => {
                  const selected = careerInterests.includes(ci);
                  return (
                    <button
                      key={ci}
                      type="button"
                      onClick={() => toggleSelection(careerInterests, setCareerInterests, ci)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selected
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {ci} {selected && '✓'}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {careerInterests.length > 0 ? (
                  careerInterests.map((ci) => (
                    <span
                      key={ci}
                      className="px-2.5 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold"
                    >
                      {ci}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-400 italic">None selected</span>
                )}
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 12. Current Skills */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>12. Current Skills</span>
              </label>
              <span className="text-[10px] text-sky-500 font-bold">{currentSkills.length} Skills</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-2">
              {currentSkills.map((sk) => (
                <span
                  key={sk}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 border ${
                    isDarkTheme
                      ? 'bg-slate-800 border-slate-700 text-sky-400'
                      : 'bg-sky-50 border-slate-200 text-sky-800'
                  }`}
                >
                  <span>{sk}</span>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => setCurrentSkills(currentSkills.filter((x) => x !== sk))}
                      className="hover:text-red-500 text-xs ml-0.5 cursor-pointer"
                    >
                      ×
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditing && (
              <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    placeholder="Add skill"
                    className={`flex-1 px-3 py-1.5 rounded-xl text-xs border ${
                      isDarkTheme ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>

                {/* Quick Add Suggestions */}
                <div className="flex flex-wrap gap-1 text-[11px]">
                  <span className="text-slate-400 self-center">Suggestions:</span>
                  {['Python', 'Java', 'HTML/CSS', 'SQL', 'Git', 'Linux', 'Figma', 'Excel', 'Tally'].map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => {
                        if (!currentSkills.includes(sug)) setCurrentSkills([...currentSkills, sug]);
                      }}
                      className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-slate-700 cursor-pointer"
                    >
                      + {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 13. Skill Level */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-sky-500" />
                <span>13. Skill Level</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Beginner, Intermediate, Advanced</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-3 gap-2">
                {['Beginner', 'Intermediate', 'Advanced'].map((sl) => (
                  <button
                    key={sl}
                    type="button"
                    onClick={() => setSkillLevel(sl)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      skillLevel === sl
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {sl}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {skillLevel}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 14. Interests & Strengths */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-500" />
                <span>14. Interests & Strengths</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Multiple Selection</span>
            </div>

            {isEditing ? (
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Coding',
                  'Logical Thinking',
                  'Designing',
                  'Communication',
                  'Teamwork',
                  'Problem Solving',
                  'Creativity',
                  'Research',
                ].map((st) => {
                  const sel = strengths.includes(st);
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => toggleSelection(strengths, setStrengths, st)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        sel
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {st} {sel && '✓'}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {strengths.map((st) => (
                  <span
                    key={st}
                    className="px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold"
                  >
                    {st}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 15. Career Goal */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-sky-500" />
                <span>15. Career Goal</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Job, Freelancing, Business, Higher Studies</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Job', 'Freelancing', 'Business', 'Higher Studies'].map((cg) => (
                  <button
                    key={cg}
                    type="button"
                    onClick={() => setCareerGoalType(cg)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      careerGoalType === cg
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {cg}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {careerGoalType}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 16. Preferred Industry */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-sky-500" />
                <span>16. Preferred Industry</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">IT, Banking, Education, Healthcare, Govt, Other</span>
            </div>

            {isEditing ? (
              <div className="flex flex-wrap gap-1.5">
                {['IT', 'Banking', 'Education', 'Healthcare', 'Government', 'Other'].map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setPreferredIndustry(ind)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      preferredIndustry === ind
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">
                {preferredIndustry}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 17. Preferred Work Mode */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-sky-500" />
                <span>17. Preferred Work Mode</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Office, Remote, Hybrid, No Preference</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Office', 'Remote', 'Hybrid', 'No Preference'].map((wm) => (
                  <button
                    key={wm}
                    type="button"
                    onClick={() => setWorkMode(wm)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      workMode === wm
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {wm}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">
                {workMode}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 18. Learning Preference */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                <span>18. Learning Preference</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Videos, Reading, Practical Projects, Interactive Lessons</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-2 gap-2">
                {['Videos', 'Reading', 'Practical Projects', 'Interactive Lessons'].map((lp) => (
                  <button
                    key={lp}
                    type="button"
                    onClick={() => setLearningPreference(lp)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      learningPreference === lp
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {lp}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {learningPreference}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 19. Daily Learning Time */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                <span>19. Daily Learning Time</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Under 30 min, 30–60 min, 1–2 hours, 2+ hours</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Under 30 min', '30–60 min', '1–2 hours', '2+ hours'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setDailyLearningTime(t)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      dailyLearningTime === t
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">
                {dailyLearningTime}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 20. Career Experience */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-sky-500" />
                <span>20. Career Experience</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Fresher, Internship, Experienced</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-3 gap-2">
                {['Fresher', 'Internship', 'Experienced'].map((exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => setCareerExperience(exp)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                      careerExperience === exp
                        ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold">
                {careerExperience}
              </span>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 21. Short-Term Goal */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-sky-500" />
                <span>21. Short-Term Goal</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">3–6 Months Goal</span>
            </div>

            {isEditing ? (
              <textarea
                rows={2}
                value={shortTermGoal}
                onChange={(e) => setShortTermGoal(e.target.value)}
                placeholder="Short-Term Goal"
                className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-semibold border resize-none ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            ) : (
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                {shortTermGoal || <span className="text-slate-400 italic">Not specified</span>}
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 22. Long-Term Career Goal */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-500" />
                <span>22. Long-Term Career Goal</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Long-Term Vision</span>
            </div>

            {isEditing ? (
              <textarea
                rows={2}
                value={longTermGoal}
                onChange={(e) => setLongTermGoal(e.target.value)}
                placeholder="Long-Term Career Goal"
                className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-semibold border resize-none ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            ) : (
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                {longTermGoal || <span className="text-slate-400 italic">Not specified</span>}
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 23. Current Challenges */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
                <span>23. Current Challenges</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Multiple Selection</span>
            </div>

            {isEditing ? (
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Skill कमी आहेत',
                    'Career निवडता येत नाही',
                    'Experience कमी आहे',
                    'Interview Preparation',
                    'Other',
                  ].map((ch) => {
                    const sel = currentChallenges.includes(ch);
                    return (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => toggleSelection(currentChallenges, setCurrentChallenges, ch)}
                        className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          sel
                            ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                            : isDarkTheme
                            ? 'bg-slate-800 border-slate-700 text-slate-300'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {ch} {sel && '✓'}
                      </button>
                    );
                  })}
                </div>
                {currentChallenges.includes('Other') && (
                  <input
                    type="text"
                    value={customChallenge}
                    onChange={(e) => setCustomChallenge(e.target.value)}
                    placeholder="Other Challenges"
                    className={`w-full px-3 py-2 rounded-2xl text-xs border ${
                      isDarkTheme ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                )}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {currentChallenges.map((ch) => (
                  <span
                    key={ch}
                    className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 24. Additional Notes */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className={`p-4 rounded-3xl border transition-all ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-sky-500" />
                <span>24. Additional Notes</span>
              </label>
              <span className="text-[10px] text-slate-400 font-semibold">Additional Notes</span>
            </div>

            {isEditing ? (
              <textarea
                rows={2}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Additional Notes"
                className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-semibold border resize-none ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            ) : (
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-2xl">
                {additionalNotes || <span className="text-slate-400 italic">None</span>}
              </p>
            )}
          </div>

          {/* Quick Action Footer at Bottom of Form */}
          <div className="pt-2 pb-6 flex flex-col sm:flex-row gap-3">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="flex-1 py-3 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold border transition-colors cursor-pointer ${
                    isDarkTheme
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="flex-1 py-3 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] transition-all"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit your profile</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
