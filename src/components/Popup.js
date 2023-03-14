import React  from 'react';
import { useState } from 'react';
import { Modal,Button, Container, Row, Col } from 'react-bootstrap';

const Popup = (props) => {
    
console.log(props.modal);

  return (
    <>
     

     <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-70w"
        style={{backgroundColor:props.modal?.color}}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <Container>
            <Row>
              <Col md={6}> 
              <img style={{maxwidth:'100%', maxHeight:'60vh'}} src={props.modal?.urls?.small}  alt='pic'/>
              </Col>   
              <Col md={6}>
                              <h1>{props.modal?.user?.name}</h1>
                              <h5>{props.modal?.user?.bio}:</h5>
                              <h3>Location:{props.modal?.user?.location}</h3>
                              <h4>Uploaded BY: {props.modal?.user?.instagram_username} </h4>
                             
                              <h4>Description:{props.modal?.alt_description}</h4> 
                              <h4>Likes: {props.modal?.likes}</h4> 
             </Col>
                
            </Row>
         </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button  variant="primary" href={props.modal?.links?.download}>Download</Button>
        </Modal.Footer>
      </Modal>
 
    </>
  );
}

export default Popup;
