
import serviceImg from "../assets/images/services/agri-extension/smart-agri2.jpeg"
import NavBar from "../components/contact/navBar"
import Header from "../components/contact/header"
import Footer from "../components/footer"
import { RiArrowDropLeftLine, RiArrowDropRightLine, RiCheckDoubleLine, RiMarkupLine } from "react-icons/ri"
export default function Services(){
                            return(
                                   <>
                                    <NavBar/>
                                    <Header page='Services' pageImg={serviceImg}/>
                                    
                                    <div className="z-100 w-9/10 mx-auto shadow-md h- md: text-center bg-white -translate-y-10 py-2 space-y-3">
                                      <h1 className="font-semibold text-[22px]">Agribusiness Development</h1>
                                      <p className="text-justiy md:w-7/10 mx-auto">Through the department of agribusiness development, <strong className="text-amber-900 italic"> SAWAS </strong>help smallholder farmers transition
                                                      from subsistence farming to sustainable enterprice. 
                                      </p>

                                    </div>

                                    <nav className="w-full inline-flex items-center  mx-auto px-5 md:px-10 py-5">
                                      <RiArrowDropLeftLine className="cursor-pointer size-10 hover:text-yellow-800 transition-all duration-500"/>
                                      <ul className="w-full inline-flex now-wrap overflow-auto justify-between">
                                         <li className="cursor-pointer font-semibold border border-black/30 px-5 py-2 hover:bg-yellow-900 transition-all duration-500 whitespace-nowrap">Agribuseness Development</li>
                                         <li className="cursor-pointer font-semibold border border-black/30 px-5 py-2 hover:bg-yellow-900 transition-all duration-500 whitespace-nowrap">Agribuseness Consultancy</li>
                                         <li className="cursor-pointer font-semibold border border-black/30 px-5 py-2 hover:bg-yellow-900 transition-all duration-500 whitespace-nowrap">Agricultural Extension Services</li>
                                         <li className="cursor-pointer font-semibold border border-black/30 px-5 py-2 hover:bg-yellow-900 transition-all duration-500 whitespace-nowrap">Market Linkages</li>
                                         <li className="cursor-pointer font-semibold border border-black/30 px-5 py-2 hover:bg-yellow-900 transition-all duration-500 whitespace-nowrap">Waste Management</li>
                                      </ul>
                                      <RiArrowDropRightLine className="cursor-pointer size-10 hover:text-yellow-800 transition-all duration-500"/>
                                    </nav>

                                    <div className="py-60 w-full texter text-[40px] bg-gray-300">
                                         <h1 className="w-fit m-auto font-bold text-red-800">RESERVED FOR SERVICES DETAILS</h1>
                                    </div>
                                    
                                  { /* {Agribusiness Development }
                                    <section className="w-full px-5 my-10 space-y-6">
                                        <h1 className="text-[20px] font-semibold text-green-600">Agribusiness Development</h1>
                                        <p className="">From cooperative formation to soil testing
                                                      and record keeping, we build the foundations for profitable farming.
                                        </p>

                                        <div className="w-full grid  grid-cols-2 gap-2 pb-10">
                                            <figure className="relative w-full h-full text-white">
                                                <img src={serviceImg} alt="Cooperatives" className="object-cover"/>
                                                <figcaption className="absolute bottom-0 p-1 md:px-5 md:py-2 md:text-[20px] md:font-semibold bg-green-600 whitespace-nowrap">Endless Cooperatives</figcaption>
                                            </figure>
                                            <figure className="relative w-full h-full text-white">
                                                <img src={serviceImg} alt="Cooperatives" className="object-cover"/>
                                                 <figcaption className="absolute bottom-0 p-1 md:px-5 md:py-2 md:text-[20px] md:font-semibold bg-green-600 whitespace-nowrap">Endless Cooperatives</figcaption>
                                            </figure>
                                            <figure className="relative w-full h-full text-white">
                                                <img src={serviceImg} alt="Cooperatives" className="object-cover"/>
                                                <figcaption className="absolute bottom-0 px-5 p-1 md:px-5 md:py-2 md:text-[20px] md:font-semibold bg-green-600 whitespace-nowrap">Endless Cooperatives</figcaption>
                                            </figure>
                                            <figure className="relative w-full h-full text-white">
                                                <img src={serviceImg} alt="Cooperatives" className="object-cover"/>
                                                <figcaption className="absolute bottom-0 p-1 md:px-5 md:py-2 md:text-[20px] md:font-semibold bg-green-600 whitespace-nowrap">Endless Cooperatives</figcaption>
                                            </figure>
                                        </div>

                                        <hr className="text-blue-600/30 font-bold"/>
                                        <h1 className="w-fit px-5 py-1 mx-auto text-center font-semibold text-white -translate-y-10 border rounded-xl bg-blue-600">Core Services</h1>

                                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                                            <article className="w-full bg-white text-justify py-5 bordr space-y-3 px-2 ">
                                                <h3 className="text-[18px] text-blue-700 font-semibold">Establishment of smallholder farmer cooperatives</h3>
                                                
                                                <div className="bg-gradent-to-b from-green-50 via-green-100/30 to-green-50/60 rounded-xl p-2 space-y-3">
                                                    <h3 className="font-semibold text-[16px]">Why Does this matter?</h3>
                                                    <p className="">Individual farmers struggle to get fair prices, quality inputs,
                                                                    and/or credit. Together they have power.
                                                    </p>
                                                    <h3 className="font-semibold text-[16px]">What we do:</h3>
                                                    <ul className="px-2 space-y-3 text-[14px]">
                                                        <li className="inline-flex items-start gap-1"><RiCheckDoubleLine className="size- text-amber-900"/> Guide farmers through legal registration as a cooperative.</li>
                                                        <li className="inline-flex items-start gap-1"><RiCheckDoubleLine className="size-5 text-amber-900"/> Help set up group savings and internal lending systems so members can fund their own farms.</li>
                                                        <li className="inline-flex items-start gap-1"><RiCheckDoubleLine className="size-5 text-amber-900"/> Enstablish joint input purchasing: Seeds, fertilizers, Tools, in bulk at lower price.</li>
                                                        <li className="inline-flex items-start gap-1"><RiCheckDoubleLine className="size-5 text-amber-900"/> Train leaders in record keeping, meeting management, and conflict resolution</li>
                                                    </ul>
                                                    <h3 className="font-semibold text-[16px]">What you gain:</h3>
                                                    <p className="">A legally recognized cooperative that can negotiate better prices, share equipmwnt, and access grants or
                                                                    loans that individual farmers cammot.
                                                    </p>
                                                </div>
                                            </article>

                                            <article className="w-full bg-white text-justify py-5 bordr space-y-3 px-2">
                                                <h3 className="text-[18px] text-blue-700 font-semibold">Agribusiness training and capacity building</h3>
                                                
                                                <div className="bg-sky00 rounded-sm p-2 space-y-3">
                                                    <h3 className="font-semibold text-[16px]">Why Does this matter?</h3>
                                                    <p className="">Farming is bussiness. But smallholders have never been taught business skills.</p>
                                                    
                                                    
                                                    <h3 className="font-semibold text-[16px]">What we do:</h3>
                                                    <p className="">We deliver Hands-on, local-language workshops on topics that matter immediately:</p>
                                                    <ul className="px-2 space-y-3 text-[14px]">
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Financial literacy:</strong> How to tract income, exenses, and profits.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Post-harvest handling:</strong> reduce losses from spoilage, pests, and poor storage.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Business planning:</strong> set realistic goals, budget for inputs, and plan for lean seasons.</li>
                                                        
                                                    </ul>
                                                    <h3 className="font-semibold text-[16px]">What you gain:</h3>
                                                    <p className="">Business minded farmers who treat farming as pure business.
                                                    </p>
                                                </div>

                                            </article>
                                            <article className="w-full bg-white text-justify py-5 bordr space-y-3 px-2 ">
                                                <h3 className="text-[18px] text-blue-700 font-semibold">Farm Management and Production Support</h3>
                                                
                                                <div className="bg-gradien-to-b from-green-50 via-green-100/30 to-green-50/60 rounded-sm p-2 space-y-3">
                                                    <h3 className="font-semibold text-[16px]">Why Does this matter?</h3>
                                                    <p className="">Farmers have land and labour but lack production plan. Without proper scheduling, input
                                                                    management, and record keeping, yields remain low. 
                                                    </p>
                                                    <h3 className="font-semibold text-[16px]">What we do:</h3>
                                                    <ul className="px- space-y-3 text-[14px]">
                                                        <li className="inline-flex items-start gap-1  px-1"><RiCheckDoubleLine className="w-6 h-6 text-amber-900"/> Schedule when to plant, when to weed, when to harvest, based on local rainfall patterns and soil type.</li>
                                                        <li className="inline-flex items-start gap-1  px-1"><RiCheckDoubleLine className="size-5 text-amber-900"/> Undertake precise calculation of seeds, fertilizer, and pestcides needed per plot. Avoid overuse.</li>
                                                        <li className="inline-flex items-start gap-1  px-1"><RiCheckDoubleLine className="w-5 h-5 text-amber-900"/> Plan and supervise daily farm tasks, from land preparation to harvesting.</li>
                                                        
                                                        
                                                    </ul>
                                                    <h3 className="font-semibold text-[16px]">What you gain:</h3>
                                                    <p className="">Higher yields, lower input costs,fewer losses, and complete record of your farm performance.
                                                    </p>
                                                </div>
                                            </article>


                                        </div>


                                    </section>


                                   

                                    {/** CTA }
                                    <section className="w-9/10 mx-auto bg-white text-center font-semibold border border-2  border-black/30 bg-black/20 rounded-[25px] space-y-8 my-10 py-10">
                                          <p className="">Making decisions on farming can feel scarely. Lets break the mess for your peace.</p>
                                          <button className="cursor-pointer border mx-auto px-8 py-3 rounded-[15px] bg-blue-600 text-[18px] text-white ">Get in Touch</button>
                                    
                                    </section>

                                 

                                    {/*Agribusiness Consultancy *}
                                    <section className="w-full px-5 my-20 pt-10 space-y-4">
                                         <h1 className="text-[20px] font-semibold text-green-600">Agribusiness Consultancy</h1>
                                         <h2 className="font-semibold">Strategic advice that turns agribusiness ideas into bankable, profitable realities</h2>
                                        
                                         <p className="pb-10">We work with cooperatives, agribusiness, and development partners to diagnose challenges, design colutions, and delver measurable
                                                         results.
                                         </p>

                                         <hr className="text-blue-600/30 font-bold"/>
                                        <h1 className="w-fit px-5 py-1 mx-auto text-center font-semibold text-white -translate-y-9 border rounded-xl bg-blue-600">Agri-Consulting Services</h1>


                                        <div className="w-full grid  grid-cols-1 md:grid-cols-3 gap-2 pb-10 py-10">

                                             <article className="group relative overflow-hidden w-full h-100 rounded-sm bg-black/70">
                                                <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity- mix-blend-overlay"/>
                                                <h3 className="absolute top-2 left-1/2 translate-x-[-50%] text-[20px] text-center text-white -600 font-semibold">Business planning and advisory services</h3>
                                                <div className="absolute -bottom-10 h-9/10 w-full space-y-4 bg-white flex flex-col py-3">
                                                    <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">You'll get a clear, investor-ready business plan</span>
                                                     <h3 className="font-semibold text-[16px]">Some of your benefits</h3>
                                                    <ul className="flex flex-col px- space-y-3 text-[14px]">
            
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Bankable business plan:</strong> Structured for lenders, donors, or equity partners, with realistic financial projection.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Operational advisory:</strong> Guidance on pricing, cost control, staff management, and scalling.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Risk assessment:</strong> Identify potential pitfalls e.g. weather, market, credit, and build contingency plans.</li>
   
                                                    </ul>
                                                </div> 
                                            </article> 

                                            <article className="group relative overflow-hidden w-full h-100 rounded-sm bg-black/70">
                                                <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity- mix-blend-overlay"/>
                                                <h3 className="absolute top-2 left-1/2 translate-x-[-50%] text-[20px] text-center text-white -600 font-semibold">Business planning and advisory services</h3>
                                                <div className=" absolute -bottom-10 left-1/2 translate-x-[-50%] h-9/10 w-full  space-y-4 bg-white  flex flex-col py-3 ">
                                                    <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">You'll get a clear, investor-ready business plan</span>
                                                     <h3 className="font-semibold text-[16px]">Some of your benefits</h3>
                                                    <ul className="flex flex-col px- space-y-3 text-[14px]">
            
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Bankable business plan:</strong> Structured for lenders, donors, or equity partners, with realistic financial projection.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Operational advisory:</strong> Guidance on pricing, cost control, staff management, and scalling.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Risk assessment:</strong> Identify potential pitfalls e.g. weather, market, credit, and build contingency plans.</li>
   
                                                    </ul>
                                                </div> 
                                            </article> 
                                            <article className="group relative overflow-hidden h-100 rounded-sm bg-black/70">
                                                <img src={serviceImg} className="absolute inset-0 object-cover  w-full h-full opacity- mix-blend-overlay"/>
                                                <h3 className="absolute top-2 left-1/2 translate-x-[-50%] text-[20px] text-center text-white -600 font-semibold">Business planning and advisory services</h3>
                                                <div className=" absolute -bottom-10  h-9/10 w-full space-y-4 bg-white  flex flex-col py-3">
                                                    <span className="flex flex-row items-center justify-between text-md font-semibold text- text-black ">You'll get a clear, investor-ready business plan</span>
                                                     <h3 className="font-semibold text-[16px]">Some of your benefits</h3>
                                                    <ul className="flex flex-col px- space-y-3 text-[14px]">
            
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Bankable business plan:</strong> Structured for lenders, donors, or equity partners, with realistic financial projection.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Operational advisory:</strong> Guidance on pricing, cost control, staff management, and scalling.</li>
                                                        <li className=""> <strong className="whitespace-nowrap text-yellow-700 font-normal underline">Risk assessment:</strong> Identify potential pitfalls e.g. weather, market, credit, and build contingency plans.</li>
   
                                                    </ul>
                                                </div> 
                                            </article> 

                                        </div>

                                    </section>

                                     {/*Agribusiness Extentions services *}
                                    <section className="w-full px-5 my-10 space-y-6">
                                       
                                       <div className="space-y-3">
                                            
                                                <h1 className="text-[25px] font-bold text-yellow-700">Agribusiness Extension Services</h1>
                                                <p className="font-semibold">Professional, field-based support that improves productivity and builds climate resilience.</p>
                                                <p className="md:w-7/10">Our extension officers are in the fields with farmers, demonstrating practical techniques, 
                                                    solving real problems, and following up until new practices become habits.</p>
                                                
                                               <article  className="grid grid-cols-1 md:grid-cols-4 gap-2 my-10 bg-gay-200">
                                                <div className="col-span-3 w-full 0 space-y-3">
                                                        <h2 className="inline-flex text-[22px] text-green-700 font-semibold"> <strong className=" p-2 bg-">1</strong> Professional Extension Support to Farmers</h2>
                                                        
                                                        <p className="">We provide consistent, scheduled farm visits to individual farmers, cooperative groups, and out grower schemes. 
                                                                        Our officers assess crop health, soil 
                                                                        condition, pest pressure, and irrigation needs, then give advice that is immediately actionable.
                                                                    </p>
                                                        
                                                        <h3 className="font-semibold">How does it work?</h3>
                                                        <p className="">Each farmer or group is first assigned a dedicated extension officer who speaks the local language and understands the specific 
                                                                        challenges of that area. The officer conducts an initial farm assessment, mapping existing practices, soil types, 
                                                                        and previous pest or disease issues. Based on this, a simple season-long calendar is created together with the farmer.
                                                                    </p>
                                                        <p className="">During the growing season, the officer visits once a week. Each visit follows a clear routine: walk the fields together, 
                                                            identify one or two priority problems, demonstrate the solution on a small section 
                                                            (e.g., proper spacing, thinning, or compost application), 
                                                            and then have the farmer do it themselves while the officer watches and corrects. 
                                                            After the visit, the farmer receives a handwritten or printed summary in Chichewa or 
                                                            English, listing the key actions to take before the next visit. The officer also maintains a 
                                                            field log for every farm, recording observations, advice given, and follow-up tasks. At the end of the season, a 
                                                            simple review meeting compares this year's yield and problems with previous years, so everyone can see what improved
                                                            </p>
                                                </div>
                                                <figure className="w-full h-full border">

                                                </figure>


                                                <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="">
                                                        <h2 className="font-semibold">Key practices we advise on:</h2>
                                                        <ul className="w-full space-y-2">
                                                                <li className="px-5 py-2 border">Soil health: organic matter, pH correction, erosion control</li>
                                                                <li className="px-5 py-2 border">Crop health: nutrient deficiency signs, disease identification, safe pesticide use</li>
                                                                <li className="px-5 py-2 border">Water management: drip irrigation scheduling, moisture conservation, drainage</li>
                                                                <li className="px-5 py-2 border">Weed control: timing, methods, reduced herbicide reliance</li>
                                                                <li className="px-5 py-2 border">Harvest timing: maturity indicators, optimal windows to reduce losses</li>
                                                        </ul>
                                                    </div>

                                                    <div className="">
                                                        <h2 className="">What farmers gain</h2>
                                                        <ul className="">
                                                            <li className="px-5 py-2 border">Higher yields through timely, expert interventions</li>
                                                            <li className="px-5 py-2 border">Fewer crop losses from preventable diseases or pests</li>
                                                            <li className="px-5 py-2 border">Confidence to make informed decisions without waiting for help</li>
                                                            <li className="px-5 py-2 border">A documented history of their farm's performance to share with lenders or buyers</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>



                                       

                                        {/*Climate‑Smart Agriculture Practices services *}
                                        <hr/>
                                        <div className="space-y-4">

                                            <article className="p-5 border">
                                            <h2 className="font-semibold">Climate-Smart Agriculture Practices</h2>
                                            <p className="">We train farmers to adapt to erratic rainfall, rising temperatures, and longer dry spells- while also reducing 
                                                           greenhouse gas emissions from farming. These are not theoretical concepts. We demonstrate practices that 
                                                           work in Malawian conditions.
                                                           </p>
                                            <h3 className="font-semibold">How does it work?</h3>
                                            <p className="">The process begins with a climate risk assessment specific to the farmer's location. We ask: when did 
                                                            rains start and stop last season? How many dry spells longer than two weeks? Has flooding or drought destroyed harvests in 
                                                            recent years? We also check if the farmer has trees on the land, which direction slopes face, and whether there are 
                                                            streams or wells nearby.
                                                           </p>
                                            <p className="">Next, we co-design a climate-smart plan for the farm. This is not a fixed list but a menu of techniques that 
                                                            match the farmer's resources and risk profile. For a farmer on a steep slope with sandy soil, we might prioritise 
                                                            contour bunds and minimum tillage. For a farmer near a river with reliable water, we might focus on early maturing 
                                                            varieties and weather-based advisories.
                                                            </p>
                                            <p className="">Training is season-long — we start before land preparation and continue through harvest. Each 
                                                            week or every two weeks, the officer returns to the same farm to check if the new practices are being 
                                                            followed. If a farmer finds mulching too labour-intensive, we find a lighter alternative like leaving 
                                                            crop residues instead of collecting grass. If a drought-tolerant variety fails to germinate, we troubleshoot 
                                                            seed depth or soil moisture immediately. We also help groups access climate-smart inputs 
                                                            (drought-tolerant seeds, mulch materials, water harvesting barrels) through our input sourcing network, often 
                                                            buying together to lower costs.
                                                            </p>
                                            <h3 className="font-semibold">Key practices we teach:</h3>
                                            <table>
                                                <h2 className="">Table</h2>
                                                
                                            </table>
                                            <h3 className="font-semibold">What farmers gain</h3>
                                            <ul className="">
                                                <li className="">Crops that survive even in below-average rainfall years</li>
                                                <li className="">Reduced need for expensive irrigation or chemical fertilizers</li>
                                                <li className="">Eligibility for climate-smart agriculture grants and carbon credit programs</li>
                                                <li className="">Protection against total harvest failure — spreading risk across multiple practices</li>
                                            </ul>
                                           </article>

                                            {/*Productivity Improvement Programs /}
                                            <article className="space-y-4 border">


                                               <h2 className="font-semibold">Productivity Improvement Programs</h2>
                                               <p className="">We run structured, time-bound programs that focus on one crop or one constraint and deliver measurable productivity gains within a single season. 
                                                            These are not generic trainings, they are intensive interventions with baseline measurements, regular coaching, 
                                                            and end of season evaluations.
                                                            </p>
                                                <h4 className="">The program unfolds in five clear stages, each with specific actions and timelines.</h4>
                                                <span className="">Stage 1: Diagnosis (first 7-10 days)</span>
                                                <p className="">Our extension officer spends half a day with the farmer or cooperative, walking every field and asking detailed questions: 
                                                                What crop gave the lowest yield last season? What problem caused the biggest loss weeds, pests, late planting, or poor soil? 
                                                                We also take baseline measurements. For example, if the focus is maize, we measure a typical 10m x 10m plot, count the plants,
                                                                estimate cobs per plant, and weigh a 
                                                                small sample of dried grain from the previous harvest. This gives us a number say, 2 bags per hectare that we can compare 
                                                                against later.
                                                                </p>
                                                <span className="">Stage 2: Program design (3-5 days)</span>
                                                <p className="">We write a simple plan on one or two pages. It lists the target yield (e.g., 4 bags per hectare), the weekly actions from land 
                                                                clearing to harvest, a list of inputs needed (seed type, fertilizer type and amount, pesticides if any), and who does what-farmer,
                                                                 officer, or both. The plan is reviewed with the farmer and adjusted to fit their budget and labor availability.
                                                                </p>
                                                <span className="">Stage 3: Implementation (3 to 6 months)</span>
                                                <p className="">This is where the officer works side by side with the farmer during critical windows. For example, on planting day, the officer 
                                                                arrives early to mark correct spacing with a simple rope or stick. During first weeding, the officer demonstrates how to weed 
                                                                without damaging crop roots. When it is time to apply top dressing fertilizer, the officer shows how to place it exactly 5 cm 
                                                                from the plant base, not scattered. Between these major tasks, the officer makes shorter visits, sometimes just 20 minutes, 
                                                                to check progress and answer quick questions.
                                                                </p>
                                                <span className="">Stage 4: Measurement (at harvest)</span>
                                                <p className="">We use the same measurement method as in the diagnosis. The officer and farmer together harvest a test plot of the same 
                                                               size as before, dry the grain properly, and weigh it. The difference is calculated as a percentage or absolute gain. If the 
                                                               baseline was 2 bags and the endline is 4 bags, that is a 100% increase. These numbers are recorded in a simple one-page report
                                                               that both the farmer and the officer sign.
                                                                </p>
                                                <span className="">Stage 5: Review and next cycle (1 day)</span>
                                                <p className="">We sit with the farmer or cooperative to discuss what worked and what did not. Did the program fail because fertilizer 
                                                                arrived late? Did yields improve but only on half the field? Based on this, we either repeat the same program with 
                                                                adjustments, or the farmer graduates to a new program focused on a different constraint, such as post-harvest storage or 
                                                                irrigation.
                                                                </p>
                                                <h3 className="font-semibold">Example programs</h3>
                                                <table>
                                                    Table
                                                </table>
                                                <h3 className="font-semibold">What farmers gain</h3>
                                                <ul className="">
                                                        <li className="">Verifiable yield increases you can see and calculate</li>
                                                        <li className="">A repeatable system for future seasons - you won't need us forever</li>
                                                        <li className="">Proof of productivity to negotiate better prices or access credit</li>
                                                        <li className="">Group-level results that strengthen cooperatives and attract donors</li>
                                                </ul>
                                                
                                                <p className=""></p>
                                                <p className=""></p>

                                            </article>



                                        </div>
                                     </div>

                                    </section>

                                    {/*Market Linkages *}
                                    <section className="w-full px-5 my-20 pt-10 space-y-4">
                                         <h1 className="text-[20px] font-semibold text-green-600">Market Linkages</h1>
                                         <h2 className="font-semibold">We connect farmers to reliable buyers, and buyers to consistent quality. 
                                                        No more middlemen exploitation. No more missed harvest sales.</h2>
                                        
                                         <div className="space-y-4">
                                              <article className="">
                                                <h2 className="font-semibold">Connecting Farmers to Reliable Markets</h2>
                                                <h2 className="font-semibold">Identfied problem</h2>
                                                <p className="w-full">A farmer harvests 50 bags of maize but the only buyer at the local market offers half the expected price. 
                                                    Or there is no buyer at all, and the grain rots in storage while school fees are due. Many smallholders also face unreliable 
                                                    buyers who delay payments, reject produce on arrival, or demand unofficial 
                                                    fees. This uncertainty forces farmers to sell immediately after harvest at the lowest prices, or to hold produce and risk spoilage.
                                                    </p>
                                                <h2 className="font-semibold">Prposed Solution</h2>
                                                <p className="w-full">We maintain a verified database of buyers across Malawi, categorized by location, product type, volume 
                                                    requirements, quality standards, and payment 
                                                    terms. Buyers are vetted through direct interviews, credit checks, and reference calls with other farmers. 
                                                    The database includes:
                                                    </p>
                                                <ul className="">
                                                    <li className="">Local market traders-for quick, small-volume sales within 20 km.</li>
                                                    <li className="">Food processors-for maize, soybeans, groundnuts, and sunflower (e.g., milling companies, oil pressers).</li>
                                                    <li className="">Hotels and restaurants-for fresh vegetables, tomatoes, and herbs weekly.</li>
                                                    <li className="">Schools and hospitals-for bulk maize, beans, and cooking oil under institutional feeding programs.</li>
                                                    <li className="">Supermarket chains-for graded produce with packaging requirements.</li>
                                                    <li className="">Export agents-for pigeon peas, Chilli, and other high‑value crops.</li>
                                                </ul>
                                                
                                                <h3 className="font-semibold">How do we handle this?</h3>
                                                
                                                <h4 className="font-semibold">1. Farmer registration and profiling</h4>
        
                                                <p className="">A farmer or cooperative registers with SAWAS. We collect details: what crops they grow, average volumes per season, 
                                                                harvest calendar, location, access to storage, and any certifications (e.g., organic). This profile is entered into 
                                                                our market linkage system.
                                                                </p>
                                                 <h4 className="font-semibold">2. Pre‑season market information</h4>
                                                <p className="">Before planting, we share a Market Outlook Report with registered farmers. The report includes expected price ranges for different crops, buyer preferences (e.g., preferred maize variety, acceptable moisture percentage), and recommended planting windows to align with peak demand.</p>
                                                <h4 className="font-semibold">Step 3: Harvest‑time matching</h4>
                                                <p className="">When harvest begins, farmers notify SAWAS. We query our buyer database for active requests matching their produce. Within 48 hours, we provide a shortlist of buyers with their offered prices, collection points, and payment schedules. Farmers choose the best option.</p>
                                                <h4 className="font-semibold">Step 4: Logistics coordination</h4>
                                                <p className="">We help arrange transport if needed – from bicycle collection for small volumes to shared trucks for cooperatives. We also provide simple grading and packaging advice (e.g., which sacks to use, how to tie them) to meet buyer specifications.</p>
                                                <h4 className="font-semibold">Step 5: Payment follow‑up</h4>
                                                <p className="">We track every transaction. If a buyer delays payment beyond agreed terms, SAWAS contacts them directly. If payment is not made within seven extra days, we remove the buyer from our database and alert other farmers. We also help farmers open mobile money accounts for faster, more transparent payments.</p>
                                                 
                                                 <h4 className="font-semibold">Program outcome</h4>
                                                 <ul className="">
                                                    <li className="">Farmers sell at fair, transparent prices – often 15–30% higher than local open market rates</li>
                                                    <li className="">Post‑harvest losses drop from over 30% to under 10% because produce moves quickly</li>
                                                    <li className="">Farmers build a sales record that proves reliability, leading to repeat orders and better prices next season.</li>
                                                    <li className="">Buyers get consistent supply without having to search multiple villages.</li>
                                                 </ul>
                                              
                                              </article>

                                              {/**service two/}
                                              <article className="">
                                                <h2 className="font-semibold">Facilitating Contract Farming Arrangements</h2>
                                                <h2 className="font-semibold">Identfied problem</h2>
                                                <p className="w-full">Verbal agreements fail when prices rise or fall. A buyer promises to buy tomatoes at harvest, but on delivery day claims the market price has dropped and offers less. Or a farmer invests in an improved seed variety because a buyer asked for it, but the buyer disappears, leaving the farmer with a crop that no one else wants. Contracts are seen as complicated, expensive, or intimidating for smallholders.
                                                    </p>
                                                <h2 className="font-semibold">Prposed Solution</h2>
                                                <p className="w-full">We negotiate and draft written contract farming agreements that are simple, fair, and legally sound – but written in plain language. Each contract covers:
                                                    </p>
                                                <ul className="">
                                                    <li className="">Parties – name, address, ID number of farmer/cooperative and buyer.</li>
                                                    <li className="">Product specifications – crop type, variety, grade, size, colour, moisture content, allowable defects.</li>
                                                    <li className=""> Volume – total kilograms or number of units, with tolerance (e.g., +/- 10%).</li>
                                                    <li className="">Delivery schedule – dates, times, location, who arranges transport.</li>
                                                    <li className="">Payment terms – within how many days, cash or bank transfer, penalties for late payment</li>
                                                    
                                                </ul>
                                                
                                                <h3 className="font-semibold">How do we handle this?</h3>
                                                
                                                <h4 className="font-semibold">Step 1: Expression of interest</h4>
        
                                                <p className="">A buyer (e.g., a sunflower oil company) contacts SAWAS wanting 50 tonnes of sunflower seed at a fixed price. We check if we have farmer groups that can supply that volume. Alternatively, a farmer cooperative contacts us wanting to find a contract buyer for their maize.
                                                                </p>
                                                 <h4 className="font-semibold">Step 2: Pre‑contract negotiation</h4>
                                                <p className="">We sit with both parties separately, then together. We ask buyers: What is your maximum acceptable moisture content? Do you reject produce with insect damage? Do you provide any inputs? We ask farmers: What is the minimum price that covers your costs? Can you deliver to the buyer’s warehouse or do you need collection?</p>
                                                <h4 className="font-semibold">Step 3: Drafting and translation</h4>
                                                <p className="">We write the contract in English and Chichewa. We read it aloud to farmers in a group meeting, explaining each clause. Farmers ask questions: “What happens if my yield is lower due to drought?” – we then add a force majeure clause. “What if the buyer refuses delivery because of colour?” – we specify a clear colour chart (e.g., yellow maize, not white).</p>
                                                <h4 className="font-semibold">Step 4: Signing and witnessing</h4>
                                                <p className="">Both parties sign two copies. SAWAS keeps a third copy as witness. We also take photos of the signed pages with the parties’ faces for extra record.</p>
                                                <h4 className="font-semibold">Step 5: Performance monitoring</h4>
                                                <p className="">During the season, we check that both sides are keeping promises. If the buyer promised to provide seeds, we confirm delivery. If farmers promised to plant a specific area, we verify. At harvest, we are present during first deliveries to confirm grading and weighing. If any dispute arises – e.g., buyer claims moisture is too high – we use a portable moisture meter to test together.</p>
                                                 
                                                 <h4 className="font-semibold">Program outcome</h4>
                                                 <ul className="">
                                                    <li className="">Farmers sell at fair, transparent prices – often 15–30% higher than local open market rates</li>
                                                    <li className="">Buyers get guaranteed supply of specified quality, reducing processing losses.</li>
                                                    <li className="">Contract farming unlocks credit: some buyers advance inputs (seeds, fertilizer) with repayment deducted at harvest.</li>
                                                    <li className="">Trust is built through written agreements, leading to multi‑season partnerships</li>
                                                 </ul>
                                              
                                              </article>

                                               {/**service three*}
                                              <article className="">
                                                <h2 className="font-semibold">Partnerships with Buyers and Institutions</h2>
                                                <h2 className="font-semibold">Identfied problem</h2>
                                                <p className="w-full">Schools, hospitals, hotels, and prisons need a steady supply of vegetables, maize, or beans – often weekly – but they struggle to find farmers who can deliver consistent quality and volume week after week. Farmers, on the other hand, do not know how to approach these institutional buyers. Even if they do, a single farmer cannot supply 50 kg of tomatoes every Monday. Institutions also need reliability: if a farmer fails to deliver, the institution faces empty plates.
                                                    </p>
                                                <h2 className="font-semibold">Prposed Solution</h2>
                                                <p className="w-full">We build long‑term partnerships between SAWAS‑supported farmer cooperatives and institutional buyers. These are not one‑off sales but ongoing supply relationships with weekly or monthly delivery schedules. We act as the bridge – aggregating produce from many farmers, maintaining quality standards, managing logistics, and handling payment reconciliation.
                                                    </p>
                                                <ul className="hidden">
                                                    <li className="">Parties – name, address, ID number of farmer/cooperative and buyer.</li>
                                                    <li className="">Product specifications – crop type, variety, grade, size, colour, moisture content, allowable defects.</li>
                                                    <li className=""> Volume – total kilograms or number of units, with tolerance (e.g., +/- 10%).</li>
                                                    <li className="">Delivery schedule – dates, times, location, who arranges transport.</li>
                                                    <li className="">Payment terms – within how many days, cash or bank transfer, penalties for late payment</li>
                                                    
                                                </ul>
                                                
                                                <h3 className="font-semibold">How we do:</h3>
                                                
                                                <h4 className="font-semibold">Step 1: Institutional buyer assessment</h4>
        
                                                <p className="">We meet with the institution’s procurement officer. We ask: What products do you need (maize grain, fresh maize, beans, tomatoes, onions, cabbage, cooking oil)? How many kilograms per week? What quality standards (size, ripeness, packaging)? What delivery days and times? What payment terms (e.g., net 30 days)? Do you have a preference for organic or local sourcing?</p>
                                               
                                                 <h4 className="font-semibold">Step 2: Farmer cooperative selection and preparation</h4>
                                                <p className="">We identify one or more cooperatives that can collectively meet the volume. For example, one cooperative might supply all the beans, another all the tomatoes. We then help the cooperatives:</p>
                                                   <ul className="px-8">
                                                        <li className="">Plan production calendars so harvest coincides with delivery needs.</li>
                                                        <li className="">Invest in simple storage (e.g., solar driers for tomatoes, hermetic bags for beans) to hold produce between harvest and delivery.</li>
                                                        <li className="">Set up internal quality checks – each farmer’s produce is inspected before leaving the village.</li>
                                                        <li className="">Register for tax compliance if required (some institutions demand VAT invoices).</li>
                                                   </ul>
                                                <h4 className="font-semibold">Step 3: Pilot delivery period</h4>
                                                <p className="">We start with a 4‑week pilot. During this period, SAWAS officers accompany every delivery. We help weigh, grade, and load. We also help the cooperative keep a simple delivery log showing date, product, weight, unit price, and total amount. After each delivery, we get a signed receipt from the institution.</p>
                                                   

                                                <h4 className="font-semibold">Step 4: Formal partnership agreement</h4>
                                                <p className="">After a successful pilot, we draft a partnership agreement (simpler than a contract farming agreement) covering:</p>
                                                   <ul className="px-8">
                                                        <li className=""> Delivery schedule </li>
                                                        <li className="">Price</li>
                                                        <li className="">Quality acceptance criteria </li>
                                                        <li className="">Payment terms </li>
                                                        <li className="">Termination notice period </li>
                                                   </ul>
                                                <h4 className="font-semibold">Step 5: Ongoing coordination</h4>
                                                <p className="">We continue to facilitate, but with decreasing intensity. In the first three months, we attend deliveries. By month four, the cooperative handles deliveries themselves, and we only receive monthly reports. We also hold quarterly review meetings where farmers and institutions discuss what went well and what needs improvement – e.g., the institution wants smaller cabbage sizes, the farmers want faster payment.</p>
                                                 <h4 className="font-semibol">Step 6: Expansion</h4>
                                                 <p className="">Once a partnership is stable, we help the cooperative supply additional institutions or expand volume. We also help the institution source new products from the same cooperative – for example, a school that started with beans can later add groundnuts and cooking oil.</p>




                                                <h4 className="font-semibold">Program outcome</h4>
                                                 <ul className="">
                                                    <li className="">Farmers gain predictable, year‑round income – not just seasonal cash.</li>
                                                    <li className="">FInstitutions receive reliable, locally sourced food at competitive prices.</li>
                                                    <li className="">FThe partnership stabilises both parties, allowing farmers to invest in better storage and institutions to reduce supply chain risks.</li>
                                                    <li className="">FCooperatives become attractive to other buyers – a cooperative that has successfully supplied a school for six months can easily supply a hospital or prison.</li>

                                                 </ul>
                                              
                                              </article>
                                         </div>
                                         

                                    </section>

                                     {/*Waste Management & Environmental Services *}
                                    <section className="w-full px-5 my-20 pt-10 space-y-4">
                                         <h1 className="text-[20px] font-semibold text-green-600">Waste Management & Environmental Services</h1>
                                         <p className="font-semibold">We turn agricultural and organic waste into resources compost, animal feed, and cleaner environments. No more burning. No more dumping. No more wasted value.</p>
                                            <div className="">
                                                 <article className="border space-y-4">
                                                    <h2 className="font-semibold">Agri-Waste Recycling and Processing</h2>
                                                    <h3 className="font-semibold">The waste stream</h3>
                                                    <p className="">Every season, Malawian farms generate massive amounts of organic waste: maize stalks, groundnut shells, rice husks, bean straw, and spoiled produce (rotten tomatoes, fallen mangoes, discarded vegetables from markets). Most of this is burned (releasing smoke and carbon) or left to rot in heaps (producing methane and harboring pests).</p>
                                                    <h3 className="font-semibold">Recycling process</h3>

                                                    <h4 className="font-semibold">Step 1: Collection and segregation</h4>
                                                    <p className="">SAWAS works with individual farmers, cooperatives, and market committees to collect agri‑waste. We provide simple collection points – a designated corner of a field or a shed at the local market. Farmers bring waste on their way home or during weekly market days. We segregate at source: dry crop residues (stalks, husks) go to one pile; wet waste (spoiled produce, green leaves) to another; and hazardous or contaminated waste (pesticide containers, plastic) is separated for safe disposal.</p>
                                                    
                                                    <h4 className="font-semibold">Step 2: Shredding and pre‑processing</h4>
                                                    <p className="">Collected waste is transported to a central processing site (or a mobile shredder visits clusters of farms). We use a diesel‑powered or hand‑cranked shredder to reduce bulky stalks and husks into 1–2 cm pieces. This increases surface area for microbial action and makes handling easier. Wet waste is chopped or mashed.</p>
                                                    
                                                    <h4 className="font-semibold">Step 3: Controlled decomposition</h4>
                                                    <p className="">Shredded dry waste and wet waste are mixed at a ratio of roughly 3:1 (carbon to nitrogen). The mixture is piled into long windrows or placed in simple composting bays. We monitor temperature, moisture, and oxygen. The pile is turned every 5–7 days using hand tools or a small tractor. Within 8–12 weeks, the material transforms into stable, odour‑free organic matter.</p>
                                                 
                                                    <h4 className="font-semibold">Step 4: Screening and packaging</h4>
                                                    <p className="">The finished compost is passed through a 10 mm screen to remove large particles (which go back into the next batch). The fine material is bagged in 25 kg or 50 kg sacks, labelled with production date and nutrient content (typical: 1.5–2% nitrogen, 1% phosphorus, 1.5% potassium).</p>
                                                    
                                                    <h4 className="font-semibold"> Table resoure-market value</h4>

                                                    <h4 className="font-semibold">Community impact</h4>
                                                    <ul className="flex">
                                                        <li className="">Farmers and markets reduce waste </li>
                                                        <li className="">Buyers get affordable organic inputs </li>
                                                        <li className="">The environment receives less methane and smoke: lower carbon footprint </li>
                                                        <li className="">SAWAS creates local jobs: collection, shredding, turning, screening, bagging.</li>
                                                    </ul>
                                                 </article>


                                                 <article className="border space-y-4">
                                                    <h2 className="font-semibold">Agri-Waste Recycling and Processing</h2>
                                                    <h3 className="font-semibold">The waste stream</h3>
                                                    <p className="">Every season, Malawian farms generate massive amounts of organic waste: maize stalks, groundnut shells, rice husks, bean straw, and spoiled produce (rotten tomatoes, fallen mangoes, discarded vegetables from markets). Most of this is burned (releasing smoke and carbon) or left to rot in heaps (producing methane and harboring pests).</p>
                                                    <h3 className="font-semibold">Recycling process</h3>

                                                    <h4 className="font-semibold">Step 1: Collection and segregation</h4>
                                                    <p className="">SAWAS works with individual farmers, cooperatives, and market committees to collect agri‑waste. We provide simple collection points – a designated corner of a field or a shed at the local market. Farmers bring waste on their way home or during weekly market days. We segregate at source: dry crop residues (stalks, husks) go to one pile; wet waste (spoiled produce, green leaves) to another; and hazardous or contaminated waste (pesticide containers, plastic) is separated for safe disposal.</p>
                                                    
                                                    <h4 className="font-semibold">Step 2: Shredding and pre‑processing</h4>
                                                    <p className="">Collected waste is transported to a central processing site (or a mobile shredder visits clusters of farms). We use a diesel‑powered or hand‑cranked shredder to reduce bulky stalks and husks into 1–2 cm pieces. This increases surface area for microbial action and makes handling easier. Wet waste is chopped or mashed.</p>
                                                    
                                                    <h4 className="font-semibold">Step 3: Controlled decomposition</h4>
                                                    <p className="">Shredded dry waste and wet waste are mixed at a ratio of roughly 3:1 (carbon to nitrogen). The mixture is piled into long windrows or placed in simple composting bays. We monitor temperature, moisture, and oxygen. The pile is turned every 5–7 days using hand tools or a small tractor. Within 8–12 weeks, the material transforms into stable, odour‑free organic matter.</p>
                                                 
                                                    <h4 className="font-semibold">Step 4: Screening and packaging</h4>
                                                    <p className="">The finished compost is passed through a 10 mm screen to remove large particles (which go back into the next batch). The fine material is bagged in 25 kg or 50 kg sacks, labelled with production date and nutrient content (typical: 1.5–2% nitrogen, 1% phosphorus, 1.5% potassium).</p>
                                                    
                                                    <h4 className="font-semibold"> Table resoure-market value</h4>

                                                    <h4 className="font-semibold">Community impact</h4>
                                                    <ul className="flex">
                                                        <li className="">Farmers and markets reduce waste </li>
                                                        <li className="">Buyers get affordable organic inputs </li>
                                                        <li className="">The environment receives less methane and smoke: lower carbon footprint </li>
                                                        <li className="">SAWAS creates local jobs: collection, shredding, turning, screening, bagging.</li>
                                                    </ul>
                                                 </article>

                                                 <article className="border space-y-4">
                                                    <h2 className="font-semibold">Agri-Waste Recycling and Processing</h2>
                                                    <h3 className="font-semibold">The waste stream</h3>
                                                    <p className="">Every season, Malawian farms generate massive amounts of organic waste: maize stalks, groundnut shells, rice husks, bean straw, and spoiled produce (rotten tomatoes, fallen mangoes, discarded vegetables from markets). Most of this is burned (releasing smoke and carbon) or left to rot in heaps (producing methane and harboring pests).</p>
                                                    <h3 className="font-semibold">Recycling process</h3>

                                                    <h4 className="font-semibold">Step 1: Collection and segregation</h4>
                                                    <p className="">SAWAS works with individual farmers, cooperatives, and market committees to collect agri‑waste. We provide simple collection points – a designated corner of a field or a shed at the local market. Farmers bring waste on their way home or during weekly market days. We segregate at source: dry crop residues (stalks, husks) go to one pile; wet waste (spoiled produce, green leaves) to another; and hazardous or contaminated waste (pesticide containers, plastic) is separated for safe disposal.</p>
                                                    
                                                    <h4 className="font-semibold">Step 2: Shredding and pre‑processing</h4>
                                                    <p className="">Collected waste is transported to a central processing site (or a mobile shredder visits clusters of farms). We use a diesel‑powered or hand‑cranked shredder to reduce bulky stalks and husks into 1–2 cm pieces. This increases surface area for microbial action and makes handling easier. Wet waste is chopped or mashed.</p>
                                                    
                                                    <h4 className="font-semibold">Step 3: Controlled decomposition</h4>
                                                    <p className="">Shredded dry waste and wet waste are mixed at a ratio of roughly 3:1 (carbon to nitrogen). The mixture is piled into long windrows or placed in simple composting bays. We monitor temperature, moisture, and oxygen. The pile is turned every 5–7 days using hand tools or a small tractor. Within 8–12 weeks, the material transforms into stable, odour‑free organic matter.</p>
                                                 
                                                    <h4 className="font-semibold">Step 4: Screening and packaging</h4>
                                                    <p className="">The finished compost is passed through a 10 mm screen to remove large particles (which go back into the next batch). The fine material is bagged in 25 kg or 50 kg sacks, labelled with production date and nutrient content (typical: 1.5–2% nitrogen, 1% phosphorus, 1.5% potassium).</p>
                                                    
                                                    <h4 className="font-semibold"> Table resoure-market value</h4>

                                                    <h4 className="font-semibold">Community impact</h4>
                                                    <ul className="flex">
                                                        <li className="">Farmers and markets reduce waste </li>
                                                        <li className="">Buyers get affordable organic inputs </li>
                                                        <li className="">The environment receives less methane and smoke: lower carbon footprint </li>
                                                        <li className="">SAWAS creates local jobs: collection, shredding, turning, screening, bagging.</li>
                                                    </ul>
                                                 </article>
                                            </div>


                                    </section>*/}


                                                   
                              <Footer/>  
                                   </>
                            )
}