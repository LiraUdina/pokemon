import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonProps {
  pokemonUrl: string;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then((data: PokemonData) => setPokemonData(data));
  }, [pokemonUrl]);

  return (
    <Card>
      {pokemonData && (
        <>
          <Card.Img variant="top" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <Card.Body>
            <Card.Title>{pokemonData.name}</Card.Title>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default Pokemon;