import Link from 'next/link';
import React from 'react'
import styles from "./Featured.module.css";
import router from "next/router"

export default function Featured({properties}) {
    const handleClick = (properties) => {
        key = properties._id
        router.push(`/sitios?${key}`)
      }
    return (
        <div className={styles.featured}>
            {properties.map((property) => (
                <div key={property._id} className={styles.featuredItem}>
                    <img src={property.image ?? "./TBD.png"} alt="setubal" className={styles.featuredImg} />
                    <div className={styles.featuredTitles}>
                        <h1>{property.name}</h1>
                        <h2>125 Workstations</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}
