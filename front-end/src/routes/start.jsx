import NavBar from "../components/navbar";
import React from "react";
import '../stylesheets/general.css';
import styles from '../stylesheets/start.module.css';
import Image from "../fotos_front_page/thumbnail_6DDD42625B4144F58408D4CD84DAB2BE.png"

export default function Start() {
    return(
        <>
            <NavBar />
            <div className={styles.starttopdiv}>
                <div className={styles.starttoptekstdiv}>
                    <h1>Wie is Sonic Fusion</h1>
                    <h4>placeholder tekst</h4>
                </div>
                <div className={styles.starttopfotodiv}>
                    <img className={styles.foto} src={Image} alt=""></img>
                </div>
                
            </div>
        </>
    )
}