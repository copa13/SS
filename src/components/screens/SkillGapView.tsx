import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { SkillGapItem } from '../../types/career';
import { M3TopAppBar } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';

interface SkillGapViewProps {
  targetRole: string;
  gapItems: SkillGapItem[];
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const SkillGapView: React.FC<SkillGapViewProps> = ({
  targetRole,
  gapItems,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०६. कौशल्यातील त्रुटी (Skill-Gap)' : '06. Skill-Gap Identification'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="skillgap"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Target Header */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {isMr ? 'लक्ष्य करिअर बेंचमार्क:' : 'Target Benchmark:'}
            </span>
            <h2 className="text-base font-bold mt-0.5">{targetRole}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
              {isMr
                ? 'निवडलेल्या करिअरसाठी आवश्यक कौशल्ये विरुद्ध तुमची सध्याची कौशल्ये यांची थेट तुलना.'
                : 'Comparing current student skill levels with industry hiring standards.'}
            </p>
          </div>

          {/* Visual Legend */}
          <div className="flex items-center justify-between px-1 text-[11px] text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>{isMr ? 'सध्याचा स्तर' : 'Current Level'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span>{isMr ? 'आवश्यक स्तर' : 'Required Level'}</span>
            </div>
          </div>

          {/* Gaps List */}
          <div className="space-y-3">
            {gapItems.map((item, idx) => {
              const isCritical = item.status === 'Critical Gap';
              const isModerate = item.status === 'Moderate Gap';

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-3xl border ${
                    isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.skillName}
                    </h4>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isCritical
                          ? 'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                          : isModerate
                          ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Comparative Progress Bars */}
                  <div className="space-y-1.5">
                    {(() => {
                      const curLvl = item.currentLevel ?? Math.max(1, Math.round((item.currentScore || 40) / 20));
                      const reqLvl = item.requiredLevel ?? Math.max(1, Math.round((item.requiredScore || 80) / 20));
                      return (
                        <>
                          <div className="flex items-center gap-2 text-[10px]">
                            <span className="w-12 text-slate-400">{isMr ? 'सध्याचा:' : 'Current:'}</span>
                            <div className="flex-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-blue-600 rounded-full"
                                style={{ width: `${(curLvl / 5) * 100}%` }}
                              />
                            </div>
                            <span className="w-6 text-right font-bold">L{curLvl}</span>
                          </div>

                          <div className="flex items-center gap-2 text-[10px]">
                            <span className="w-12 text-slate-400">{isMr ? 'आवश्यक:' : 'Required:'}</span>
                            <div className="flex-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-slate-400 dark:bg-slate-600 rounded-full"
                                style={{ width: `${(reqLvl / 5) * 100}%` }}
                              />
                            </div>
                            <span className="w-6 text-right font-bold text-slate-400">L{reqLvl}</span>
                          </div>
                        </>
                      );
                    })()}
                  </div>

                  {/* Action recommendation */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 line-clamp-1">{item.recommendedAction || item.recommendation}</span>
                    <button
                      onClick={() => onNavigate('pathway')}
                      className="text-blue-600 font-bold hover:underline shrink-0 ml-2"
                    >
                      {isMr ? 'शिका ➔' : 'Learn ➔'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="skillgap"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
