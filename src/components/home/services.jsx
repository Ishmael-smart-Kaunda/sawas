import { GiFarmTractor, GiMaze, GiPlantRoots, GiTrefoilLily } from "react-icons/gi"
import serviceImg from "../../assets/images/hero/agribusiness/farm2.jpeg"
import { Link } from "react-router-dom"
import CTA from "./CTA"
import { MdAgriculture, MdOutlineWaterDrop } from "react-icons/md"
import { FiArrowRight } from "react-icons/fi"

export default function Services(){
                       return(
                              <section className="w-full px-5 my-10 ">
                                <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                    <p className="">Agribusiness Development</p> 
                                    <p className="cursor-pointer underline">Explore</p>
                                </div>
                                 
                                 <h1 className="mt-6 mb-3">From Crop production to market access, we grow success sustainability</h1>
                                 
                                 <div className="service-container w-full flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden gap-6 rounded-xl my-3 py-2">
                                        
                                        <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[49%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Establishing smallholder farmers cooperatives</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We guide farmers through legal registration, governance structures, and group savings. Strong cooperatives mean 
                                                        better prices, shared equipment, and collective bargaining power
                                                    </p> 
                                                </div> 
                                                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                    <p className="border border-green-700/30 bg-yellow-500/50 text-center rounded-md">Shared equipments</p>
                                                    <p className="border border-green-700/30 text-center rounded-md">Collective power</p>
                                                    <p className="border border-green-700/30 bg-green-50 text-center rounded-md">Joint Input</p>
                                                    <p className="border border-green-700/30 bg-green-100 text-center rounded-md">Bulk marketing</p>
                                                    

                                                </div>
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>

                                        <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[49%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Agribusiness training and capacity building</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We guide through every stage, from smart planting plans to efficient harvest management
                                                        . You'll have higher yields, healthier crops, and long soil fertility.
                                                    </p> 
                                                </div> 
                                                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                    <p className="border border-green-700/30 text-center rounded-md">Financial literacy</p>
                                                    <p className="border border-green-700/30 bg-green-50 text-center rounded-md">Harvest handling</p>
                                                    <p className="border border-green-700/30 bg-green-100 text-center rounded-md">Busines planning</p>
                                                    <p className="border border-green-700/30 bg-yellow-500/50 text-center rounded-md">Smart farming</p>

                                                </div>
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>

                                        <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[49%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Farm management and production support</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We help you plan budgets, schedule planting, and manage inputs for higher yields. Get better 
                                                        soil health, lower costs, and a clear path to profit.
                                                    </p> 
                                                </div> 
                                                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                    <p className="border border-green-700/30 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-green-50 text-center rounded-md">Crop planning</p>
                                                    <p className="border border-green-700/30 bg-green-100 text-center rounded-md">Input sourcing</p>
                                                    <p className="border border-green-700/30 bg-yellow-500/50 text-center rounded-md">Record keeping</p>

                                                </div>
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-cover [clip-path:circle(50%_at_35%)] w-full md:[clip-path:circle(90%_at_50%)]"/>
                                        </article> 
                                </div>

                                {/*agribusiness consultancy */}

                                <div className=" w-full my-20 bg-gree-50">
                                    <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                        <p className="">Agribusiness Consultancy</p> 
                                        <p className="cursor-pointer underline">Explore</p>
                                    </div>
                                 
                                    <h1 className="mt-6 mb-3">Smart farm planning, climate-smart advice, and M&E that works for better</h1>
                                    
                                    <div className="grid grid-clos-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 my-5">


                                        <div className="hidden lg:block flex flex-col gap-3 py-4 justify-between border-b bg-black/40 bordert rounded w-full h-full hover:shadow-zinc-400 transition-all duration-500">
                                            
                                        </div>
                                        {/*<article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 bordert rounded h-fit hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="p-5 mt-3 border-black w-fit 
                                                             bg-gradient-to-t from-amber-200 via-amber-100 
                                                            to-white rounded-full mx-auto">
                                                <GiPlantRoots className="size-20 "/>
                                            </div>

                                            <div className="flex flex-col md:justify-between gap-3 px-2">
                                                <p className="text-[17px] font-semibold text-green-600 text-ceter">Farm planning & Feasibilty studies</p>
                                                <p className="text-black text-[16px] text-justify">
                                                    We guide through every stage, from smart planting plans to efficient harvest management
                                                </p> 
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
                                            </div> 
                                        </article>

                                        <article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 borde rounded h-fit hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="p-5 mt-3 border-black w-fit 
                                                             bg-gradient-to-t from-amber-200 via-amber-100 
                                                            to-white rounded-full mx-auto">
                                                <GiPlantRoots className="size-20 "/>
                                            </div>

                                            <div className="flex flex-col md:justify-between gap-3 px-2">
                                                <p className="text-[17px] font-semibold text-green-600 text-ceter">Farm planning & Feasibilty studies</p>
                                                <p className="text-black text-[16px] text-justify">
                                                    We guide through every stage, from smart planting plans to efficient harvest management
                                                </p> 
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
                                            </div> 
                                        </article>

                                        <article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 bordet rounded h-fit hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="p-5 mt-3 border-black w-fit 
                                                             bg-gradient-to-t from-amber-200 via-amber-100 
                                                            to-white rounded-full mx-auto">
                                                <GiPlantRoots className="size-20 "/>
                                            </div>

                                            <div className="flex flex-col md:justify-between gap-3 px-2">
                                                <p className="text-[17px] font-semibold text-green-600 text-ceter">Farm planning & Feasibilty studies</p>
                                                <p className="text-black text-[16px] text-justify">
                                                    We guide through every stage, from smart planting plans to efficient harvest management
                                                </p> 
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
                                            </div> 
                                        </article>

                                        <article className="flex flex-col gap-3 py-4 justify-between border-b border-black/40 bordet rounded h-fit hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="p-5 mt-3 border-black w-fit 
                                                             bg-gradient-to-t from-amber-200 via-amber-100 
                                                            to-white rounded-full mx-auto">
                                                <GiPlantRoots className="size-20 "/>
                                            </div>

                                            <div className="flex flex-col md:justify-between gap-3 px-2">
                                                <p className="text-[17px] font-semibold text-green-600 text-ceter">Farm planning & Feasibilty studies</p>
                                                <p className="text-black text-[16px] text-justify">
                                                    We guide through every stage, from smart planting plans to efficient harvest management
                                                </p> 
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
                                            </div> 
                                        </article>*/}

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
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
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
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
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
                                                <p className="cursor-pointer w-fit text-[16px] text-black font-light underline hover:text-green-600 transition-all duration-500">view more</p>
                                            </div> 
                                        </article>

                                    </div>
                                </div>
                                 



                                 {<CTA/>}

                                <div className="py-5 w-full my-20 bg-red-50">
                                    <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                    <p className="">Agricultural Extension Services</p> 
                                    <p className="cursor-pointer underline">Explore</p>
                                    </div>
                                
                                    <h1 className="mt-6 mb-3">Recycle, compost, segregate. Turn your waste into community value</h1>
                                    
                                    <div className="grid grid-clos-1 md:grid-cols-3  gap-6 gap-y-10 my-5 md:px-25">

                                         <article className="group relative overflow-hidden h-90 rounded-[20px] ">
                                            <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                            <div className="absolute bottom-0 h-6/10 w-full m-auto space-y-4 bg-white rounded-t-[20px] flex flex-col p-3">
                                                <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">Professional extension support<FiArrowRight className="text-green-800 hover:-rotate-45 border rounded-full transition-all duration-500"/> </span>
                                                <p className=" ">
                                                    Our officers visit farms regularly-advising on crop health, soil management, and pest control. Science in the field, in language 
                                                    farmers understand.
                                                </p>
                                            </div> 
                                        </article> 

                                        <article className="group relative overflow-hidden h-90 rounded-[20px] ">
                                            <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                            <div className="absolute bottom-0 h-6/10 w-full m-auto space-y-4 bg-white rounded-t-[20px] flex flex-col p-3">
                                                <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">Climate-smart agriculture<FiArrowRight className="text-green-800 hover:-rotate-45 border rounded-full transition-all duration-500"/> </span>
                                                <p className=" ">

                                                                Drought, floods, and changing seasons don't have to destroy your harvest. We teach water harvesting, conservation tillage, 
                                                                and stress-tolerant cropping.  
                                                </p>
                                            </div> 
                                        </article> 
                                        <article className="group relative overflow-hidden h-90 rounded-[20px] ">
                                            <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                            <div className="absolute bottom-0 h-6/10 w-full m-auto space-y-4 bg-white rounded-t-[20px] flex flex-col p-3">
                                                <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">Productivity improvement programs<FiArrowRight className="text-green-800 hover:-rotate-45 border rounded-full transition-all duration-500"/> </span>
                                                <p className=" ">
                                                        Structured programs that boost yields per hectare. From improved seed varieties to optimal planting 
                                                        dates-every recommendation is tested and practical.
                                                </p>
                                            </div> 
                                        </article> 


                                    </div> 

                                </div>


                                {/** Market place services */}

                                <div className="py-5 w-full my-20 ">
                                      <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                        <p className="">Market Linkages</p> 
                                        <p className="cursor-pointer underline">Explore</p>
                                      </div>
                                 
                                      <h1 className="mt-6 mb-3">Connecting farmers to reliable markets</h1>
                                      
                                      <div className="flex flex-row mx-auto w-[85%] overflow-auto [&::-webkit-scrollbar]:hidden  gap-6 my-5 py-5 h-fit">
                                       
                                       <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[50%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Connecting farmers to reliable markets</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We maintain a database of verified buyers-local markets, processors, 
                                                        and institutions. We match your produce with the right buyer at the right time.
                                                    </p> 
                                                </div> 
            
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full h0 [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>
                                        <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[50%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Partnerships with buyers and institutions</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We build long-term relationships with schools, hotels, 
                                                        and food companies. These partnerships create steady demand for farmer groups year‑round.
                                                    </p> 
                                                </div> 
            
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full h0 [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>
                                        <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[50%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Facilitating contract farming arrangements</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                       We negotiate and draft agreements that protect both farmer and buyer. Guaranteed off-take, 
                                                       fixed prices, and clear terms-no surprises.
                                                    </p> 
                                                </div> 
            
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full h0 [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>
                                      {/*  <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[49%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Establishment of smallholder farmer cooperatives</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We guide through every stage, from smart planting plans to efficient harvest management
                                                        . You'll have higher yields, healthier crops, and long soil fertility.
                                                    </p> 
                                                </div> 
                                                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                    <p className="border border-green-700/30 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-green-50 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-green-100 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-yellow-500/50 text-center rounded-md">Soil testing</p>

                                                </div>
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>
                                        <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[49%] md:h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
                                            <div className="flex flex-col gap-5 h-9/10 justify-between w-full md:w-6/10 ">
                                                <div className="flex flex-col md:justify-between gap-3 h">
                                                    <h4 className="text-[16px] md:text-md font-bold text-green-600 uppercase">Establishment of smallholder farmer cooperatives</h4>
                                                    <p className="text-gray-500 text-[16px] text-left">
                                                        We guide through every stage, from smart planting plans to efficient harvest management
                                                        . You'll have higher yields, healthier crops, and long soil fertility.
                                                    </p> 
                                                </div> 
                                                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                    <p className="border border-green-700/30 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-green-50 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-green-100 text-center rounded-md">Soil testing</p>
                                                    <p className="border border-green-700/30 bg-yellow-500/50 text-center rounded-md">Soil testing</p>

                                                </div>
                                            </div>
                                            <img src={serviceImg} alt=" production" className="cursor-pointer object-covermx-auo w-full [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                        </article>*/}
                                     </div> 
                                </div>

                                <div className="py-5 w-full my-20">
                                    <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                        <h1 className="">Agri-waste recycling and processing</h1> 
                                        <p className="text-white">Crop residues and spoiled produce become animal feed or bio-fertilizer.</p>
                                        <p className="cursor-pointer underline">Explore</p>
                                    </div>
                                 
                                    <h1 className="mt-6 mb-3">Recycle, compost, segregate. Turn your waste into community value</h1>
                                     
                                     <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 my-5">
                                        
                                        <article className="group relative overflow-hidden h-50 rounded-md">
                                            <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                            <div className="relative p-4 h-fit w-9/10 m-auto space-y-4 border bg-black/70 rounded-lg flex flex-col justify-between translate-y-[50%] transition-all duration-500">
                                                <h4 className="text-lg font-bold text-white uppercase">Agri-waste recycling and processing</h4>
                                                <a href="/" className=" flex flex-row gap-1 items-center font-semibold text-sm text-yellow-500 w-fit hover:text-green-700 transition-all duration-300">View all <FiArrowRight /></a>                                       
                                                
                                            </div> 
                                                       

                                        </article> 
                                        <article className="group relative overflow-hidden h-50 rounded-md">
                                            <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
                                            <div className="relative p-4 h-fit w-9/10 m-auto space-y-4 border bg-black/65 rounded-lg flex flex-col justify-between translate-y-[50%] transition-all duration-500">
                                                <h4 className="text-lg font-bold text-white uppercase">Compost production and organic inputs</h4>
                                                <a href="/" className=" flex flex-row gap-1 items-center font-semibold text-sm text-yellow-500 w-fit hover:text-green-700 transition-all duration-300">View all <FiArrowRight /></a>                                       
                                                
                                            </div> 
                                        </article> 
                                        <article className="group relative overflow-hidden h-50 rounded-md">
                                            <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity-100 group-hover:opacity-90 transition-all duration-300"/>
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