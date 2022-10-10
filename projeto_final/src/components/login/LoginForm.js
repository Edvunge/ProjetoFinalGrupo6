import React from 'react'
import styles from "./Login.module.css";
import Link from "next/link";




export default function LoginForm() {
    return (
        <div className={styles.divContainer}>
            <div className={styles.divLogin}>
                <h2>Login</h2>
                <span>
                    Email:
                    <br /><input type="text"></input>
                </span>
                <br />
                <span>
                    Password:
                    <br /><input type="password"></input>
                </span>
                <Link href="/"><p className={styles.paragrafo}>Recuperar Palavra-passe</p></Link>
                <div className={styles.divButtons}>

                    <button className={styles.button}>Registar</button>
                    <button className={styles.button}>Login</button>
                </div>
            </div>
        </div>
    )
}