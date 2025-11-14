import './CartItem.css';

const CartItem = ({ product, onDelete, readOnly = false }) => {
  const { id, img, image, name, price, quantity } = product;

  return (
    <div className="cart-item" key={id}>
      <img src={img || image} alt={name} className="cart-item-img" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">Precio c/u: $ {price?.toLocaleString()}</p>
        <p className="cart-item-qty">Cantidad: {quantity}</p>
        <p className="cart-item-subtotal">Subtotal: $ {(price * quantity).toLocaleString()}</p>
      </div>

      {!readOnly && (
        <div className="cart-item-actions">
          <button className="btn btn-danger" onClick={() => onDelete && onDelete(id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
