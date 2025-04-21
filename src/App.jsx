import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home'
import Hero from './component/Hero'


function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GauSevakID" element={<Hero />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
