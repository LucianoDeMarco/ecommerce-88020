import { FaCartShopping } from 'react-icons/fa6';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-widget">
      <FaCartShopping className="cart-icon" />
      <span className="cart-count">0</span>
    </Link>
  );
}

export default CartWidget;
