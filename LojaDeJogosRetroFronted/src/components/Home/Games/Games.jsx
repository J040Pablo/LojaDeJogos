import React from 'react';
import { Button, Card, Container, Navbar, Nav } from 'react-bootstrap';
import './Games.css';

const Games = () => {
  const games = [
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s",
    },
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "Jogo clássico de Pokémon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    }
  ];

  const getCards = () => {
    return games.map((game, index) => (
      <Card className="cardGames" key={index}>
        <Card.Img variant="top" src={game.Image} />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>{game.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Ver</Button>
        </Card.Footer>
      </Card>
    ));
  };

  return (
    <>
      {/* Cabeçalho fixo */}
      <Navbar bg="dark" variant="dark" expand="lg" className="gamesNavbar">
        <Container>
          <Navbar.Brand href="/">Loja de Jogos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/games">Jogos</Nav.Link>
            <Nav.Link href="/help">Ajuda</Nav.Link>
            <Nav.Link href="/profile">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Conteúdo principal */}
      <Container className="cardContainer">
        {getCards()}
      </Container>
    </>
  );
};

export default Games;
