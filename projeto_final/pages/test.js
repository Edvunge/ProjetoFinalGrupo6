import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from "../styles/test.module.css"



export default function sitios() {
    if (!typeof window === 'undefined') return <div></div>

    return (
        <div className={styles.wrapper}>
            <div style={{ height: "1240px", width: "100%" }}></div>
            <Item type="right">
                ola
            </Item>
            <div style={{ height: "40px", width: "100%" }}></div>
            <Item type="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis neque at tellus porttitor consequat scelerisque in arcu. Aliquam sit amet metus diam. Sed fringilla diam et aliquam viverra. Proin dignissim mattis fermentum. Sed sit amet mauris cursus, convallis neque vitae, dictum nunc. Sed in nisl mollis, vestibulum nulla vitae, laoreet odio. In dictum posuere finibus. Pellentesque dignissim bibendum facilisis. Aliquam eu sapien lectus.
            </Item>
            <div style={{ height: "1240px", width: "100%" }}></div>
        </div >
    );
}

const Item = ({ children, type }) => {
    const ref = useRef(null)
    const [isInViewPort, setInViewPort] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const box = ref.current.getBoundingClientRect()
            setInViewPort(box.bottom <= window.innerHeight)
        }
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [ref])
    return (
        <div ref={ref}
            style={{ transform: `translateX(${type === "right" ? "+" : "-"}${isInViewPort ? 0 : 3000}px)` }}
            className={
                [styles.animated]
                    .concat(isInViewPort ? styles.active : null)
                    .join(" ")
            } >
            {children}
        </div >
    )
}