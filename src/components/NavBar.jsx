import { FaArrowDown91, FaArrowDown, FaArrowDownAZ } from "react-icons/fa6"
import { RiArrowDropDownLine, RiMenu3Line } from "react-icons/ri"
import { FiArrowDown } from "react-icons/fi"

import { NavLink } from "react-router"
import { Link } from "react-router"
import { useState } from "react"



const NavBar = ()=>{

                const [isOpen, setIsOpen] =useState(false)
                const toggleOpen =()=>{
                    setIsOpen(!isOpen)
                }
                
                {/*stte for mobile nav accordion */}
                const [isExpanded, setIsExpanded]=useState(null)
                const toggleExpansion =(servicesCategory)=>{
                      
                     setIsExpanded(isExpanded===servicesCategory ? null : servicesCategory)
                    console.log(servicesCategory)
                }



                 return(
                     <>
                           
                        <div className="
                                       nav-bar 
                                       fixed
                                       w-full
                                       max-w-[1440px]
                                       top-0
                                       
                                       
                                       flex flex-col 
                                       justify-between 
                                       items-center 
                                      
                                       shadow-sm
                                       bg-black
                                       text-white
                                       z-1000
                                       "
                                       >
                            <div className="inline-flex justify-between w-full px-5 py-2">
                                   <NavLink to="/">
                                     <span className="text-green-600">SAWAs Limited</span>
                                    </NavLink>
                                  <div className="hidden md:inline-flex gap-10 text-yellow-600 font-bold">
                                    <NavLink  to="/about" className='border border-black/0 px-5 py-1'>About Us</NavLink>
                                    <NavLink to="/contact" className='text-white px-5 py-1 bg-green-700 rounded-md'>Contact</NavLink>
                                  </div>

                                  <RiMenu3Line onClick={toggleOpen} className="cursor-pointer md:hidden size-6"/>
                            </div>
                            {/*wider screen nav */}
                            < div className="hidden md:inline-flex justify-between w-full bg-green-950 text-gray-100 text-[16px] self-end py-1 px-5">
                               
                               <div  className='group relative'>
                                    <p 
                                    
                                    className='cursor-pointer z-50 flex flex-col items-center
                                    group-hover:bg-white/7 py- rounded-sm px-1'>
                                   
                                        Agribusiness Development
                                        
                                        <RiArrowDropDownLine className="size-5 group-hover:rotate-180 transition-all duration-500"/>
                                    </p>
                                    
                                    <ul className="absolute top-full flex flex-col left-[%] text-centr text-black invisible space-y-2 z-50 font-normal rounded-sm translate-x- -mt-2 opacity-0 
                                                   group-hover:opacity-100 group-hover:mt-3 group-hover:visible bg-green-50 w-fit  h-fit p-2 translate-all duration-500">
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Establishment of smallholder farmer cooperatives</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Agribusiness training and capacity building</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Farm management and production support</Link>
 
                                    </ul>
                                </div>

                                <div  className='group relative'>
                                    <p 
                                    
                                    className='cursor-pointer z-50 flex flex-col items-center
                                    group-hover:bg-white/7 py- px-5 rounded-sm'>
                                   
                                        Agribusiness Consultancy
                                        
                                        <RiArrowDropDownLine className="size-5 group-hover:rotate-180 transition-all duration-500"/>
                                    </p>
                                    
                                    <ul className="absolute top-full flex flex-col left-[-%] text-centr text-black invisible space-y-2 z-50 font-normal rounded-sm translate-x- -mt-2 opacity-0 
                                                   group-hover:opacity-100 group-hover:mt-3 group-hover:visible bg-green-50 w-fit  h-fit p-2 translate-all duration-500">
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Business planning and advisory services</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Value chain development</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Market research and feasibility studies</Link>
                                      

                                    </ul>
                                </div>

                                <div  className='group relative'>
                                    <p 
                                    
                                    className='cursor-pointer z-50 flex flex-col items-center
                                    group-hover:bg-white/7 py- px-5 rounded-sm'>
                                        Agricultural Extension Services
                                        <RiArrowDropDownLine className="size-5 group-hover:rotate-180 transition-all duration-500"/>
                                    </p>
                                    
                                    <ul className="absolute top-full flex flex-col text-centr text-black invisible space-y-2 font-normal rounded-sm translate-x- -mt-2 opacity-0 
                                                   group-hover:opacity-100 group-hover:mt-3 group-hover:visible bg-green-50 w-fit  h-fit p-2 translate-all duration-500">
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Professional extension support to farmers</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Climate-smart agriculture practices</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Productivity improvement programs</Link>
                                        
                                    </ul>
                                </div>

                                <div  className='group relative'>
                                    <p 
                                    
                                    className='cursor-pointer z-50 flex flex-col items-center
                                    group-hover:bg-white/7 py- px-5 rounded-sm'>
                                   
                                         Market Linkage
                                        
                                        <RiArrowDropDownLine className="size-5 group-hover:rotate-180 transition-all duration-500"/>
                                    </p>
                                    
                                    <ul className="absolute top-full flex flex-col text-centr text-black invisible space-y-2 z-50 font-normal rounded-sm translate-x- -mt-2 opacity-0 
                                                   group-hover:opacity-100 group-hover:mt-3 group-hover:visible bg-green-50 w-fit  h-fit p-2 translate-all duration-500">
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Connecting farmers to markets</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Facilitating contract farming arrangements</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Partnering with buyers and institutions</Link>
                                     
                                    </ul>                                         

                                </div>

                                <div  className='group relative'>
                                    <p 
                                    
                                    className='cursor-pointer z-50 flex flex-col items-center
                                    group-hover:bg-white/7 py- px-5 rounded-sm'>
                                   
                                         Waste Management
                                        
                                        <RiArrowDropDownLine className="size-5 group-hover:rotate-180 transition-all duration-500"/>
                                    </p>
                                    
                                    <ul className="absolute top-full text-centr text-black flex flex-col invisible space-y-2 z-50 font-normal rounded-sm translate-x- -mt-2 opacity-0 
                                                   group-hover:opacity-100 group-hover:mt-3 group-hover:visible bg-green-50 w-fit  h-fit p-2 translate-all duration-500">
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Agri-waste recycling and processing</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Compost production and organic inputs</Link>
                                        <Link to='/services' className="cursor-pointer hover:text-emerald-700">Environmental cleaning and sanitation services</Link>
                                     
                                    </ul>                                         

                                </div>
                                                                              
                                {
                                    /*<NavLink to="#projects" 
                                    
                                    className='flex flex-col items-center -space-y-1
                                    hover:bg-white/8 py- px-5 rounded-sm'>
                                    <li
                                    className=''                   
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById("projects")
                                                    ?.scrollIntoView({ behavior: "smooth" });
                                                }}                             
                                    >
                                        Waste Management
                                        </li>
                                        <RiArrowDropDownLine className="size-5"/>
                                    </NavLink>*/
                                }             
                            </div>
                     
                        </div>
                         {/* mobile menu */}
                        <nav className={`${isOpen ? 'top-10 opacity-100': 'translate-y-[-150%] opacity-0'} fixed z-1000 transition-all duration-500  flex flex-col gap-5 md:hidden p-5 w-full min-h-[100vh] text-[17px] text-green-50 bg-black border-t border-t-white/30`}>
                            <NavLink to="/">Home</NavLink>
                               Our Services
                              <div className="px-4 space-y-7 text-[17px] ">
                                <div className={`${isExpanded===1? 'h-fit':'h-8'} overflow-hidden pr-2`}>
                                    <NavLink to="/" className='text-green-50 inline-flex' onClick={()=>toggleExpansion(1)}>Agri-business services <RiArrowDropDownLine className={`${isExpanded===1?'-rotate-180':'-rotate-90'} transtion-all duration-500 size-6.5`}/></NavLink>
                                    <ul className={`left-[-15%] text-centr text- space-y-2 font-normal rounded-sm translate-x- mt-2
                                                    ${isExpanded===1?'opacity-100 ml-1':'opacity-50 ml-20'}  bg-green-500 text-black w-full p-2 translate-all duration-500`}>
                                            <Link to='/services' className="cursor-pointer hover:text-white/70">Establishment of smallholder farmer cooperatives</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/70">Agribusiness training and capacity building</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/70">Farm management and production support</Link>
                                            
                                        </ul>
                                </div>

                                <div className={`${isExpanded===2? 'h-fit':'h-8'} overflow-hidden pr-3`}>
                                    <NavLink to="/" className='inline-flex' onClick={()=>toggleExpansion(2)}>Agribusiness Consultancy <RiArrowDropDownLine className={`${isExpanded===2?'-rotate-180':'-rotate-90'} transtion-all duration-500 size-6.5`}/></NavLink>
                                    <ul className={`left-[-15%] text-centr text- space-y-2 font-normal rounded-sm translate-x- mt-2
                                                    ${isExpanded===2?'opacity-100 ml-1':'opacity-50 ml-20'} bg-green-500 text-black w-full p-2 translate-all duration-500`}>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Business planning and advisory services</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Value chain development</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Market research and feasibility studies</Link>
                                                                                                     
                                        </ul>
                                </div>
                             
                                <div className={`${isExpanded===3? 'h-fit':'h-8'} overflow-hidden pr-2`}>
                                    <NavLink to="/" className='inline-flex' onClick={()=>toggleExpansion(3)}>Agricultural Extension Services <RiArrowDropDownLine className={`${isExpanded===3?'-rotate-180':'-rotate-90'} transtion-all duration-500 size-6.5`}/></NavLink>
                                    <ul className={`left-[-15%] text-centr text- space-y-2 font-normal rounded-sm translate-x- mt-2
                                                    ${isExpanded===3?'opacity-100 ml-1':'opacity-50 ml-20'} bg-green-500 text-black w-full p-2 translate-all duration-500`}>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Professional extension support to farmers</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Climate-smart agriculture practices</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Productivity improvement programs</Link>
                                        </ul>
                                </div>
                                <div className={`${isExpanded===4? 'h-fit':'h-8'} overflow-hidden pr-2`}>
                                    <NavLink to="/" className='inline-flex' onClick={()=>toggleExpansion(4)}>Market Linkages<RiArrowDropDownLine className={`${isExpanded===4?'-rotate-180':'-rotate-90'} transtion-all duration-500 size-6.5`}/></NavLink>
                                    <ul className={`left-[-15%] text-centr text- space-y-2 font-normal rounded-sm translate-x- mt-2
                                                    ${isExpanded===4?'opacity-100 ml-1':'opacity-50 ml-20'} bg-green-500 text-black w-full p-2 translate-all duration-500`}>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Connecting farmers to reliable markets</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Facilitating contract farming arrangements</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Partnerships with buyers and institutions</Link>
                                        </ul>
                                </div>
                                <div className={`${isExpanded===5? 'h-fit':'h-8'} overflow-hidden pr-2`}>
                                    <NavLink to="/" className='inline-flex' onClick={()=>toggleExpansion(5)}>Waste Management<RiArrowDropDownLine className={`${isExpanded===5?'-rotate-180':'-rotate-90'} transtion-all duration-500 size-6.5`}/></NavLink>
                                    <ul className={`left-[-15%] text-centr text- space-y-2 font-normal rounded-sm translate-x- mt-2
                                                    ${isExpanded===5 ?'opacity-100 ml-1':'opacity-50 ml-20'} bg-green-500 text-black w-full p-2 translate-all duration-500`}>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Agri-waste recycling and processing</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Compost production and organic inputs</Link>
                                            <Link to='/services' className="cursor-pointer hover:text-white/60 translate-all duration-500">Environmental cleaning and sanitation services</Link>                                         
                                                                                  
                                        </ul>
                                </div>
                            </div>                                                                                      

                                                                            







                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                        </>
                 )
}
export default NavBar