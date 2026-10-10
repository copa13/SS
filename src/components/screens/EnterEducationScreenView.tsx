import React, { useState } from 'react';
import { ArrowRight, UserCheck, ChevronLeft, Check, GraduationCap } from 'lucide-react';

interface EnterEducationScreenViewProps {
  initialEducationLevel?: string;
  avatarUrl?: string;
  name?: string;
  onContinue: (educationLevel: string) => void;
  onBack?: () => void;
  onSkip: () => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

const EDUCATION_OPTIONS = [
  { id: '10th', label: '10th', mrLabel: '१० वी' },
  { id: '12th', label: '12th', mrLabel: '१२ वी' },
  { id: 'ITI', label: 'ITI', mrLabel: 'ITI' },
  { id: 'Diploma', label: 'Diploma', mrLabel: 'Diploma' },
  { id: 'Graduation', label: 'Graduation', mrLabel: 'Graduation' },
  { id: 'Post-Graduation', label: 'Post-Graduation', mrLabel: 'Post-Graduation' },
  { id: 'Other', label: 'Other', mrLabel: 'Other' },
];

export const EnterEducationScreenView: React.FC<EnterEducationScreenViewProps> = ({
  initialEducationLevel = 'Diploma',
  avatarUrl,
  name,
  onContinue,
  onBack,
  onSkip,
  isDarkTheme,
  language,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>(initialEducationLevel || 'Diploma');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLevel) return;
    onContinue(selectedLevel);
  };

  return (
    <div
      className={`relative flex-1 flex flex-col justify-between p-6 transition-colors overflow-y-auto ${
        isDarkTheme ? 'bg-[#0f172a] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Top Bar with small Back Arrow on the left */}
      <div className="w-full max-w-sm mx-auto flex items-center justify-between">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className={`p-2 rounded-xl transition-colors -ml-2 cursor-pointer ${
              isDarkTheme ? 'text-sky-400 hover:bg-slate-800' : 'text-sky-500 hover:bg-sky-50'
            }`}
            aria-label="Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="h-8" />
        )}
      </div>

      {/* Main Center Content */}
      <div className="w-full max-w-sm mx-auto space-y-5 my-auto">
        {/* Profile avatar selected from name screen */}
        <div className="flex flex-col items-center justify-center">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-2 shadow-lg transition-all ${
              isDarkTheme
                ? 'bg-slate-800 border-slate-700 text-sky-400'
                : 'bg-sky-50 border-sky-100 text-sky-500'
            }`}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name || 'Selected Profile'}
                className="w-full h-full object-cover"
              />
            ) : (
              <UserCheck className="w-12 h-12 text-sky-500" />
            )}
          </div>
          {name && (
            <span className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200">
              {name}
            </span>
          )}
        </div>

        {/* Form Card: Current Education Level */}
        <form
          onSubmit={handleSubmit}
          className={`p-5 rounded-3xl border shadow-sm transition-all space-y-4 ${
            isDarkTheme
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          <div className="space-y-2.5">
            <div className="flex items-center gap-1.5 px-1">
              <GraduationCap className="w-4 h-4 text-sky-500" />
              <label className="text-xs font-semibold text-slate-400">
                Current Education Level
              </label>
            </div>

            {/* Selectable Education Badges/Cards */}
            <div className="grid grid-cols-2 gap-2">
              {EDUCATION_OPTIONS.map((item) => {
                const isSelected = selectedLevel === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedLevel(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      item.id === 'Other' ? 'col-span-2' : ''
                    } ${
                      isSelected
                        ? isDarkTheme
                          ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-sm'
                          : 'bg-sky-50 border-sky-500 text-sky-600 shadow-xs'
                        : isDarkTheme
                        ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span>
                      {language === 'mr' && item.mrLabel !== item.label ? `${item.label} (${item.mrLabel})` : item.label}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="submit"
            disabled={!selectedLevel}
            className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-base shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </form>
      </div>

      {/* Bottom Footer with Skip this question on the right side with an arrow */}
      <div className="w-full max-w-sm mx-auto flex justify-end items-center pt-3 pb-1">
        <button
          type="button"
          onClick={onSkip}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors hover:underline cursor-pointer group ${
            isDarkTheme
              ? 'text-slate-400 hover:text-sky-400'
              : 'text-slate-500 hover:text-sky-600'
          }`}
        >
          <span>Skip this question</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
