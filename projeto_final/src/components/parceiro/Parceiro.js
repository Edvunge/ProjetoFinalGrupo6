import React from 'react'
import styles from "./Parceiro.module.css";
import Link from "next/link";




export default function Parceiro() {
    
    return (
        <div className={styles.divContainer}>
            <div className={styles.divLogin}>
                <h2>Registar Propriedade</h2>
                <span>
                    Nome:
                    <br /><input placeholder="Nome" type="text"></input>
                </span>
                <br />
                <span>
                    Num de salas:
                    <br /><input placeholder="ex: 10" type="text"></input>
                </span>
                <br />
                <span>
                    Num de salas de Reuniões:
                    <br /><input placeholder="ex:1" type="tel"></input>
                </span>
                <br />
                <span>
                    Preço por Sala(em €):
                    <br /><input placeholder="ex: 20" type="tel"></input>
                </span>
                <br />
                <span>
                    Zona:
                    <br /><input placeholder="ex: Lisboa" type="password"></input>
                </span>
                <br />
                <span>
                    Lugares de Interesse:
                    <br /> <textarea className={styles.textarea} placeholder="Cafes,Restaurantes..."> </textarea>
                </span>
                <br />
                <div className={styles.divButtons}>
                    <Link href="/">
                        <button className={styles.button}>Registar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}