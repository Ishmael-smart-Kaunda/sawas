import { RiFacebookBoxFill, RiFacebookLine, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiMailFill, RiPhoneFill } from "react-icons/ri"
import footerImg from "../assets/images/hero/agribusiness/farm2.jpeg"
import { MdPhone } from "react-icons/md"
import { HiPhone } from "react-icons/hi"
import { BiLogoWhatsapp, BiMailSend, BiPhone, BiPhoneCall } from "react-icons/bi"

export default function Footer(){
                                return(
                                        <footer className="  text-black w-full grid grid-cols-1 bg-emerald-950 py-2 px-5 ">                                            
                                        <div className="social w-full space-y-10">
                                                <h1 className="text-gray-400  font-semibold">follow us</h1>
                                                <div className="inline-flex items-center gap-4">
                                                   <span className="cursor-pointer p-1 bg-green-50/20 text-emerald-950 rounded-md hover:bg-green-100/60 transition-all duration-500"><RiFacebookLine className="size-8" /> </span>
                                                   <span className="cursor-pointer p-1 bg-green-50/20 text-emerald-950 rounded-md hover:bg-green-100/60 transition-all duration-500"><RiLinkedinLine className="size-8"/></span>
                                                   <span className="cursor-pointer p-1 bg-green-50/20 text-emerald-950 rounded-md hover:bg-green-100/60 transition-all duration-500"><RiInstagramLine className="size-8"/></span>
                                                </div>
                                                
                                                <hr className="h-3 text-white/30 w-[80%] mx-auto"/>
                                               
                                               <div  className="w-full inline-flex justify-between">
                                                <address className="flex flex-col gap-1 mt-2 space-y-2 text-orange-700">
                                                    <span className="flex flex-row items-center gap-2 ">
                                                        <BiPhoneCall className="size-6 "/> 
                                                        <a href="tel: +265995152222" className="text-amber-100 text-sm text-orange-700"> +265 995 152 222</a>  
                                                    </span> 

                                                    <span className="flex flex-row items-center gap-2">
                                                       
                                                        <BiMailSend className="size-6 "/> 
                                                        <a href="mailto:pbleb.dolp@gmail.com " className="text-amber-100 text-sm text-orange-700">pbleb.dolp@gmail.com </a>
                                                    </span> 
                                                    <span className="flex flex-row items-center gap-2">
                                                        <BiLogoWhatsapp className="size-6 "/>
                                                
                                                        <a href="3" className="text-amber-100 text-sm text-orange-700">+265 993 674 530 </a>
                                                    </span> 
                                                      
                                                </address>
                                                <div className="px-10 text-right">
                                                    <ul className="w-1/2 md:w-[fit-content] mt-3 text-sm text-slate-300 space-y-2">
                                                        <li className="hover:text-indigo-300 "><a href="/">Home</a></li>
                                                        <li className="hover:text-indigo-300 "><a href="#courses">Courses</a></li>
                                                        <li className="hover:text-indigo-300 " ><a href="#team">Team</a></li>
                                                        <li className="hover:text-indigo-300 " ><a href="#contact">Contact</a></li>
                                                    </ul>
                                                </div>
                                                </div>

                                                
                                            </div>
                                            <p className=" text-center text-green-50/50 text-[14px]">© 2026 SAWAs — All rights reserved</p>
                                        </footer>
                                )
}