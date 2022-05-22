import { addToCart, fetchCart, fetchUserMe } from "../api";

const Products = ({products}) => {
    return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
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