

import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
      <div className="item-card"> 
        <img src={product.image} alt={product.name} className="item-image" />
        <h3 className="item-name">{product.name}</h3>
        <p className="item-description">{product.description}</p>
        <p className="item-price">$ {product.price.toLocaleString()}</p>
        <Link to={`/detail/${product.id}`} className="more-info-button">
          Más información
        </Link>
      </div>
  )
}

export default Item
