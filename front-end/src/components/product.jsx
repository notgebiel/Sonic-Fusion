import React, { useState, useEffect } from 'react';
import '../stylesheets/product.css';

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedVariants, setSelectedVariants] = useState({});
    const [selectedImages, setSelectedImages] = useState({});

    const handleVariantChange = (productId, variantId) => {
        setSelectedVariants({
            ...selectedVariants,
            [productId]: variantId
        });

        // Find the selected variant
        const product = products.find(product => product.id === productId);
        if (product) {
            const selectedVariant = product.variants.find(variant => variant.id === parseInt(variantId));
            if (selectedVariant) {
                console.log('Selected Variant:', selectedVariant); // Debug log
                setSelectedImages({
                    ...selectedImages,
                    [productId]: selectedVariant.image || product.images[0]
                });
            } else {
                console.error('Variant not found:', variantId); // Debug log
            }
        } else {
            console.error('Product not found:', productId); // Debug log
        }
    };

    useEffect(() => {
        fetch('http://localhost:10000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                const initialVariants = {};
                const initialImages = {};
                data.forEach(product => {
                    if (product.variants.length > 0) {
                        initialVariants[product.id] = product.variants[0].id;
                        initialImages[product.id] = product.variants[0].image || product.images[0];
                    }
                });
                setSelectedVariants(initialVariants);
                setSelectedImages(initialImages);
            })
            .catch(error => console.error('Error fetching products', error));
    }, []);

    return (
        <div>
            <div className='products'>
                {products.map(product => (
                    <div key={product.id} className='product'>
                        <h2 className='productTitle'>{product.title}</h2>
                        <p className='productDescription'>product.description</p>
                        <img src={selectedImages[product.id] || product.images[0]} alt={product.title} />
                        {/*<select 
                            value={selectedVariants[product.id] || ''} 
                            onChange={(e) => handleVariantChange(product.id, e.target.value)}
                        >
                            {product.variants.map(variant => (
                                <option key={variant.id} value={variant.id}>
                                    {variant.title} - {variant.color} - {variant.size} - ${variant.price / 100}
                                </option>
                            ))}
                        </select>*/}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
