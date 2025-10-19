//Esto no se usa pero esta bueno saber como se conecta con un back
const getProducts = () => {
    return fetch("https://fakestoreapi.com/products/")
            .then((respuesta)=> {
                return respuesta.json()
            })
            .catch((error)=>{
                console.log(error);
            })
}

const getProductsById = (productId) => {
    return fetch("https://fakestoreapi.com/products/" + productId)
            .then((respuesta)=> {
                return respuesta.json()
            })
            .catch((error)=>{
                console.log(error);
            })
}

const addProduct = (newProduct) => {
    return fetch("https://fakestoreapi.com/products/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
    .then((respuesta)=> {
                return respuesta.json()
            })
            .catch((error)=>{
                console.log(error);
            })
}

const setProductById = (productId, updates) => {
    return fetch("https://fakestoreapi.com/products/" + productId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    })
    .then((respuesta)=> {
                return respuesta.json()
            })
            .catch((error)=>{
                console.log(error);
            })
}

const deleteProductById = (productId) => {
    return fetch("https://fakestoreapi.com/products/" + productId, {
        method: "DELETE"

    })
    .then((respuesta)=> {
                return respuesta.json()
            })
            .catch((error)=>{
                console.log(error);
            })
}

export {getProducts, getProductsById, addProduct, setProductById, deleteProductById}