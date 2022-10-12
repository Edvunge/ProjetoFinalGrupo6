import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from "../styles/test.module.css"



export default function sitios() {
    if (!typeof window === 'undefined') return <div></div>

    return (
        <div className={styles.wrapper}>
            <div style={{ height: "1240px", width: "100%", backgroundColor: "red" }}></div>
            <Item>
                ola
            </Item>
            <div style={{ height: "1240px", width: "100%", backgroundColor: "red" }}></div>
        </div >
    );
}

const Item = ({ children }) => {
    const ref = useRef(null)
    const isInViewPort = useOnScreen(ref)
    
    return (
        <div ref={ref} className={
            buildClassNames(isInViewPort)
        } >
            {children}
        </div >
    )
}

const buildClassNames = (isInViewPort) => {
    console.log(
        [styles.animated]
            .concat(isInViewPort ? styles.active : null)
    )
    return [styles.animated]
        .concat(isInViewPort ? styles.active : null)
        .join(" ")
}

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)
    if (!typeof window === 'undefined') return isIntersecting


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}