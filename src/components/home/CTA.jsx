import { Link } from "react-router-dom"
import CTAimg from "../../assets/images/hero/consultancy/consult1.jpeg"

export default function CTA(){
                           return(
                                   <section className="relative w-full h-90 bg-black/70">
                                        <img src={CTAimg} alt="one stop for all agri-business solutions" 
                                        className=" absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
                                        <div className="absolute top-1/2 translate-y-[-50%] md:left-1/2 md:translate-x-[-50%] space-y-6 px-5">
                                            <p className="text-jusify md: text-center text-yellow-700 text-[20px] font-semibold w-full md:w-1/2 mx-auto my-4">
                                                Ready to grow your agribusiness or turn waste into profit? Let's talk
                                            </p>
                                            <div className=" flex flex-col justify-between md:flex-row gap-3 w-full md:w-fit mx-auto text-white font-semibold">
                                                        <button className="cursor-pointer w-full md:w-[250px] p-3 border border-white/60 rounded-sm">Get Agri-business right</button>
                                                        <Link to='/contact' className="cursor-pointerw-full md:w-[200px] px-10 py-2 text-center bg-blue-600 rounded-sm hover:opacity-60" > Contact Us</Link>
                                            </div>
                                        </div>

                                    </section >
                           )
}