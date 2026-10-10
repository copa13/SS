import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Compass, ArrowRight, Lightbulb } from 'lucide-react';
import { GuidanceMessage } from '../../types/career';
import { M3TopAppBar } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';

interface AICareerGuidanceViewProps {
  messages: GuidanceMessage[];
  onSendMessage: (query: string) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const AICareerGuidanceView: React.FC<AICareerGuidanceViewProps> = ({
  messages,
  onSendMessage,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const quickPrompts = isMr
    ? [
        'माझ्या प्रोफाइलनुसार कोणते करिअर सर्वोत्तम आहे?',
        'माझ्याकडे कोणत्या कौशल्यांची कमतरता आहे?',
        'प्रॅक्टिकल प्रोजेक्ट्सचा करिअर सज्जतेवर काय प्रभाव पडेल?',
      ]
    : [
        'Which career matches my profile best?',
        'What critical skill gaps should I prioritize?',
        'Show practical project roadmap',
      ];

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०४. AI करिअर मार्गदर्शन' : '04. AI Career Guidance'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="guidance"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        {/* Messages Feed */}
        <div className="p-4 space-y-3 overflow-y-auto max-h-[calc(840px-300px)]">
          <div
            className={`p-3 rounded-2xl flex items-center gap-3 border ${
              isDarkTheme ? 'bg-purple-950/20 border-purple-900/40' : 'bg-purple-50/70 border-purple-200'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-purple-900 dark:text-purple-200 leading-snug">
              {isMr
                ? 'AI मार्गदर्शक तुमच्या शिक्षण, ॲप्टिट्यूड आणि कौशल्यांवरून थेट उत्तरे देत आहे.'
                : 'AI Guidance is customized based on your education, aptitude score, and current skills.'}
            </p>
          </div>

          {messages.map((msg) => {
            const isAi = msg.sender === 'ai';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isAi ? 'items-start' : 'items-end'} space-y-1`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-3xl text-xs leading-relaxed ${
                    isAi
                      ? isDarkTheme
                        ? 'bg-slate-900 border border-slate-800 text-slate-200'
                        : 'bg-white border border-slate-200 text-slate-800 shadow-2xs'
                      : 'bg-blue-600 text-white shadow-xs'
                  }`}
                >
                  {msg.text}

                  {msg.actionCard && (
                    <div
                      onClick={() => onNavigate(msg.actionCard!.route)}
                      className="mt-3 p-2.5 rounded-2xl bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 cursor-pointer active:scale-95 transition-all text-blue-700 dark:text-blue-300"
                    >
                      <div className="font-bold text-[11px]">{msg.actionCard.title}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{msg.actionCard.description}</div>
                      <div className="flex items-center gap-1 text-[10px] font-bold mt-1.5 text-blue-600 dark:text-blue-400">
                        <span>{msg.actionCard.actionLabel}</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-slate-400 px-2">{msg.timestamp}</span>
              </div>
            );
          })}
        </div>

        {/* Quick Prompts Chips */}
        <div className="px-4 py-1.5 flex gap-1.5 overflow-x-auto no-scrollbar">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => onSendMessage(q)}
              className="px-2.5 py-1 rounded-xl text-[10px] font-medium whitespace-nowrap bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 px-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isMr ? 'तुमचा करिअर प्रश्न विचारा...' : 'Ask guidance question...'}
            className={`flex-1 px-3 py-2 rounded-2xl text-xs border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkTheme
                ? 'bg-slate-800/80 border-slate-700 text-white'
                : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="guidance"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
