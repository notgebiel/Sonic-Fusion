import NavBar from "../components/navbar"
import styles from '../stylesheets/merch.module.css';
import axios from 'axios';

const apiCall = () => {
    axios.get('http://localhost:8080').then((response) => {
        console.log(response.data);
    })
}

export default function MerchPage() {
    return (
        <>
            <NavBar active="Merch" />
            <h1 className={styles.comingsoon}>Coming Soon</h1>
            <button onClick={apiCall}>api call</button>
        </>
    )
}