import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WORKFLOW_STEPS } from './StepProgressBar';

interface StepNavigationFooterProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  language: 'mr' | 'en';
  isDarkTheme: boolean;
  extraAction?: React.ReactNode;
}

export const StepNavigationFooter: React.FC<StepNavigationFooterProps> = ({
  currentRoute,
  onNavigate,
  language,
  isDarkTheme,
  extraAction,
}) => {
  const isMr = language === 'mr';
  const currentIndex = WORKFLOW_STEPS.findIndex((s) => s.id === currentRoute);

  if (currentIndex === -1) return null;

  const prevStep = currentIndex > 0 ? WORKFLOW_STEPS[currentIndex - 1] : null;
  const nextStep = currentIndex < WORKFLOW_STEPS.length - 1 ? WORKFLOW_STEPS[currentIndex + 1] : null;

  return (
    <div
      className={`border-t p-3 px-4 flex items-center justify-between gap-2 select-none ${
        isDarkTheme ? 'bg-[#111418] border-slate-800' : 'bg-white border-slate-200 shadow-md'
      }`}
    >
      {/* Previous Step Button */}
      {prevStep ? (
        <button
          onClick={() => onNavigate(prevStep.id)}
          className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
            isDarkTheme
              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{isMr ? `मागे (${prevStep.stepNumber})` : `Back (${prevStep.stepNumber})`}</span>
        </button>
      ) : (
        <button
          onClick={() => onNavigate('home')}
          className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
            isDarkTheme
              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{isMr ? 'डॅशबोर्ड' : 'Dashboard'}</span>
        </button>
      )}

      {extraAction && <div>{extraAction}</div>}

      {/* Next Step Button */}
      {nextStep ? (
        <button
          onClick={() => onNavigate(nextStep.id)}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white flex items-center gap-1.5 shadow-md shadow-sky-500/20 transition-all ml-auto"
        >
          <span>
            {isMr ? `पुढील टप्पा ${nextStep.stepNumber} ➔` : `Next Step ${nextStep.stepNumber} ➔`}
          </span>
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      ) : (
        /* Final Step Done */
        <button
          onClick={() => onNavigate('home')}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white flex items-center gap-1.5 shadow-md shadow-sky-500/20 ml-auto"
        >
          <span>{isMr ? 'डॅशबोर्डवर जा ➔' : 'Complete & Dashboard ➔'}</span>
        </button>
      )}
    </div>
  );
};
