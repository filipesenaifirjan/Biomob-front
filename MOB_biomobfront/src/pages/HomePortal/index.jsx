import React, { useEffect, useState } from "react";
import Acessibilidade from "../../components/Acessibilidade/acessibilidade";

import Subheader from "../../components/SubheaderPortal";

import "./style.css";

function Home() {
  return (
    <>
    
      <div className="tituloH">
        <text className="titulo">Portal da TransparĂȘncia</text>
      </div>
      <Subheader />
    </>
  );
}

export default Home;
