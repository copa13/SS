import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Plus, Sparkles, Sliders } from 'lucide-react';
import { SkillItem } from '../../types/career';
import { M3TopAppBar } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';

interface SkillAssessmentViewProps {
  skills: SkillItem[];
  onUpdateSkillLevel: (skillId: string, level: number) => void;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const SkillAssessmentView: React.FC<SkillAssessmentViewProps> = ({
  skills,
  onUpdateSkillLevel,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const categories = isMr
    ? [
        { id: 'All', label: 'सर्व कौशल्ये' },
        { id: 'Technical', label: 'तांत्रिक (Technical)' },
        { id: 'Soft Skills', label: 'व्यावसायिक (Soft Skills)' },
        { id: 'Domain & Tools', label: 'टूल्स व डोमेन' },
      ]
    : [
        { id: 'All', label: 'All' },
        { id: 'Technical', label: 'Technical' },
        { id: 'Soft Skills', label: 'Soft Skills' },
        { id: 'Domain & Tools', label: 'Domain & Tools' },
      ];

  const filteredSkills =
    activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

  const getLevelLabel = (lvl: number) => {
    if (isMr) {
      switch (lvl) {
        case 1: return 'प्राथमिक (Novice)';
        case 2: return 'मध्यम (Developing)';
        case 3: return 'चांगले (Proficient)';
        case 4: return 'प्रगत (Advanced)';
        case 5: return 'तज्ज्ञ (Mastery)';
        default: return 'चांगले';
      }
    }
    switch (lvl) {
      case 1: return 'Novice';
      case 2: return 'Developing';
      case 3: return 'Proficient';
      case 4: return 'Advanced';
      case 5: return 'Mastery';
      default: return 'Proficient';
    }
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '०३. कौशल्य मूल्यमापन' : '03. Skill Assessment'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="skills"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : isDarkTheme
                    ? 'bg-slate-800 text-slate-400 hover:text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills List with Level Sliders */}
          <div className="space-y-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className={`p-4 rounded-3xl border transition-all ${
                  isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </h4>
                      {skill.isVerified && (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{isMr ? 'प्रमाणित' : 'Verified'}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {skill.category}
                    </span>
                  </div>

                  <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/50">
                    {getLevelLabel(skill.currentLevel)} (L{skill.currentLevel})
                  </span>
                </div>

                {/* Level Slider Bar (1 to 5) */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[9px] text-slate-400 font-bold px-1">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={skill.currentLevel}
                    onChange={(e) => onUpdateSkillLevel(skill.id, parseInt(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Save Status / Feedback */}
          {savedSuccess && (
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isMr ? 'कौशल्यांचा स्कोअर यशस्वीरीत्या सेव्ह झाला!' : 'Skill scores updated successfully!'}</span>
            </div>
          )}

          <button
            onClick={handleSave}
            className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isMr ? 'कौशल्यांचा स्कोअर अपडेट करा' : 'Save Skills & Recalculate'}</span>
          </button>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="skills"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
};
