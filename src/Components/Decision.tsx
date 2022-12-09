import React, { useContext, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import useGlobalContext from '../useGlobalContext';

type Props = {
    // props
    mockSourceData: any,
    squareData: any,
    submitAction?: any
}
const Decision = ({mockSourceData, squareData, submitAction} : Props) => {
   const { apiKey } = useGlobalContext();
   const [ showSuccess, setShowSuccess ] = useState(false);
   const [ showError, setShowError ] = useState(false);

  return (
    <div className="Decision-container">
      <div className="Decision">
        <button type="button" className="btn btn-success Decision-btn" onClick={() => {
            setShowError(true)
            syncSquare(squareData)
          }}>Sync Square Data
        </button>
        <button type="button" className="btn btn-danger Decision-btn" 
          onClick={() => {
            syncWithThirdParty(mockSourceData, apiKey, setShowSuccess, setShowError)
          }}>
            Sync Third Party Data
        </button>
      </div>
      {showSuccess && (
        <div className="Decision-alert alert alert-success">
          Data successfully synchronized!
        </div>
      )}
      {showError && (
        <div className="Decision-alert alert alert-warning">
          This would sync to third party
        </div>
      )}
  </div>
    
  );
}
function syncSquare(data :any){
  console.log("TODO: this will make updates to the third party data source to bring it in line with Square");
  console.log(data);
}

function syncWithThirdParty(data :any, apiKey, setShowSuccess, setShowError){
  const requestObject = {
    apiKey: apiKey, 
    catalogObjectBatch: data
  }


  const url = `http://localhost:8080/catalog/update?key=${apiKey}`

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(requestObject)
  })
  .then((response) => {
    response.json()
    console.log("response status:: " + response.status);

    if(response.status == 400){
      setShowError(true)
    } else {
      setShowSuccess(true)
    }
  })
  .then((data) => {
    console.log('Success:', data);
  })
}

export default Decision;