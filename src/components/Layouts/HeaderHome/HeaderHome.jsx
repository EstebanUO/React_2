import React from "react";
import { Ancla } from "../../UI/Ancla/Ancla";
import { Logo } from "../../UI/Logo/Logo"

export const HeaderHome = () => {
  return (
    <header className="headerHome">
      <Logo/>
      <Ancla />
    </header>
  );
};
