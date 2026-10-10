import React, { useState } from 'react';
import { Brain, Check, ArrowRight, ArrowLeft, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { AssessmentQuestion } from '../../types/career';
import { mockAptitudeSummary } from '../../data/mockData';
import { M3TopAppBar } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';
import confetti from 'canvas-confetti';

interface AptitudeAssessmentViewProps {
  questions: AssessmentQuestion[];
  onComplete: (answers: Record<string, number>) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const AptitudeAssessmentView: React.FC<AptitudeAssessmentViewProps> = ({
  questions,
  onComplete,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  const handleSelectOption = (score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: score,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // If submitted, show the dedicated Assessment Completion & Aptitude Result Summary Screen
  if (isSubmitted) {
    return (
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <M3TopAppBar
            title={isMr ? '०२. चाचणी निकाल सारांश' : '02. Aptitude Result Summary'}
            canNavigateBack
            onNavigateBack={() => setIsSubmitted(false)}
            isDarkTheme={isDarkTheme}
          />

          <StepProgressBar
            currentRoute="aptitude"
            onSelectStep={onNavigate}
            language={language}
            isDarkTheme={isDarkTheme}
          />

          <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
            {/* Completion Hero Banner */}
            <div
              className={`p-5 rounded-3xl text-center border ${
                isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold">
                {isMr ? 'अभिनंदन! चाचणी पूर्ण झाली 🎉' : 'Assessment Completed! 🎉'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {isMr
                  ? 'तुमची बौद्धिक आवड व विचार करण्याची क्षमता यशस्वीरीत्या मोजली गेली आहे.'
                  : 'Holland RIASEC code and cognitive aptitude profile successfully calibrated.'}
              </p>

              {/* Dominant Trait Badge */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isMr ? 'प्रमुख कल:' : 'Dominant Trait:'} {mockAptitudeSummary.dominantTrait} (
                  {mockAptitudeSummary.topScore}%)
                </span>
              </div>
            </div>

            {/* RIASEC Dimensional Breakdown */}
            <div
              className={`p-4 rounded-3xl border ${
                isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                {isMr ? 'आवड व क्षमतांचे घटक (RIASEC Profile)' : 'Holland RIASEC Dimension Scores'}
              </h4>
              <div className="space-y-2.5">
                {(mockAptitudeSummary.breakdown || []).map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{item.category}</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{item.score}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-700"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cognitive Thinking Insight */}
            <div
              className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                isDarkTheme ? 'bg-blue-950/20 border-blue-900/50 text-blue-200' : 'bg-blue-50/70 border-blue-100 text-blue-900'
              }`}
            >
              <strong>{isMr ? '💡 विचार क्षमता निष्कर्ष:' : '💡 Cognitive Insight:'}</strong>{' '}
              {isMr
                ? 'तुमची विश्लेषणात्मक आणि अल्गोरिदम सोडवण्याची क्षमता ९२% आहे. त्यामुळे AI आणि सॉफ्टवेअर आर्किटेक्चर क्षेत्र तुमच्यासाठी सर्वाधिक सुसंगत आहे.'
                : 'Your analytical and systematic reasoning scores are in the 92nd percentile, indicating strong aptitude for software architecture and AI engineering.'}
            </div>
          </div>
        </div>

        <StepNavigationFooter
          currentRoute="aptitude"
          onNavigate={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०२. आवड आणि ॲप्टिट्यूड चाचणी' : '02. Interest & Aptitude Assessment'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          actions={
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-lg bg-blue-500/10">
              Q{currentIndex + 1}/{questions.length}
            </span>
          }
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="aptitude"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
              <span>{isMr ? 'चाचणी प्रगती' : 'Progress'}</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question Category Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
            <Brain className="w-3.5 h-3.5" />
            <span>{currentQ.category}</span>
          </div>

          {/* Question Text */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.questionText}
            </h3>
          </div>

          {/* Answer Options Radio Cards */}
          <div className="space-y-2">
            {currentQ.options.map((option) => {
              const isSelected = answers[currentQ.id] === option.score;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.score)}
                  className={`w-full p-3.5 rounded-2xl text-left text-xs font-semibold border transition-all flex items-center justify-between active:scale-[0.99] ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 dark:border-blue-500 text-blue-900 dark:text-blue-100 shadow-2xs'
                      : isDarkTheme
                      ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-300'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <span className="flex-1 pr-2">{option.text}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-slate-400 dark:border-slate-600'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-3" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Question Navigation Buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                  : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isMr ? 'मागील प्रश्न' : 'Previous'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={answers[currentQ.id] === undefined}
              className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-40 transition-all"
            >
              <span>
                {currentIndex === questions.length - 1
                  ? (isMr ? 'चाचणी पूर्ण करा 🎉' : 'Finish & Submit')
                  : (isMr ? 'पुढील प्रश्न' : 'Next Question')}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="aptitude"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
