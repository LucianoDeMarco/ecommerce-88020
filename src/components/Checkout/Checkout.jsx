import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import FormCheckout from "../FormCheckout/FormCheckout";
import './Checkout.css';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });
    const [orderId, setOrderId] = useState(null);
    const {  cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        //guardamos todo lo que estaba antes con el ...dataForm
        setDataForm({ ...dataForm, [event.target.name] :  event.target.value });
    } 

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: {  ...dataForm },
            products: [ ...cart],
            total: totalPrice()
        }

        uploadOrder(order);
    }

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);
        } catch (error) {
            console.log("Error al subir orden de compra");
        }
    }

  return (
    <div>
        {
            orderId ? (
                <div className="order-success">
                    <h2>Orden Generada Correctamente!</h2>
                    <p>guarde el identificador de su compra: <span className="order-id">{orderId}</span></p>
                </div>
            ) : (
                <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
            )
        }
    </div>
  )
}

export default Checkout
