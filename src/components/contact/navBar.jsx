import { Link, NavLink } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"
import { RiArrowDropRightLine, RiArrowRightDownLine, RiMailAddFill, RiMailFill, RiMapPin2Line } from "react-icons/ri"
import { HiMailOpen } from "react-icons/hi"
import { HiArrowDownLeft } from "react-icons/hi2"
import { BiLogoWhatsapp, BiMailSend, BiPhone } from "react-icons/bi"

export default function NavBar(){
                      return(

                             <div  className="fixed top-0 w-full px-5  py-1 flex flex-row  justify-between align-center bg-green-900 z-100">
                                <div className=" h-full flex flex-row justify-between text-zinc-50 py-1">
                                <NavLink to='/'>
                                        <span className="inline-flex gap-2 font-semibold cursor-pointer text-white" 
                                        >
                                                <HiArrowDownLeft className="size-6 text-white -rotate-315"/> 
                                                Back to home
                                        </span>
                                </NavLink>
                                </div>
                                <address className="inline-flex items-center gap-6 bg-blac0 rounded-sm text-white">
                                        <a href="" className=""><BiMailSend className="size-6 text-reen-900 rounded-full"/> </a>
                                        <a href="" className=""><BiPhone className="size-6 text-gren-900 rounded-full"/> </a>
                                        <a href="" className=""><BiLogoWhatsapp className="size-6 tex-green-900 rounded-full"/> </a>
                                        
                                </address>             
                    </div>
                      )
}