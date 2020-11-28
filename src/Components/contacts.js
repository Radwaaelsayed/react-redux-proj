import React , {Components} from 'react';
import {Form,Col,Button, Container} from 'react-bootstrap'
 const Contacts = () => {
     return(
<div className="py-5">
<header className="text-center h2 text-primary">CONTACT US</header>
<hr className="text-center" width={65}></hr>

<Container>
<Form className="p-5">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="text" placeholder="Enter Your Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" placeholder="Enter Your Email" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Control placeholder="Subject" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="5" placeholder="Message" />
  </Form.Group>

  <Button type="button" style={{marginLeft:"45%"}}>
   Get Contact
  </Button>
</Form>
</Container>
</div>      

     )
     
 }
 export default Contacts ;