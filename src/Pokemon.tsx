import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PokemonProps {
  pokemonUrl: string;
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(pokemonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных о покемоне');
        }
        return response.json();
      })
      .then((data: PokemonData) => {
        setPokemonData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [pokemonUrl]);

  if (loading) {
    return <li>Загрузка...</li>;
  }

  if (error) {
    return <li>Ошибка: {error}</li>;
  }

  return (
    <li>
      {pokemonData && (
        <>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <span>{pokemonData.name}</span>
        </>
      )}
    </li>
  );
}

export default Pokemon;