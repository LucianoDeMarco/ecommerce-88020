import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import "./ItemListContainer.css";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const productsRef = collection(db, "products");

  const fetchProducts = async () => {
    try {
      // Si hay categoría, filtro; si no, traigo todo
      const q = category
        ? query(productsRef, where("category", "==", category))
        : productsRef;

      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));

      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      {loading ? (
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
      )}
    </div>
  );
};

export default ItemListContainer;
