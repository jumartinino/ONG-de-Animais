import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export default function App() {
  return (

    <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
        </Routes>
    </Router>
    
  );
}


