import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">
      {pokemon.map((poke, i) => (
        <Pokemon key={poke.pokemon + i} poke={poke} />
      ))}
    </div>
  );
}
