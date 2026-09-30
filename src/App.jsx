import { 
  useState, 
  useEffect
} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from './components/Hero'
import About from './components/About'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Projects from './components/Projects'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import Accomplishments from './components/Accomplishments'

const App = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [hidePreloader, setHidePreloader] = useState(false)

  useEffect(() => {
    if (!isPageLoaded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isPageLoaded])

  useEffect(() => {
    AOS.init()
    const handleReady = () => {
      setIsPageLoaded(true);
    };

    Promise.all([
      new Promise((res) => {
        if (document.readyState === 'complete') res();
        else window.addEventListener('load', res, { once: true });
      }),
      document.fonts.ready,
    ]).then(handleReady);

    return () => window.removeEventListener('load', handleReady);
  }, []);


  return (
    <>
      <Preloader animateOut={isPageLoaded} />
      <Cursor />
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Accomplishments />
      <Projects />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
