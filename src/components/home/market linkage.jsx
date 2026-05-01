
import marketImg from "../../assets/images/services/market linkage/market2.jpeg"
import buyersImg from "../../assets/images/services/market linkage/market2.jpeg"
import contractImg from "../../assets/images/services/market linkage/contract2.jpeg"
import { FiArrowRight } from "react-icons/fi"


export default function MarketLinkage(){
                                    return(
                                             <section className="w-full  bg-red-50">
                                                   <div className="px-5 w-full ">
                                                        <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                                        <p className="">Market Linkages</p> 
                                                        <p className="cursor-pointer underline">Explore</p>
                                                        </div>
                                                
                                                        <h1 className="mt-6 mb-3">Connecting farmers to reliable markets</h1>
                                                        
                                                        <div className=" flex flex-row mx-auto w-full overflow-auto [&::-webkit-scrollbar]:hidden  gap-6  py-5 h-fit">
                                                        
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
                                                            <img src={marketImg} alt=" production" className="cursor-pointer object-covermx-auo w-full h0  md:w-1/2 hover:opacity-90 "/>
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
                                                            <img src={contractImg} alt=" production" className="cursor-pointer object-covermx-auo w-full h0  md:w-1/2 hover:opacity-90 "/>
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
                                                            <img src={buyersImg} alt=" production" className="cursor-pointer object-covermx-auo w-full h0 [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                                        </article>
                                                    </div> 
                                                </div>
                                                    
                                             </section>  
                                    )
}