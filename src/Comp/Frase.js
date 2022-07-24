import React from 'react'

function Frase({ frase }) {
    return (
        <p className='frase'>
            <span>random Quote</span><br/>
            "{frase.Texto}"<br />
            <span>-{frase.Autor}</span> <br/>
            <p className='serie'>{frase.Serie}</p>
        </p>
        
    )
}

export default Frase