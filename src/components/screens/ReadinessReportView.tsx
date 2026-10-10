import React, { useState } from 'react';
import {
  FileText,
  Download,
  Share2,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Award,
  Printer,
  X,
  TrendingUp,
  FolderGit2,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { StudentProfile } from '../../types/career';
import { M3TopAppBar, M3CircularScore } from '../M3CommonComponents';
import { StepProgressBar } from '../StepProgressBar';
import { StepNavigationFooter } from '../StepNavigationFooter';
import confetti from 'canvas-confetti';

interface ReadinessReportViewProps {
  profile: StudentProfile;
  onNavigate: (route: string) => void;
  isDarkTheme: boolean;
  language: 'mr' | 'en';
}

export const ReadinessReportView: React.FC<ReadinessReportViewProps> = ({
  profile,
  onNavigate,
  isDarkTheme,
  language,
}) => {
  const isMr = language === 'mr';
  const [showPdfModal, setShowPdfModal] = useState(false);
  const reportDate = new Date().toLocaleDateString(isMr ? 'mr-IN' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleExportPdf = () => {
    setShowPdfModal(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  const handlePrint = () => {
    window.print();
  };

  // Structured report data matching the prompt requirement:
  // "Readiness score, strengths, weaknesses, remaining gaps आणि पुढील recommendations"
  const reportSections = {
    strengths: [
      {
        titleMr: 'उत्कृष्ट ॲप्टिट्यूड व तर्कशक्ती (९२%)',
        titleEn: 'Exceptional Aptitude & Logic (92%)',
        descMr: 'अमूर्त विचारसरणी आणि अल्गोरिदम समजण्यात उच्च कौशल्य.',
        descEn: 'High cognitive problem-solving ability with structured thinking.',
      },
      {
        titleMr: 'मजबूत प्रोग्रॅमिंग पाया (Kotlin / Mobile)',
        titleEn: 'Core Software Foundations (Kotlin / Jetpack)',
        descMr: 'ऑब्जेक्ट ओरिएंटेड संकल्पना, आर्किटेक्चर आणि UI डिझाइनमध्ये पारंगत.',
        descEn: 'Demonstrated proficiency in clean architecture and UI design.',
      },
      {
        titleMr: 'प्रत्यक्ष पूर्ण केलेले प्रकल्प (८५%)',
        titleEn: 'Hands-on Project Portfolio (85%)',
        descMr: 'EYC Native Capstone व सेमेंटिक सर्च सिस्टीम यशस्वीरित्या विकसित.',
        descEn: 'Successfully authored functional capstone projects with Git evidence.',
      },
    ],
    weaknesses: [
      {
        titleMr: 'क्लाउड डिप्लॉयमेंट (Docker & Kubernetes चा मर्यादित सराव)',
        titleEn: 'Cloud Deployments & Microservices (Limited exposure)',
        descMr: 'कंटेनर आधारित डिप्लॉयमेंटमध्ये अजून प्रत्यक्ष अनुभवाची गरज आहे.',
        descEn: 'Requires hands-on experience in cloud runtime pipelines & Dockerfiles.',
      },
      {
        titleMr: 'वेक्टर डेटाबेस इंडेक्सिंग (Qdrant/Pinecone चा प्राथमिक स्तर)',
        titleEn: 'Vector Database Indexing (Beginner level)',
        descMr: 'लार्ज लँग्वेज मॉडेल्ससोबत एम्बेडिंग्स सर्च ऑप्टिमायझेशन शिकणे आवश्यक.',
        descEn: 'Needs further practice integrating high-dimensional vector search.',
      },
    ],
    remainingGaps: [
      {
        skillMr: 'Cloud Run & Docker कंटेनरायझेशन',
        skillEn: 'Cloud Run & Docker Containerization',
        levelMr: 'सध्या: स्तर २ ➔ आवश्यक: स्तर ४',
        levelEn: 'Current: L2 ➔ Target: L4',
        priority: 'High',
      },
      {
        skillMr: 'असिंक्रोनस कॉरुटिन्स ऑप्टिमायझेशन',
        skillEn: 'Advanced Kotlin Coroutines Optimization',
        levelMr: 'सध्या: स्तर ३ ➔ आवश्यक: स्तर ४',
        levelEn: 'Current: L3 ➔ Target: L4',
        priority: 'Medium',
      },
    ],
    recommendations: [
      {
        step: 1,
        titleMr: '१. डॉकर कंटेनरसह एक मायक्रोसर्व्हिस डिप्लॉय करा',
        titleEn: '1. Deploy Dockerized Microservice on Cloud Run',
        timelineMr: '१-२ आठवडे',
        timelineEn: '1-2 Weeks',
      },
      {
        step: 2,
        titleMr: '२. GitHub वर Capstone प्रकल्पाची README व डेमो व्हिडिओ जोडा',
        titleEn: '2. Add comprehensive README & demo video to Capstone repo',
        timelineMr: '३ दिवस',
        timelineEn: '3 Days',
      },
      {
        step: 3,
        titleMr: '३. AI ॲप्लिकेशन इंजिनीअर पदासाठी थेट मुलाखतींना अर्ज सुरू करा',
        titleEn: '3. Begin applying for AI Application Engineer Associate roles',
        timelineMr: '३ आठवड्यांनंतर',
        timelineEn: 'After 3 Weeks',
      },
    ],
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <M3TopAppBar
          title={isMr ? '१०. करिअर सज्जता अहवाल (PDF)' : '10. Career Readiness Report'}
          canNavigateBack
          onNavigateBack={() => onNavigate('home')}
          actions={
            <button
              onClick={handleExportPdf}
              className="px-2.5 py-1 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 shadow-sm transition-all active:scale-95"
              title="Export PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isMr ? 'PDF डाउनलोड' : 'PDF Export'}</span>
            </button>
          }
          isDarkTheme={isDarkTheme}
        />

        <StepProgressBar
          currentRoute="report"
          onSelectStep={onNavigate}
          language={language}
          isDarkTheme={isDarkTheme}
        />

        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(840px-240px)]">
          {/* Executive Header */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {isMr ? 'अधिकृत करिअर मूल्यांकन अहवाल' : 'Official Career Evaluation'}
                </span>
                <h2 className="text-base font-bold mt-0.5">{profile.name}</h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {profile.university} · {profile.major}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {isMr ? 'स्थिती: मुलाखतीसाठी सज्ज (Screening Ready)' : 'Status: Ready for Interviews'}
                  </span>
                </div>

                <div className="mt-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {isMr ? 'लक्ष्य पद:' : 'Target Role:'}{' '}
                  <span className="text-blue-600 dark:text-blue-400">{profile.targetRole}</span>
                </div>
              </div>

              <M3CircularScore
                score={84}
                size={82}
                strokeWidth={8}
                label={isMr ? 'सज्जता' : 'Score'}
                isDarkTheme={isDarkTheme}
              />
            </div>

            {/* Quick Export Button */}
            <button
              onClick={handleExportPdf}
              className="w-full mt-3 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isMr ? 'संपूर्ण अधिकृत PDF अहवाल डाऊनलोड करा' : 'Download Complete Official PDF Report'}</span>
            </button>
          </div>

          {/* Section 1: Strengths (सामर्थ्ये) */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                {isMr ? '१. प्रमुख सामर्थ्ये (Strengths)' : '1. Core Strengths'}
              </h3>
            </div>
            <div className="space-y-2">
              {reportSections.strengths.map((item, i) => (
                <div key={i} className="p-2.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-xs">
                  <div className="font-bold text-emerald-800 dark:text-emerald-300">
                    {isMr ? item.titleMr : item.titleEn}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                    {isMr ? item.descMr : item.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Weaknesses (कमकुवत बाजू / सुधारणेची क्षेत्रे) */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                {isMr ? '२. सुधारणेची क्षेत्रे (Weaknesses / Improvement Areas)' : '2. Improvement Areas (Weaknesses)'}
              </h3>
            </div>
            <div className="space-y-2">
              {reportSections.weaknesses.map((item, i) => (
                <div key={i} className="p-2.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-xs">
                  <div className="font-bold text-amber-900 dark:text-amber-200">
                    {isMr ? item.titleMr : item.titleEn}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                    {isMr ? item.descMr : item.descEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Remaining Skill Gaps (उरलेल्या कौशल्यातील त्रुटी) */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  {isMr ? '३. उरलेल्या कौशल्यातील त्रुटी (Remaining Gaps)' : '3. Remaining Skill Gaps'}
                </h3>
              </div>
              <button
                onClick={() => onNavigate('skillgap')}
                className="text-[11px] font-bold text-purple-600 hover:underline flex items-center gap-0.5"
              >
                <span>{isMr ? 'तपशील' : 'View'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="space-y-2">
              {reportSections.remainingGaps.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {isMr ? item.skillMr : item.skillEn}
                    </span>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {isMr ? item.levelMr : item.levelEn}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-500/10 text-purple-600">
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Recommendations (पुढील शिफारसी) */}
          <div
            className={`p-4 rounded-3xl border ${
              isDarkTheme ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                {isMr ? '४. पुढील कृती शिफारसी (Next Recommendations)' : '4. Next Action Recommendations'}
              </h3>
            </div>
            <div className="space-y-2">
              {reportSections.recommendations.map((rec) => (
                <div key={rec.step} className="p-2.5 rounded-2xl bg-blue-500/5 border border-blue-500/15 text-xs flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      {isMr ? rec.titleMr : rec.titleEn}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-blue-500/10 text-blue-600 shrink-0">
                    {isMr ? rec.timelineMr : rec.timelineEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <StepNavigationFooter
        currentRoute="report"
        onNavigate={onNavigate}
        language={language}
        isDarkTheme={isDarkTheme}
      />

      {/* PDF Modal / Print View */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in">
          <div className="bg-white text-slate-900 rounded-3xl max-w-sm w-full max-h-[90vh] overflow-y-auto p-5 shadow-2xl relative border border-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="font-black text-sm">
                  {isMr ? 'अधिकृत करिअर सज्जता अहवाल (PDF)' : 'Official Career Readiness Report'}
                </h3>
              </div>
              <button
                onClick={() => setShowPdfModal(false)}
                className="p-1 rounded-full hover:bg-slate-100"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Document Content */}
            <div className="text-xs space-y-3 font-serif">
              <div className="text-center border-b pb-2">
                <h4 className="font-bold text-sm tracking-wide text-blue-900">
                  EYC — ELEVATE YOUR CAREER
                </h4>
                <p className="text-[10px] text-slate-500">Official Student Competency & Readiness Certificate</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Date: {reportDate} • Ref: EYC-2026-AP-940</p>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl border text-[11px] space-y-1">
                <div><strong>{isMr ? 'विद्यार्थी:' : 'Candidate:'}</strong> {profile.name}</div>
                <div><strong>{isMr ? 'पदवी:' : 'Degree:'}</strong> {profile.degree} in {profile.major}</div>
                <div><strong>{isMr ? 'लक्ष्य करिअर:' : 'Target Role:'}</strong> {profile.targetRole}</div>
                <div><strong>{isMr ? 'अंतिम सज्जता स्कोअर:' : 'Final Readiness Score:'}</strong> <span className="font-bold text-emerald-600">84% (Screening Ready)</span></div>
              </div>

              {/* Strengths & Gaps summary */}
              <div className="text-[11px] space-y-1.5 pt-1">
                <div className="font-sans font-bold text-slate-800">
                  {isMr ? '• सिद्ध झालेली प्रमुख सामर्थ्ये:' : '• Verified Strengths:'}
                </div>
                <p className="text-[10px] text-slate-600 pl-2">
                  Kotlin Coroutines, Jetpack Compose UI, Algorithmic Thinking (RIASEC Investigative: 92%), Hands-on Capstone Complete.
                </p>

                <div className="font-sans font-bold text-slate-800 pt-1">
                  {isMr ? '• उर्वरित कौशल्यातील त्रुटी व कृती:' : '• Remaining Gaps & Action Plan:'}
                </div>
                <p className="text-[10px] text-slate-600 pl-2">
                  Cloud Run Docker deployment (Phase 3 milestone) + Vector Embeddings cache integration.
                </p>
              </div>

              <div className="border-t pt-3 flex items-center justify-between text-[9px] text-slate-500">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Digitally Verified by EYC Engine</span>
                </div>
                <div className="font-mono">QR: #VERIFIED-2026</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t flex gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isMr ? 'प्रिंट / PDF सेव्ह करा' : 'Print / Save PDF'}</span>
              </button>
              <button
                onClick={() => setShowPdfModal(false)}
                className="py-2 px-3 rounded-xl border border-slate-300 font-semibold text-xs text-slate-700 hover:bg-slate-50"
              >
                {isMr ? 'बंद करा' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
