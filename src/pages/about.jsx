import NavBar from "../components/NavBar"
import Header from "../components/contact/header"
import Footer from "../components/footer"


import CTA from "../components/home/CTA"


import aboutImg from "../assets/images/services/market linkage/contract2.jpeg"
import { RiCrop2Line, RiCropFill, RiEye2Line, RiFileAddLine, RiFilePdf2Fill, RiFilePdf2Line, RiFilePdfFill, RiFireLine, RiFocusMode, RiFolderForbidLine, RiLeafLine, RiLiveFill, RiMergeCellsHorizontal, RiMoneyCnyBoxLine, RiMoneyEuroCircleLine, RiPencilLine, RiPlantFill, RiPlantLine, RiRecycleLine, RiSeedlingLine, RiSquareLine, RiStackFill, RiSunFoggyLine, RiSunLine, RiTeamFill, RiToolsFill, RiTrainLine, RiTruckLine, RiUser6Line } from "react-icons/ri"
import { HiArrowsPointingIn, HiEye, HiHeart, HiLifebuoy, HiUserGroup } from "react-icons/hi2"
import { FiTool, FiUsers } from "react-icons/fi"
import { BiCaretUpSquare, BiMoney, BiPlanet } from "react-icons/bi"
import { AiFillMoneyCollect } from "react-icons/ai"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { BsBagDash, BsFillBagXFill } from "react-icons/bs"

import OrgStructure from "../components/about/organisation structure"
import ValueProposition from "../components/about/value proposition"
import SawasParters from "../components/about/sawas partners"

export default function About(){
                               return(
                                      <div className="w-full">
                                         <NavBar/>
                                         <Header page='About Us' pageImg={aboutImg}/>

                                        <section className="w-full pt-10">
                                            <div className="w-full md:w-1/2 space-y-6 my-10 px-5">
                                                <h1 className="text-4xl md:text-5xl font-bold">Who Are We</h1>
                                                <p className=""> We are an innovative Malawian company specializing in agribusiness development, 
                                                               waste management, 
                                                               environmental sustainability, and consultancy services. The company is committed 
                                                               to transforming agricultural and organic waste into valuable resources while 
                                                               empowering communities through sustainable practices
                                                </p>
                                                <p className="">Founded with a strong entrepreneurial vision, SAWAS Ltd operates at the intersection of 
                                                            agriculture, environmental management, and community development.
                                            </p>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
                                                <div className="h-full w-full flex flex-col gap-5">
                                                    <article className="w-full md:w-7/10 text-center bg-amber-00 shadow-md rounded-[5px] py-4 space-y-3">
                                                        <HiEye className="size-6 mx-auto"/>
                                                        <h3 className="font-semibold">Our Vision</h3>
                                                        <p className="">
                                                         To be a leading sustainable agribusiness and environmental solutions provider in Malawi and beyond.
                                                        </p>
                                                    </article>
                                                    <article className="w-full md:w-7/10 text-center bg-yellow-0 shadow-md rounded-[5px] py-4 space-y-3">
                                                        <RiEye2Line className="size-6 mx-auto"/>
                                                        <h3 className="font-semibold">Our Mission</h3>
                                                        <p className="">
                                                         To deliver innovative, eco-friendly, and economically viable solutions in agribusiness and waste 
                                                         management while empowering communities and promoting sustainable development.
                                                        </p> 
                                                    </article>
                                                    <article className="cursor-pointer w-full md:w-7/10 text-center bg-stone-400 shadow-sm md:mt-15 py-2 hover:scale-101 transition-translate duration-500">
                                                        <RiFilePdf2Line className="size-6 mx-auto text-red-900"/>
                                                        <h3>Download our profile</h3>
                                                        
                                                    </article>
                                                </div>

                                                <div className="h-full w-full flex flex-col items-center md:items-end  gap-5">
                                                    <h3 className="self-center font-semibold">Our Core Values</h3>
                                                    <article className="w-full inline-flex gap-3 md:w-7/10 bg-green-50 p-4 rounded-[15px] border-2 border-green-100">
                                                        <HiLifebuoy className="text-green-500 size-6"/>
                                                        <h3>Sustainability</h3>
                                                        
                                                    </article>
                                                    <article className="w-full inline-flex gap-3 md:w-7/10 bg-blue-50 p-4 rounded-[15px] border-2 border-blue-100">
                                                        <FiTool className="text-blue-900 size-6"/>
                                                        <h3>Innovation</h3>
                                                        
                                                    </article>
                                                    <article className="w-full inline-flex gap-3 md:w-7/10 bg-whit -50 p-4 rounded-[15px] border-2 border-gray-100">
                                                        <BiCaretUpSquare className="text-[#0057b8] size-6"/>
                                                        <h3>Integrity</h3>
                                                        
                                                    </article>
                                                    <article className="w-full inline-flex gap-3 md:w-7/10 bg-amber-50 p-4 rounded-[15px] border-2 border-amber-950/10">
                                                        <HiUserGroup className=" text-amber-900 size-6"/>
                                                        <h3>Community Empowerment</h3>
                                                        
                                                    </article>
                                                    <article className="w-full inline-flex gap-3 md:w-7/10 bg-sky-50 p-4 rounded-[15px] border-2 border-sky-100">
                                                        <HiArrowsPointingIn className="text-[#0a2540] size-6"/>
                                                        <h3>Professional Execellence</h3>
                                                        
                                                    </article>
                                                </div>

                                            </div>
                                            {/**Value Proposition */}
                                            <ValueProposition/>
                                        
                                       {/**Organizations Proposition */}
                                       <OrgStructure/>
                                        
                                        {/*Partners section */}
                                        <SawasParters/>
                                     </section>


                                         <CTA/>
                                         <Footer/>

                                      </div>
                               )
}