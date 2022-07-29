import React from 'react';
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome';
import { useState } from 'react';

export const PrintText = () => {

const [texto, setTexto] = useState();

const Texto = (event) =>{
    setTexto(event.target.value)
}

  return (
    <div>
        <HeaderHome></HeaderHome>
        <div className='mostrarTexto'>
            <h2>Mostrar texto</h2>
            <br />
            <input onChange={Texto} type="text" placeholder="Ingrese el texto"></input>
            <br />
            <p id="texto">Parrafo: {texto}</p>
        </div>
    </div>
  )
};
