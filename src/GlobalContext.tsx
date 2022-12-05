import React, {createContext, useReducer, Dispatch} from "react"
import reducer from "./Reducer";

import { ContextAction, GlobalState } from "./Types/Types";

export const initialState: GlobalState = {
    apiKey: "EAAAEINRS1-ATVKx_ZBs2oVgffIzRtDcDcJ7LReuJTdCs4Qo1ECr7yCmwQPgPRJr",
    selectedFlow: 'CATALOG'
}

const GlobalContext = createContext<{
    state: GlobalState;
    dispatch: Dispatch<ContextAction>;
}>({
    state: initialState,
    dispatch: () => null
})

export const GlobalProvider = ({children}: {children: React.ReactNode}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value = {{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;