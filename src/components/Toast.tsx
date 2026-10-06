import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#1E293B] dark:bg-[#0F172A] text-white rounded-lg shadow-xl border border-slate-700/80 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        aria-label="Close notification"
        className="p-1 ml-2 text-slate-400 hover:text-white rounded transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
