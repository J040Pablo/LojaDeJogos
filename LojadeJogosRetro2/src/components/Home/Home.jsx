import { useState } from 'react';
import './Home.css';
import View1 from './Games/Games';
import View2 from './Users/Users';
import View3 from './Help/Help';
import { Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

  const Home = () => {
    const navigate = useNavigate();
    const [view, setView] = useState(1);

    const notify = () => toast("Wow so easy!");

    const changePage = (view) => {
      setView(view)
  }
  return (
    <>
        <Navbar bg="primary" data-bs-theme="dark" className='navBarContainer'>
        <Container>
          <Navbar.Brand onClick={() => changePage(1)}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={() => changePage(1)}>Games</Nav.Link>
            <Nav.Link  onClick={() => changePage(2)}>Users</Nav.Link>
            <Nav.Link  onClick={() => changePage(3)}>Help</Nav.Link>
          </Nav>
          <Nav className='userInfo'>
          <Image className="userAvatar" src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" roundedCircle />
          <DropdownButton id="dropdown-basic-button" title="João Pablo">
            <Dropdown.Item onClick={notify}>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => navigate("/")}>Logout</Dropdown.Item>
          </DropdownButton>
          </Nav>
        </Container>
      </Navbar>

    <div className="main-content">
      {view === 1 ? <View1/> : ''}
      {view === 2 ? <View2/> : ''}
      {view === 3 ? <View3/> : ''}
      <ToastContainer />
    </div>
    </>
  );
}

export default Home;