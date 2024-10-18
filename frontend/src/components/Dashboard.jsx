import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default function Dashboard() {
 
    

  return (
    <div className='container-fluid p-0 m-0 '>
   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">View</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   

     

<div className="p-2 d-flex justify-content-center shadow">
                <h5  className='heading' >User Registration</h5>
            </div>
            <Outlet/>

  <Footer/>
    </div>
  )
}
