import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ImageCard = (props) => {
  // console.log(props.image_details);
  const navigate= useNavigate();
 
  const click=()=>{
    navigate(`/image/${props.image_details.id}`);
  }
  return (
    <>
     <Card className="bg-dark text-white mb-4" onClick={click}>
      <Card.Img src={props.image_details.urls.small} alt="pica" />
      <Card.ImgOverlay>
        <Card.Title>{props.image_details.alt_description}</Card.Title>
        <Card.Text>
          {props.image_details.user.bio}
        </Card.Text>
        <Card.Text>{props.image_details.updated_at}</Card.Text>
      </Card.ImgOverlay>
    </Card> 
    </>
  );
}

export default ImageCard;
