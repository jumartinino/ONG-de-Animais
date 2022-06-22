import React from "react";

import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

import NavBar from "./components/NavBar";

import Adote from "./pages/Adote";
import Ajudar from "./pages/Como Ajudar";
import Contato from "./pages/Contato";
import Denuncie from "./pages/Denuncie";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export default function App() {
  return (

    <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/Adote" element={<Adote/>}/>
          <Route path="/Denuncie" element={<Denuncie/>}/>
          <Route path="/Ajudar" element={<Ajudar/>}/>
          <Route path="/Contato" element={<Contato/>}/>

        </Routes>
    </Router>
    
  );
}


