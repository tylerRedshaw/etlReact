import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import '../App.css';
import { BatchRetrieveCatalogObjectsResponse } from '../Types/Catalog';
import mockDataSource from '../FakeData/mockCatalog.json'
import ReactJsonViewCompare from 'react-json-view-compare';
import Decision from './Decision';
import useGlobalContext from '../useGlobalContext';
import LoadingOverlay from 'react-loading-overlay';

type Props = {
    // props
}

const BulkCatalogDiff = ({} : Props) => {
    const [data, setData] = useState<BatchRetrieveCatalogObjectsResponse | undefined>(undefined);
    const { actions } = useGlobalContext();
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true)
      // the local network requests are so fast that the loading gif doesn't have a CHANCE
      setTimeout(() => {
        // TODO(tredshaw): now that the context works, we can move this to the reducer so clean up the component
        fetch('http://localhost:8080/catalog')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false)
        });
      }, 1000)
    }, []);

  return (
    <div className="BulkCatalogDiff">
      <div>
        <LoadingOverlay
          active={loading}
          fadeSpinner={10000}
          spinner
          text='Loading your content...'
          >
          <h4 className="Tool-subTitle">Bulk Catalog Sync</h4>
          <div className="Diff-container">
            <ReactJsonViewCompare oldData={mockDataSource} newData={data} />
          </div>
          <div className="Catalog-decisionWrapper">
            <Decision mockSourceData={mockDataSource} squareData={data} />
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
}

export default BulkCatalogDiff;
