import { Link, NavLink } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"
import { RiArrowDropRightLine, RiArrowRightDownLine, RiMailAddFill, RiMailFill, RiMapPin2Line } from "react-icons/ri"
import { HiArrowLeft, HiMailOpen } from "react-icons/hi"
import { HiArrowDownLeft } from "react-icons/hi2"
import { BiLogoWhatsapp, BiMailSend, BiPhone } from "react-icons/bi"

export default function NavBar(){
                      return(

                             <div  className="fixed top-0 w-full px-5  py-1 flex flex-row  justify-between align-center bg-green-900 z-100">
                                <div className=" h-full flex flex-row justify-between text-zinc-50 py-1">
                                <NavLink to='/' className='group'>
                                        <span className="inline-flex gap-1 items-center font-semibold cursor-pointer text-white group-hover:text-yellow-600 transition-all duration-500 " 
                                        >
                                                <HiArrowLeft className="size-5 text-white group-hover:text-yellow-600 transition-all duration-500"/> 
                                                Back
                                        </span>
                                </NavLink>
                                </div>
                                <ul className="hidden md:inline-flex items-center gap-10 text-white font-semibold">
                                   <Link to='/services' className="hover:text-yellow-600 transition-all duration-500">Services</Link>
                                   <Link to='/contact' className="hover:text-yellow-600 transition-all duration-500">Contact</Link>
                                   <Link to='/about' className="hover:text-yellow-600 transition-all duration-500">About Us</Link>
                                </ul>
                                <address className="inline-flex items-center gap-6 bg-blac0 rounded-sm text-white">
                                        <a href="" className=""><BiMailSend className="size-6 text-reen-900 rounded-full"/> </a>
                                        <a href="" className=""><BiPhone className="size-6 text-gren-900 rounded-full"/> </a>
                                        <a href="" className=""><BiLogoWhatsapp className="size-6 tex-green-900 rounded-full"/> </a>
                                        
                                </address>             
                    </div>
                      )
}