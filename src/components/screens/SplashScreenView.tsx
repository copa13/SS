import React, { useState } from 'react';
import {
  Sun,
  Moon,
  ArrowRight,
  Globe,
  Check,
  ChevronDown,
} from 'lucide-react';

interface SplashScreenViewProps {
  onContinue: () => void;
  language: 'mr' | 'en';
  onLanguageChange?: (lang: 'mr' | 'en') => void;
  isDarkTheme: boolean;
  onToggleTheme?: (isDark: boolean) => void;
}

export const SplashScreenView: React.FC<SplashScreenViewProps> = ({
  onContinue,
  language,
  onLanguageChange,
  isDarkTheme,
  onToggleTheme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Cut-out realistic green majestic tree with transparent background
  const transparentTreePngUrl = 'https://pngimg.com/d/tree_PNG3498.png';

  return (
    <div
      className={`relative w-full h-full min-h-[640px] flex-1 flex flex-col justify-between overflow-hidden select-none transition-all duration-700 ${
        isDarkTheme
          ? 'bg-gradient-to-b from-[#031526] via-[#062038] to-[#010b14] text-white'
          : 'bg-gradient-to-b from-[#87ceeb]/80 via-[#bae6fd]/70 to-[#e0f2fe]/90 text-slate-900'
      }`}
    >
      {/* ========================================================================= */}
      {/* NATURAL TRANSPARENT SKY BLUE BACKDROP BEHIND THE TREE                    */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Natural Atmospheric Sky Blue Gradient Layers */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: isDarkTheme
              ? 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.35) 0%, rgba(3, 37, 65, 0.6) 50%, rgba(2, 6, 23, 0.95) 100%)'
              : 'radial-gradient(circle at 50% 25%, rgba(186, 230, 253, 0.95) 0%, rgba(125, 211, 252, 0.75) 45%, rgba(56, 189, 248, 0.55) 80%, rgba(224, 242, 254, 0.85) 100%)',
          }}
        />

        {/* Natural Sun Rays & Sky Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[220%] h-[75%] pointer-events-none animate-sun-rays">
          <div
            className="w-full h-full"
            style={{
              background: isDarkTheme
                ? 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.15) 40%, transparent 70%)'
                : 'radial-gradient(circle at 50% 0%, rgba(254, 249, 195, 0.7) 0%, rgba(186, 230, 253, 0.5) 35%, rgba(56, 189, 248, 0.25) 60%, transparent 80%)',
            }}
          />
        </div>

        {/* Soft Transparent Sky Clouds / Ambient Mist */}
        <div
          className={`absolute top-12 -left-20 w-96 h-40 rounded-full blur-3xl pointer-events-none transition-opacity ${
            isDarkTheme ? 'bg-sky-500/10' : 'bg-white/60'
          }`}
        />
        <div
          className={`absolute top-28 -right-20 w-96 h-44 rounded-full blur-3xl pointer-events-none transition-opacity ${
            isDarkTheme ? 'bg-sky-400/10' : 'bg-sky-100/70'
          }`}
        />

        {/* Realistically drifting natural leaves in the breeze across the full screen */}
        <div className="absolute top-[22%] left-[18%] w-3 h-4 bg-emerald-500/90 rounded-full rotate-45 animate-leaf-drift-1 blur-[0.3px] pointer-events-none shadow-xs z-10" />
        <div className="absolute top-[30%] right-[16%] w-3.5 h-2.5 bg-lime-400/90 rounded-full -rotate-12 animate-leaf-drift-2 blur-[0.3px] pointer-events-none shadow-xs z-10" />
        <div className="absolute top-[42%] left-[28%] w-2.5 h-3.5 bg-emerald-400/80 rounded-full rotate-24 animate-leaf-drift-3 blur-[0.3px] pointer-events-none shadow-xs z-10" />
      </div>

      {/* ========================================================================= */}
      {/* FULL SCREEN COMPLETE LIVE REALISTIC TRANSPARENT TREE                      */}
      {/* (Fills the entire screen, swaying naturally in real wind)                 */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pointer-events-none overflow-hidden">
        {/* Soft Organic Tree Shadow on Ground */}
        <div
          className={`absolute bottom-3 w-[85%] max-w-[420px] h-[36px] rounded-full blur-lg transition-opacity duration-700 ${
            isDarkTheme ? 'bg-black/75' : 'bg-sky-950/25'
          }`}
        />

        {/* Full-Screen Swaying Living Tree Container */}
        <div className="relative w-full h-full flex items-end justify-center animate-tree-wind">
          {/* Primary Transparent Cutout Tree - Sized to fill the full screen majestically */}
          <img
            src={transparentTreePngUrl}
            alt="Living Realistic Tree"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-[96%] max-h-[760px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] animate-tree-breathe transition-all duration-700 select-none ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              filter: isDarkTheme
                ? 'brightness(0.95) contrast(1.12) saturate(1.2) drop-shadow(0 25px 35px rgba(0,0,0,0.7))'
                : 'brightness(1.03) contrast(1.12) saturate(1.25) drop-shadow(0 25px 35px rgba(7,89,133,0.3))',
            }}
          />

          {/* Fallback spinner while loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Natural Sunlit Highlight on the Canopy */}
          <div
            className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[65%] h-[40%] rounded-full pointer-events-none mix-blend-overlay opacity-50 blur-2xl animate-sun-rays"
            style={{
              background:
                'radial-gradient(circle, rgba(254, 240, 138, 0.9) 0%, rgba(56, 189, 248, 0.4) 60%, transparent 100%)',
            }}
          />
        </div>

        {/* Natural Organic Ground Blend at very bottom */}
        <div
          className={`w-full h-16 pointer-events-none ${
            isDarkTheme
              ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent'
              : 'bg-gradient-to-t from-sky-900/15 via-sky-800/5 to-transparent'
          }`}
        />
      </div>

      {/* ========================================================================= */}
      {/* TOP BAR: ONLY THE LANGUAGE & THEMES MENU WITH ARROW ON TOP RIGHT         */}
      {/* ========================================================================= */}
      <div className="w-full flex justify-end items-center z-30 relative pt-3 px-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-md shadow-md ${
              isDarkTheme
                ? 'bg-slate-900/80 border-slate-700/80 text-slate-100 hover:border-sky-400 shadow-black/50'
                : 'bg-white/85 border-sky-200/90 text-slate-800 hover:border-sky-400 shadow-sky-900/10'
            }`}
          >
            <span>Language & Themes</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-sky-500 transition-transform duration-200 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Popup Card when clicked */}
          {isMenuOpen && (
            <>
              {/* Invisible Backdrop to close on click outside */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsMenuOpen(false)}
              />

              <div
                className={`absolute right-0 top-full mt-2 w-56 rounded-2xl p-3 border shadow-2xl z-50 space-y-3 text-left backdrop-blur-xl ${
                  isDarkTheme
                    ? 'bg-slate-900/95 border-slate-800 text-white shadow-black/60'
                    : 'bg-white/95 border-sky-200 text-slate-900 shadow-sky-300/40'
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
                        setIsMenuOpen(false);
                      }}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between ${
                        language === 'en'
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Globe
                          className={`w-3.5 h-3.5 ${
                            language === 'en' ? 'text-white' : 'text-sky-500'
                          }`}
                        />
                        <span>English</span>
                      </div>
                      {language === 'en' && <Check className="w-3 h-3 text-white" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange?.('mr');
                        setIsMenuOpen(false);
                      }}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between ${
                        language === 'mr'
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Globe
                          className={`w-3.5 h-3.5 ${
                            language === 'mr' ? 'text-white' : 'text-sky-500'
                          }`}
                        />
                        <span>मराठी</span>
                      </div>
                      {language === 'mr' && <Check className="w-3 h-3 text-white" />}
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800" />

                {/* 2. Day & Night Mode Switch */}
                <div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-sky-500 mb-1.5">
                    Theme Select
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {/* Day Mode */}
                    <button
                      type="button"
                      onClick={() => onToggleTheme?.(false)}
                      className={`py-2 px-2.5 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                        !isDarkTheme
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : isDarkTheme
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <Sun className={`w-3.5 h-3.5 ${!isDarkTheme ? 'text-white' : 'text-sky-400'}`} />
                      <span>Day</span>
                      {!isDarkTheme && <Check className="w-3 h-3 text-white ml-0.5" />}
                    </button>

                    {/* Night Mode */}
                    <button
                      type="button"
                      onClick={() => onToggleTheme?.(true)}
                      className={`py-2 px-2.5 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                        isDarkTheme
                          ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Moon className={`w-3.5 h-3.5 ${isDarkTheme ? 'text-white' : 'text-sky-400'}`} />
                      <span>Night</span>
                      {isDarkTheme && <Check className="w-3 h-3 text-white ml-0.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Middle Spacer - Open natural view */}
      <div className="flex-1" />

      {/* ========================================================================= */}
      {/* BOTTOM: ONLY THE CONTINUE BUTTON AS REQUESTED                             */}
      {/* ========================================================================= */}
      <div className="pt-2 pb-6 z-30 w-full max-w-xs mx-auto px-4">
        <button
          type="button"
          onClick={onContinue}
          className={`w-full py-3.5 px-5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-2xl transition-all active:scale-95 cursor-pointer backdrop-blur-md ${
            isDarkTheme
              ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/40 border border-sky-400/40'
              : 'bg-sky-500 hover:bg-sky-600 text-white shadow-sky-600/35 border border-sky-400/30'
          }`}
        >
          <span>{language === 'mr' ? 'पुढे जा' : 'Continue'}</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};
