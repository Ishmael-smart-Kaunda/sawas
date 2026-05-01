

import cleaningImg from "../../assets/images/services/waste management/cleaning.jpeg"
import { FiArrowRight } from "react-icons/fi"

export default function AgriWaste(){
                                    return(
                                             <section className="w-full  bg-red-50  ">
                                                   <div className="px-5 w-full py-20">
                                                        <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                                            <h1 className="">Agri-waste recycling and processing</h1> 
                                                            
                                                            <p className="cursor-pointer underline">Explore</p>
                                                        </div>
                                                    
                                                        <h1 className="mt-6 mb-3">Recycle, compost, segregate. Turn your waste into community value</h1>
                                                        
                                                        <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 my-5">
                                                            
                                                            <article className="group relative overflow-hidden h-50 rounded-md">
                                                                <img src={cleaningImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                                                <div className="relative p-4 h-fit w-9/10 m-auto space-y-4 border bg-black/70 rounded-lg flex flex-col justify-between translate-y-[50%] transition-all duration-500">
                                                                    <h4 className="text-lg font-bold text-white uppercase">Agri-waste recycling and processing</h4>
                                                                    <a href="/" className=" flex flex-row gap-1 items-center font-semibold text-sm text-yellow-500 w-fit hover:text-green-700 transition-all duration-300">View all <FiArrowRight /></a>                                       
                                                                    
                                                                </div> 
                                                                        

                                                            </article> 
                                                            <article className="group relative overflow-hidden h-50 rounded-md">
                                                                <img src={cleaningImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                                                <div className="relative p-4 h-fit w-9/10 m-auto space-y-4 border bg-black/65 rounded-lg flex flex-col justify-between translate-y-[50%] transition-all duration-500">
                                                                    <h4 className="text-lg font-bold text-white uppercase">Compost production and organic inputs</h4>
                                                                    <a href="/" className=" flex flex-row gap-1 items-center font-semibold text-sm text-yellow-500 w-fit hover:text-green-700 transition-all duration-300">View all <FiArrowRight /></a>                                       
                                                                    
                                                                </div> 
                                                            </article> 
                                                            <article className="group relative overflow-hidden h-50 rounded-md">
                                                                <img src={cleaningImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                                                <div className="relative p-4 h-fit w-9/10 m-auto space-y-4 border bg-black/65 rounded-lg flex flex-col justify-between translate-y-[50%] transition-all duration-500">
                                                                    <h4 className="text-lg font-bold text-white uppercase">Environmental cleaning and sanitation services</h4>
                                                                    <a href="/" className=" flex flex-row gap-1 items-center font-semibold text-sm text-yellow-500 w-fit hover:text-green-700 transition-all duration-300">View all <FiArrowRight /></a>                                       
                                                                    
                                                                </div> 
                                                            </article> 
                                                        </div>    
                                                    </div>   
                                             </section>  
                                    )
}