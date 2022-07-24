import React from 'react'
import Perso from './comp_pers/perso'
import {Link, NavLink} from "react-router-dom"

function Home() {
    return (
        <div>
            <div className='prueba'>
                <Perso />
            </div>
            <div className='contein'>
                <Link to="/Personajes"><div 
                    className='home'>
                    <img
                        className='imhome'
                        src="Breaking_Bad_Logo.png"
                        alt="logo"
                    />
                    <p className='tithome'>Personajes</p>
                    <p className='deshome'>Busca un personaje</p>
                </div></Link>
                <Link to="/Episodios"><div
                    className='home'>
                    <img
                        className='imhome'
                        src="Breaking_Bad_Logo.png"
                        alt="logo"
                    />
                    <p className='tithome'>Episodios</p>
                    <p className='deshome'>Ultimos tres capitulos de cada temporada</p>
                </div></Link>
                <Link to="/Frase"><div
                    className='home'>
                    <img
                        className='imhome'
                        src="Better_Call_Saul_logo.png"
                        alt="logo"
                    />
                    <p className='tithome'>Citas</p>
                    <p className='deshome'>Frase random</p>
                </div></Link>
            </div>
        </div>
    )
}

export default Home