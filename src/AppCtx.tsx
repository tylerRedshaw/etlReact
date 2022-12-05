import { createContext } from "react";
import { AppContextInterface } from "./Types/Types";
const sampleAppContext: AppContextInterface = {
    apiKey: "placeholderAPIkey2"
  };
const AppCtx = createContext<AppContextInterface | null>(sampleAppContext);

export default AppCtx;