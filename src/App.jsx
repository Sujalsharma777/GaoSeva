import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home'

import FromFailed from "../src/component/FormFailed"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/FormFailed" element={<FromFailed />} />



      </Routes>

    </BrowserRouter>
  )
}

export default App
