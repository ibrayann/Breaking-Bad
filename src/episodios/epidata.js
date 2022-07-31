import React from 'react'

function Epidata({ episode_id, title, air_date, characters }) {
    let ulti = [5,6,7,18,19,20,31,32,33,44,45,46,60,61,62]
    function check(episode_id, ulti) {
        return ulti.includes(episode_id)
    }
    if (check(episode_id,ulti)){
        return (
            <div className='Episodio'>
                <p id='tit_epi'>{title}</p>
                <p className='resalt_epi'>{air_date}</p>
                <p className='resalt_epi'>characters</p>
                <div id='actores'>
                    {
                        characters.map(actores => <p className='resalt_cha' key={actores}>{actores}</p>)
                    }
                </div>
            </div>
        )
    }
}


export default Epidata