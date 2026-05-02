
import extensionImg from "../../assets/images/services/agri-extension/extension.jpeg"
import climateSmartImg from "../../assets/images/services/agri-extension/smart-agri1.jpeg"
import produceImg from "../../assets/images/services/agri-extension/produce.jpeg"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"


export default function AgriExtension(){
                                    return(
                                             <section className="w-full  ">
                                                    <div className="py-15 px-5 w-full bg-red-50">
                                                        <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                                        <p className="">Agricultural Extension Services</p> 
                                                        <Link to='/services' className="cursor-pointer underline">Explore</Link> 
                                                        </div>
                                                    
                                                        <h1 className="mt-6 mb-3"></h1>
                                                        
                                                        <div className="grid grid-clos-1 md:grid-cols-3  gap-6 gap-y-10 my-5 md:px-">
                    
                                                                <article className="group relative overflow-hidden h-90 rounded-[20px] ">
                                                                <img src={extensionImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                                                <div className="absolute bottom-0 h-6/10 w-full m-auto space-y-4 bg-white rounded-t-[20px] flex flex-col p-3">
                                                                    <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">Professional extension support<Link to='/services'> <FiArrowRight className="text-green-800 hover:-rotate-45 border rounded-full transition-all duration-500"/> </Link></span>
                                                                    <p className=" ">
                                                                        Our officers visit farms regularly-advising on crop health, soil management, and pest control. Science in the field, in language 
                                                                        farmers understand.
                                                                    </p>
                                                                </div> 
                                                            </article> 
                    
                                                            <article className="group relative overflow-hidden h-90 rounded-[20px] ">
                                                                <img src={climateSmartImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                                                <div className="absolute bottom-0 h-6/10 w-full m-auto space-y-4 bg-white rounded-t-[20px] flex flex-col p-3">
                                                                    <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">Climate-smart agriculture <Link to='/services'> <FiArrowRight className="text-green-800 hover:-rotate-45 border rounded-full transition-all duration-500"/> </Link></span>
                                                                    <p className=" ">
                    
                                                                                    Drought, floods, and changing seasons don't have to destroy your harvest. We teach water harvesting, conservation tillage, 
                                                                                    and stress-tolerant cropping.  
                                                                    </p>
                                                                </div> 
                                                            </article> 
                                                            <article className="group relative overflow-hidden h-90 rounded-[20px] ">
                                                                <img src={produceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                                                <div className="absolute bottom-0 h-6/10 w-full m-auto space-y-4 bg-white rounded-t-[20px] flex flex-col p-3">
                                                                    <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">Productivity improvement programs<Link to='/services'> <FiArrowRight className="text-green-800 hover:-rotate-45 border rounded-full transition-all duration-500"/> </Link> </span>
                                                                    <p className=" ">
                                                                            Structured programs that boost yields per hectare. From improved seed varieties to optimal planting 
                                                                            dates-every recommendation is tested and practical.
                                                                    </p>
                                                                </div> 
                                                            </article> 
                    
                    
                                                        </div> 
                    
                                                    </div>
                                                    
                                             </section>  
                                    )
}