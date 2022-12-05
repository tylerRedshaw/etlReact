import { useContext } from "react";
import GlobalContext from "./GlobalContext";

const useGlobalContext = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const updateApiKey = (apiKey) => {
        dispatch({
            type: 'UPDATE_KEY',
            data: apiKey
        })
    }

    return {
        ...state,
        actions: {
            updateApiKey
        }
    }
}

export default useGlobalContext;