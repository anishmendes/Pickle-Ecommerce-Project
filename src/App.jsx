import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
   <>
     <div className='w-full min-h-screen overflow-hidden'>
        <Navbar />
        {/* <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path='/Faculty' element={<Faculty />} />
          <Route path='/Eca' element={<Eca />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Notice' element={<Notice />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes> */}
        <Footer />
      </div>
   </>
  )
}

export default App

