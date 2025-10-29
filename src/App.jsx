import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';

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
            <Route path="*" element={<div> error 404 </div>}/>
          </Routes>

        </CartProvider>
        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
