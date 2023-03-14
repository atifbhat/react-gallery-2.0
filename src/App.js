
import Header from "./components/Header";

import ImageList from "./components/ImageList";
import {Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import Popup from "./components/Popup";
import React from "react";
import axios from 'axios';
import './App.css';


function App() {


  const [showModal, setShowModal] = useState(false);
  const [imageList, setImageList]=useState([]);
 
  const [modal, setModal]=useState({});
  const [searchKey, setSearchKey]=useState();



  useEffect(() => {
   if(searchKey !==""){
    axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response=>setImageList(response.data.results));
   }
  }, [searchKey]);

  const closeModal = () => setShowModal(false);
  const openModal = (id) =>{
   const selected_image= imageList.find((single_elem)=>single_elem.id==id)
    //  axios.get(`https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_API_KEY}`) saving api calls
    // .then(response=>console.log(response.data))
     setModal(selected_image);
  
  
    setShowModal(true);

  } 
 
  useEffect(() => {
    
    axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response=>setImageList(response.data))
  },[]);
  
  
  


return (
    <>
    
    <Header  setSearchKey={setSearchKey}/>
    
    <ImageList cardClick={openModal} images={imageList}/>
    <Popup showModal={showModal} closeModal={closeModal} modal={modal}/>
 
      
    </>
  );
}

export default App;
