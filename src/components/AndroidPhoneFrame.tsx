import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface AndroidPhoneFrameProps {
  children: React.ReactNode;
  isDarkTheme: boolean;
  deviceSize: 'pixel' | 'galaxy' | 'compact';
}

export const AndroidPhoneFrame: React.FC<AndroidPhoneFrameProps> = ({
  children,
  isDarkTheme,
  deviceSize,
}) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  const sizeClasses = {
    pixel: 'w-[390px] h-[840px]',
    galaxy: 'w-[412px] h-[880px]',
    compact: 'w-[360px] h-[780px]',
  }[deviceSize];

  return (
    <div className="relative flex flex-col items-center justify-center p-2">
      {/* Outer Phone Bezel */}
      <div
        className={`relative ${sizeClasses} rounded-[48px] p-3 shadow-2xl transition-all duration-300 border-4 ${
          isDarkTheme ? 'bg-slate-900 border-slate-700 shadow-cyan-950/30' : 'bg-slate-200 border-slate-300 shadow-slate-900/15'
        }`}
      >
        {/* Speaker slit */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-slate-600/40 z-30" />

        {/* Screen Bezel Container */}
        <div
          className={`relative w-full h-full rounded-[38px] overflow-hidden flex flex-col transition-colors duration-200 ${
            isDarkTheme ? 'bg-[#111418] text-[#e2e2e6]' : 'bg-[#fdfcff] text-[#1a1c1e]'
          }`}
        >
          {/* Status Bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-2 text-xs select-none">
            {/* Time */}
            <span className="font-semibold tracking-tight tabular-nums">
              {currentTime}
            </span>

            {/* Front Camera Punch Hole */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-4 h-4 rounded-full bg-black border border-slate-800 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900/80" />
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 opacity-90">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <div className="flex items-center gap-0.5">
                <span className="text-[10px] font-medium tabular-nums">98%</span>
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Android Screen Inner Content (Viewport) */}
          <div className="relative flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
            {children}
          </div>

          {/* Android Gesture Navigation Pill */}
          <div className="relative z-20 flex justify-center py-2 bg-transparent select-none">
            <div
              className={`w-32 h-1 rounded-full transition-colors ${
                isDarkTheme ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-400 hover:bg-slate-500'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
