import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a la tienda"}/> } />
            <Route path="/category/:category" element={ <ItemListContainer greeting={"Bienvenidos a la tienda"}/> } />
            <Route path="/detail/:id" element={ <ItemDetailContainer/> }/>
            <Route path="*" element={<div> error 404 </div>}/>
          </Routes>

        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
