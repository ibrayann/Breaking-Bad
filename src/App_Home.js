
import React, { useEffect, useState } from 'react'
import Perso from './comp_pers/perso'
import Data from './comp_pers/data'
import { Link } from "react-router-dom"

function App_home() {
    const [item, setItem] = useState([])
    const [Value, setValue] = useState("")


    const getperso = async () => {
        const url = `https://www.breakingbadapi.com/api/characters?name=${Value}`
        const res = await fetch(url)
        const data = await res.json();
        setItem(data)
        console.log(data)
    }

    useEffect(() => {
        getperso()
    }, [Value])
    


    return (
        <div>
            <div className='prueba'>
                <Perso />
                <Link to="/Home"><button className='volver'>Volver</button></Link>
            </div>
            <div className='bus'>
                <form onSubmit={e => {
                    e.preventDefault()
                    setValue(e.target.Value.value)
                }}>
                    <p>Busca un personaje</p>
                    <input
                        type="text"
                        placeholder='Search'
                        name="Value"
                        />
                <button className='buscar'>Buscar</button>
                </form>
            </div>
            <ul>
                {
                    item.map(personaje => <Data key={personaje.char_id} {...personaje} />)
                }
            </ul>
        </div>
    )
}

export default App_home;