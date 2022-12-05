import { ContextAction, GlobalState } from "./Types/Types";

const reducer = (state: GlobalState, action: ContextAction) => {
        switch(action.type){
            case 'GET_CONTEXT':
                console.log("GET CONTEXT2");
        }
      console.log(action);
      return state;
  }

  export default reducer;