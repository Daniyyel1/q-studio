import './App.css'
import Main from './components/layout/Main'
import {Route, Routes} from 'react-router-dom'
import Home from "./components/pages/Home"
import Blog from "./components/pages/Blog"
import PodCasts from "./components/pages/PodCasts"
import Books from "./components/pages/Books"
import About from "./components/pages/About"
import CartPage from "./components/pages/CartPage"
import ShopPage from './components/pages/ShopPage'
import BookDetailsPage from './components/subComponents/BookDetailsPage'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />}>
        
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />}/>
        <Route  path='/podcasts' element={<PodCasts />}/>
        <Route  path='/books' element={<Books />}/>
        <Route  path='book/:id' element={<BookDetailsPage />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/cart' element={<CartPage />}/>
        <Route  path='/shop' element={<ShopPage />}/>
      </Route>
    </Routes>

  )
}


export default App
