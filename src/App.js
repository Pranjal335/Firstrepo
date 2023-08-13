import './App.css';
import React from 'react';
import Home from './components/Home';
import Dekho from './Dekho';
import {
  BrowserRouter as Router,Switch,  Route,Link} from "react-router-dom";
function App() {
  
  return (
<Router>
    <div>
      <Switch>
        <Route path="/dekho">
          <Dekho />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
       
      </Switch>
    </div>
</Router>

);
}
export default App;
