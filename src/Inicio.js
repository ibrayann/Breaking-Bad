import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home'
import App from './App'
import App_episodios from './App_episodios'
import App_home from './App_Home'

function Inicio() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Frase" element={<App />} />
                <Route path="/Personajes" element={<App_home />} />
                <Route path="/Episodios" element={<App_episodios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Inicio