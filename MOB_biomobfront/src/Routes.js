import React, {useContext} from "react"; 
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";



import Home from "./pages/HomePortal/index";
import Header from "./components/Header/index"
import Login from "./pages/Login/index";
import RecuperaSenha from "./pages/RecuperaSenha/index";
import UsuarioCadastro from "./pages/UsuarioCadastro/index";
import AdminCadastro from "./pages/AdminCadastro/index";
import AdminValidacoes from "./pages/AdminValidacoes/index.";
import PerfilUser from "./pages/PerfilUser/index";
import PerfilAdm from "./pages/PerfilAdm/index"
import DoarCat from "./pages/DoarCategorias/index";
import DoarDinheiro from "./pages/DoarDinheiro/index";
import DoarEquipamentos from "./pages/DoarEquipamentos/index";
import DoarCesta from "./pages/DoarCesta/index"
import DoarOutros from "./pages/DoarOutros/index"
import SolicitarCat from "./pages/SolicitarCategorias/index"
import SolicitarOutros from "./pages/SolicitarOutros/index";
import SolicitarCesta from "./pages/SolicitarCesta";
import SolicitarEquipamento from "./pages/SolicitarEquipamento";
import SolicitarDinheiro from "./pages/SolicitarDinheiro";
import SetaVoltar from "./components/SetaVoltar/seta";
import AtualizarUsuario from "./pages/UsuarioAtualizacao/index"

import AdminItensAprovados from "./pages/AdminItensAprovados/index.";
import AdminComunicacoes from "./pages/AdminComunicacoes/index.";
import AdminDistribuidos from "./pages/AdminItensDistribuidos/index.";


/*function CustomRoute({isPrivate, ...res}){
  const {loading, authenticated} = useContext(Context);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (isPrivate && !authenticated){
    return <Redirect to="/login" />
    // rever qual a rota com o grupo para ser direcionado !!!
  }
  return <Rotas {...res} />
}*/

function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* !!<CustomRoute> para todos os que tiverem a validação no lugar de <Route> !!*/}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/recuperar-senha" component={RecuperaSenha} />
        <Route path="/usuario-cadastro" component={UsuarioCadastro} />
        <Route path="/admin-cadastro" component={AdminCadastro} />
        <Route path="/admin-validacoes" component={AdminValidacoes} />
        <Route path="/perfil-user" component={PerfilUser} />
        <Route path="/perfil-adm" component={PerfilAdm} />
        <Route path="/doar-cat" component={DoarCat} />
        <Route path="/doar-dinheiro" component={DoarDinheiro} />
        <Route path="/doar-equipamentos" component={DoarEquipamentos} />
        <Route path="/doar-cesta" component={DoarCesta} />
        <Route path="/doar-outros" component={DoarOutros} />
        <Route path="/solicitar-cat" component={SolicitarCat} />
        <Route path="/solicitar-dinheiro" component={SolicitarDinheiro} />
        <Route path="/solicitar-equipamento" component={SolicitarEquipamento} />
        <Route path="/solicitar-cesta" component={SolicitarCesta} />
        <Route path="/solicitar-outros" component={SolicitarOutros} />
        <Route path="/seta-voltar" component={SetaVoltar} />
        <Route path="/usuario-atualizacao" component={AtualizarUsuario} />

        <Route path="/admin-aprovados" component={AdminItensAprovados} />
        <Route path="/admin-comunicacoes" component={AdminComunicacoes} />
        <Route path="/admin-distribuidos" component={AdminDistribuidos} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
