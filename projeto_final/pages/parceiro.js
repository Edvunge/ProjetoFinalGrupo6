import React from 'react'
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/navbar/Navbar";
import Parceiro from '../src/components/parceiro/Parceiro';

export default function parceiros() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Parceiro />
        </div>
    );
}