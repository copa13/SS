import React, { useState } from 'react';
import { Smartphone, Mail, Sparkles, ShieldCheck, ChevronLeft } from 'lucide-react';

interface LoginScreenViewProps {
  onOtpVerified: (contactInfo: { contact: string; method: 'phone' | 'gmail' }) => void;
  onBack?: () => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const LoginScreenView: React.FC<LoginScreenViewProps> = ({
  onOtpVerified,
  onBack,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [loginMethod, setLoginMethod] = useState<'phone' | 'gmail'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [email, setEmail] = useState('student@university.edu');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['4', '8', '2', '1']);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = () => {
    if (loginMethod === 'phone' && (!phoneNumber || phoneNumber.length < 10)) return;
    if (loginMethod === 'gmail' && (!email || !email.includes('@'))) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
    }, 400);
  };

  const handleVerifyOtp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onOtpVerified({
        contact: loginMethod === 'phone' ? `+91 ${phoneNumber}` : email,
        method: loginMethod,
      });
    }, 400);
  };

  return (
    <div
      className={`flex-1 flex flex-col justify-between p-6 transition-colors ${
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

      <div className="w-full max-w-sm space-y-6 my-auto">
        {/* SIS Header Branding */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-sky-500 text-white shadow-xl shadow-sky-500/25 mx-auto">
            <span className="text-2xl font-black tracking-wider">SIS</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            SIS
          </h1>
          <p className="text-xs font-semibold text-sky-500 tracking-wider">
            Smart Intelligence Students
          </p>
        </div>

        {/* Method Switcher: Only Phone or Gmail */}
        <div className="flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60">
          <button
            type="button"
            onClick={() => {
              setLoginMethod('phone');
              setOtpSent(false);
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              loginMethod === 'phone'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Smartphone className={`w-4 h-4 ${loginMethod === 'phone' ? 'text-white' : 'text-sky-500'}`} />
            <span>{isMr ? 'फोन नंबर' : 'Phone'}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setLoginMethod('gmail');
              setOtpSent(false);
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              loginMethod === 'gmail'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Mail className={`w-4 h-4 ${loginMethod === 'gmail' ? 'text-white' : 'text-sky-500'}`} />
            <span>Gmail</span>
          </button>
        </div>

        {/* Credentials & Send OTP Card */}
        <div
          className={`p-6 rounded-3xl border shadow-sm transition-all space-y-5 ${
            isDarkTheme
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          {loginMethod === 'phone' ? (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-sky-500" />
                <span>{isMr ? 'फोन नंबर' : 'Phone Number'}</span>
              </label>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-2.5 rounded-2xl text-xs font-bold border ${
                    isDarkTheme
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="9876543210"
                  className={`flex-1 px-4 py-2.5 rounded-2xl text-sm font-semibold tracking-wider border focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isDarkTheme
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-sky-500" />
                <span>Gmail ID</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@gmail.com"
                className={`w-full px-4 py-2.5 rounded-2xl text-xs font-semibold border focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  isDarkTheme
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          )}

          {/* OTP Section once sent */}
          {otpSent && (
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>{isMr ? 'OTP प्रविष्ट करा' : 'Enter OTP'}</span>
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    className={`w-12 h-12 text-center font-bold text-lg rounded-2xl border focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      isDarkTheme
                        ? 'bg-slate-800 border-slate-700 text-white'
                        : 'bg-white border-slate-300 text-slate-900 shadow-xs'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Action button: Send OTP OR Verify OTP */}
          {!otpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={
                isLoading ||
                (loginMethod === 'phone' ? phoneNumber.length < 10 : !email.includes('@'))
              }
              className="w-full py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
            >
              <span>
                {isLoading
                  ? '...'
                  : isMr
                  ? 'Send OTP (ओटीपी पाठवा)'
                  : 'Send OTP'}
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleVerifyOtp}
              disabled={isLoading || otp.some((d) => !d)}
              className="w-full py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
            >
              <span>
                {isLoading
                  ? '...'
                  : isMr
                  ? 'Verify OTP'
                  : 'Verify OTP'}
              </span>
            </button>
          )}
        </div>

        {/* Minimal branding badge */}
        <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
          <span>SIS • Smart Intelligence Students</span>
        </div>
      </div>
    </div>
  );
};
