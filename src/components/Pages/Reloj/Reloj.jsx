import React, { useEffect, useState } from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'

export const Reloj = () => {

    const [time, setTime] = useState(0);

    useEffect(() =>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        });
    });

  return (
    <div>
        <HeaderHome></HeaderHome>
        <h1>Reloj</h1>
        <div className='reloj'>
            <h2 className='hora'>{time}</h2>
        </div>
    </div>
  )
}