import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { purchaseCart } from '../api';
import './css/Checkout.css';

const Checkout = ({ checkoutProducts, total, cartProducts }) => {
  const lstoken = localStorage.getItem('token');
  const history = useNavigate();

  const SubmitHandler = (total) => {
    window.confirm('Purchase Cart? Total: $' + total);
    if (!lstoken) {
      localStorage.removeItem('products');
      history('/');
      history(0);
    } else {
      const purchase = purchaseCart();
      history('/');
      history(0);
    }
  };
  return (
    <div className="Checkout">
      <div className="checkout_content">
        {lstoken
          ? checkoutProducts.map((product) => {
              const [cartproduct] = cartProducts.filter((cartproduct) => {
                if (product.id === cartproduct.productId) {
                  return true;
                }
              });
              return (
                <div key={product.id}>
                  <div>
                    <h5>
                      {product.title} | ${product.price}
                    </h5>
                    <h4>Count: {cartproduct.count}</h4>
                  </div>
                </div>
              );
            })
          : checkoutProducts.map((product) => {
              return (
                <div key={product.id}>
                  <div>
                    <h5>
                      {product.title} | Count: {product.count}
                    </h5>
                  </div>
                </div>
              );
            })}
        <h1>Total : ${total}</h1>
      </div>
      <div className="inputs">
        <div className="checkout_input">
          <input
            className="card_numbers"
            type="text"
            maxLength="16"
            placeholder="Card numbers"
          />
          <br />
          <span>
            <input
              required
              className="Security_Code"
              type="text"
              maxLength="3"
              placeholder="CSC"
            />
            <input
              required
              className="zip_code"
              type="text"
              maxLength="6"
              placeholder="Zip Code"
            />
          </span>
          <br />
          <input
            required
            className="Address"
            type="text"
            placeholder="First Shipping Address"
          />
          <br />
          <input
            className="Address"
            type="text"
            placeholder="Second Shipping Address (Optional)"
          />
          <br />
          <span>
            <input required className="City" type="text" placeholder="City" />
            <input required className="State" type="text" placeholder="State" />
          </span>
          <div className="Checkout_Button"></div>
          <button type="submit" onClick={() => SubmitHandler(total)}>
            <BsCart2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
