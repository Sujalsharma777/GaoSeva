import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home'
import Hero from './component/Hero'
import FromFailed from "../src/component/FormFailed"
import FormSuccess from "../src/component/FormSuccess"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GauSevakID" element={<Hero />} />
        <Route path="/FromFailed" element={<FromFailed />} />
        <Route path="/FormSuccess" element={<FormSuccess />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
