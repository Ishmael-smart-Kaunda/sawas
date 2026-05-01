
import './App.css'
import { motion } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
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

                 </Routes>
               </BrowserRouter>

            

              
                
            
            </>
  )
}

export default App
