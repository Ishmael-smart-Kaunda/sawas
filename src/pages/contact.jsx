
import { BsMailbox, BsWhatsapp, BsPinMap } from "react-icons/bs"
import { BiLogoWhatsapp, BiMailSend, BiPhone, BiPhoneCall, BiSolidPhone } from "react-icons/bi"
import { HiPhone, HiMapPin, HiArrowDownLeft} from "react-icons/hi2"
import { TbBrandWhatsapp, TbMail } from "react-icons/tb"

import contactImg from "../assets/images/contact/contact.jpeg"

import { Link, NavLink } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"
import { RiArrowDropRightLine, RiArrowRightDownLine, RiMailAddFill, RiMailFill, RiMapPin2Line } from "react-icons/ri"
import { HiMailOpen } from "react-icons/hi"
import NavBar from "../components/contact/navBar"
import Header from "../components/contact/header"

export default function Contact(){
          return(
                  <>
                      <NavBar/>
                      <Header page='Contact Us' pageImg={contactImg}/>
                     
                     <section className="w-full p-5 max-w-[1440px] space-y-4 bg-green-100">               
                                <h1 className="hidden text-amber-950 text-[25px] font-bold py-5">Contact Us</h1>
                                <p className="md:w-1/2 font-light ont-semibold text-black/70">We would love to hear from you. Whether you have a question, need support or want to 
                                                learn more about our services, our team is here to assist you.
                                </p>
                                 
                     
                        

                        <div className="w-full grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col gap-8 justify-between pt-20 pb-5">
                                        <div className="">
                                                <span>SAWAS Agribusiness solutions</span>
                                                <p>The center of agriculture solutions</p>
                                        </div>
                                        
                                        <address className="font-light flex flex-col gap-3">
                                                
                                                <span className="inline-flex gap-2"><RiMapPin2Line className="size-6"/> Chiwabvi Community Market <br/> Mzuzu </span>
                                                <a href="to:" className="inline-flex gap-2"> <BiSolidPhone className="size-6"/>  +265 993 674 530</a>
                                                <a href="to:" className="inline-flex gap-2"> <BiLogoWhatsapp className="size-6"/>  +265 995 15 22 22</a>
                                                <a href="mailto:hr.sawasmw@gmail.com" className="inline-flex gap-2"> <HiMailOpen className="size-6"/> hr.sawasmw@gmail.com </a>


                                        </address>
                                 </div>

                                <div className="md:col-span-2  space-y-2">
                                  <h2 className="text-amber-950 font-bold">Lets Connect</h2>
                                  <p className="font-semibold text-black/70">Use the form below to send us a message</p>
                                  <form className="w-full flex flex-col gap-4 py-5 rounded-r-sm">
                                                <input 
                                                type="text"
                                                name="user_name" 
                                                placeholder="Full name" 
                                                className="w-full p-3 text-gray-600/90 bg-zinc-50 shadow-sm border border border-black/10 placeholder: text-placeholder  focus:outline-none "
                                                required
                                                />
                                                <input 
                                                type="email"
                                                name="email" 
                                                placeholder="Email address" 
                                                className="w-full p-3 text-gray-600/90  bg-zinc-50 shadow-sm border  border-black/10 focus:outline-none "
                                                />
                                                <input 
                                                type="tel"
                                                name="phone" 
                                                placeholder="Phone" 
                                                className="w-full p-3 text-gray-600/90 bg-zinc-50 shadow-sm  border border-black/10 focus:outline-none"
                                                />
                                             
                                                <textarea 
                                                name="message" 
                                                placeholder="Message" 
                                                className="w-full p-3 text-gray-600/90  bg-zinc-50 shadow-sm border border-black/10 focus:outline-none"
                                                >
                                                </textarea>
                                        
                                                <button 
                                                className="w-full md:w-3/10 px-4 py-3 bg-blue-600  text-white font-semibold hover:opacity-80">Submit </button>
                                        
                                </form>
                                </div>

                                 
                                
                        
                        </div>     
                        

                     </section>

                     <div className=" w-full bg-white/40 h-100"> 
                                <iframe 
                                        src="https://www.google.com/maps/embed?pb=!!1m12!1m3!1d2267.4949588833306!2d35.02306444172996!3d-15.799592032770489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845006b9f1d99%3A0x3f28457121263266!2sGamers%20Planet!5e0!3m2!1sen!2smw!4v1768762796683!5m2!1sen!2smw" 
                                        className="w-full h-full"
                                        loading="lazy"
                                        allowFullScreen=""  
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe> 
                        </div>
                     
                  </>
          )
}