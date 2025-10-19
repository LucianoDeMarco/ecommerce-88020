

import './Item.css';

const Item = ({ product }) => {
  return (
      <div className="item-card"> 
        <h3 className="item-name">{product.name}</h3>
        <p className="item-description">{product.description}</p>
        <p className="item-price">$ {product.price.toLocaleString()}</p>
      </div>
  )
}

export default Item
