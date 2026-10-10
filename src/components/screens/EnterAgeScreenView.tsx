import React, { useState } from 'react';
import { ArrowRight, UserCheck, ChevronLeft } from 'lucide-react';

interface EnterAgeScreenViewProps {
  initialAge?: string;
  initialDob?: string;
  avatarUrl?: string;
  name?: string;
  onContinue: (data: { age?: string; dateOfBirth?: string }) => void;
  onBack?: () => void;
  onSkip: () => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const EnterAgeScreenView: React.FC<EnterAgeScreenViewProps> = ({
  initialAge = '',
  initialDob = '',
  avatarUrl,
  name,
  onContinue,
  onBack,
  onSkip,
  isDarkTheme,
}) => {
  const [ageValue, setAgeValue] = useState(initialAge);
  const [dobValue, setDobValue] = useState(initialDob);

  // Auto calculate age whenever date of birth changes
  const handleDobChange = (dobString: string) => {
    setDobValue(dobString);
    if (!dobString) return;
    try {
      const birthDate = new Date(dobString);
      if (!isNaN(birthDate.getTime())) {
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          calculatedAge--;
        }
        if (calculatedAge >= 0 && calculatedAge <= 120) {
          setAgeValue(String(calculatedAge));
        }
      }
    } catch {
      // ignore parsing errors
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ageValue.trim() && !dobValue.trim()) return;
    onContinue({
      age: ageValue.trim() || undefined,
      dateOfBirth: dobValue.trim() || undefined,
    });
  };

  const isSubmitDisabled = !ageValue.trim() && !dobValue.trim();

  return (
    <div
      className={`relative flex-1 flex flex-col justify-between p-6 transition-colors ${
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
      <div className="w-full max-w-sm mx-auto space-y-6">
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

        {/* Form Card: Date of Birth on top, Age directly below with auto-calculation */}
        <form
          onSubmit={handleSubmit}
          className={`p-6 rounded-3xl border shadow-sm transition-all space-y-4 ${
            isDarkTheme
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          {/* Date of Birth Input (Top) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 block px-1">
              Date of Birth
            </label>
            <input
              type="date"
              autoFocus
              value={dobValue}
              onChange={(e) => handleDobChange(e.target.value)}
              className={`w-full px-4 py-3.5 rounded-2xl text-base font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Age Input (Below Date of Birth, auto-calculated) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <label className="text-xs font-semibold text-slate-400 block">
                Age
              </label>
              {dobValue && ageValue && (
                <span className="text-[11px] font-medium text-sky-500">
                  Auto-calculated
                </span>
              )}
            </div>
            <input
              type="number"
              min="5"
              max="100"
              value={ageValue}
              onChange={(e) => setAgeValue(e.target.value)}
              placeholder="Age"
              className={`w-full px-4 py-3.5 rounded-2xl text-base font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Next Button */}
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-base shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </form>
      </div>

      {/* Bottom Footer with Skip this question on the right side with an arrow */}
      <div className="w-full max-w-sm mx-auto flex justify-end items-center pt-4 pb-2">
        <button
          type="button"
          onClick={onSkip}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors hover:underline cursor-pointer group ${
            isDarkTheme
              ? 'text-slate-400 hover:text-sky-400'
              : 'text-slate-500 hover:text-sky-600'
          }`}
        >
          <span>skip this question</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
