
import cooperativeImg from "../../assets/images/services/agri development/cooperative.jpeg"
import trainingImg from "../../assets/images/services/agri development/training.jpeg"
import supportImg from "../../assets/images/services/agri development/support.jpg"




export default function AgriDevlopment(){
                                    return(
                                             <section className="w-full  px-5">
                                                    <div className="inline-flex justify-between w-full font-semibold text-yellow-700">
                                                        <p className="">Agribusiness Development</p> 
                                                        <p className="cursor-pointer underline">Explore</p>
                                                    </div>
                                                    
                                                    <h1 className="mt-6 mb-3">From Crop production to market access, we grow success sustainability</h1>
                                                    
                                                    <div className="service-container w-full flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden  gap-6 rounded-xl my-3 py-2">
                                                            
                                                            <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[700px] md:min-h-70 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 transition-all duration-500">
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
                                                                <img src={cooperativeImg} alt=" production" className="cursor-pointer object-covermx-auo w-full [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                                            </article>
                    
                                                            <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[700px] md:min-h-70 max-h-80 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
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
                                                                <img src={trainingImg} alt=" production" className="cursor-pointer object-cover w-full [clip-path:circle(50%_at_35%)] md:w-1/2 hover:opacity-90 md:[clip-path:circle(90%_at_50%)]"/>
                                                            </article>
                    
                                                            <article className="bg-black/5 flex flex-col md:flex-row flex-shrink-0 w-full md:w-[700px] md:min-h-70 max-h-80 p-3 gap-3 justify-between rounded-m shadow-sm shadow-zinc/200 hover:shadow-zinc-400 transition-all duration-500">
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
                                                                 <figure className="w-full h-full ">
                                                                    <img src={supportImg} alt=" production" className="md:w-8/10 object-cover [clip-path:circle(50%_at_35%)] w-full md:[clip-path:circle(90%_at_50%)]"/>
                                                                </figure> 
                                                            </article> 
                                                    </div>
                                             </section>  
                                    )
}