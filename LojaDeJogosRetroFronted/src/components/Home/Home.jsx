import { react, useState } from 'react';
import './Home.css';
import View1 from './Games/Games';
import View3 from './Help/Help';
import { Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(1);

  const notify = () => toast("Bem-vindo ao CineFlix!");

  const changePage = (view) => {
    setView(view);
  };

  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark" className="navBarContainer">
        <Container>
          <Navbar.Brand onClick={() => changePage(1)}>CineFlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => changePage(1)}>Filmes</Nav.Link>
            <Nav.Link onClick={() => changePage(2)}>Usuários</Nav.Link>
            <Nav.Link onClick={() => changePage(3)}>Ajuda</Nav.Link>
          </Nav>
          <Nav className="userInfo">
            <Image
              className="userAvatar"
              src="https://cdn-icons-png.flaticon.com/512/194/194938.png" /* Ícone de filme */
              roundedCircle
            />
            <DropdownButton id="dropdown-basic-button" title="João Pablo">
              <Dropdown.Item onClick={notify}>Perfil</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Configurações</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => navigate('/')}>Sair</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-content">
        {view === 1 ? <View1 /> : ''}
        {view === 2 ? <View2 /> : ''}
        {view === 3 ? <View3 /> : ''}
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;