// bibliotecas
import { useEffect, useState } from "react"
// componets
import BarraNavegacao from "../../componentes/BarraNavegacao"
import Dashboard from "../Dashboard"

const Home = () => {
    const [usuarioLogado, setUsuarioLogado] = useState(false)

    useEffect(() => {
        // Checa o token ao carregar o componente
        const token = sessionStorage.getItem("access_token");
        if (token) {
          setUsuarioLogado(true);
        }
      }, []);

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