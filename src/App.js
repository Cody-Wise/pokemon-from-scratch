import './App.css';

import { useEffect, useState } from 'react';
import getPokemon from './services/fetch-utils';
import PokemonList from './PokemonList';
import Spinner from './Spinner';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('char');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllPokemon() {
      setLoading(true);
      const response = await getPokemon(query);
      setPokemon(response.data.results);
      setLoading(false);
    }
    getAllPokemon();
  }, []); //eslint-disable-line

  async function handleQuery(e) {
    e.preventDefault();

    async function getAllPokemon() {
      setLoading(true);
      const { data } = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    }

    getAllPokemon();
  }
  return (
    <div className="App">
      <header className="App-header">
        {loading === true ? (
          <Spinner />
        ) : (
          <div>
            <h1>Pokemon Search</h1>
            <form onSubmit={handleQuery}>
              <input onChange={(e) => setQuery(e.target.value)} />
              <button>Search</button>
            </form>
            <PokemonList pokemon={pokemon} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
