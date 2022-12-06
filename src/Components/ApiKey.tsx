import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from "react";
import reducer from '../Reducer';
import { ContextAction } from '../Types/Types';
import GlobalContext from '../GlobalContext';
import useGlobalContext from '../useGlobalContext';
import { act } from 'react-dom/test-utils';

type Props = {
    // key: string
}

const ApiKey = ({} : Props) => {
  const {actions, apiKey} = useGlobalContext();

  return (
    <div className="ApiKey">
      API Access Token
      <input value={apiKey} className="form-control" onChange={(e) => { actions.updateApiKey(e.target.value)}}></input>
    </div>
  );
}


export default ApiKey;
