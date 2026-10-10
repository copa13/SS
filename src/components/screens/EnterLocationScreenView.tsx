import React, { useState } from 'react';
import { ArrowRight, UserCheck, ChevronLeft, MapPin } from 'lucide-react';

export interface AddressData {
  state: string;
  district: string;
  taluka: string;
  village: string;
  fullLocation: string;
}

interface EnterLocationScreenViewProps {
  initialState?: string;
  initialDistrict?: string;
  initialTaluka?: string;
  initialVillage?: string;
  initialLocation?: string;
  avatarUrl?: string;
  name?: string;
  onContinue: (data: AddressData) => void;
  onBack?: () => void;
  onSkip: () => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const EnterLocationScreenView: React.FC<EnterLocationScreenViewProps> = ({
  initialState = 'Maharashtra',
  initialDistrict = '',
  initialTaluka = '',
  initialVillage = '',
  initialLocation = '',
  avatarUrl,
  name,
  onContinue,
  onBack,
  onSkip,
  isDarkTheme,
  language,
}) => {
  // If initialLocation exists like "पुणे, महाराष्ट्र" but district is not set, initialize sensibly
  const [stateValue, setStateValue] = useState(initialState || 'Maharashtra');
  const [districtValue, setDistrictValue] = useState(initialDistrict || (initialLocation.includes(',') ? initialLocation.split(',')[0].trim() : initialLocation));
  const [talukaValue, setTalukaValue] = useState(initialTaluka);
  const [villageValue, setVillageValue] = useState(initialVillage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      villageValue.trim(),
      talukaValue.trim() ? `तालुका: ${talukaValue.trim()}` : '',
      districtValue.trim(),
      stateValue.trim(),
    ].filter(Boolean);

    const fullLocation = parts.join(', ') || districtValue.trim() || stateValue.trim();

    onContinue({
      state: stateValue.trim(),
      district: districtValue.trim(),
      taluka: talukaValue.trim(),
      village: villageValue.trim(),
      fullLocation,
    });
  };

  const isSubmitDisabled = !stateValue.trim() && !districtValue.trim() && !talukaValue.trim() && !villageValue.trim();

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
      <div className="w-full max-w-sm mx-auto space-y-4 my-auto">
        {/* Profile avatar selected from name screen */}
        <div className="flex flex-col items-center justify-center">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 shadow-lg transition-all ${
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
              <UserCheck className="w-10 h-10 text-sky-500" />
            )}
          </div>
          {name && (
            <span className="mt-1.5 text-sm font-bold text-slate-800 dark:text-slate-200">
              {name}
            </span>
          )}
        </div>

        {/* Address Card: State, District, Taluka, Village */}
        <form
          onSubmit={handleSubmit}
          className={`p-5 rounded-3xl border shadow-sm transition-all space-y-3.5 ${
            isDarkTheme
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          <div className="flex items-center gap-1.5 px-1 pb-1 border-b border-slate-100 dark:border-slate-800">
            <MapPin className="w-4 h-4 text-sky-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              {language === 'mr' ? 'पत्ता (Address)' : 'Address'}
            </span>
          </div>

          {/* 1. State Input */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 block px-1">
              State (राज्य)
            </label>
            <input
              type="text"
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
              placeholder="उदा. Maharashtra"
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* 2. District Input */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 block px-1">
              District (जिल्हा)
            </label>
            <input
              type="text"
              autoFocus
              value={districtValue}
              onChange={(e) => setDistrictValue(e.target.value)}
              placeholder="उदा. Pune, Mumbai, Nagpur..."
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* 3. Taluka Input */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 block px-1">
              Taluka (तालुका)
            </label>
            <input
              type="text"
              value={talukaValue}
              onChange={(e) => setTalukaValue(e.target.value)}
              placeholder="उदा. हवेली, बारामती, जुन्नर..."
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* 4. Village Input */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 block px-1">
              Village / City (गाव / शहर)
            </label>
            <input
              type="text"
              value={villageValue}
              onChange={(e) => setVillageValue(e.target.value)}
              placeholder="उदा. गाव किंवा शहराचे नाव"
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
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
            className="w-full mt-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
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
