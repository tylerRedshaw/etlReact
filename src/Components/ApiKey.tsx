import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from "react";
import AppCtx from '../AppCtx';
import reducer from '../Reducer';
import { AppContextInterface } from '../Types/Types';

type Props = {
    // key: string
}
// const initialState : AppContextInterface = {apiKey: "123"};
const initialState = {
  apiKey: "123"
}
const ApiKey = ({} : Props) => {
  const context = useContext(AppCtx);
  // TODO(tredshaw): what is wrong with this
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="ApiKey">
      API Key input field
      <input value={context?.apiKey} onChange={() => console.log("dispatch")} ></input>
    </div>
  );
}


export default ApiKey;
