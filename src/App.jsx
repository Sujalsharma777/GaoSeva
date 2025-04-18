import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home'
import NavBar from "./component/NavBar"
import FooterBar from "./component/FooterBar"

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
      <FooterBar />
    </BrowserRouter>
  )
}

export default App
