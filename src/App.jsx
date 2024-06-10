import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Ourstory from './Components/Pages/Ourstory';
import Contact from './Components/Pages/Contact';
import Checkout from './Components/Pages/Checkout';
import Cart from './Components/Pages/Cart';
import SingleProduct from './Components/Pages/SingleProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   <Router>
   
     <div className='w-full min-h-screen overflow-hidden'>
        <Navbar />
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/Shop'  element={<Shop/>} />
            <Route path='/Ourstory'  element={<Ourstory/>} />
            <Route path='/Contact'  element={<Contact/>} />
            <Route path='/Checkout'  element={<Checkout/>} />
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
            {/* <Route path='*' element={<Navigate to='/' />} /> */}
            
        </Routes>
        
        <Footer />
      </div>
   </Router>
  )
}

export default App

