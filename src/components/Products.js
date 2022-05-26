import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { addToCart, fetchProducts, fetchUserMe } from "../api";
import Home from "./Home";
import SingleProduct from "./SingleProduct";

const Products = ({products, setProducts}) => {
    const navigate = useNavigate();
    return (
        <>
        <Home />
        <h1 id="shop-all-title">Shop All</h1>
        <div className="products_main">
            {products.map(product => {
                return (
                    <div 
                        key={product.id}
                        className="each-product"
                    >
                        <span
                            onClick={() => {
                                navigate(`/product/${product.id}`);
                            }}
                        >
                            <p>{product.title}</p>
                            <img 
                                src={product.imgURL}
                                onMouseOver={(e) => {
                                    e.currentTarget.src = product.subImg
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.src = product.imgURL
                                }} 
                            />
                            <p>${product.price}</p>
                        </span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart(
                                    product.price,
                                    product.id,
                                    1
                                );
                                fetchUserMe();
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Products;