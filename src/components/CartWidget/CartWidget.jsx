import logo from '../../assets/img/carritoCompras.webp';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
      <img src={logo} className='carritoImg' alt="carritoDeCompras" />
    </div>
  )
}

export default CartWidget
