import Busqueda from "./components/Busqueda/Busqueda"
import Catalogo from "./components/Catalogo/Catalogo"
import Evaluacion from "./components/Evaluacion/Evaluacion"
import Page13 from "./components/Page13/Page13"
import Perfil from "./components/Page2p1/Page2p1"
import Page7 from "./components/Page7/Page7"
import LoginRegistro from "./components/Registro/LoginRegistro"
import Esourcing from "./components/eSourcing/Esourcing"
import ListProveedor from "./components/ListProveedor/ListProveedor"
import Bsqueda from "./components/BsquedaV1/Bsquedav1"
import Homologacion from "./components/Homologacion/Homologacion"
import Ecosistema from "./components/Ecosistema/Ecosistema"
import Compra from "./components/Compra/Compra"
import Proveedor from "./components/Proveedor/Proveedor"

function App() {

  return (
    <div>
      <LoginRegistro />
      <Perfil />
      <Bsqueda />
      <Busqueda />
      <Evaluacion />
      <Page7 /> 
      <Proveedor />
      <Homologacion />
      <ListProveedor />
      <Compra />
      <Esourcing/>
      <Page13 />
      <Catalogo />
      <Ecosistema />
    </div>
  )
}

export default App
