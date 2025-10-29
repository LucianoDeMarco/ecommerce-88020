import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

  const { addProduct } = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity : count};
    addProduct(newProduct);
  }


  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="item-detail-info">
          <h1 className="item-detail-title">{product.name}</h1>
          <p className="item-detail-description">{product.description}</p>
          <p className="item-detail-price">$ {product.price?.toLocaleString()}</p>
          <p className="item-detail-stock">Stock disponible: {product.stock} unidades</p>

          <ItemCount stock={product.stock} addToCart={addToCart} />
          <Link to="/" className="back-home-link">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

