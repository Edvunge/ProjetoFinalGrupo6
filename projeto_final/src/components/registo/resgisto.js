import React from 'react'
import styles from "./Registo.module.css";
import Link from "next/link";




export default function Registo() {

    const signup = () => {
        fetch()
    }
    return (
        <div className={styles.divContainer}>
            <div className={styles.divLogin}>
                <h2>Registar</h2>
                <span>
                    Nome:
                    <br /><input placeholder="Nome" type="text"></input>
                </span>
                <br />
                <span>
                    Email:
                    <br /><input placeholder="example@example.com" type="text"></input>
                </span>

                <br />
                <span>
                    Password:
                    <br /><input placeholder="**********" type="password"></input>
                </span>
                <br />
                <span>
                    Confirmar Password:
                    <br /><input placeholder="**********" type="password"></input>
                </span>
                <br />
                <span>
                    Telemóvel:
                    <br /><input placeholder="912 345 678" type="tel"></input>
                </span>
                <div className={styles.divButtons}>
                    <Link href="/">
                    <button className={styles.button}>Registar</button>
                    </Link>


                </div>
            </div>
        </div>
    )
}