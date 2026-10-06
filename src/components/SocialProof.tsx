import React from 'react';
import { TrendingUp, Zap, ShieldCheck, Users, Building2 } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface SocialProofProps {
  data: PortfolioData;
}

export const SocialProof: React.FC<SocialProofProps> = ({ data }) => {
  const { metrics, brands } = data;

  const metricIcons = [Users, Zap, ShieldCheck, TrendingUp];

  return (
    <section 
      aria-label="Impact metrics and organizations"
      className="py-16 bg-[#F8F9FA] dark:bg-[#0F172A]/60 border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <div
                key={metric.label}
                className="p-5 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-brand-500/50 transition-all duration-150"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-brand-600 dark:text-brand-400">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Metric
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Brands / Platforms Bar */}
        <div className="pt-8 border-t border-slate-200/70 dark:border-slate-800/80">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
            Trusted by teams & systems across production ecosystems
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-3.5 rounded-lg bg-white/70 dark:bg-[#1E293B]/60 border border-slate-200/60 dark:border-slate-800/60 hover:bg-white dark:hover:bg-[#1E293B] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {brand.name}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 text-center line-clamp-1">
                  {brand.roleOrClient}
                </span>
                {brand.badge && (
                  <span className="mt-1.5 px-2 py-0.5 text-[9px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {brand.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
