import React, { useState, useEffect } from 'react';


/*const Product = ({ product }) => {

    return (
        <div className='productCart'>
            <img src={product.image[5].src} alt={product.title} />
            <h2 className='productTitle'>{product.title}</h2>
            <p className='productPrice'>{product.price}</p>
        </div>
    )
}*/

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:10000/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error bij fetchen van producten', error));
    }, []);

    return(
        <div>
            <h1>Products</h1>
            <div className='products'>
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h2>{product.title}</h2>
                        <p>product.description</p>
                        <img src={product.images[0]} alt={product.title} />
                        <div className="variants">
                            <div key={variant.id} className='variant'>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}