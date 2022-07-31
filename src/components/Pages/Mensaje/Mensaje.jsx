import React, { useRef } from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'
import { useState } from "react"

export const Mensaje = () => {

    const [mensaje, setMensaje] = useState([])
    const txtMensaje = useRef(null)

    const showMesj = () => {
        setMensaje([... mensaje, txtMensaje.current.value])
        txtMensaje.current.value = ""
    }

    const clearMesj = () => {
        setMensaje([""])
        txtMensaje.current.value = ""
    }

  return (
    <div>
        <HeaderHome/>
        <div className='textArea'>
            <h1>Mensaje</h1>
            <textarea placeholder="Escribe un mensaje" name="texto" ref={txtMensaje} cols="30" rows="10"></textarea>
            <div>
                <button onClick={showMesj} className="botonsMjs">Send</button>
                <button onClick={clearMesj} className="botonsMjs">Clean</button>
                {mensaje.map(( e => <p className='texto'>{e}</p>))}
            </div>
        </div>
    </div>
  )
}
