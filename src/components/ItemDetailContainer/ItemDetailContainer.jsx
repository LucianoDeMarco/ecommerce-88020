import { useState, useEffect } from "react";
import getProducts from "../../data/getProductos";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
    const [product, setProducts] = useState({});
    const { id } = useParams();

    useEffect(()=> {
        getProducts()
            .then((data)=> {
                const dataProduct = data.find((product)=> product.id === parseInt(id) );
                setProducts(dataProduct);
            })
    }, []);


  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
