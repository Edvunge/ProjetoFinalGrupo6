import Header from "../src/components/header/Header";
import React from 'react'
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/navbar/Navbar";
import Registo from "../src/components/registo/Resgisto";

export default function Registar() {
    return (
        <div className={styles.container}>
            <Navbar />

            <Registo />
        </div>
    );
}