import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import '../App.css';
import { BatchRetrieveCatalogObjectsResponse } from '../Types/Catalog';
import mockDataSource from '../FakeData/mockCustomers.json'
import ReactJsonViewCompare from 'react-json-view-compare';
import Decision from './Decision';
import LoadingOverlay from 'react-loading-overlay';


type Props = {
    // props
}

const Customers = ({} : Props) => {
    const [ data, setData ] = useState<BatchRetrieveCatalogObjectsResponse | undefined>(undefined);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true)

      // GET request using fetch inside useEffect React hook
      setTimeout(() => {
        // TODO(tredshaw): move this into useGlobalContext
        fetch('http://localhost:8080/customers')
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
