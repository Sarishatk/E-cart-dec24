import React from 'react'
import {Nav,Navbar,Container, Badge} from 'react-bootstrap';
import { Link  } from 'react-router-dom';
function Header() {
  return (
    <div >
       <Navbar expand="lg"  style={{backgroundColor:'#fff8dc' }}>
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:'black',fontWeight:'bold',textDecoration:'none'}}><i className="fa-solid fa-truck-fast"></i>E cart</Link></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className='btn border' >
              <Link  className='d-flex align-items-center'  style={{color:'black',fontWeight:'bold',textDecoration:'none'}} to={'/wishlist'}  > 
              <i className="fa-solid fa-heart text-danger me-2"></i>Whislist
            <Badge className='ms-2 rounded' bg='light'>9</Badge>
            </Link>
            </Nav.Link>
            <Nav.Link   className='btn border  ms-3'>
              <Link  style={{color:'black',fontWeight:'bold',textDecoration:'none'}}  className='d-flex align-items-center' to={'/cart'} > <i className="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
            <Badge className='ms-2 rounded' bg='light'>9</Badge>
      </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
