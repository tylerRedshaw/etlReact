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

    const updateComponent = (selectedFlow) => {
        console.log(selectedFlow);
        dispatch({
            type: 'CHANGE_COMPONENT',
            data: selectedFlow
        })
    }

    return {
        ...state,
        actions: {
            updateApiKey,
            updateComponent
        }
    }
}

export default useGlobalContext;