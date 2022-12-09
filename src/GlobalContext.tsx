import React, {createContext, useReducer, Dispatch} from "react"
import reducer from "./Reducer";

import { ContextAction, GlobalState } from "./Types/Types";

//TODO(tredshaw): update selected flow component
export const initialState: GlobalState = {
    apiKey: "",
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