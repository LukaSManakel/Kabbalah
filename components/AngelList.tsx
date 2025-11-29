import React, { useState, useMemo } from 'react';
import { ANGELS_LIST, getAngelPeriod } from '../services/angelData';
import { Search } from 'lucide-react';

const AngelList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAngels = useMemo(() => {
    return ANGELS_LIST.filter(a => 
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.choir.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-amber-100 mb-2">Os 72 Nomes de Deus</h2>
        <p className="text-slate-400 text-sm">Explore a hierarquia celestial completa</p>
      </div>

      <div className="relative max-w-md mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-500" />
        </div>
        <input
          type="text"
          placeholder="Buscar por nome ou coro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAngels.map((angel) => (
          <div key={angel.id} className="glass-panel p-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-slate-500">#{angel.id.toString().padStart(2, '0')}</span>
                <h3 className="text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">{angel.name}</h3>
              </div>
              <p className="text-xs text-indigo-300 uppercase tracking-wider">{angel.choir}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">{getAngelPeriod(angel)}</span>
            </div>
          </div>
        ))}
      </div>
      
      {filteredAngels.length === 0 && (
         <div className="text-center py-12 text-slate-500">
           Nenhum anjo encontrado com este termo.
         </div>
      )}
    </div>
  );
};

export default AngelList;