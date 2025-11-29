import React, { useState } from 'react';
import Layout from './components/Layout';
import AngelFinder from './components/AngelFinder';
import AngelCard from './components/AngelCard';
import AngelList from './components/AngelList';
import { ViewState, AngelResponse } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [angelResult, setAngelResult] = useState<AngelResponse | null>(null);

  const handleAngelFound = (data: AngelResponse) => {
    setAngelResult(data);
    setCurrentView(ViewState.RESULT);
  };

  const handleReset = () => {
    setAngelResult(null);
    setCurrentView(ViewState.HOME);
  };

  const handleNavigate = (view: ViewState) => {
    if (view === ViewState.HOME) {
      handleReset();
    } else {
      setCurrentView(view);
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {currentView === ViewState.HOME && (
        <AngelFinder onResult={handleAngelFound} />
      )}
      
      {currentView === ViewState.RESULT && angelResult && (
        <AngelCard angel={angelResult} onReset={handleReset} />
      )}

      {currentView === ViewState.LIST && (
        <AngelList />
      )}
    </Layout>
  );
};

export default App;
