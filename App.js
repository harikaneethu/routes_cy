
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";




function App() {
  return (
    <div className="App">
      <header  className="App-header">

      <BrowserRouter>
      <div style={{
        display:"flex",
        background:"pink",
        padding:"5px 0 5px 5px",
        fontSize:"20px"
      }}>


        <div style={{margin:"10px"}}>
          <NavLink to ="/"  style={({isActive})=>({
            color:isActive ? 'greenyellow': 'white'})}>
            Home
          </NavLink>
        </div>

        <div style={{margin:"10px"}}>
          <NavLink to ="/blogs"  style={({isActive})=>({
            color:isActive ? 'greenyellow': 'white'})}>
            Blog
          </NavLink>
        </div>

        <div style={{margin:"10px"}}>
          <NavLink to ="/contact"  style={({isActive})=>({
            color:isActive ? 'greenyellow': 'white'})}>
            Contact
          </NavLink>
        </div>

      </div>



      <Routes>
        <Route exact path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
