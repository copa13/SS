import React, { useState } from 'react';
import {
  TrendingUp,
  Check,
  DollarSign,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Star,
  Users,
  GitCompare,
  Layers,
} from 'lucide-react';
import { CareerMatch } from '../../types/career';
import { M3TopAppBar, M3CircularScore } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';

interface CareerMatchViewProps {
  careers: CareerMatch[];
  onSelectCareer: (careerId: string) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const CareerMatchView: React.FC<CareerMatchViewProps> = ({
  careers,
  onSelectCareer,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [selectedId, setSelectedId] = useState<string>(careers[0]?.id || '');
  const [viewMode, setViewMode] = useState<'details' | 'compare'>('details');

  const activeCareer = careers.find((c) => c.id === selectedId) || careers[0];

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०५. करिअर मॅच व स्पष्टीकरण' : '05. Career Match & Explanation'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          actions={
            <button
              onClick={() => setViewMode(viewMode === 'details' ? 'compare' : 'details')}
              className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center gap-1"
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>{viewMode === 'details' ? (isMr ? 'तुलना करा' : 'Compare') : (isMr ? 'तपशील' : 'Details')}</span>
            </button>
          }
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="matches"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Horizontal Career Selection Carousel */}
          <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            {careers.map((career) => {
              const isSelected = career.id === activeCareer.id;
              return (
                <button
                  key={career.id}
                  onClick={() => {
                    setSelectedId(career.id);
                    onSelectCareer(career.id);
                  }}
                  className={`min-w-[170px] p-3 rounded-2xl text-left border transition-all shrink-0 ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-xs ring-1 ring-blue-600'
                      : isDarkTheme
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-slate-400">Rank #{career.rank}</span>
                    <span className="font-black text-blue-600 dark:text-blue-400">
                      {career.matchPercentage}% {isMr ? 'मॅच' : 'Match'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                    {career.title}
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
                    {career.averageSalaryRange}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Career Deep Dive Details */}
          {viewMode === 'details' ? (
            <div className="space-y-3.5">
              {/* Hero Banner for Active Career */}
              <div
                className={`p-4 rounded-3xl border ${
                  isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {isMr ? 'सर्वोच्च सुसंगत करिअर पर्याय' : 'Top Match Recommendation'}
                    </span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white mt-0.5">
                      {activeCareer.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {activeCareer.description}
                    </p>
                  </div>
                  <M3CircularScore
                    score={activeCareer.matchPercentage || activeCareer.overallMatch || 90}
                    size={68}
                    strokeWidth={6}
                    label="Match"
                    isDarkTheme={isDarkTheme}
                  />
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">{isMr ? 'अपेक्षित वेतन:' : 'Salary Range:'}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{activeCareer.averageSalaryRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">{isMr ? 'बाजारपेठेतील मागणी:' : 'Market Demand:'}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{activeCareer.marketDemand}</span>
                  </div>
                </div>
              </div>

              {/* Exact Explanation Why It Matches */}
              <div
                className={`p-4 rounded-3xl border ${
                  isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">
                  {isMr ? 'हे करिअर का योग्य आहे? (स्पष्टीकरण)' : 'Why This Career Matches You:'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {activeCareer.explanation}
                </p>

                <h5 className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                  {isMr ? 'तुमची अनुकूल सामर्थ्ये:' : 'Your Aligned Strengths:'}
                </h5>
                <div className="space-y-1.5">
                  {(activeCareer.matchedStrengths || activeCareer.whyFitExplanation || []).map((str, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Skills & Skill-Gap Link */}
              <div
                className={`p-4 rounded-3xl border ${
                  isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    {isMr ? 'आवश्यक कौशल्ये (Required Skills)' : 'Core Skills Needed'}
                  </h4>
                  <button
                    onClick={() => onNavigate('skillgap')}
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-0.5"
                  >
                    <span>{isMr ? '०६. कौशल्यातील फरक पहा' : 'View Skill-Gap'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(activeCareer.requiredSkills || activeCareer.coreCompetencies || []).map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Comparison View */
            <div className="space-y-3">
              {careers.map((career) => (
                <div
                  key={career.id}
                  className={`p-4 rounded-3xl border ${
                    isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-xs font-bold">{career.title}</h4>
                    <span className="text-xs font-black text-blue-600">{career.matchPercentage}% Match</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2">{career.explanation}</p>
                  <div className="flex justify-between text-[11px] border-t pt-2 border-slate-100 dark:border-slate-800">
                    <span>{career.averageSalaryRange}</span>
                    <span className="font-semibold text-emerald-600">{career.marketDemand}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="matches"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
