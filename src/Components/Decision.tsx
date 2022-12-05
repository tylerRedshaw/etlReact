import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import '../App.css';
import { Order, OrderResponseObject } from '../Types/Types';
import mockDataSource from '../FakeData/mockOrder.json'
import ReactJsonViewCompare from 'react-json-view-compare';
import 'bootstrap/dist/css/bootstrap.css';

type Props = {
    // props
    mockSourceData: any,
    squareData: any
}
const Decision = ({mockSourceData, squareData} : Props) => {
   
  return (
    <div className="Decision">
        <button type="button" className="btn btn-success Decision-btn" onClick={() => syncSquare(squareData)}>Sync Square Data</button>
        <button type="button" className="btn btn-danger Decision-btn" onClick={() => syncWithThirdParty(mockSourceData)}>Sync Third Party Data</button>
    </div>
  );
}
function syncSquare(data :any){
  console.log("TODO: this will make updates to the third party data source to bring it in line with Square");
  console.log(data);
}

function syncWithThirdParty(data :any){
  console.log("TODO: update Square data");
  fetch('http://localhost:8080/catalog/update', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
}

export default Decision;
