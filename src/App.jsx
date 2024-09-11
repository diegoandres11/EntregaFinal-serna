
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "./components/Error404.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import { Provider } from "./contexts/ItemsContexts.jsx"
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"




function App() {
  

  return (
    <>
    <CartProvider>
    <Provider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </CartProvider>
      
    
    
      
    </>
  )
}

export default App
