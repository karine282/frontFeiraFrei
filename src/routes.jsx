import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/app/App.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Login from "./pages/login/Login.jsx";
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Tecnico from "./pages/cursos/Tec.jsx";
import CV from "./pages/cursos/Cv.jsx";
import Ingles from "./pages/cursos/Ingles.jsx";
import Automacao from "./pages/cursos/Robo.jsx";
import Eletro from "./pages/cursos/Ele.jsx";
import Informatica from "./pages/cursos/Info.jsx";
import BuscarVisitante from "./pages/buscar/Buscar.jsx";
import VincularUsuario from "./pages/buscar/VincularUsuario.jsx";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/tec" element={<Tecnico />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/ingles" element={<Ingles />} />
        <Route path="/automacao" element={<Automacao />} />
        <Route path="/eletro" element={<Eletro />} />
        <Route path="/info" element={<Informatica />} />
        <Route path="/buscar" element={<BuscarVisitante />} />
        <Route path="/vincular" element={<VincularUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}
