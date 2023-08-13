import React from 'react';
import {useHistory} from 'react-router-dom';
export default function Dekho() {
let history=useHistory();
const BC = () => {
    history.push("/")
  }

    return (<>
        <div>
            <h1>jai ho</h1>
        </div>
        <button onClick={BC}>Back To Home Page</button>
    </>
    )
}
