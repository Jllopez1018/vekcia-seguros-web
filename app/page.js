import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Nosotros from '../components/Nosotros'
import Servicios from '../components/Servicios'
import ComoTrabajamos from '../components/ComoTrabajamos'
import Empresas from '../components/Empresas'
import Partners from '../components/Partners'
// import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import AOSInit from '../components/AOSInit'
import BackToTop from "../components/BackToTop"

export default function Home() {
  return (
    <>
      <AOSInit />
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <ComoTrabajamos />
      <Empresas />
      <Partners />
      
      <Footer />
      <BackToTop />
    </>
  )
}