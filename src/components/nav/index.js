import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.scss'


export default function Navegacion() {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="titlePag" href="#home">
                    <img className='logoLibreria' src='img/logoLibro.png' />
                    Alto Libro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto paginacion">
                        <Nav.Link href="#features">Promociones</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Categorias destacadas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Ficcion
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Juvenil</NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>
                        <Nav.Link className='verCarrito' href="#pricing">Ver carrito</Nav.Link>
                    </Nav>
                    <Nav>

                        <Nav.Link className='contenedorCarrito' eventKey={2} href="#memes">



                            <button type="button" class="carrito position-relative">
                                <img className='carritoImg' id='carrito' src="img/carrito.png"></img>
                                <span class=" contadorCarrito position-absolute top-0 start-100 translate-middle p-2  border border-light rounded-circle">1

                                </span>
                            </button>



                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

