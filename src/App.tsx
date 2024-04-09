import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/Home"
import Nav from "./components/Nav"
import ShopPage from "./page/Shop"
import ContactPage from "./page/Contact"
import { useData } from "./hook/useData"
import ProductPage from "./page/InfoProduct"
import useCard from "./hook/useCard"
import Footer from "./components/Footer"
import NotFound from "./page/NotFound"
import BuyPage from "./page/Buy"



function App() {
  const {dataProduct} = useData()
  const {numberCar, listCard, removeCard, addCard,setCard, statusCard} = useCard()


  return (
    <BrowserRouter>
        <Nav number={numberCar} listCard={listCard} removeCar={removeCard} /> 
        <main  className=" w-full flex flex-col items-center justify-between min-h-[90vh] font-inter px-[10%] lg:px-[20%] 2xl:px-[25%] pt-5 relative">     
          <Routes>
            <Route  path="/" element={<HomePage  />}  />
            <Route  path="/shop" element={<ShopPage  products={dataProduct}/>}  />
            <Route  path="/shop/:id" element={<ProductPage  addCard={addCard}/>}  />
            <Route  path="/contact" element={<ContactPage  />}  />
            <Route  path="/buy" element={<BuyPage listCard={listCard} removeCar={removeCard} setCard={setCard} status={statusCard}/>}  />
            <Route  path="/*" element={<NotFound />}  />
          </Routes>
          <Footer />
        </main>
    </BrowserRouter>
  )
}

export default App
