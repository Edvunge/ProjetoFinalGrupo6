import Link from 'next/link';
import React from 'react'
import styles from "./Featured.module.css";
import router from "next/router"

export default function Featured({ properties }) {
    return (
        <div className={styles.featured}>
            {properties.map((property) => (
                <Link href={`/sitios?${property._id}`}>
                    <div key={property._id} className={styles.featuredItem}>
                        <img src={property.image ?? "./TBD.png"} alt="setubal" className={styles.featuredImg} />
                        <div className={styles.featuredTitles}>
                            <h1>{property.name}</h1>
                            <h2>{property.workStations} Workstations</h2>
                        </div>
                    </div>
                </Link >
            ))}
        </div>
    )
}
