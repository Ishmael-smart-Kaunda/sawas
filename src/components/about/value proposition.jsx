import { RiCrop2Line, RiCropFill, RiEye2Line, RiFileAddLine, RiFilePdf2Fill, RiFilePdf2Line, RiFilePdfFill, RiFireLine, RiFocusMode, RiFolderForbidLine, RiLeafLine, RiLiveFill, RiMergeCellsHorizontal, RiMoneyCnyBoxLine, RiMoneyEuroCircleLine, RiPencilLine, RiPlantFill, RiPlantLine, RiRecycleLine, RiSeedlingLine, RiSquareLine, RiStackFill, RiSunFoggyLine, RiSunLine, RiTeamFill, RiToolsFill, RiTrainLine, RiTruckLine, RiUser6Line } from "react-icons/ri"
import { HiArrowsPointingIn, HiEye, HiHeart, HiLifebuoy, HiUserGroup } from "react-icons/hi2"
import { FiTool, FiUsers } from "react-icons/fi"
import { BiCaretUpSquare, BiMoney, BiPlanet } from "react-icons/bi"
import { AiFillMoneyCollect } from "react-icons/ai"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { BsBagDash, BsFillBagXFill } from "react-icons/bs"


export default function ValueProposition(){

                           
                            
                             return(
                                     <div className="w-full px-5 py-10 bg-green-50/50 mt-5">
                                            <h3 className="font-semibold text-[22px] my-5">Value Proposition</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                                <article className="w-full md:w-7/10 place-self-center border border-emerald-600/30 py-5 px-2 space-y-4">
                                                        
                                                        <h3  className="font-semibold">Integrated business approach</h3>
                                                        <ul className="p-2 text-sm flex flex-col">
                                                            <li className="inline-flex gap-1 "><RiSeedlingLine className="size-4 text-green-700"/> Agriculture</li> 
                                                            <li className="inline-flex gap-1"><RiLeafLine className="size-4 text-emerald-900"/> Environment</li> 
                                                            <li className="inline-flex gap-1 "><FaMoneyBillTrendUp className="size-4 text-amber-900"/> Business</li> 
                                                            
                                                        </ul>
                                                        
                                                </article>
                                                <article className="w-full md:w-7/10 place-self-center border border-emerald-600/30 py-5 px-2 space-y-4">
                                                        
                                                        <h3  className="font-semibold">Focus on smallholder farmers</h3>
                                                        <ul className="p-2 text-sm flex flex-col">
                                                            <li className="inline-flex gap-1 "><RiPencilLine className="size-4 text-ambe-950"/> Empowerment</li> 
                                                            <li className="inline-flex gap-1 "><RiFileAddLine className="size-4 text-amber-950"/> Training</li> 
                                                            <li className="inline-flex gap-1 "><BsBagDash className="size-4 text-amber-900"/> Production support</li> 
                                                            
                                                        </ul>
                                                        
                                                </article>
                                                    <article className="w-full md:w-7/10 place-self-center border border-emerald-600/30 py-5 px-2 space-y-4">
                                                        
                                                        <h3  className="font-semibold">Emphasis on sustainability & circular economy</h3>
                                                        <ul className="px-2 text-sm">
                                                            <li className="inline-flex gap-1 "><RiSunFoggyLine className="size-4 text-ambe-950"/> Climate-smart agriculture</li> 
                                                            <li className="inline-flex gap-1 "><RiRecycleLine className="size-4 text-blue-900"/>Agri-waste recycling</li> 
                                                            <li className="inline-flex gap-1 "><RiFireLine className="size-4 text-amber-900"/> Productivity improvement</li> 
                                                            
                                                        </ul>
                                                        
                                                </article>
                                                    <article className="w-full md:w-7/10 place-self-center border border-emerald-600/30 py-5 px-2 space-y-4">
                                                        
                                                        <h3  className="font-semibold">Practical, field-based solutions </h3>
                                                        <ul className="px-2 text-sm">
                                                            <li className="inline-flex gap-1 "><RiSunLine className="size-4 text-ambe-950"/> Drought Resistant Crops</li> 
                                                            <li className="inline-flex gap-1 "><RiSquareLine className="size-4 text-blue-900"/>Market ready produce</li> 
                                                            <li className="inline-flex gap-1 "><RiMoneyEuroCircleLine className="size-4 text-amber-900"/> Cost efficient methods</li> 
                                                            
                                                        </ul>
                                                        
                                                </article>
                                            </div>
                                        </div>
                             )
}