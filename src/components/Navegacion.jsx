import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navegacion() {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary' fixed='top'>
        <Container>
          <Navbar.Brand href='/' className='text-primary'>
            COLEGIO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='alumnos'>Alumnos</Nav.Link>
              <Nav.Link href='profesores'>Profesores</Nav.Link>
              <Nav.Link href='materias'>Materias</Nav.Link>
              <NavDropdown title='Registro Materias' id='basic-nav-dropdown'>
                <NavDropdown.Item href='registroalumn'>
                  Alumnos
                </NavDropdown.Item>
                <NavDropdown.Item href='registroprof'>
                  Profesores
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navegacion;
