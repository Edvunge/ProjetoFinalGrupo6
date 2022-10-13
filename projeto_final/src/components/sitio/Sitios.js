import styles from "./Sitios.module.css"
import react from 'react'
import Link from "next/link";

export default function Sitio() {
    return (
        <div className={styles.divDaDivDoSitio}>
            <div className={styles.divSitio}>
                <div className={styles.cabeca}>
                    <div className={styles.imagem}></div>
                    <div className={styles.desc}>
                        <h1>Descrição</h1>
                        <span>Lorem inpussdasdasgdfjfasjfgsdjfgsj</span>
                    </div>
                </div>
                <h1 className={styles.titulo}>Nome</h1>
                <div className={styles.caixa}>
                    <div className={styles.caixaPequena}>

                        <div className={styles.hex} id="1"><div className={styles.hexDiv}>Sala<br />10 Pessoas</div></div>
                        <div className={styles.hex} id="2"></div>
                        <div className={styles.hex} id="3"></div>
                        <div className={styles.hex} id="3"></div>
                    </div>
                    <div className={styles.caixaPequena}>
                        <div className={styles.hex} id="4"></div>
                        <div className={styles.hex} id="5"></div>
                        <div className={styles.hex} id="6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
