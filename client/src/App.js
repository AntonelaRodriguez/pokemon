import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home.jsx';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';
import CreatePokemon from './components/createPokemon/CreatePokemon';
import Error404 from './components/error404/error404';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/home'} component={Home}/>
        <Route exact path={"/home/:id"} component={PokemonDetail}/>
        <Route exact path={'/create'} component={CreatePokemon}/>
        <Route path={'*'} component={Error404}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
