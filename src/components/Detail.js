import React  from 'react';
import {useState,useEffect} from 'react'
import { Container,Row, Col, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import axios from 'axios'

const Detail = () => {
  const params =useParams();
  const [imageData, setImageData]= useState({});

  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos/${params.id}?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
        .then(response=>setImageData(response.data));
  },[params])

  return (
    <>
    {imageData?(
      <Container fluid style={{backgroundColor:`${imageData?.color}35`}}>
            <Row>
              <Col md={6}> 
              <img style={{maxwidth:'100%', maxHeight:'60vh'}} src={imageData?.urls?.small}  alt='pic'/>
              </Col>   
              <Col md={6}>
                              <h1>{imageData?.user?.name}</h1>
                              <h5>{imageData?.user?.bio}:</h5>
                              <h3>Location:{imageData?.user?.location}</h3>
                              <h4>Uploaded BY: {imageData?.user?.instagram_username} </h4>
                             
                              <h4>Description:{imageData?.alt_description}</h4> 
                              <h4>Likes: {imageData?.likes}</h4> 

                              <br/>
                              <hr/>
                              <Button  variant="primary" style={{background: imageData?.color, borderColor:imageData?.color}} href={imageData?.links?.download} target="_blank">Download</Button>
        
             </Col>
                
            </Row>
         </Container>
          ):<h4>Loading</h4>}
    </>

   
  );
}

export default Detail;
