import React from 'react'
import styles from "./MailList.module.css";

export default function MailList() {
  return (
    <div className={styles.mail}>
        <h1 className={styles.mailTitle}>Poupe tempo, poupe dinheiro!</h1>
        <span className={styles.mailDescription}>Inscreva-se e enviaremos as melhores ofertas para você</span>
        <div className={styles.mailInputContainer}>
            <input type="text" placeholder="Seu e-mail" />
            <button>Inscreva-se</button>
        </div>
    </div>
  )
}
