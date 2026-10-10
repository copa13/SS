import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  Code,
  FileCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Target,
} from 'lucide-react';
import { PathwayModule } from '../../types/career';
import { mockVisualPathwayStages } from '../../data/mockData';
import { M3TopAppBar } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';

interface LearningPathwayViewProps {
  modules: PathwayModule[];
  onToggleItem: (moduleId: string, itemId: string) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const LearningPathwayView: React.FC<LearningPathwayViewProps> = ({
  modules,
  onToggleItem,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    pm_1: false,
    pm_2: false,
    pm_3: true,
    pm_4: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'Project':
        return <Code className="w-3.5 h-3.5 text-purple-500" />;
      case 'Reading':
        return <BookOpen className="w-3.5 h-3.5 text-blue-500" />;
      case 'Certification':
        return <FileCheck className="w-3.5 h-3.5 text-emerald-500" />;
      default:
        return <Clock className="w-3.5 h-3.5 text-amber-500" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०७. शिक्षण ते करिअर मार्ग' : '07. Learning-to-Career Pathway'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="pathway"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Visual Step-by-Step Flow Ribbon */}
          <div
            className={`p-3.5 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              {isMr ? 'टप्प्याटप्प्याने करिअर रोडमॅप:' : 'Step-by-Step Career Roadmap:'}
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px] font-bold">
              {mockVisualPathwayStages.map((stage, idx) => (
                <React.Fragment key={stage.id}>
                  <div
                    className={`px-2.5 py-1 rounded-xl whitespace-nowrap flex items-center gap-1 ${
                      stage.isDone
                        ? isDarkTheme
                          ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/40'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : stage.isCurrent
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {stage.isDone && <CheckCircle2 className="w-3 h-3" />}
                    <span>{stage.title}</span>
                  </div>
                  {idx < mockVisualPathwayStages.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-700 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Next Recommended Action Banner */}
          <div
            onClick={() => onNavigate('projects')}
            className={`p-3.5 rounded-2xl border cursor-pointer active:scale-[0.99] transition-all ${
              isDarkTheme
                ? 'bg-blue-950/30 border-blue-800/60'
                : 'bg-blue-50/70 border-blue-200 shadow-2xs'
            }`}
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
              <Zap className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>{isMr ? 'पुढील शिफारस केलेली कृती:' : 'Next Recommended Action:'}</span>
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              {isMr ? '८. प्रॅक्टिकल प्रोजेक्ट्स पूर्ण करा (प्रगती ट्रॅक करा)' : '08. Complete Practical Projects & Track Progress'}
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
              {isMr
                ? 'थिएरी शिकल्यानंतर प्रत्यक्ष प्रॅक्टिकल प्रोजेक्ट्स पूर्ण केल्याने कौशल्ये सिद्ध होतात.'
                : 'Build hands-on portfolio apps with real code proof to validate skills.'}
            </p>
          </div>

          {/* Ordered Learning Milestones & Phases */}
          <div className="space-y-3">
            {modules.map((mod) => {
              const isExpanded = expandedPhases[mod.id];
              return (
                <div
                  key={mod.id}
                  className={`rounded-3xl border transition-all overflow-hidden ${
                    isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  {/* Phase Accordion Header */}
                  <div
                    onClick={() => toggleExpand(mod.id)}
                    className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                          mod.isCompleted
                            ? 'bg-emerald-500 text-white'
                            : 'bg-blue-600/10 text-blue-600'
                        }`}
                      >
                        {mod.phaseNumber}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          {mod.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {mod.estimatedDuration} · {mod.items.length} {isMr ? 'घटक' : 'units'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {mod.isCompleted && (
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {isMr ? 'पूर्ण' : 'Done'}
                        </span>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Items Checklist */}
                  {isExpanded && (
                    <div className="p-3.5 pt-0 space-y-2 border-t border-slate-100 dark:border-slate-800/80">
                      <p className="text-[11px] text-slate-500 pt-2">{mod.description}</p>
                      {mod.items.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => onToggleItem(mod.id, item.id)}
                          className={`p-2.5 rounded-2xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                            item.isCompleted
                              ? isDarkTheme
                                ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-300'
                                : 'bg-emerald-50/50 border-emerald-200/60 text-slate-700'
                              : isDarkTheme
                              ? 'bg-slate-800/40 border-slate-700/60'
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {getItemIcon(item.type)}
                            <span
                              className={`font-medium ${
                                item.isCompleted ? 'line-through opacity-70' : ''
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-400 font-mono">
                              {item.duration}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                                item.isCompleted
                                  ? 'bg-emerald-600 border-emerald-600 text-white'
                                  : 'border-slate-400'
                              }`}
                            >
                              {item.isCompleted && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="pathway"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
