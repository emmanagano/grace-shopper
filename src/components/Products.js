import { useNavigate } from "react-router-dom";
import { addToCart, fetchCart, fetchUserMe } from "../api";

const Products = ({products}) => {
    const navigate = useNavigate();
    return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <span
                            onClick={() => {
                                navigate(`/product/${product.id}`);
                                // fetchCart().then(item => {
                                //     if(item.productId === product.id) {
                                //         console.log("it's here")
                                //     }
                                //     console.log("hi")
                                // })
                            }}
                        >
                            <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </span>
                        <img src={product.imgURL} />
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
    )
}

export default Products;