import React from 'react';
import { ViewState } from '../types';
import { Sparkles, List, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,0.5)]"></div>
        <div className="absolute top-[60%] left-[10%] w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]"></div>
      </div>

      <nav className="relative z-10 w-full p-6 flex justify-between items-center glass-panel border-b-0 border-x-0 border-t-0 rounded-none sticky top-0">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate(ViewState.HOME)}
        >
          <Sparkles className="w-6 h-6 text-amber-200" />
          <h1 className="text-xl font-bold tracking-widest text-amber-100 uppercase font-serif">Kabbalah Angels</h1>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate(ViewState.HOME)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${currentView === ViewState.HOME || currentView === ViewState.RESULT ? 'bg-amber-500/20 text-amber-200 border border-amber-500/30' : 'hover:bg-white/5 text-slate-400'}`}
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Descobrir</span>
          </button>
          <button 
            onClick={() => onNavigate(ViewState.LIST)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${currentView === ViewState.LIST ? 'bg-amber-500/20 text-amber-200 border border-amber-500/30' : 'hover:bg-white/5 text-slate-400'}`}
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline">Lista dos 72</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {children}
      </main>

      <footer className="relative z-10 text-center py-8 text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Kabbalah Angel Guide. Sabedoria Ancestral.</p>
      </footer>
    </div>
  );
};

export default Layout;
