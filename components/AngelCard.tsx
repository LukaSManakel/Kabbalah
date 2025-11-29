import React from 'react';
import { AngelResponse } from '../types';
import { Feather, Sun, Moon, Sparkles, BookOpen, User, Shield, Target, Flame, Gem } from 'lucide-react';

interface AngelCardProps {
  angel: AngelResponse;
  onReset: () => void;
}

const AngelCard: React.FC<AngelCardProps> = ({ angel, onReset }) => {
  return (
    <div className="animate-fade-in space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <button onClick={onReset} className="text-xs uppercase tracking-widest text-slate-400 hover:text-amber-300 transition-colors mb-4">
          &larr; Consultar outra data
        </button>
        <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-2">
          {angel.choir} &bull; Regido por {angel.regent}
        </div>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-500 drop-shadow-2xl">
          {angel.name}
        </h2>
        <p className="text-xl text-slate-300 italic font-light">{angel.essence}</p>
        <p className="text-sm text-indigo-300 tracking-wider uppercase font-semibold">{angel.period}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Main Attribute Card */}
        <div className="col-span-1 lg:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Feather size={120} />
          </div>
          <h3 className="flex items-center gap-2 text-xl font-serif text-amber-200 mb-6 border-b border-white/10 pb-2">
            <Sparkles className="w-5 h-5" /> Mensagem do Anjo
          </h3>
          <div className="relative z-10 bg-black/20 p-6 rounded-xl border border-white/5">
            <p className="text-xl md:text-2xl leading-relaxed text-amber-50 font-medium tracking-wide">
              "{angel.message}"
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5">
             <h4 className="text-sm font-bold uppercase text-indigo-300 mb-2">Invocação de Poder</h4>
             <p className="text-slate-100 font-medium text-lg">"{angel.invocation}"</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-panel p-6 rounded-2xl space-y-6">
           <div>
             <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-amber-200/70 mb-1">
               <BookOpen className="w-4 h-4" /> Salmo de Força
             </h4>
             <p className="text-slate-200">{angel.psalm}</p>
           </div>
           <div>
             <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-amber-200/70 mb-1">
               <Sun className="w-4 h-4" /> Horário de Poder
             </h4>
             <p className="text-slate-200">{angel.schedule}</p>
           </div>
           <div>
             <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-amber-200/70 mb-1">
               <Gem className="w-4 h-4" /> Cristal / Pedra
             </h4>
             <p className="text-slate-200 text-sm font-semibold text-purple-200">{angel.gemstone}</p>
           </div>
           <div>
             <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-amber-200/70 mb-1">
               <Flame className="w-4 h-4" /> Elementos
             </h4>
             <p className="text-slate-200 text-sm">{angel.elements}</p>
           </div>
        </div>

        {/* Virtues */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-emerald-500/50">
          <h3 className="flex items-center gap-2 text-lg font-serif text-emerald-200 mb-4">
            <Shield className="w-5 h-5" /> Virtudes & Dons
          </h3>
          <ul className="space-y-2">
            {angel.qualities.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <span className="text-emerald-400 mt-1">•</span> {q}
              </li>
            ))}
          </ul>
        </div>

        {/* Shadows */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-rose-500/50">
          <h3 className="flex items-center gap-2 text-lg font-serif text-rose-200 mb-4">
            <Moon className="w-5 h-5" /> Desafios a Transmutar
          </h3>
          <ul className="space-y-2">
            {angel.shadows.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <span className="text-rose-400 mt-1">•</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Domains */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-indigo-500/50">
          <h3 className="flex items-center gap-2 text-lg font-serif text-indigo-200 mb-4">
            <Target className="w-5 h-5" /> Áreas de Atuação
          </h3>
           <div className="flex flex-wrap gap-2">
            {angel.domains.map((d, i) => (
              <span key={i} className="px-3 py-1 bg-indigo-900/40 border border-indigo-500/30 rounded-full text-xs text-indigo-200">
                {d}
              </span>
            ))}
           </div>
        </div>
        
        {/* Personality */}
        <div className="col-span-1 lg:col-span-3 glass-panel p-8 rounded-2xl">
           <h3 className="flex items-center gap-2 text-xl font-serif text-amber-200 mb-4">
            <User className="w-5 h-5" /> A Personalidade dos Protegidos
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {angel.personality}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AngelCard;