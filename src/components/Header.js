import React,{useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
   const inputRef= useRef();
   const navigate= useNavigate();

  const formSubmitted=(e)=>{
      e.preventDefault();
      navigate(`/search?q=${inputRef.current.value}`);
      }

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand> <Link to ="/" >React Gallery </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
          </Nav>
          <Form className="d-flex" onSubmit={formSubmitted} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="Search"
              ref={inputRef}
            
            />
            <Button variant="outline-success"  onClick={formSubmitted}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
);
}

export default Header;
