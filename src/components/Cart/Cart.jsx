import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";

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
                            <div className="cart-item" key={productCart.id}>
                                <img src={productCart.img || productCart.image} alt={productCart.name} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h3 className="cart-item-name">{productCart.name}</h3>
                                    <p className="cart-item-price">Precio c/u: $ {productCart.price.toLocaleString()}</p>
                                    <p className="cart-item-qty">Cantidad: {productCart.quantity}</p>
                                    <p className="cart-item-subtotal">Subtotal: $ {(productCart.price * productCart.quantity).toLocaleString()}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button className="btn btn-danger" onClick={() => deleteProductById(productCart.id)}>Eliminar</button>
                                </div>
                            </div>
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
