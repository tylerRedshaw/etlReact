import React, { createContext, useReducer } from 'react';
import './App.css';
import AppCtx from './GlobalContext';

import BulkCatalogDiff from './Components/BulkCatalogDiff';
import GlobalContext from './GlobalContext';
import { GlobalState } from './Types/Types';
import reducer from './Reducer';

const initialState: GlobalState = {
  apiKey: "placeholderAPIkey2"
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <div className="App container">
        <header className="App-header h1">
          ETL Diff Tool
        </header>
        <BulkCatalogDiff />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
