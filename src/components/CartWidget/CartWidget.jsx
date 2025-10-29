import { FaCartShopping } from 'react-icons/fa6';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      <FaCartShopping className="cart-icon" />
      <span className="cart-count">{quantity !== 0 && quantity}</span>
    </Link>
  );
}

export default CartWidget;
