import { useEffect } from "react";
import { fetchCart} from "../api";

const Cart = ({cart, setCart}) => {
    useEffect(()=>{
        fetchCart().then(cart => {
            setCart(cart);
        });
    },[]);
    return (
        <div className="cart_main">
            {cart.map(product => { return (
                <div key={product.id}>
                    <p>{product.item.title}</p>
                    <p>{product.cartPrice}</p>
                    <img src={product.item.imgURL} />
                    <p>{product.quantity}</p>
                </div>
            )})}
        </div>
    )
}

export default Cart;