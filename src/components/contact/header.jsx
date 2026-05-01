
import { Link } from "react-router-dom"

import { RiArrowDropRightLine, RiArrowRightDownLine, RiMailAddFill, RiMailFill, RiMapPin2Line } from "react-icons/ri"
export default function  Header({page, pageImg}){
                                return(
                                     <div className="relative h-70 w-full bg-gradient-to-tr from-black/40 to-green-400/60">
                                            <img src={pageImg} alt="contact us" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
                                        
                                            <div className="absolute left-5 top-1/2 translate-y-[-20%] py-5 space-y-3 text-white/70">
                                                <span className="inline-flex text-light"><Link to='/' className="hover:text-yellow-800 transition-all duration-500"> Home</Link> <RiArrowDropRightLine className="size-7"/> {page}</span>
                                                <h1 className="font-bold text-4xl">{page}</h1>
                                            </div>
                                        </div>      
                                )
}