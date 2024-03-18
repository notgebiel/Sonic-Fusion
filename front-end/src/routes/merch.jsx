import NavBar from "../components/navbar"
import styles from '../stylesheets/merch.module.css';

export default function MerchPage() {
    return (
        <>
            <NavBar active="Merch" />
            <h1 className={styles.comingsoon}>Coming Soon</h1>
        </>
    )
}