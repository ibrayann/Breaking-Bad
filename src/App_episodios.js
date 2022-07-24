import React, {useEffect, useState} from 'react'
import Perso from './comp_pers/perso'
import Epidata from './episodios/epidata'
import { Link} from "react-router-dom"

function App_episodios() {
    const epii = [2,4,6,7,8,9]
    const [epi, setEpi] = useState([])
    
    const getEpiodios = async () => {
            const url = `https://www.breakingbadapi.com/api/episodes`
            const res = await fetch(url)
            const data = await res.json();
            setEpi(data)
            console.log(data)
        }
    
    useEffect(() => {
            getEpiodios()
        }, [])
    
    
    
    
        return (
            <div>
                <div className='prueba'>
                    <Perso />
                    <Link to="/Home"><button className='volver'>Volver</button></Link>
                </div>
                <p className='thelast'>Los ultimos tres episodios de cada temporada</p>
                <ul className='epiul'>
                    {
                        epi.map(episodio => <Epidata key={episodio.episode_id}{...episodio} />)
                    }
                </ul>
            </div>
        )
}

export default App_episodios