import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"

const Rotas = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Rotas;