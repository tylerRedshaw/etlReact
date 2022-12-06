import React, {useState, useEffect} from 'react';
import '../App.css';
import ReactJsonViewCompare from 'react-json-view-compare';
import Decision from './Decision';
import useGlobalContext from '../useGlobalContext';
import LoadingOverlay from 'react-loading-overlay';

type Props = {
    // props
}

const BulkCatalogDiff = ({} : Props) => {
    const { actions, catalog, mockCatalog } = useGlobalContext();
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        actions.fetchCatalog()
      }, 1000)
    }, []);

  return (
    <div className="BulkCatalogDiff">
      <div>
        <LoadingOverlay
          active={loading}
          spinner
          text='Loading your content...'
          >
          <h4 className="Tool-subTitle">Bulk Catalog Sync</h4>
          <div className="Diff-container">
            <ReactJsonViewCompare oldData={mockCatalog} newData={catalog} />
          </div>
          <div className="Catalog-decisionWrapper">
            <Decision mockSourceData={mockCatalog} squareData={catalog} submitAction={() => console.log("Placeholder submit action")}/>
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
}

export default BulkCatalogDiff;
