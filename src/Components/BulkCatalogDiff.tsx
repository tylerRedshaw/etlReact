import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import '../App.css';
import { BatchRetrieveCatalogObjectsResponse } from '../Types/Catalog';
import mockDataSource from '../FakeData/mockCatalog.json'
import ReactJsonViewCompare from 'react-json-view-compare';
import Decision from './Decision';
import ApiKey from './ApiKey';
type Props = {
    // props
}

const BulkCatalogDiff = ({} : Props) => {
    const [data, setData] = useState<BatchRetrieveCatalogObjectsResponse | undefined>(undefined);

    useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetch('http://localhost:8080/catalog')
          .then(response => response.json())
          .then(data => {
            setData(data);
          });
    }, []);
  return (
    <div className="BulkCatalogDiff">
      <div>
        <h4>Bulk Catalog Sync </h4>
        <div><i>updates entire catalog</i></div>
        <ApiKey />
        {data && (
          <React.Fragment>
            <div className="Diff-container">
              <ReactJsonViewCompare oldData={mockDataSource} newData={data} />
            </div>
            <div className="Catalog-decisionWrapper">
              <Decision mockSourceData={mockDataSource} squareData={data} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default BulkCatalogDiff;
