import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        <NavBar />
        <ItemListContainer greeting={"hola"}/>
      </div>
    </>
  )
}

export default App
