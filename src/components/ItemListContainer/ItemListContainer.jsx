import getProducts from "../../data/getProductos";
import ItemList from "../ItemList/ItemList";
import { useState,useEffect } from "react"

const ItemListContainer = ({greeting}) => {

  const [products,setProducts] = useState([]);
    
  useEffect(()=> {

    getProducts()
      .then((data) => {
        setProducts(data)
      })

  }, [])

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
