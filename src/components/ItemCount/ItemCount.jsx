import { useState } from 'react'
import '../ItemDetail/ItemDetail.css';
import './ItemCount.css';

const ItemCount = ({ stock, addToCart }) => {

    const [count, setCount] = useState(1);


    const handleClickRestar = () => { 
        if(count > 1){
            setCount( count - 1 );
        }
    }

    const handleClickSumar = () => {
        if (count < stock){
            setCount( count + 1 );
        }
    }

    return (
        <div className="item-count-container">
                <button onClick={handleClickRestar} disabled={count <= 1} className="count-btn">-</button>
                <p className="count-display">{count}</p>
                <button onClick={handleClickSumar} disabled={count >= stock} className="count-btn">+</button>

                <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(count)}
                    disabled={stock <= 0}
                >
                    Agregar al carrito
                </button>
        </div>
    )
}

export default ItemCount
