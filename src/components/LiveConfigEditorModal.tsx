import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Download, RotateCcw, FileCode, Sparkles, AlertTriangle } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { initialPortfolioData } from '../data/portfolioData';

interface LiveConfigEditorModalProps {
  currentData: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
  onUpdateData: (newData: PortfolioData) => void;
  onShowToast: (message: string) => void;
}

export const LiveConfigEditorModal: React.FC<LiveConfigEditorModalProps> = ({
  currentData,
  isOpen,
  onClose,
  onUpdateData,
  onShowToast
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'code'>('visual');
  const [jsonText, setJsonText] = useState('');
  const [parseError, setParseError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Form states for quick visual editing
  const [formData, setFormData] = useState<PortfolioData>(currentData);

  useEffect(() => {
    if (isOpen) {
      setFormData(currentData);
      setJsonText(JSON.stringify(currentData, null, 2));
      setParseError(null);
    }
  }, [isOpen, currentData]);

  if (!isOpen) return null;

  const handleApplyJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onUpdateData(parsed);
      setParseError(null);
      onShowToast("Portfolio data updated successfully!");
    } catch (err: any) {
      setParseError(err.message || "Invalid JSON syntax");
    }
  };

  const handleApplyVisual = () => {
    onUpdateData(formData);
    setJsonText(JSON.stringify(formData, null, 2));
    onShowToast("Portfolio data applied to live view!");
  };

  const handleCopyCode = () => {
    // Generate clean TypeScript export format
    const codeString = `import { PortfolioData } from '../types/portfolio';\n\nexport const initialPortfolioData: PortfolioData = ${JSON.stringify(
      activeTab === 'code' ? (parseError ? currentData : JSON.parse(jsonText || '{}')) : formData,
      null,
      2
    )};\n`;

    navigator.clipboard.writeText(codeString);
    setCopied(true);
    onShowToast("TypeScript configuration copied to clipboard! Paste it into src/data/portfolioData.ts");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadFile = () => {
    const dataToExport = activeTab === 'code' ? (parseError ? currentData : JSON.parse(jsonText || '{}')) : formData;
    const codeString = `import { PortfolioData } from '../types/portfolio';\n\nexport const initialPortfolioData: PortfolioData = ${JSON.stringify(
      dataToExport,
      null,
      2
    )};\n`;

    const blob = new Blob([codeString], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onShowToast("Downloaded portfolioData.ts file!");
  };

  const handleResetToDefault = () => {
    setFormData(initialPortfolioData);
    setJsonText(JSON.stringify(initialPortfolioData, null, 2));
    onUpdateData(initialPortfolioData);
    setParseError(null);
    onShowToast("Reset to default configuration.");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-config-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400">
              <FileCode className="w-4 h-4" />
            </span>
            <div>
              <h2 id="modal-config-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Portfolio Data & Config Editor
              </h2>
              <p className="text-[11px] text-slate-500 font-mono">
                Source file: src/data/portfolioData.ts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-medium">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'visual'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Visual Editor
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'code'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Code / JSON
              </button>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Editor"
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          {activeTab === 'visual' ? (
            <div className="space-y-6 text-xs">
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  You can edit your information below to preview it live right here, or open <code className="font-mono font-semibold bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">src/data/portfolioData.ts</code> in your favorite code editor (VS Code, Cursor, etc.) for full editing anytime.
                </p>
              </div>

              {/* Personal Info Group */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  1. Personal Information & Hero
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      value={formData.personalInfo.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: { ...formData.personalInfo, name: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">Status / Availability Badge</label>
                    <input
                      type="text"
                      value={formData.personalInfo.statusText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: { ...formData.personalInfo, statusText: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">Hero Headline (Role + Value Proposition)</label>
                  <textarea
                    rows={2}
                    value={formData.personalInfo.headline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, headline: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">Hero Sub-headline (Tech Stack & Years)</label>
                  <textarea
                    rows={2}
                    value={formData.personalInfo.subHeadline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalInfo: { ...formData.personalInfo, subHeadline: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                {/* Profile Picture Toggle */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.personalInfo.profileImage.showProfileImage}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: {
                            ...formData.personalInfo,
                            profileImage: {
                              ...formData.personalInfo.profileImage,
                              showProfileImage: e.target.checked
                            }
                          }
                        })
                      }
                      className="w-4 h-4 text-brand-600 rounded border-slate-300"
                    />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Enable Profile Picture (Currently: {formData.personalInfo.profileImage.showProfileImage ? 'Visible' : 'Hidden as requested'})
                    </span>
                  </label>
                  {formData.personalInfo.profileImage.showProfileImage && (
                    <input
                      type="text"
                      placeholder="Image URL or /profile.jpg"
                      value={formData.personalInfo.profileImage.imageUrl || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: {
                            ...formData.personalInfo,
                            profileImage: {
                              ...formData.personalInfo.profileImage,
                              imageUrl: e.target.value
                            }
                          }
                        })
                      }
                      className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  )}
                </div>
              </div>

              {/* Social Links & Contact */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  2. Contact & Social Profiles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      value={formData.socialLinks.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialLinks: { ...formData.socialLinks, email: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">GitHub URL</label>
                    <input
                      type="text"
                      value={formData.socialLinks.github}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialLinks: { ...formData.socialLinks, github: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">LinkedIn URL</label>
                    <input
                      type="text"
                      value={formData.socialLinks.linkedin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 mb-1 font-medium">X (Twitter) URL</label>
                    <input
                      type="text"
                      value={formData.socialLinks.twitter || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">Edit raw JSON config directly:</span>
                {parseError && (
                  <span className="text-red-500 font-mono text-[11px] flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {parseError}
                  </span>
                )}
              </div>
              <textarea
                rows={16}
                value={jsonText}
                onChange={(e) => {
                  setJsonText(e.target.value);
                  setParseError(null);
                }}
                className="w-full p-4 rounded-xl font-mono text-xs bg-slate-950 text-slate-100 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 selection:bg-brand-600"
                spellCheck={false}
              />
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetToDefault}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .ts File</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied TS Code!' : 'Copy TS Code'}</span>
            </button>

            <button
              onClick={activeTab === 'code' ? handleApplyJson : handleApplyVisual}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium shadow-sm transition-colors"
            >
              <span>Apply to Live Site</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
