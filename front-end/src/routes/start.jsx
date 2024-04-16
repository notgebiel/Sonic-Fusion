import NavBar from "../components/navbar";
import React, { useState, useEffect } from "react";
import '../stylesheets/general.css';
import styles from '../stylesheets/start.module.css';
import Image from "../fotos_front_page/thumbnail_6DDD42625B4144F58408D4CD84DAB2BE.png"
import { Link } from 'react-router-dom';

export default function Start() {

    return(
        <>
            <NavBar />
            <div className={styles.starttopdiv}>
                <div className={styles.starttoptekstdiv}>
                    <h1>Wie is Sonic Fusion</h1>
                    <h3><br/>Hallo, wij zijn dj's uit Oudenaarde<br/>
                        We hebben al op verschillende evenementen gedraaid.<br/>
                        We zorgen voor een goeie sfeer op het feest dat u nooit zult vergeten.
                    </h3>
                    <Link to="/boeken">
                        <button className={styles.button}><p className={styles.buttonp}>Boek nu</p></button>
                    </Link>
                </div>
                <div className={styles.starttopfotodiv}>
                    <img className={styles.foto} src={Image} alt="DJ Sonic Fusion"></img>
                </div>
                </div>
                
            
        </>
    )
}