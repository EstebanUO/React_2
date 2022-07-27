import React from "react";
import { Ancla } from "../Ancla/Ancla";

export const Navhome = () => {
  return (
    <nav className="navHome">
      <Ancla
        estilo="contador"
        reference="https://www.google.com/"
        textAncla="Home"
      />
      <Ancla 
        estilo="listNames" 
        reference="https://www.google.com/" 
        textAncla="Lista Nombres" 
      />
      <Ancla 
        estilo="changeStyle" 
        reference="https://www.google.com/" 
        textAncla="ChangeStyle" 
      />
    </nav>
  );
};
