import React from "react";
import Rotas from "./Routes";

import VLibras from '@djpfs/react-vlibras';


//importe do global css
import "./global.css";
import "./pequenosPadroes.css";

function App() {
  return (
    <>
      <Rotas />
      <VLibras />
    </>
  );
}

export default App;
