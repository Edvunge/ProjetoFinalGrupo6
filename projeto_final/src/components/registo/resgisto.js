import React from 'react'
import styles from "./Registo.module.css";
import Link from "next/link";
import Image from "next/image"
import { style } from '@mui/system';



export default function LoginForm() {
    return (
        <div className={styles.divContainer}>
            <div className={styles.divLogin}>

                <div className={styles.divDireita}>

                    <h2>Registar</h2>
                    <span>
                        Nome:<br />
                        <br /><input placeholder="Nome" type="text"></input>
                    </span>
                    <br />
                    <span>
                        Email:<br />
                        <br /><input placeholder="example@example.com" type="text"></input>
                    </span>
                    <br />
                    <span>
                        Password:<br />
                        <br /><input placeholder="*********" type="password"></input>
                    </span>
                    <br />
                    <span>
                        Confirmar Password:<br />
                        <br /><input placeholder="**********" type="password"></input>
                    </span>
                    <br />
                    <span>
                        Telemóvel:<br />
                        <br /><input placeholder="912 345 678" type="tel"></input>
                    </span>
                    <div className={styles.divButtons}>
                        <Link href="/"><button className={styles.button}>Registar</button></Link>
                    </div>

                </div>
                <div className={styles.divEsquerda}>
                    <div className={styles.divEsquerdaPequena}>
                    </div>

                    <div className={styles.divEsquerdaPequenaDireita}><span className={styles.hive}>Hive.</span><span className={styles.co}> co</span>
                    </div>
                </div>
            </div>
        </div >
    )
}