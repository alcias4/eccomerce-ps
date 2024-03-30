import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/Home"
import Nav from "./components/Nav"
import ShopPage from "./page/Shop"
import AboutPage from "./page/About"
import ContactPage from "./page/Contact"
import LoginPage from "./page/Login"

function App() {


  return (
    <BrowserRouter>
      <main className=" w-screen h-screen text-white font-inter px-[20%] pt-5">
        <Nav />
        <Routes>
          <Route  path="/" element={<HomePage  />}  />
          <Route  path="/shop" element={<ShopPage  />}  />
          <Route  path="/about" element={<AboutPage  />}  />
          <Route  path="/contact" element={<ContactPage  />}  />
          <Route  path="/login" element={<LoginPage />}  />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
