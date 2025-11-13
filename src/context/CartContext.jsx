import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";

//Creo el contexto del carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

    useEffect(()=> {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (newProduct) => {
        const indexProduct = cart.findIndex(
        (productCart) => productCart.id === newProduct.id
        );

        if (indexProduct === -1) {
        const quantityToAdd =
            newProduct.quantity > newProduct.stock
            ? newProduct.stock
            : newProduct.quantity;

        if (newProduct.quantity > newProduct.stock) {
            toast.warn(`Stock máximo disponible: ${newProduct.stock} unidades`);
        }

        setCart([...cart, { ...newProduct, quantity: quantityToAdd }]);
        } else {
            const newCart = [...cart];
            const currentQuantity = newCart[indexProduct].quantity;
            const totalQuantity = currentQuantity + newProduct.quantity;

            if (totalQuantity > newProduct.stock) {
                toast.info(
                `No puedes agregar más de ${newProduct.stock} unidades de "${newProduct.name}"`
                );
            }

            newCart[indexProduct].quantity =
                totalQuantity > newProduct.stock ? newProduct.stock : totalQuantity;

            setCart(newCart);
     }
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