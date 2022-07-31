import React from 'react'

function Frase({ frase }) {
    return (
        <div>
            <p className='frase'>
                <span>random Quote</span><br/>
                "{frase.Texto}"<br />
                <span>-{frase.Autor}</span> <br/>
                <p className='serie'>{frase.Serie}</p>
            </p>
        </div>
    )
}

export default Frase