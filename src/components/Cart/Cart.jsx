import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {

    const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h1 className="cart-title">Tu carrito</h1>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <h2>No hay productos</h2>
                    <Link to="/" className="back-home-link">Volver al inicio</Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((productCart) => (
                            <CartItem
                                key={productCart.id}
                                product={productCart}           
                                onDelete={deleteProductById}    
                            />
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Precio total: $ {totalPrice().toLocaleString()}</h2>
                        <Link className="checkout-link" to="/checkout">Continuar Compra</Link>
                        <button className="btn btn-clear" onClick={deleteCart}>Vaciar Carrito</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart
