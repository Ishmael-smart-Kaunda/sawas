
import './App.css'
import { motion } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Contact from './pages/contact'
import About from './pages/about'

function App() {
  
  return (
            <>
               <BrowserRouter>
                 <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='services' element={<Services/>}/>
                 </Routes>
               </BrowserRouter>

            

              
                
            
            </>
  )
}

export default App
