import React, { createContext, useReducer } from 'react';
import './App.css';
import { GlobalProvider } from './GlobalContext';


import SyncTool from './Components/SyncTool';

function App() {
  return (
    <GlobalProvider>
      <div className="App container">
        <header className="App-header h1">
          ETL Diff Tool
        </header>
        {}
        <SyncTool />

      </div>
    </GlobalProvider>
  );
}

export default App;
