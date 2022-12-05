import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from "react";
import AppCtx from '../GlobalContext';
import reducer from '../Reducer';
import { ContextAction } from '../Types/Types';

type Props = {
    // key: string
}
// const initialState : InitialState = {apiKey: "123"};
const initialState = {
  apiKey: "123"
}
const ApiKey = ({} : Props) => {
  const context = useContext(AppCtx);
  // TODO(tredshaw): what is wrong with this
  const [state, dispatch] = useReducer(reducer, initialState);
  const blah: ContextAction = {
    type: 'GET_CONTEXT',
    blah: "123"
  }
  return (
    <div className="ApiKey">
      API Key input field
      <input value={state.apiKey} onChange={() => dispatch(blah)} ></input>
    </div>
  );
}


export default ApiKey;
