import React, {createContext, useReducer, Dispatch} from "react"

import { ContextAction, GlobalState } from "./Types/Types";

export const initialState: GlobalState = {
    apiKey: "empty api key"
}

const GlobalContext = createContext<{
    state: GlobalState;
    dispatch: Dispatch<ContextAction>;
}>({
    state: initialState,
    dispatch: () => null
})

export default GlobalContext;