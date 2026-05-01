import { useState } from "react"
import orgStructure from "../../assets/images/org-structure.png"
import { RiArrowDownBoxFill } from "react-icons/ri"


export default function OrgStructure(){

                            const [isExpanded, setIsExpanded]=useState(false)
                            const toggleExpansion=()=>{
                                setIsExpanded(!isExpanded)
                            }
                             return(
                                    <div className="w-full bg-green-50/50 p-5">
                                        <div className={`${isExpanded ? 'h-0 md:h-200 bg-white' : 'h-20 bg-black/10'} cursor-pointer overflow-hidden  w-full border-2 border-gray-950/5 rounded-xl p-5 my-5 transition-all duration-500`}
                                             onClick={toggleExpansion}
                                        >
                                            <span className="w-full  text-[22px] font-semibold inline-flex items-center justify-between">Organizations Structure <RiArrowDownBoxFill className="" /></span>
                                            <figure className={`${isExpanded ? 'opacity-100' : 'opacity-0'} mt-10 h-20 gap-5 w-full h-fit transition-all duration-500`}>
                                                <img src={orgStructure} className="w-full obgject-cover"/>

                                            </figure>
                                        </div>
                                    </div>
                             )
}