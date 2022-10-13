import React from 'react'
import styles from "./FeaturedProperties.module.css";

export default function FeaturedProperties({ properties }) {
    return (
        <div className={styles.fp}>
            {properties.map((property) => (
                <div key={property._id} className={styles.fpItem}>
                    <img src={property.image ?? "./TBD.png"} alt="setubal" className={styles.fpImg} />
                    <span className={styles.fpName}>Postos Individuais</span>
                    <span className={styles.fpCity}>{property.name}</span>
                    <span className={styles.fpPrice}>Á partir de 120€</span>
                    <div className={styles.fpRating}>
                        <button>{property.ratings}</button>
                        <span>Excelente</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
