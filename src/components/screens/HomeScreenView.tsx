import React, { useState } from 'react';
import {
  Brain,
  CheckCircle2,
  Sparkles,
  Compass,
  ArrowRight,
  GitBranch,
  Lightbulb,
  FileText,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Check,
  Target,
  Zap,
  TrendingUp,
  HelpCircle,
  Award,
  Layers,
} from 'lucide-react';
import { StudentProfile } from '../../types/career';
import { M3CircularScore } from '../M3CommonComponents';
import { WORKFLOW_STEPS } from '../StepProgressBar';

interface HomeScreenViewProps {
  profile: StudentProfile;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
  onLanguageChange?: (lang: 'mr' | 'en') => void;
  onToggleTheme?: (dark: boolean) => void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  profile,
  onNavigate,
  isDarkTheme,
  language,
  onLanguageChange,
  onToggleTheme,
}) => {
  const isMr = language === 'mr';
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[calc(840px-70px)]">
      {/* Top Header Row with SIS on left and Language Dropdown on right */}
      <div className="flex items-center justify-between relative pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-sky-500 text-white flex items-center justify-center font-black text-xs shadow-sm shadow-sky-500/20">
            SIS
          </div>
          <span className="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-200">
            Smart Intelligence Students
          </span>
        </div>

        {/* Top Right: Language Name + Small Down Arrow */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
              isDarkTheme
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-sky-500'
                : 'bg-white border-slate-200 text-slate-800 hover:border-sky-400 shadow-xs'
            }`}
          >
            <span>{language === 'mr' ? 'मराठी' : 'English'}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-sky-500 transition-transform duration-200 ${
                isLangMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Popup Card when clicked */}
          {isLangMenuOpen && (
            <>
              {/* Invisible Backdrop to close on click outside */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsLangMenuOpen(false)}
              />

              <div
                className={`absolute right-0 top-full mt-2 w-56 rounded-2xl p-3 border shadow-2xl z-50 space-y-3 ${
                  isDarkTheme
                    ? 'bg-slate-900 border-slate-800 text-white shadow-black/60'
                    : 'bg-white border-slate-200 text-slate-900 shadow-slate-200'
                }`}
              >
                {/* 1. Language Select Section */}
                <div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-sky-500 mb-1.5">
                    Language Select
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange?.('en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between ${
                        language === 'en'
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Globe className={`w-3.5 h-3.5 ${language === 'en' ? 'text-white' : 'text-sky-500'}`} />
                        <span>English</span>
                      </div>
                      {language === 'en' && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange?.('mr');
                        setIsLangMenuOpen(false);
                      }}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between ${
                        language === 'mr'
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Globe className={`w-3.5 h-3.5 ${language === 'mr' ? 'text-white' : 'text-sky-500'}`} />
                        <span>मराठी</span>
                      </div>
                      {language === 'mr' && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800" />

                {/* 2. Day & Night Mode Switch */}
                <div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-sky-500 mb-1.5">
                    Theme Mode
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onToggleTheme?.(!isDarkTheme);
                    }}
                    className={`w-full py-2.5 px-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                      isDarkTheme
                        ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isDarkTheme ? (
                        <Moon className="w-4 h-4 text-sky-400" />
                      ) : (
                        <Sun className="w-4 h-4 text-sky-500" />
                      )}
                      <span>{isDarkTheme ? 'Night Mode' : 'Day Mode'}</span>
                    </div>

                    {/* Mode switch toggle pill */}
                    <div
                      className={`w-10 h-5 rounded-full p-0.5 flex items-center transition-colors ${
                        isDarkTheme ? 'bg-sky-500 justify-end' : 'bg-slate-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Student Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-sky-500 tracking-wider uppercase">
            EYC · {isMr ? 'करिअर मार्गदर्शन व सज्जता' : 'Career Guidance & Readiness'}
          </span>
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>{isMr ? 'हॅलो स्टुडंट्स' : 'Hello Students'}</span>
            <span className="text-base">👋</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {profile.name ? `${profile.name} · ` : ''}{isMr ? 'लक्ष्य करिअर:' : 'Target Career:'}{' '}
            <strong className="text-sky-500">{profile.targetRole}</strong>
          </p>
        </div>
        <button
          onClick={() => onNavigate('profile')}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-500/40 active:scale-95 transition-transform shrink-0 shadow-sm"
        >
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </button>
      </div>

      {/* Hero Readiness Score Card */}
      <div
        onClick={() => onNavigate('report')}
        className={`p-4 rounded-3xl cursor-pointer transition-all active:scale-[0.99] border ${
          isDarkTheme
            ? 'bg-[#1b222d] border-slate-800 hover:border-slate-700'
            : 'bg-white border-slate-200/80 shadow-sm hover:border-blue-200'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {isMr ? 'करिअर सज्जता इंडेक्स' : 'Career Readiness Index'}
            </span>
            <h3 className="text-sm font-bold mt-0.5 text-slate-900 dark:text-white">
              {isMr ? '८४% एकूण मार्केट सज्जता' : '84% Overall Market Readiness'}
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {isMr
                ? 'कौशल्य चाचणी, ॲप्टिट्यूड आणि प्रत्यक्ष कॅपस्टोन प्रोजेक्ट पूर्ण झाल्यामुळे सज्जता प्रमाणित झाली आहे.'
                : 'Based on verified skills, interest assessment, and completed practical projects.'}
            </p>
            <div className="flex items-center gap-1 mt-2.5 text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>{isMr ? '१०. अधिकृत PDF अहवाल पहा ➔' : '10. View Official PDF Report ➔'}</span>
            </div>
          </div>
          <M3CircularScore
            score={84}
            size={86}
            strokeWidth={8}
            label={isMr ? 'सज्जता' : 'Readiness'}
            isDarkTheme={isDarkTheme}
          />
        </div>
      </div>

      {/* Complete 10-Step Workflow Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {isMr ? 'संपूर्ण १० टप्प्यांचा करिअर मार्ग:' : 'Complete 10-Step Career Journey:'}
            </h3>
          </div>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
            {isMr ? '१० पैकी १० टप्पे उपलब्ध' : 'All 10 Steps Ready'}
          </span>
        </div>

        {/* 10 Step Cards List */}
        <div className="space-y-2">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => onNavigate(step.id)}
              className={`p-3 rounded-2xl border cursor-pointer active:scale-[0.99] transition-all flex items-start gap-3 hover:border-blue-300 dark:hover:border-blue-700 ${
                isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                {step.stepNumber}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {isMr ? step.titleMr : step.titleEn}
                  </h4>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                </div>
                <p className="text-[10.5px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug line-clamp-2">
                  {isMr ? step.descMr : step.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 3 Core Questions EYC Answers */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
          <span>{isMr ? 'EYC द्वारे मिळणारी ३ मुख्य उत्तरे:' : 'The 3 Core Questions EYC Answers:'}</span>
        </div>

        <div className="space-y-1.5">
          {/* Question 1 */}
          <div
            onClick={() => onNavigate('matches')}
            className={`p-3 rounded-2xl border cursor-pointer active:scale-[0.99] transition-all flex items-center justify-between ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                {isMr ? '१. माझ्यासाठी कोणते करिअर योग्य आहे?' : '1. Which career may be suitable for me?'}
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                AI Application Engineer (94% Match) · Android Dev (89%)
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </div>

          {/* Question 2 */}
          <div
            onClick={() => onNavigate('skillgap')}
            className={`p-3 rounded-2xl border cursor-pointer active:scale-[0.99] transition-all flex items-center justify-between ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400">
                {isMr ? '२. त्या करिअरसाठी माझ्याकडे कोणती कौशल्ये कमी आहेत?' : '2. Which skills am I missing for that career?'}
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                Cloud Deployments (Docker) & Vector DB Indexing
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </div>

          {/* Question 3 */}
          <div
            onClick={() => onNavigate('pathway')}
            className={`p-3 rounded-2xl border cursor-pointer active:scale-[0.99] transition-all flex items-center justify-between ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                {isMr ? '३. करिअर-रेडी होण्यासाठी मी काय शिकले व सराव केला पाहिजे?' : '3. What should I learn & practise?'}
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                Phase 3: Applied AI Capstone + Cloud Run microservice
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
