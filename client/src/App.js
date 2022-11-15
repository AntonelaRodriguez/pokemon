import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home.jsx';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';
import CreatePokemon from './components/createPokemon/CreatePokemon';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={"/home/:id"} component={PokemonDetail}/>
      <Route exact path={'/create'} component={CreatePokemon}/>
    </div>
    </BrowserRouter>
  );
};

export default App;
