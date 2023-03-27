
import Header from "./components/Header";
import React from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Detail from "./components/Detail";
import Search from "./components/Search";
import Home from "./components/Home";


function App() {


return (
    <>
    
    <Header  />
    

    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search/> } />
          <Route path='/image/:id' element={<Detail/>} />
        </Routes>

  
    </>
  );
  }

export default App;
