// este coé para a barra de filtro ou pesquisa
import { useState } from "react"

export function DesafioDesign() {
  
    const [filtro, setFiltro] = useState(false);
    //    const FRUTA_FILTRADAS = frutas.filter((fruta) => fruta.includes(buscar));

    
    const handleSelect = (clicado) => {
        console.log(clicado)
    }

    return (
        <div role="main">
            <h1>filtros</h1>
            <input type="text"/>

            <button onClick={() => setFiltro(f => !f)}>filtro</button>
            {
                filtro && <div>
                    <input type="radio" value="Male" name="gender" onChange={() => handleSelect(3)} /> Empregado
                    <input type="radio" value="Female" name="gender" onChange={() => handleSelect(4)} /> Desempregado
                </div>
            }
        </div>
    );
}
