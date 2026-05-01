import { GiFarmTractor, GiMaze, GiPlantRoots, GiTrefoilLily } from "react-icons/gi"
import serviceImg from "../../assets/images/hero/agribusiness/farm2.jpeg"

import AgriDevlopment from "./agribusiness development"
import AgriConsultancy from "./agribusiness consultancy"
import AgriExtension from "./agri extention"
import MarketLinkage from "./market linkage"
import AgriWaste from "./agri waste"




import { Link } from "react-router-dom"
import CTA from "./CTA"
import { MdAgriculture, MdOutlineWaterDrop } from "react-icons/md"
import { FiArrowRight } from "react-icons/fi"

export default function Services(){
                       return(
                              <section className="w-full mt-20 ">
                                {/*agribusiness development */}
                                <AgriDevlopment/>

                                {/*agribusiness consultancy */}
                                <AgriConsultancy/>

                                 {<CTA/>}

                                {/** Agri Extension services */}
                                <AgriExtension/>

                                {/** Market place services */}
                                 <MarketLinkage/>
                                
                                {/** Agri waste services */}
                                <AgriWaste/>
                                
                                

                                




                                 
                              
                              </section>
                       )
}