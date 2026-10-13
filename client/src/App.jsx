import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <div>

      {/* Navbar */}
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>

    </div>
  )
}

export default App