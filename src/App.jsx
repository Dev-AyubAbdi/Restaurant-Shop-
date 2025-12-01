import { Route, Routes } from "react-router"
import { Header } from "./Components/Header"
import { Home } from "./Components/Pages/Home"
import { About } from "./Components/Pages/About"
import { Contact } from "./Components/Pages/Contact"
import { Cart } from "./Components/Pages/Cart"

const App = () => {
  return (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  </div>
  )
}

export default App