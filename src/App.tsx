import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pokemon from './Pokemon'; // Импорт компонента Pokemon

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4" style={{ color: 'var(--bs-success)' }}>Сайт покемонов</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {pokemonList.map((pokemon) => (
          <Col key={pokemon.name}>
            <Pokemon pokemonUrl={pokemon.url} /> {/* Использование компонента Pokemon */}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;