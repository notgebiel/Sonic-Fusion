import NavBar from "../components/navbar"
import styles from '../stylesheets/merch.module.css';
import ProductList from "../components/productList";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../stylesheets/product.css'
const ip = process.env.REACT_APP_SERVERIP;


const getData = () => {
    fetch(ip).then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('error: ', error);
    })
}

const sendData = async () => {
    try {
        const data = {
            'key': 'value',
            'data': 'pik'
        }
        const response = await fetch('http://localhost:10000/', {
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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:10000/products`)
        .then(response => {
            const transformedProducts = response.data.map(product => ({
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.images.map(image => ({ src: image.src })),
            }));
            setProducts(transformedProducts);
        })
        .catch(error => console.error('error fetching products', error));
    }, []);

    return (
        <>
            <NavBar active="Merch" />
            <h1 className={styles.comingsoon}>Coming Soon</h1>
            <button onClick={sendData}>send</button>
            <ProductList products={products} />
        </>
    )
}