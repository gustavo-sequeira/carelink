// bibliotecas
import { useState } from "react"
// componets
import BarraNavegacao from "../../componentes/BarraNavegacao"
import Dashboard from "../Dashboard"

const Home = () => {
    const [usuarioLogado, setUsuarioLogado] = useState(false)
    return (
        <div>
            <BarraNavegacao
                setUsuarioLogado={setUsuarioLogado}
            />
            {usuarioLogado && (
                <Dashboard />
            )}
        </div>
    )
}

export default Home