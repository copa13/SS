import React from 'react';
import { ArrowLeft, Home, Compass, GitMerge, User, RefreshCw, AlertCircle, Inbox } from 'lucide-react';

interface M3TopAppBarProps {
  title: string;
  canNavigateBack?: boolean;
  onNavigateBack?: () => Unit;
  actions?: React.ReactNode;
  isDarkTheme?: boolean;
}

type Unit = void;

export const M3TopAppBar: React.FC<M3TopAppBarProps> = ({
  title,
  canNavigateBack = false,
  onNavigateBack,
  actions,
  isDarkTheme,
}) => {
  return (
    <div
      className={`sticky top-0 z-30 flex items-center justify-between px-4 h-14 border-b transition-colors ${
        isDarkTheme
          ? 'bg-[#111418] border-slate-800 text-[#e2e2e6]'
          : 'bg-[#fdfcff] border-slate-200 text-[#1a1c1e]'
      }`}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {canNavigateBack && onNavigateBack && (
          <button
            onClick={onNavigateBack}
            className={`p-2 rounded-full transition-colors ${
              isDarkTheme ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
            }`}
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-base font-semibold truncate tracking-tight">
          {title}
        </h1>
      </div>
      {actions && <div className="flex items-center gap-1 shrink-0">{actions}</div>}
    </div>
  );
};

interface M3BottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isDarkTheme?: boolean;
}

export const M3BottomNav: React.FC<M3BottomNavProps> = ({
  currentTab,
  onSelectTab,
  isDarkTheme,
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'assessments', label: 'Assess', icon: RefreshCw },
    { id: 'matches', label: 'Careers', icon: Compass },
    { id: 'pathway', label: 'Pathway', icon: GitMerge },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div
      className={`sticky bottom-0 z-30 grid grid-cols-5 items-center h-16 border-t px-1 select-none transition-colors ${
        isDarkTheme
          ? 'bg-[#111418]/95 backdrop-blur-md border-slate-800'
          : 'bg-[#fdfcff]/95 backdrop-blur-md border-slate-200'
      }`}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className="flex flex-col items-center justify-center py-1 transition-all group"
          >
            <div
              className={`flex items-center justify-center px-4 py-1 rounded-full transition-all ${
                isActive
                  ? isDarkTheme
                    ? 'bg-[#00497d] text-[#d1e4ff]'
                    : 'bg-[#d1e4ff] text-[#001d36]'
                  : isDarkTheme
                  ? 'text-slate-400 group-hover:text-slate-200'
                  : 'text-slate-600 group-hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span
              className={`text-[10px] font-medium tracking-tight mt-0.5 ${
                isActive
                  ? isDarkTheme
                    ? 'text-[#9ecafe]'
                    : 'text-[#0061a4]'
                  : isDarkTheme
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export const M3CircularScore: React.FC<{
  score: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  isDarkTheme?: boolean;
}> = ({ score, size = 96, strokeWidth = 8, label = 'Readiness', isDarkTheme }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={isDarkTheme ? '#2a313d' : '#e2e8f0'}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={isDarkTheme ? '#9ecafe' : '#0061a4'}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold tracking-tight tabular-nums">{score}%</span>
        {label && <span className="text-[10px] opacity-75 font-medium">{label}</span>}
      </div>
    </div>
  );
};

export const M3LoadingState: React.FC<{ isDarkTheme?: boolean; message?: string }> = ({
  isDarkTheme,
  message = 'Calculating student profile & career trajectories...',
}) => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-pulse">
    <div
      className={`w-12 h-12 rounded-full border-4 border-t-transparent animate-spin mb-4 ${
        isDarkTheme ? 'border-[#9ecafe]' : 'border-[#0061a4]'
      }`}
    />
    <p className={`text-sm ${isDarkTheme ? 'text-slate-400' : 'text-slate-600'}`}>
      {message}
    </p>
  </div>
);

export const M3EmptyState: React.FC<{
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  isDarkTheme?: boolean;
}> = ({ title, description, actionLabel, onAction, isDarkTheme }) => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
        isDarkTheme ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
      }`}
    >
      <Inbox className="w-7 h-7" />
    </div>
    <h3 className="text-base font-semibold mb-1">{title}</h3>
    <p className={`text-xs max-w-xs mb-5 ${isDarkTheme ? 'text-slate-400' : 'text-slate-600'}`}>
      {description}
    </p>
    {actionLabel && onAction && (
      <button
        onClick={onAction}
        className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95 ${
          isDarkTheme ? 'bg-[#9ecafe] text-[#003258]' : 'bg-[#0061a4] text-white'
        }`}
      >
        {actionLabel}
      </button>
    )}
  </div>
);

export const M3ErrorState: React.FC<{
  message?: string;
  onRetry: () => void;
  isDarkTheme?: boolean;
}> = ({ message = 'Unable to synchronize assessment telemetry.', onRetry, isDarkTheme }) => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
    <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
      <AlertCircle className="w-7 h-7" />
    </div>
    <h3 className="text-base font-semibold mb-1">Assessment Sync Error</h3>
    <p className={`text-xs max-w-xs mb-5 ${isDarkTheme ? 'text-slate-400' : 'text-slate-600'}`}>
      {message}
    </p>
    <button
      onClick={onRetry}
      className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95 ${
        isDarkTheme ? 'bg-[#9ecafe] text-[#003258]' : 'bg-[#0061a4] text-white'
      }`}
    >
      Retry Connection
    </button>
  </div>
);
