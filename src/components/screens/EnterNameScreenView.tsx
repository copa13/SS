import React, { useState, useRef } from 'react';
import { ArrowRight, Camera, User, ChevronLeft } from 'lucide-react';

interface EnterNameScreenViewProps {
  initialName: string;
  initialAvatarUrl?: string;
  onContinue: (name: string, avatarUrl?: string) => void;
  onBack?: () => void;
  onSkip?: () => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const EnterNameScreenView: React.FC<EnterNameScreenViewProps> = ({
  initialName,
  initialAvatarUrl,
  onContinue,
  onBack,
  onSkip,
  isDarkTheme,
}) => {
  const [fullName, setFullName] = useState(initialName || '');
  const [avatar, setAvatar] = useState<string>(initialAvatarUrl || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    onContinue(fullName.trim(), avatar || undefined);
  };

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
        {/* Hidden File Input for Camera / Photo selection */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Profile Avatar Select with Camera Icon (No extra text label) */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleAvatarClick}
            className="relative group cursor-pointer focus:outline-none transition-transform hover:scale-105 active:scale-95"
            aria-label="Select Profile Photo"
          >
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-2 shadow-lg transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-sky-400 group-hover:border-sky-500'
                  : 'bg-slate-50 border-slate-200 text-sky-500 group-hover:border-sky-400'
              }`}
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-sky-400" />
              )}
            </div>

            {/* Camera Badge Icon */}
            <div
              className={`absolute bottom-0 right-0 w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md border-2 transition-transform group-hover:scale-110 ${
                isDarkTheme ? 'border-slate-900' : 'border-white'
              }`}
            >
              <Camera className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        {/* Form: Name input & Next button */}
        <form
          onSubmit={handleSubmit}
          className={`p-6 rounded-3xl border shadow-sm transition-all space-y-5 ${
            isDarkTheme
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          <div>
            <input
              type="text"
              autoFocus
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3.5 rounded-2xl text-base font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                isDarkTheme
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={!fullName.trim()}
            className="w-full py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-base shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </form>
      </div>

      {/* Bottom Footer with Skip this question on bottom right with arrow */}
      <div className="w-full max-w-sm mx-auto flex justify-end items-center pt-4 pb-2">
        {onSkip && (
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
        )}
      </div>
    </div>
  );
};
