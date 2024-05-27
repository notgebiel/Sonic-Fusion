import React from 'react';


const Product = ({ product }) => {
    console.log(product.image);

    return (
        <div className='productCart'>
            <img src={product.image[5].src} alt={product.title} />
            <h2 className='productTitle'>{product.title}</h2>
            <p className='productPrice'>{product.price}</p>
        </div>
    )
}

export default Product;