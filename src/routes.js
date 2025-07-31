import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Rodape from "componentes/rodape";
import PagPadrao from "componentes/PagPadrao";
import Post from "paginas/post";
import NaoEncontrada from 'paginas/naoEncontrada';


function AppRoutes() {
  return(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true,}}> 
      <Menu />

      <Routes>
        <Route path="/" element={<PagPadrao />}> 
          <Route index element={<Inicio />} /> {/*aquele index é o mesmo que dizer que o caminho desta rota é igual ao da rota pai, ou seja, nesse caso é a mesma coisa que um atributo path="/"*/}
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
