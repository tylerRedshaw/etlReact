import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import useGlobalContext from '../useGlobalContext';

type Props = {
    // key: string
}

const ApiKey = ({} : Props) => {
  const {actions, apiKey} = useGlobalContext();

  return (
    <div className="ApiKey">
      API Access Token
      <input value={apiKey} className="form-control" onChange={(e) => { actions.updateApiKey(e.target.value)}}></input>
    </div>
  );
}


export default ApiKey;
