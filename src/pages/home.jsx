import NavBar from "../components/NavBar"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Services from "../components/home/services"
import CTA from "../components/home/CTA"
import Footer from "../components/footer"
export default function Home(){
                         return(
                                  <>
                                     <NavBar/>
                                     <Hero/>
                                     <About/>
                                     <Services/>
                                     <Footer/>
                                  </>
                         )
}