import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const [product, setProducts] = useState({});
    const { id } = useParams();

    const getProduct = async() => {
      try {
        const productsRef = doc(db, "products", id);
        const dataDb = await getDoc(productsRef);

        const data = { id: dataDb.id, ...dataDb.data() };
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() =>{
      getProduct();  
    }, [])

  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
