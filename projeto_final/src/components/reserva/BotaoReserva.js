import styles from "./Reserva.module.css";
import React from "react"
import Reserva from "./Reserva";
import { useState } from "react";






export default function BotaoReserva() {
    const [mostrar, setMostrar] = useState(0);
    return (
        <div>
            {mostrar != 1 && <button className={styles.button} onClick={() => setMostrar(1)}>Reservar</button>}
            {mostrar == 1 && <Reserva />}
            <span className={styles.spanBotao}>
                {mostrar == 1 && <button className={styles.button} onClick={() => setMostrar(0)}>Voltar</button>}
                {mostrar == 1 && <button className={styles.button} onClick={() => (setMostrar(0), console.log("Reservado"))}>Reservar</button>}
            </span>
        </div>
    )
}

