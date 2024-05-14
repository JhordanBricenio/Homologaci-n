import Busqueda from "./components/Busqueda/Busqueda"
import Evaluacion from "./components/Evaluacion/Evaluacion"
import LoginRegistro from "./components/Registro/LoginRegistro"
import Esourcing from "./components/eSourcing/Esourcing"

function App() {

  return (
    <div>
      <LoginRegistro />
      {/* <Busqueda /> */}
      <Evaluacion/>
      <Esourcing/>
    </div>
  )
}

export default App
