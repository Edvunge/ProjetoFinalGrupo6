import React from 'react'
import styles from "./roomsList.module.css";



export default function PropertiesList({ properties }) {
    return (
        <div className={styles.rList}>
            {properties.map((property) => (
                <div key={property._id} className={styles.rListItem}>
                    <img src={property.image} alt="setubal" className={styles.rListImg} />
                    <div className={styles.rListTitles}>
                        <h1>{property.name}</h1>
                        <h2>{property.workStations} Workstations</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}
