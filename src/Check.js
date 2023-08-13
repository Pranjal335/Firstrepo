import { useHistory } from 'react-router-dom';
import Dekho from './Dekho';

function Check() {
  let history = useHistory();

  const redirect = () => {
    history.push("/dekho")
  }

  return (
    <div>
      <button onClick={redirect}>Redirect</button>
    </div>
  )
}
export default Check;