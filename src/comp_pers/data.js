import React from 'react'

function Data({name,img,nickname,occupation,portrayed}) {
    return (
        <div className='personaje'>
            <img src={img} className="pk" />
            <div className='infotodo'>
                <p id='tit'>{name}</p>
                <article>
                    <p>Apodo</p>
                    <p className='resalt'>{nickname}</p>
                    <p>Ocupación</p>
                    <p className='resalt'>{occupation}</p>
                    <p>Interpretado por</p>
                    <p className='resalt'>{portrayed}</p>
                </article>
            </div>
        </div>
    )
}

export default Data