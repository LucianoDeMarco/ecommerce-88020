

import './ItemDetail.css';

const ItemDetail = ({ product }) => {
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
          <button className="add-to-cart-button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

