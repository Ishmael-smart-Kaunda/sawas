import { RiEye2Line } from "react-icons/ri";
import communityOrgPartner from "../../assets/images/sawas partners/community-org.png"
import devPartner from "../../assets/images/sawas partners/dev-partners.png"
import agriStakeHolderPartner from "../../assets/images/sawas partners/agri-stakeholders.png"
import MarketPartner from "../../assets/images/sawas partners/market-actors.png"


export default function SawasParters(){
                                    return(
                                         <div className="w-full bg-green-50/50 p-5">
                                            <h3 className="text-[22px] font-semibold py-5">Our Partners</h3>
                                            <div className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden gap-5">
                                                
                                                        <figure className="relative w-100 shrink-0 py-4">
                                                            <img src={communityOrgPartner} alt="Local organizations and community groups" className="scale-50 obgect-cover"/>
                                                            <figcaption className="absolute top-50 left-1/2 translate-x-[-50%] text-center italic font-semibold">Local organizations and community groups</figcaption>
                                                        </figure>
                                                        <figure className="relative w-100 shrink-0 py-4">
                                                            <img src={agriStakeHolderPartner} alt="Agricultural stakeholders, including Farmer Organisations" className="scale-50 obgect-cover"/>
                                                            <figcaption className="absolute top-50 text-center italic font-semibold">Agricultural stakeholders, including Farmer Organisations</figcaption>
                                                        </figure>
                                                        
                                                        <figure className="relative w-100 h-50 shrink-0  py-4">
                                                            <img src={devPartner} alt="Development partners" className="scale-60 obgect-cover"/>
                                                            <figcaption className="absolute top-50 left-1/2 translate-x-[-50%] text-center italic font-semibold">Development partners</figcaption>
                                                        </figure>
                                                        <figure className="relative w-100 h-50 shrink-0  py-4">
                                                            <img src={MarketPartner} alt="Market actors across value chains" className="scale-60 obgect-cover"/>
                                                            <figcaption className="absolute top-50 left-1/2 translate-x-[-50%] text-center italic font-semibold">Market actors across value chains</figcaption>
                                                        </figure>
                                                        

                                            </div>
                                        </div>
                                    )
}