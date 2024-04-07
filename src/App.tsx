import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/Home"
import Nav from "./components/Nav"
import ShopPage from "./page/Shop"
import AboutPage from "./page/About"
import ContactPage from "./page/Contact"
import { useData } from "./hook/useData"
import ProductPage from "./page/InfoProduct"
import useCard from "./hook/useCard"



function App() {
  const {dataProduct} = useData()
  const {setStatusCard, statusCard, numberCar} = useCard()


  return (
    <BrowserRouter>
        <Nav number={numberCar}/> 
        <main className=" w-full flex flex-col justify-between  h-screen font-inter px-[20%] pt-5 relative">     
          <Routes>
            <Route  path="/" element={<HomePage  />}  />
            <Route  path="/shop" element={<ShopPage  products={dataProduct}/>}  />
            <Route  path="/shop/:id" element={<ProductPage statusCard={setStatusCard} status={statusCard}/>}  />
            <Route  path="/about" element={<AboutPage  />}  />
            <Route  path="/contact" element={<ContactPage  />}  />
          </Routes>
          <footer className="w-full min-h-[50px] bottom-[0px] bg-white flex justify-center mt-10">
            footer ...
          </footer>
        </main>
    </BrowserRouter>
  )
}

export default App
