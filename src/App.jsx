import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        <BrowserRouter>
        <CartProvider>

          <NavBar />

          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a la tienda"}/> } />
            <Route path="/category/:category" element={ <ItemListContainer greeting={"Bienvenidos a la tienda"}/> } />
            <Route path="/detail/:id" element={ <ItemDetailContainer/> }/>
            <Route path="/cart" element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />} /> 
            <Route path="*" element={<div> error 404 </div>}/>
          </Routes>

          <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />


        </CartProvider>
        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
