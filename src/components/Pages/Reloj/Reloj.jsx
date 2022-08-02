import React, { useState } from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'

export const Reloj = () => {

    const [time, setTime] = useState(0);

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

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