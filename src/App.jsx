import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import './styles/App.css';

import Home from "./containers/Home";
import PokemonData from "./containers/PokemonData";
import Favoris from "./containers/Favoris";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokédex</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<PokemonData />} />
            <Route path="favoris" element={<Favoris />} />
            <Route path="*" element={<p>404 : Page non trouvée</p>} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;