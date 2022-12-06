import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import useGlobalContext from '../useGlobalContext';
import BulkCatalogDiff from './BulkCatalogDiff';
import { render } from '@testing-library/react';
import ApiKey from './ApiKey';
import Customers from './Customers';
import Select from 'react-select';
import { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
type Props = {
    // key: string
}

const SyncTool = ({} : Props) => {
  const { actions, selectedFlow } = useGlobalContext();

  const options = [
    { value: 'CATALOG', label: 'Catalog' },
    { value: 'CUSTOMERS', label: 'Customers' },
  ]
  return (
    <div className="SyncTool">
      <ApiKey />
      <Select options={options} onChange={(val) => {
        return actions.updateComponent(val?.value);
      }
        }/>

        {renderSwitch(selectedFlow)}
      
    </div>
  );
}

function renderSwitch(compName){
    switch(compName){
        case 'CATALOG':
            return <BulkCatalogDiff/>
        case 'CUSTOMERS':
            return <Customers/>
        default: 
            return "Select Data to Sync"
    }
}


export default SyncTool;
