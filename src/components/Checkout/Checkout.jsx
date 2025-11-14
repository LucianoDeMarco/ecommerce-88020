import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import FormCheckout from "../FormCheckout/FormCheckout";
import CartItem from "../CartItem/CartItem"; 
import './Checkout.css';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({ fullname: "", phone: "", email: "" });
    const [orderId, setOrderId] = useState(null);
    const [purchased, setPurchased] = useState(null);

    const { cart, totalPrice, deleteCart } = useContext(CartContext);

    const handleChangeInput = (event) => {
        //guardamos todo lo que estaba antes con el ...dataForm
        setDataForm({ ...dataForm, [event.target.name] :  event.target.value });
    } 

    const sendOrder = (event) => {
        event.preventDefault();

        
        setPurchased({
            items: [...cart],
            total: totalPrice()
        });

        const order = {
            buyer: {  ...dataForm },
            products: [ ...cart ],
            total: totalPrice()
        };

        uploadOrder(order);
    }

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);

            // vacio el carrito despues de confirmar la orden
            deleteCart();
        } catch (error) {
            console.log("Error al subir orden de compra", error);
        }
    }

  return (
    <div>
        {
            orderId ? (
                <div className="order-success">
                    <h2>Orden generada correctamente</h2>
                    <p>Guarda el identificador de tu compra: <span className="order-id">{orderId}</span></p>

                    <div className="order-summary">
                        <h3>Productos comprados</h3>
                        <ul className="order-items-list">
                          {(purchased?.items ?? cart).map(item => (
                              <li key={item.id} className="order-item">
                                  <CartItem product={item} readOnly />
                              </li>
                          ))}
                        </ul>
                        <p className="order-total"><strong>Total:</strong> $ {(purchased?.total ?? totalPrice()).toLocaleString()}</p>
                    </div>

                    <Link to="/" className="back-home-link">Volver al inicio</Link>
                </div>
            ) : (
                <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
            )
        }
    </div>
  )
}

export default Checkout
