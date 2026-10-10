import React, { useState } from 'react';
import {
  RefreshCw,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  History,
  Award,
  Sparkles,
  Zap,
} from 'lucide-react';
import { CareerReadinessPillar } from '../../types/career';
import { M3TopAppBar, M3CircularScore } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';
import confetti from 'canvas-confetti';

interface CareerReadinessViewProps {
  overallScore: number;
  targetRole: string;
  pillars: CareerReadinessPillar[];
  onReAssess: () => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const CareerReadinessView: React.FC<CareerReadinessViewProps> = ({
  overallScore,
  targetRole,
  pillars,
  onReAssess,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showReAssessedState, setShowReAssessedState] = useState(true);

  // Before vs After score comparison data
  const beforeScore = 62;
  const currentScore = showReAssessedState ? 84 : 78;
  const scoreDifference = currentScore - beforeScore;

  const comparisonPillars = [
    {
      nameMr: '१. आवड व ॲप्टिट्यूड सुसंगतता',
      nameEn: '1. Aptitude & Alignment',
      before: 74,
      after: 92,
      diff: '+18%',
      status: 'High Match',
    },
    {
      nameMr: '२. तांत्रिक कौशल्ये (Technical Skills)',
      nameEn: '2. Technical Competency',
      before: 58,
      after: 82,
      diff: '+24%',
      status: 'Great Growth',
    },
    {
      nameMr: '३. प्रत्यक्ष प्रकल्प (Practical Projects)',
      nameEn: '3. Hands-on Projects',
      before: 50,
      after: 85,
      diff: '+35%',
      status: 'Capstone Done',
    },
    {
      nameMr: '४. व्यावसायिक व संवाद कौशल्य (Soft Skills)',
      nameEn: '4. Professional & Soft Skills',
      before: 66,
      after: 80,
      diff: '+14%',
      status: 'Ready',
    },
  ];

  const handleRunReassessment = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setShowReAssessedState(true);
      confetti({ particleCount: 50, spread: 60 });
      onReAssess();
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०९. पुनर्मूल्यांकन व सुधारणा' : '09. Re-assessment & Improvement'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          actions={
            <button
              onClick={handleRunReassessment}
              disabled={isRefreshing}
              className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center gap-1 active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isMr ? 'पुन्हा मूल्यमापन' : 'Re-assess'}</span>
            </button>
          }
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="readiness"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Objective Banner */}
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-blue-900 dark:text-blue-200">
                {isMr ? 'आधीच्या आणि आताच्या स्कोअरमधील प्रगतीची तुलना:' : 'Growth & Score Comparison:'}
              </div>
              <p className="text-[11px] text-blue-800 dark:text-blue-300 mt-0.5 leading-snug">
                {isMr
                  ? 'नवीन कौशल्ये शिकल्यानंतर व प्रॅक्टिकल प्रोजेक्ट्स पूर्ण केल्यानंतर सज्जता स्कोअर ६२% वरून ८४% झाला आहे (+२२% वाढ).'
                  : 'After finishing pathway modules and hands-on projects, career readiness elevated from 62% to 84% (+22% boost).'}
              </p>
            </div>
          </div>

          {/* Before vs After Big Score Comparison Card */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="text-center mb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {isMr ? 'लक्ष्य करिअर:' : 'TARGET CAREER:'} {targetRole}
              </span>
              <h3 className="text-sm font-bold mt-0.5">
                {isMr ? 'सज्जता स्कोअर तुलना (Score Progression)' : 'Readiness Progression'}
              </h3>
            </div>

            <div className="flex items-center justify-around gap-2 py-2">
              {/* Before Score */}
              <div className="text-center p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/60 flex-1">
                <span className="text-[10px] font-semibold text-slate-500 block mb-1">
                  {isMr ? 'आधीचा स्कोअर (प्रारंभिक)' : 'Initial Score (Before)'}
                </span>
                <div className="text-2xl font-black text-slate-600 dark:text-slate-400">
                  {beforeScore}%
                </div>
                <span className="text-[10px] text-slate-400">{isMr ? '२ महिन्यांपूर्वी' : '2 months ago'}</span>
              </div>

              {/* Arrow / Growth Badge */}
              <div className="flex flex-col items-center shrink-0">
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xs flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+{scoreDifference}%</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 mt-0.5">
                  {isMr ? 'सुधारणा' : 'Growth'}
                </span>
              </div>

              {/* Current Re-assessed Score */}
              <div className="text-center p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex-1">
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                  {isMr ? 'आताचा स्कोअर (सध्या)' : 'Current Score (Now)'}
                </span>
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {currentScore}%
                </div>
                <span className="text-[10px] text-blue-500 font-bold">{isMr ? 'पुनर्मूल्यांकन सिद्ध' : 'Verified'}</span>
              </div>
            </div>

            {/* Quick Retake Button */}
            <button
              onClick={handleRunReassessment}
              disabled={isRefreshing}
              className="w-full mt-3 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>
                {isRefreshing
                  ? (isMr ? 'नवीन मूल्यांकन होत आहे...' : 'Analyzing re-assessment...')
                  : (isMr ? 'नवीन Re-assessment सुरू करा' : 'Start Fresh Re-assessment')}
              </span>
            </button>
          </div>

          {/* Breakdown By Pillars: Before vs After */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {isMr ? '४ मुख्य क्षेत्रांमधील बदल व सुधारणा:' : 'Component-wise Improvement:'}
            </h4>

            {comparisonPillars.map((p, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border ${
                  isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {isMr ? p.nameMr : p.nameEn}
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600">
                    {p.diff} {isMr ? 'वाढ' : 'up'}
                  </span>
                </div>

                {/* Comparative Double Bars */}
                <div className="space-y-1">
                  {/* Before Bar */}
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="w-10 text-slate-400">{isMr ? 'आधी:' : 'Before:'}</span>
                    <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: `${p.before}%` }} />
                    </div>
                    <span className="w-8 text-right font-semibold text-slate-400">{p.before}%</span>
                  </div>

                  {/* After Bar */}
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="w-10 font-bold text-blue-600 dark:text-blue-400">{isMr ? 'आता:' : 'Now:'}</span>
                    <div className="flex-1 h-2 rounded-full bg-blue-100 dark:bg-blue-950 overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${p.after}%` }} />
                    </div>
                    <span className="w-8 text-right font-black text-blue-600 dark:text-blue-400">{p.after}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action to view official final report (Step 10) */}
          <div
            onClick={() => onNavigate('report')}
            className={`p-3 rounded-2xl border cursor-pointer active:scale-[0.99] flex items-center justify-between ${
              isDarkTheme ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {isMr ? '१०. करिअर सज्जता अहवाल (PDF)' : '10. Career Readiness Report (PDF)'}
                </div>
                <div className="text-[10px] text-slate-500">
                  {isMr ? 'अधिकृत अहवाल पहा आणि PDF डाउनलोड करा' : 'Inspect official signed readiness report'}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="readiness"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
