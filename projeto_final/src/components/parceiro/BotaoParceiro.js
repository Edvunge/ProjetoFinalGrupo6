import Link from 'next/link';
import react, { useState } from 'react'
import Parceiro from '../parceiro/Parceiro';
import styles from './Parceiro.module.css'


export default function BotaoParceiro() {
    return (
        <div>
            <h3>É dono de uma Propriedade e quer ser nosso parceiro ?</h3>
            <div className={styles.divBotao}>
                <Link href="/parceiro"><button className={styles.button}>Registar Propriedade</button></Link>
            </div>
        </div>
    );
}