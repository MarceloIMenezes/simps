import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Body } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header"
import { InfoTab } from "./components/InfoTab/InfoTab";
import InfoCliente from "./pages/InfoCliente/InfoCliente";
import SelecionaServico from "./pages/SelecionaServico/SelecionaServico";
import "./styles/global.css";
import Servicos from "./pages/Servicos/Servicos";
import Ordens from "./pages/Ordens/Ordens";

function App() {

  var clientes = [];
  var servicos = [];
  var ordens   = [];

  return (
    <>
      <Header />
      <InfoTab />
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="info-cliente" element={<InfoCliente clientes={clientes} />}/>
        <Route path="info-cliente/selecionar-servicos" element={<SelecionaServico servicos={servicos} ordens={ordens} cliente={clientes} />}/>
        <Route path="servicos" element={<Servicos servicos={servicos}/>}/>
        <Route path="ordens" element={<Ordens servicos={servicos} ordens={ordens} clientes={clientes}/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
