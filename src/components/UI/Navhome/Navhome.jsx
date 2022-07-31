import React from "react";
import { Link } from "react-router-dom"

export const Navhome = () => {
  return (
    <nav className="navHome">
      <Link to="/">Home</Link>
      <Link to="/listName">ListNames</Link>
      <Link to="/printTxt">PrintText</Link>
      <Link to="/mensaje">Mensaje</Link>
      <Link to="/reloj">Reloj</Link>
    </nav>
  );
};
