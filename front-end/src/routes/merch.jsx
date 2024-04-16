import NavBar from "../components/navbar"
import styles from '../stylesheets/merch.module.css';

const getData = () => {
    fetch('http://localhost:8080/').then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('error: ', error);
    })
}

const sendData = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({key: data})
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('data transfer succesful');
    }catch (error) {
        console.error('error sending data: ', error);
    }
}

export default function MerchPage() {
    return (
        <>
            <NavBar active="Merch" />
            <h1 className={styles.comingsoon}>Coming Soon</h1>
            <button onClick={getData}>get</button>
            <button onClick={() => sendData('piemel')}>send</button>
        </>
    )
}