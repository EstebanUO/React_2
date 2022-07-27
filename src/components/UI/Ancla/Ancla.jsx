import React from "react";

export const Ancla = ({estilo, reference, textAncla}) => {
  return (
    <a className={estilo} href={reference}>{textAncla}</a>
  );
};
