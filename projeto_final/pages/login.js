import Header from "../src/components/header/Header";
import React from 'react'
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/navbar/Navbar";
import LoginForm from "../src/components/login/LoginForm";

export default function Login() {
    return (
        <div className={styles.container}>
            <Navbar />
            
            <LoginForm />
        </div>
    );
}