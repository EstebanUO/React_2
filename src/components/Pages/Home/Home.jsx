import React from "react";
import { HeaderHome } from "../../Layouts/HeaderHome/HeaderHome";
import { useState, useEffect} from 'react';

export const Home = ({style0, style1}) => {

  const [counter, setCounter] = useState(0);
  const [styleTitle, setStyleTitle] = useState(style0);

  const sumar = () => {
      setCounter(counter + 1);
  }

  const borrar = () => {
    setCounter(0)
  }

  useEffect(() => {
    counter >= 10 ? setStyleTitle(style1) : setStyleTitle(style0);
  },[counter])

  return(
    <div>
      <HeaderHome />
      <div className='changeStyle'>
            <h1 className={styleTitle}>ChangeStyle</h1>
            <p>{counter}</p>
            <div className="botones">
              <button className="restar" onClick={()=>{setCounter(counter - 1)}}>Restar</button>
              <button className="borrar" onClick={borrar}>Borrar</button>
              <button className="sumar" onClick={sumar}>Sumar</button>
            </div>
        </div>
    </div>
  ) 
};