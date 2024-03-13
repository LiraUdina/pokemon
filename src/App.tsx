import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

interface Pokemon {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonList(data.results);
      }) 
  }, []);

  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-4" style={{ color: 'var(--bs-success)' }}>Сайт покемонов</h1>
      <div className="row row-cols-5">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="col">
            <Pokemon pokemonUrl={pokemon.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;