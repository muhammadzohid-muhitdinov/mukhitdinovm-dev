import React from 'react'
import Login from './Components/Login/Login'
import Home from "./Components/Home/Home"
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Home/Navbar'
const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App