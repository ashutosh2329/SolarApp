import React from 'react';
import '../css/App.css';
import FrontPage from './FrontPage';
import History from './HistoryPage';
import Design from './DesignPage';
import Conversion from './ConversionPage';
import Graph from './GraphPage';
import Images from './ImagesPage';
import Principle from './PrinciplePage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/Hpage"><History /></Route>
        <Route path="/Dpage"><Design /></Route>
        <Route path="/Ppage"><Principle /></Route>
        <Route path="/Ipage"><Images /></Route>
        <Route path="/Cpage"><Conversion /></Route>
        <Route path="/Fpage"><FrontPage /></Route>
        <Route path="/Copage"><FrontPage /></Route>
        <Route path="/Gpage"><Graph /></Route>
        <Route path="/"><FrontPage /></Route>
      </Switch>
    </div>
  </Router>
);
}  



export default App;
