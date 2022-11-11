import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/landingPage.js/landingPage';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Route path={'/'} component={LandingPage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
