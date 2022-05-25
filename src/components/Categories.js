import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories_main">
            <Link to="/products">Women</Link>
            <Link to="/products">Men</Link>
            <Link to="/products">Accessories</Link>
            <Link to="/products">Kids</Link>
        </div>
    )
}

export default Categories;