import React , {Component} from 'react';
 import {Col, Row } from  'react-bootstrap';
 


 

const Footer = () => {
    return(
<div className="bg-dark mt-5 h-100 p-5">
  <div className="container ">
        <Row style={{padding:'15px'}}>
            <Col md={3} xs={6}>
            <h4> Contact Us</h4>
            <ul className="list-unstyled ">
            <li>Lorem Ipsum </li>
            <li> Lorem Ipsum </li>
            <li>Lorem Ipsum</li>
            
        </ul>
            </Col>
            <Col md={3} xs={6}>
            <h4> Lorem Ipsum</h4>
            <ul className="list-unstyled">
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
        </ul>
            </Col>
            <Col md={3} xs={6}>
            <h4> Lorem Ipsum</h4>
            <ul className="list-unstyled">
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
        </ul>
            </Col>
            <Col md={3} xs={6}>
            <h4> Lorem Ipsum</h4>
            <ul className="list-unstyled">
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
            <li><a href="#">Lorem Ipsum</a> </li>
        </ul>
            </Col> 
        </Row>
        </div>
        </div>
      
        
    )
}

export default Footer;

