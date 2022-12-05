import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import '../App.css';
import { Order, OrderResponseObject } from '../Types/Types';
import mockDataSource from '../FakeData/mockOrder.json'
import ReactJsonViewCompare from 'react-json-view-compare';
import Decision from './Decision';
type Props = {
    // props
    squareOrder?: OrderResponseObject;
    thirdPartyOrder?: OrderResponseObject;
}
const OrderDiff = ({squareOrder, thirdPartyOrder} : Props) => {
    const [data, setData] = useState<OrderResponseObject | undefined>(undefined);
    useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetch('http://localhost:8080/order')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          });
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <div className="OrderDiff container">
      <div>
        {data && (
          <React.Fragment>
            <h4 className="Diff-id">Order ID: {JSON.stringify(data.order.id)}</h4>
            <div className="Diff-container">
              <ReactJsonViewCompare oldData={mockDataSource} newData={data} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default OrderDiff;
