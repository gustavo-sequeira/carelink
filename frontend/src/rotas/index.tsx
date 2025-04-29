// bibliotecas
import { Route, Router, Routes } from "react-router-dom"
// components
import Home from "../paginas/Home"
import Dashboard from "../paginas/Dashboard"
import Usuario from "../paginas/Usuario"

const Rotas = () => {
    return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="usuario" element={<Usuario />} />
          </Route>
        </Routes>

    )
}

export default Rotas;