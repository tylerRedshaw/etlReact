import React, { createContext } from 'react';
import './App.css';
import AppCtx from './AppCtx';

import BulkCatalogDiff from './Components/BulkCatalogDiff';
import { AppContextInterface } from './Types/Types';

const sampleAppContext: AppContextInterface = {
  apiKey: "placeholderAPIkey2"
};

function App() {
  return (
    <AppCtx.Provider value={sampleAppContext}>
      <div className="App container">
        <header className="App-header h1">
          ETL Diff Tool
        </header>
        <BulkCatalogDiff />
      </div>
    </AppCtx.Provider>
  );
}

export default App;
