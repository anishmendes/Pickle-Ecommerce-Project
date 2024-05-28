import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
const App = () => {
  return (
   <>
     <div className='w-full min-h-screen overflow-hidden'>
        <Navbar />
        <Home/>
        <Footer />
      </div>
   </>
  )
}

export default App

