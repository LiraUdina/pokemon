import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

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