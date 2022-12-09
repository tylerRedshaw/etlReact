import React, {useState, useEffect, useContext} from 'react';
import '../App.css';
import { BatchRetrieveCatalogObjectsResponse } from '../Types/Catalog';
import mockDataSource from '../FakeData/mockCustomers.json'
import ReactJsonViewCompare from 'react-json-view-compare';
import Decision from './Decision';
import LoadingOverlay from 'react-loading-overlay';
import GlobalContext from '../GlobalContext';


type Props = {
    // props
}

const Customers = ({} : Props) => {
    const [ data, setData ] = useState<BatchRetrieveCatalogObjectsResponse | undefined>(undefined);
    const [ loading, setLoading ] = useState(false);
    const { state } = useContext(GlobalContext);

    useEffect(() => {
      setLoading(true)

      // GET request using fetch inside useEffect React hook
      setTimeout(() => {
        // TODO(tredshaw): move this into useGlobalContext
        const url = `http://localhost:8080/customers?key=${state.apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false)
        });
      }, 1000)
    }, []);

  return (
    <div className="Customers">
      <div>
          <LoadingOverlay
            active={loading}
            fadeSpinner={10000}
            spinner
            text='Loading your content...'
            >
            <h4 className="Tool-subTitle">Customers Sync </h4>
            <div className="Diff-container">
              <ReactJsonViewCompare oldData={mockDataSource} newData={data} />
            </div>
            <div className="Customers-decisionWrapper">
              <Decision mockSourceData={mockDataSource} squareData={data} />
            </div>
          </LoadingOverlay>
      </div>
    </div>
  );
}

export default Customers;
