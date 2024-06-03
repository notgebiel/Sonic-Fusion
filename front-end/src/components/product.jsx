import React, { useState, useEffect } from 'react';
import '../stylesheets/product.css';

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
    const [selectedVariants, setSelectedVariants] = useState({});

    useEffect(() => {
        fetch('http://localhost:10000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            const initialVariants = {};
            data.forEach(product => {
                if(products.variants.length > 0) {
                    initialVariants[product.id] = product.variants[0].id;
                }
            });
            setSelectedVariants(initialVariants);
        })
        .catch(error => console.error('Error bij fetchen van producten', error));
    }, []);

    const handleVariantChange = (productId, variantId) => {
        setSelectedVariants({
            ...selectedVariants,
            [productId]: variantId
        });
    };

    return(
        <div>
            <h1>Products</h1>
            <div className='products'>
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h2>{product.title}</h2>
                        <p>product.description</p>
                        <img src={product.images[0]} alt={product.title} />
                        <select  value={selectedVariants[product.id] || ''}
                        onChange={(e) => handleVariantChange(product.id, e.target.value)}>
                            {product.variants.map(variant => (
                                <option key={variant.id} value={variant.id}>
                                    {variant.title} - {variant.color} - {variant.size} - ${variant.price / 100}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;