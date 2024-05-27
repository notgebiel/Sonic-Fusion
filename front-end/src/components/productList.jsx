import Product from "./product";
import React from "react";

const ProductList = ({ products }) => {
    return (
        <div className="productList">
            <p>products</p>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;