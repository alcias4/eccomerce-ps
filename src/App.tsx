import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/Home"
import Nav from "./components/Nav"
import ShopPage from "./page/Shop"
import AboutPage from "./page/About"
import ContactPage from "./page/Contact"
import LoginPage from "./page/Login"
import { useData } from "./hook/useData"



function App() {
  const {dataProduct} = useData()

  return (
    <BrowserRouter>
      <main className=" w-full h-screen text-white font-inter px-[20%] pt-5">
        <Nav />
        <Routes>
          <Route  path="/" element={<HomePage  />}  />
          <Route  path="/shop" element={<ShopPage  products={dataProduct}/>}  />
          <Route  path="/about" element={<AboutPage  />}  />
          <Route  path="/contact" element={<ContactPage  />}  />
          <Route  path="/login" element={<LoginPage />}  />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
