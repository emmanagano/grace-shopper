import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, fetchCart, fetchProductById, updateQty } from "../api";

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(0);
    const {id} = useParams();
    const [items, setItems] = useState([]);
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
        <div>
            <p>{product.title}</p>
            <img src={product.imgURL} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <input 
                type="number"
                min="1"
                max={product.inventory}
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
        </div>
    )
}

export default SingleProduct;