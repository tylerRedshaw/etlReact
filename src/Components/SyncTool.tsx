import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import useGlobalContext from '../useGlobalContext';
import BulkCatalogDiff from './BulkCatalogDiff';
import { render } from '@testing-library/react';

type Props = {
    // key: string
}

const SyncTool = ({} : Props) => {
  // TODO(tredshaw): what is wrong with this
  const {actions, selectedFlow} = useGlobalContext();

  return (
    <div className="SyncTool">
      {renderSwitch(selectedFlow)}
    </div>
  );
}

function renderSwitch(compName){
    switch(compName){
        case 'CATALOG':
            return <BulkCatalogDiff/>
        default: 
            return "invalid component selected"
    }
}


export default SyncTool;
