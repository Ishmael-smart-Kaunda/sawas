
import cooperativeImg from "../../assets/images/services/agri development/cooperative.jpeg"
import trainingImg from "../../assets/images/services/agri development/training.jpeg"
import supportImg from "../../assets/images/services/agri development/support.jpg"

import { GiFarmTractor, GiMaze, GiPlantRoots, GiTrefoilLily } from "react-icons/gi"
import { Link } from "react-router-dom"



export default function AgriConsultancy(){
                                    return(
                                             <section className="w-full  px-5">
                                                    <div className=" w-full my-20 bg-gree-50">
                                                        <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                                            <p className="">Agribusiness Consultancy</p> 
                                                            <Link to='/services' className="cursor-pointer underline">Explore</Link>
                                                        </div>
                                                    
                                                        <h1 className="mt-6 mb-3">Smart farm planning, climate-smart advice, and M&E that works for better</h1>
                                                        
                                                        <div className="grid grid-clos-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 my-5">
                    
                    
                                                            <div className="hidden lg:block flex flex-col gap-3 py-4 justify-between border-b bg-black/40 bordert rounded w-full h-full hover:shadow-zinc-400 transition-all duration-500">
                                                                
                                                            </div>
                                                    
                    
                                                            <article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 borde rounded h-full hover:shadow-zinc-400 transition-all duration-500">
                                                                <div className="p-5 mt-3 border-black w-fit 
                                                                                bg-gradient-to-t from-amber-200 via-amber-100 
                                                                                to-white rounded-full mx-auto">
                                                                    <GiPlantRoots className="size-20 "/>
                                                                </div>
                    
                                                                <div className="flex flex-col md:justify-between gap-3 px-2">
                                                                    <p className="text-[17px] font-semibold text-green-600 text-ceter">Business planning and advisory services</p>
                                                                    <p className="text-black text-[16px] text-justify">
                                                                        Whether you're starting a farm-to-market venture or scaling an agribusiness, 
                                                                        we help you make informed, profitable decisions.
                                                                    </p> 
                                                                    <a href="/services" className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</a>
                                                                </div> 
                                                            </article>
                    
                                                            <article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 bordt rounded h-full hover:shadow-zinc-400 transition-all duration-500">
                                                                <div className="p-5 mt-3 border-black w-fit 
                                                                                bg-gradient-to-t from-amber-200 via-amber-100 
                                                                                to-white rounded-full mx-auto">
                                                                    <GiPlantRoots className="size-20 "/>
                                                                </div>
                    
                                                                <div className="flex flex-col md:justify-between gap-3 px-2">
                                                                    <p className="text-[17px] font-semibold text-green-600 text-ceter">Value chain development</p>
                                                                    <p className="text-black text-[16px] text-justify">
                                                                        We analyze your entire chain -from production to final buyer-and identify where you can cut costs, add value, and
                                                                        increase margins. Practical steps, not abstract theories.
                                                                    </p> 
                                                                    <a href="/services" className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</a>
                                                                </div> 
                                                            </article>
                    
                                                            <article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 bordet rounded h-full hover:shadow-zinc-400 transition-all duration-500">
                                                                <div className="p-5 mt-3 border-black w-fit 
                                                                                bg-gradient-to-t from-amber-200 via-amber-100 
                                                                                to-white rounded-full mx-auto">
                                                                    <GiPlantRoots className="size-20 "/>
                                                                </div>
                    
                                                                <div className="flex flex-col md:justify-between gap-3 px-2">
                                                                    <p className="text-[17px] font-semibold text-green-600 text-ceter">Market research and feasibility studies</p>
                                                                    <p className="text-black text-[16px] text-justify">
                                                                        Before you invest, let us test the ground. We study demand, competition, and logistics so you know if your 
                                                                        agribusiness idea will work -and how to make it work better.
                                                                    </p> 
                                                                    <a href="/services" className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</a>
                                                                </div> 
                                                            </article>
                    
                                                        </div>
                                                    </div>
                                             </section>  
                                    )
}