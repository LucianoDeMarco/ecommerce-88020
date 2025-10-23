import getProducts from "../../data/getProductos";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
    
  useEffect(()=> {
    setLoading(true);


    getProducts()
      .then((data) => {
        if(category){
          const productsFilter = data.filter((product)=> product.category === category);
          setProducts(productsFilter);
        } else {
          setProducts(data)
        }
      })
      .finally(()=> {
        setLoading(false);
      })

  }, [category])

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      {
        loading ? (
          <div className="spinner-container">
            <PulseLoader
              color="#2c1810"
              loading={loading}
              size={20}
              speedMultiplier={0.8}
            />
          </div>
        ) : (
          <ItemList products={products} />
        )
      }
    </div>
  )
}

export default ItemListContainer
