import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Home from './pages/Home'
import './styles/main.scss'

function App() {

  return (
    <>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign_up' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
