import React, { useState } from 'react';
import { Calendar, Loader2, ArrowRight } from 'lucide-react';
import { fetchAngelDetails } from '../services/gemini';
import { AngelResponse } from '../types';

interface AngelFinderProps {
  onResult: (data: AngelResponse) => void;
}

const AngelFinder: React.FC<AngelFinderProps> = ({ onResult }) => {
  const [dateStr, setDateStr] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateStr) return;

    setLoading(true);
    setError(null);

    try {
      // Create date object handling timezone issues for pure date selection
      // We append a time to ensure it doesn't default to previous day in UTC
      const date = new Date(dateStr + "T12:00:00Z");
      
      if (isNaN(date.getTime())) {
        throw new Error("Data inválida");
      }
      
      const result = await fetchAngelDetails(date);
      onResult(result);
    } catch (err) {
      console.error(err);
      setError("Não foi possível conectar aos planos celestiais. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fade-in-up">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
          Descubra seu Guardião Celestial
        </h2>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          Segundo a sabedoria da Kabbalah, um dos 72 Nomes de Deus irradia sobre a Terra no momento do seu nascimento. 
          Revele o nome do seu Anjo, sua essência e a missão da sua alma.
        </p>
      </div>

      <div className="w-full max-w-md p-8 glass-panel rounded-2xl shadow-2xl shadow-indigo-500/10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2 text-left">
            <label htmlFor="birthdate" className="text-sm font-semibold uppercase tracking-wider text-amber-200/80 pl-1">
              Data de Nascimento
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-indigo-300 group-focus-within:text-amber-300 transition-colors" />
              </div>
              <input
                type="date"
                id="birthdate"
                required
                value={dateStr}
                onChange={(e) => setDateStr(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all font-serif text-lg"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" />
                Consultando as Esferas...
              </span>
            ) : (
              <span className="flex items-center gap-2 uppercase tracking-widest">
                Revelar Meu Anjo <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AngelFinder;