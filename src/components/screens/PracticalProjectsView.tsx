import React, { useState } from 'react';
import {
  Code,
  Github,
  CheckCircle,
  Clock,
  Layers,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Send,
  Sparkles,
} from 'lucide-react';
import { PracticalProject } from '../../types/career';
import { M3TopAppBar } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';
import confetti from 'canvas-confetti';

interface PracticalProjectsViewProps {
  projects: PracticalProject[];
  onToggleMilestone: (projectId: string, milestoneId: string) => void;
  onSubmitProject: (projectId: string) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const PracticalProjectsView: React.FC<PracticalProjectsViewProps> = ({
  projects,
  onToggleMilestone,
  onSubmitProject,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [submittedIds, setSubmittedIds] = useState<Record<string, boolean>>({});

  const handleSubmit = (id: string) => {
    setSubmittedIds((prev) => ({ ...prev, [id]: true }));
    onSubmitProject(id);
    confetti({ particleCount: 40, spread: 45, origin: { y: 0.6 } });
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०८. प्रात्यक्षिक प्रकल्प व प्रगती' : '08. Practical Projects & Progress'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="projects"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((proj) => {
              const isSubmitted = submittedIds[proj.id];
              const isCompleted = proj.status === 'Completed' || isSubmitted;

              return (
                <div
                  key={proj.id}
                  className={`p-4 rounded-3xl border transition-all ${
                    isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isCompleted ? 'bg-emerald-500' : 'bg-blue-600'
                          }`}
                        />
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            isCompleted
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-blue-600 dark:text-blue-400'
                          }`}
                        >
                          {isCompleted ? (isMr ? 'पूर्ण झाला' : 'Completed') : (isMr ? 'सुरू आहे' : 'In Progress')}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                        {proj.title}
                      </h3>
                    </div>

                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {proj.progressPercentage}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mb-3">
                    {proj.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${proj.progressPercentage}%` }}
                    />
                  </div>

                  {/* Skills Tagged */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(proj.skillsDemonstrated || proj.skillsAcquired || []).map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Milestones Checklist */}
                  <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-800/80 pt-2.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {isMr ? 'प्रकल्प टप्पे (Milestones):' : 'Milestones Checklist:'}
                    </span>
                    {proj.milestones.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => onToggleMilestone(proj.id, m.id)}
                        className={`p-2 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                          m.isDone
                            ? isDarkTheme
                              ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-300'
                              : 'bg-emerald-50/50 border-emerald-200/60 text-slate-700'
                            : isDarkTheme
                            ? 'bg-slate-800/30 border-slate-700/50'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className={`text-[11px] ${m.isDone ? 'line-through opacity-70' : ''}`}>
                          {m.title}
                        </span>
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            m.isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400'
                          }`}
                        >
                          {m.isDone && <CheckCircle className="w-3 h-3" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Repository link and Submit button */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Github className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[140px] text-[10px]">{proj.repoUrl}</span>
                    </div>

                    <button
                      onClick={() => handleSubmit(proj.id)}
                      disabled={isCompleted}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 cursor-default'
                          : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95 shadow-2xs'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{isMr ? 'मूल्यांकन पूर्ण' : 'Reviewed'}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{isMr ? 'सबमिट करा' : 'Submit'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="projects"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
