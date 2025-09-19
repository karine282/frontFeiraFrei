import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/app/App.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Login from "./pages/login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Tecnico from "./pages/Cursos/Tec.jsx";
import CV from "./pages/Cursos/Cv.jsx";
import Ingles from "./pages/Cursos/Ingles.jsx";
import Atomocao from "./pages/Cursos/Robo.jsx";
import Eletro from "./pages/Cursos/Ele.jsx";
import Informatica from "./pages/Cursos/Info.jsx"
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
        <Route path="/automacao" element={<Atomocao />} />
        <Route path="/eletro" element={<Eletro />} />
        <Route path="/info" element={<Informatica/>} />
        <Route path="/buscar" element={<BuscarVisitante />} />
        <Route path="/vincular" element={<VincularUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}
