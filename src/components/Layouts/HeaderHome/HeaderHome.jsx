import React from "react";
import { Logo } from "../../UI/Logo/Logo"
import { Navhome } from "../../UI/Navhome/Navhome";

export const HeaderHome = () => {
  return (
    <header className="headerHome">
      <Logo/>
      <Navhome />
    </header>
  );
};
