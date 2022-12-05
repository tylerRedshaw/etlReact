import { AppContextInterface } from "./Types/Types";


  type Props = {
    state: AppContextInterface, 
    action: Action
  }

  type Action = {
    type: string;
  }
const reducer = ({state, action} :Props) => {
    switch (action.type) {
        case 'test': {
          return {
            ...state,
            apiKey: "q23"
          };
        }
      }
      throw Error('Unknown action: ' + action.type);
  }

  export default reducer;