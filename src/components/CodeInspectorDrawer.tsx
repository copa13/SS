import React, { useState } from 'react';
import {
  Code,
  Copy,
  Check,
  Download,
  FileCode,
  FolderTree,
  ExternalLink,
  ChevronRight,
  Layers,
  Terminal,
  X,
} from 'lucide-react';
import { KOTLIN_FILES, KotlinFileEntry } from '../data/kotlinSources';

interface CodeInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeScreenRoute?: string;
  activeRouteKotlinFile?: string;
  isDarkTheme?: boolean;
}

export const CodeInspectorDrawer: React.FC<CodeInspectorDrawerProps> = ({
  isOpen,
  onClose,
  activeScreenRoute,
  activeRouteKotlinFile,
}) => {
  // Map current screen to corresponding kotlin file if applicable
  const getInitialFileId = () => {
    if (activeRouteKotlinFile) {
      const match = KOTLIN_FILES.find((f) => f.name.includes(activeRouteKotlinFile) || f.path.includes(activeRouteKotlinFile));
      if (match) return match.id;
    }
    switch (activeScreenRoute) {
      case 'login': return 'screen_login';
      case 'enter-location': return 'screen_enter_location';
      case 'enter-education': return 'screen_enter_education';
      case 'home': return 'screen_home';
      case 'profile': return 'screen_profile';
      case 'aptitude': return 'screen_aptitude';
      case 'skills': return 'screen_skills';
      case 'guidance': return 'screen_guidance';
      case 'matches': return 'screen_careermatch';
      case 'skillgap': return 'screen_skillgap';
      case 'pathway': return 'screen_pathway';
      case 'projects': return 'screen_projects';
      case 'readiness': return 'screen_readiness';
      case 'report': return 'screen_report';
      default: return 'screen_home';
    }
  };

  const [selectedFileId, setSelectedFileId] = useState<string>(getInitialFileId());
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const selectedFile = KOTLIN_FILES.find((f) => f.id === selectedFileId) || KOTLIN_FILES[0];

  const categories = ['All', 'Screens', 'Components', 'Theme', 'Navigation', 'Build', 'Architecture'];

  const filteredFiles = selectedCategory === 'All'
    ? KOTLIN_FILES
    : KOTLIN_FILES.filter((f) => f.category === selectedCategory);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob([selectedFile.code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = selectedFile.name;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadAllBundle = () => {
    const bundleText = KOTLIN_FILES.map(
      (f) => `// ========================================================\n// FILE: ${f.path}\n// CATEGORY: ${f.category}\n// DESCRIPTION: ${f.description}\n// ========================================================\n\n${f.code}\n\n`
    ).join('\n');

    const element = document.createElement('a');
    const file = new Blob([bundleText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'EYC_Android_Jetpack_Compose_Source_Bundle.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-full bg-slate-950 text-slate-100 flex flex-col shadow-2xl border-l border-slate-800">
        {/* Top Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight">
                Kotlin & Jetpack Compose Source Hub
              </h2>
              <p className="text-xs text-slate-400">
                Native Android Material 3 UI code for EYC (Elevate Your Career)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAllBundle}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
              title="Download entire code bundle"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export All Files (.txt bundle)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 bg-slate-900/50 border-b border-slate-800/80 overflow-x-auto text-xs no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Split: File Tree Sidebar & Code Viewer */}
        <div className="flex-1 flex overflow-hidden">
          {/* File Explorer Sidebar */}
          <div className="w-72 border-r border-slate-800/80 bg-slate-950/60 overflow-y-auto p-3 space-y-1">
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Project Structure ({filteredFiles.length} files)
            </div>
            {filteredFiles.map((file) => {
              const isSelected = file.id === selectedFileId;
              return (
                <button
                  key={file.id}
                  onClick={() => setSelectedFileId(file.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-colors flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <FileCode className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold truncate">{file.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{file.path}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Code Viewer Panel */}
          <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
            {/* File Path & Quick Actions Toolbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/40">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-blue-400">
                  {selectedFile.category}
                </span>
                <span className="font-mono text-slate-300 truncate max-w-md">
                  {selectedFile.path}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 active:scale-95'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
                </button>
                <button
                  onClick={handleDownloadFile}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description Banner */}
            <div className="px-5 py-2 bg-slate-900/20 text-xs text-slate-400 border-b border-slate-800/50">
              {selectedFile.description}
            </div>

            {/* Code Pre container */}
            <div className="flex-1 overflow-auto p-5 font-mono text-xs text-slate-200 leading-relaxed bg-[#0b0f19]">
              <pre>
                <code>{selectedFile.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Integration Footnote */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Ready to integrate into native Android Studio projects (minSdk 26+, Jetpack Compose BOM 2024.12+).</span>
          </div>
          <span className="text-slate-500">com.eyc.careerguidance.ui</span>
        </div>
      </div>
    </div>
  );
};
