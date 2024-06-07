import About from './Components/About'
import Cards from './Components/Cards'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-black bg-zinc-100'> 
      <Navbar /> 
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App