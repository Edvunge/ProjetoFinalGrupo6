import styles from "./Sitios.module.css"
import react, { useState } from 'react'
import Link from "next/link";
import Reserva from "../reserva/Reserva";

export default function Sitio(properties) {
    const [button, setButton] = useState(0);

    return (
        <div className={styles.divDaDivDoSitio}>

            {button == 0 && <div className={styles.divSitio}>
                <div className={styles.cabeca}>
                    <div className={styles.imagem}></div>
                    <div className={styles.desc}>
                        <h1>Descrição</h1>
                        <span className={styles.spanDesc}>Descrição do local..</span>
                        <p className={styles.pContact}>Contactos: +351 999 999 999</p>
                    </div>
                </div>
                <h1 className={styles.titulo}>Nome</h1>
                <div className={styles.caixa}>
                    <div className={styles.caixaPequena}>
                        <div className={styles.hex} id="1" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                        <div className={styles.hex} id="2" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                        <div className={styles.hex} id="3" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                        <div className={styles.hex} id="4" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                    </div>
                    <div className={styles.caixaPequena}>
                        <div className={styles.hex} id="5" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                        <div className={styles.hex} id="6" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                        <div className={styles.hex} id="7" onClick={() => setButton(1)}><div className={styles.hexDiv}>Nº Sala<br />Nº Pessoas</div></div>
                    </div>
                </div>
            </div>}
            {button == 1 && <Reserva />}
            <div className={styles.divVoltar}>
                <button className={styles.voltar} onClick={() => setButton(0)}>Voltar</button>
            </div>


        </div>
    );
}
