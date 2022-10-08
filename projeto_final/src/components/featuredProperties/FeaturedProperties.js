import React from 'react'
import styles from "./FeaturedProperties.module.css";

export default function FeaturedProperties() {
  return (
    <div className={styles.fp}>
        <div className={styles.fpItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/02/DedicatedDesk_Visconde.jpg" alt="setubal" className={styles.fpImg} />
            <span className={styles.fpName}>Postos Individuais</span>  
            <span className={styles.fpCity}>Setúbal</span>  
            <span className={styles.fpPrice}>Á partir de 120€</span>
            <div className={styles.fpRating}>
                <button>8.9</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className={styles.fpItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/02/DedicatedDesk_Visconde.jpg" alt="setubal" className={styles.fpImg} />
            <span className={styles.fpName}>Postos Individuais</span>  
            <span className={styles.fpCity}>Setúbal</span>  
            <span className={styles.fpPrice}>Á partir de 120€</span>
            <div className={styles.fpRating}>
                <button>8.9</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className={styles.fpItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/02/DedicatedDesk_Visconde.jpg" alt="setubal" className={styles.fpImg} />
            <span className={styles.fpName}>Postos Individuais</span>  
            <span className={styles.fpCity}>Setúbal</span>  
            <span className={styles.fpPrice}>Á partir de 120€</span>
            <div className={styles.fpRating}>
                <button>8.9</button>
                <span>Excelente</span>
            </div>
        </div>
    </div>
  )
}
