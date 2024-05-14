import NavBar from "../components/navbar";
import React, { useState, useEffect, useRef } from "react";
import '../stylesheets/general.css';
import styles from '../stylesheets/start.module.css';
import Image from "../fotos_front_page/thumbnail_6DDD42625B4144F58408D4CD84DAB2BE.png"
import { Link } from 'react-router-dom';


const Start = () => {

    //mobiele functionaliteit
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => {
            window.removeEventListener('resize', updateIsMobile)
        }
    }, []);

    return (
        <div>
            {isMobile ? <MobileStart /> : <DesktopStart />}
        </div>
    );

}

const DesktopStart = () => {
    
    const boekenRef = useRef(null);

    const scrollToDiv = () => {
        if (boekenRef.current) {
            boekenRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <NavBar />
            <div className={styles.starttopdiv}>
                <div className={styles.starttoptekstdiv}>
                    <h1>Wie is Sonic Fusion</h1>
                    <h3><br />Hallo, wij zijn dj's uit Oudenaarde<br />
                        We hebben al op verschillende evenementen gedraaid.<br />
                        We zorgen voor een goeie sfeer op het feest dat u nooit zult vergeten.
                    </h3>
                        <button className={styles.button} onClick={scrollToDiv}><p className={styles.buttonp}>Boek nu</p></button>
                </div>
                <div className={styles.starttopfotodiv}>
                    <img className={styles.foto} src={Image} alt="DJ Sonic Fusion"></img>
                </div>
            </div>
            <div className={styles.prijzendiv}>
                <span style={{ textAlign: "center", marginTop: '0' }}><h2>Prijzen</h2></span>
                <h3 className={styles.prijzentekst}>prijzentekst</h3>
            </div>
            <div className={styles.boekendiv} ref={boekenRef}>
                <span style={{textAlign: "center", marginTop: '0', marginBottom: '0'}}><h2>Boeken</h2></span>
                <h3 className={styles.boekentekst}>
                    Geïnteresseerd?<br/>
                    Boeken kan via onze <a href="https://www.instagram.com/dj_sonic_fusion/" target="_blank">Instagram pagina.</a><br/>
                    Stuur ons een DM en wij antwoorden hier zo snel mogelijk op. Tot dan!
                </h3>
            </div>


        </>
    )
}

const MobileStart = () => {

    const boekenRef = useRef(null);

    const scrollToDiv = () => {
        if (boekenRef.current) {
            boekenRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <NavBar />
            <div className={styles.starttopdivmb}>
                <div className={styles.starttoptekstdivmb}>
                    <h1>Wie is Sonic Fusion</h1>
                    <h3><br />Hallo, wij zijn dj's uit Oudenaarde<br />
                        We hebben al op verschillende evenementen gedraaid.<br />
                        We zorgen voor een goeie sfeer op het feest dat u nooit zult vergeten.
                    </h3>
                        <button className={styles.button} onClick={scrollToDiv}><p className={styles.buttonp}>Boek nu</p></button>
                </div>
                <div className={styles.starttopfotodivmb}>
                    <img className={styles.foto} src={Image} alt="DJ Sonic Fusion"></img>
                </div>
            </div>
            <div className={styles.prijzendiv}>
                <span style={{ textAlign: "center", marginTop: '0' }}><h2>Prijzen</h2></span>
                <h3 className={styles.prijzentekst}>prijzentekst</h3>
            </div>
            <div className={styles.boekendiv} ref={boekenRef}>
                <span style={{textAlign: "center", marginTop: '0', marginBottom: '0'}}><h2>Boeken</h2></span>
                <h3 className={styles.boekentekst}>
                    Geïnteresseerd?<br/>
                    Boeken kan via onze <a href="https://www.instagram.com/dj_sonic_fusion/" target="_blank">Instagram pagina.</a><br/>
                    Stuur ons een DM en wij antwoorden hier zo snel mogelijk op. Tot dan!
                </h3>
            </div>

        </>
    )
}

export default Start;