import { createContext, useState } from "react";

//Creo el contexto del carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (newProduct) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(p => p.id === newProduct.id);
            const stock = Number(newProduct.stock);
            const addedQty = Number(newProduct.quantity) || 1;

            // Si el producto ya está en el carrito
            if (existingProduct) {
                const updatedCart = prevCart.map(p => {
                if (p.id === newProduct.id) {
                const totalQty = Math.min(p.quantity + addedQty, stock);
                return { ...p, quantity: totalQty };
                }
                return p;
            });
            return updatedCart;
            }

            // Si es un producto nuevo
            const qtyToAdd = Math.min(addedQty, stock);
            return [...prevCart, { ...newProduct, quantity: qtyToAdd }];
        });
    };

    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0 );
        return quantity;
    }

    const totalPrice = () => {
        const total = cart.reduce( (total, productCart)=> total + ( productCart.price * productCart.quantity ), 0 );
        return total;
    }

    const deleteProductById = (productId) => {
        const productsFiltered = cart.filter( (productCart) => productCart.id !== productId);
        setCart(productsFiltered);
    }

    const deleteCart = () => {
        setCart( [] );
    } 


    return(
        <CartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };