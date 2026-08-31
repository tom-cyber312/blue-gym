import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Coach from './components/Coach'
import Testimonials from './components/Testimonials'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative bg-graphite text-white">
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Coach />
        <Testimonials />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
