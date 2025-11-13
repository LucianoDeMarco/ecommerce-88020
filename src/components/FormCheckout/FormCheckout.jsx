import './FormCheckout.css';

const FormCheckout = ({ dataForm,handleChangeInput,sendOrder }) => {
  return (
    <form className="checkout-form" onSubmit={sendOrder}>
            <input className="checkout-input" type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="ingrese su nombre"/>
            <input className="checkout-input" type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="ingrese su telefono"/>
            <input className="checkout-input" type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="ingrese su email"/>
            
            <button className="checkout-button" type="submit">Enviar Orden</button>
        </form>
  )
}

export default FormCheckout



