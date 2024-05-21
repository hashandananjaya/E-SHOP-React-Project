import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Cart from "../../pages/Cart";
import Register from "../../pages/Register";


export default class Content extends Component {
  render() {
    return (
      <div className="mt-20">
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/About" element={ <About />}></Route>
          <Route path="/Contact" element={ <Contact />}></Route>
          <Route path="/Cart" element={ <Cart />}></Route>
          <Route path="/Login" element={ <Login />}></Route>
          <Route path="/Register" element={ <Register />}></Route>
        </Routes>
      </div>
    );
  }
}

