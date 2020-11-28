import React , {Components} from 'react';
import { Button , Navbar , Nav  , Form , FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.svg'

const NavBar = () => {
    return(
        <Navbar bg="dark" expand="lg" >
        <Navbar.Brand href="/">
            <img src={logo} alt="logo" style={{width:'35px',marginLeft:'30px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white !important',textAlign:'left'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-uppercase ">
              <Link className="nav-link text-white pl-3" to="/"> Home&nbsp;<i className="fa fa-home"></i> </Link>
              <Link className="nav-link text-white pl-3" to="/news">News</Link>
              <Link className="nav-link text-white pl-3" to="/contact">contact us</Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary" >Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;