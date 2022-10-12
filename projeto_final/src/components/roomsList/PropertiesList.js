import React from 'react'
import styles from "./roomsList.module.css";



export default function PropertiesList({ properties }) {
    return (
        <div className={styles.rList}>
            {properties.map((property) => (
                <div className={styles.rListItem}>
                    <img src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg" alt="setubal" className={styles.rListImg} />
                    <div className={styles.rListTitles}>
                        <h1>{property.name}</h1>
                        <h2>{property.workStations} Workstations</h2>
                    </div>
                </div>

            ))}
        </div>
    )
}
