import { ContextAction, GlobalState } from "./Types/Types";

const reducer = (state: GlobalState, action: ContextAction) => {
      switch(action.type){
          case 'UPDATE_KEY':
              return {
                  ...state,
                  apiKey: action.data
              }
          case 'CHANGE_COMPONENT':
            return {
                ...state,
                selectedFlow: action.data
            }
          default:
            const errorMessage = `INVALID METHOD: ${action.type}`
            window.alert(errorMessage)
                  
      }

      return state;
  }

  export default reducer;