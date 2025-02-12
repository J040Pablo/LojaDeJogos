import React from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import './Games.css'

const Games = () => {

  const games = [
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    },
    {
      name: "Pokemon Fire Red",
      description: "jogo classico de pokemon",
      price: "R$10",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s"
    }
  ]
  const getCards = () => {
      return games.map((games) => {
        return (
          <Card className='cardGames'>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7XCBOBOZc0enYzAgkwItRAXIsFH1ctNj1Q&s" />
          <Card.Body>
            <Card.Title>{games.name}</Card.Title>
            <Card.Text>
              {games.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Ver</Button>
          </Card.Footer>
        </Card>
        )
      })
  }
  return (
      <Container className='cardContainer'>
        {getCards()}
      </Container>
  )
  
}

export default Games
