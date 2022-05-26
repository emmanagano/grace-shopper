import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, fetchCart, fetchProductById, updateQty } from "../api";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchProductById(Number(id))
        .then(product => {
            setProduct(product)
        });
        fetchCart()
        .then(item => {
            setItems(item)
        });
    },[])
    const [itemExists] = items?.filter(item => {
        if(item.productId === Number(id)) {
            return true
        }
    });
    return (
        <div className="single-product_main">
            <div className="single-product_nav">
                <p
                    onClick={() => {
                        navigate("/products")
                    }}
                >
                    <AiOutlineArrowLeft />
                    Shop All
                </p>
                <p>{product.title}</p>
                <p
                    onClick={() => {
                        navigate("/cart")
                    }}
                >
                    Cart
                    <AiOutlineArrowRight />
                </p>
            </div>
            <div className="single-product_content">
                <span>
                    <img 
                        src={product.subImg} 
                        onMouseOver={(e) => {
                            e.currentTarget.src = product.imgURL
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.src = product.subImg
                        }}
                    />
                </span>
                <span>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <input 
                        type="number"
                        min="1"
                        max={product.inventory}
                        value={qty}
                        defaultValue={itemExists?.quantity}
                        onChange={(e) => {
                            setQty(e.target.value)
                        }}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            {itemExists ? 
                                updateQty(
                                    product.id,
                                    qty
                                )
                                :
                                addToCart(
                                    product.price,
                                    product.id,
                                    qty
                                );
                            }
                        }}
                    >
                        Add to cart
                    </button>
                </span>
            </div>
        </div>
    )
}

export default SingleProduct;