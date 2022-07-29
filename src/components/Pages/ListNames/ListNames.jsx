import React, { useState } from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'

export const ListNames = () => {

  const [names, setNames] = useState([]);
  const renderNames = () => {setNames(people)}

  const people = [
    {
      name: "Esteban",
      edad: 19
    },
    {
      name: "Sebastian",
      edad: 19
    },
    {
      name: "Ferney",
      edad: 19
    }
  ];

  return (
    <div>
        <HeaderHome></HeaderHome>
        <div>
          <h1>Lista nombres</h1>
          <div className='listNombres'>
            <button className='mostrar' onClick={renderNames}>Show</button>
            <br />
            <ul>
              {names.map((names, key) => (<li key={key}>{names.name}</li>))}
            </ul>
          </div>
        </div>
        
    </div>
  )
}
