import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";


function AppRoutes() {
  return(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true,}}> 
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina nao encontrada!</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
