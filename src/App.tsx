import React, { createContext, useReducer } from 'react';
import './App.css';
import AppCtx, { GlobalProvider } from './GlobalContext';

import BulkCatalogDiff from './Components/BulkCatalogDiff';
import GlobalContext from './GlobalContext';
import { GlobalState } from './Types/Types';
import reducer from './Reducer';

const initialState: GlobalState = {
  apiKey: "EAAAEINRS1-ATVKx_ZBs2oVgffIzRtDcDcJ7LReuJTdCs4Qo1ECr7yCmwQPgPRJr"
};

function App() {
  return (
    <GlobalProvider>
      <div className="App container">
        <header className="App-header h1">
          ETL Diff Tool
        </header>
        <BulkCatalogDiff />
      </div>
    </GlobalProvider>
  );
}

export default App;
