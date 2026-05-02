import { RiEye2Line } from "react-icons/ri";
import communityOrgPartner from "../../assets/images/sawas partners/community-org.png"
import devPartner from "../../assets/images/sawas partners/dev-partners.png"
import agriStakeHolderPartner from "../../assets/images/sawas partners/agri-stakeholders.png"
import MarketPartner from "../../assets/images/sawas partners/market-actors.png"
import { useEffect, useState } from "react";


    const sawasPartners=[
                         {
                            id:0,
                            partnerName:'Local organizations and community groups',
                            partnerLogo:communityOrgPartner,
                         },
                         {
                            id:1,
                            partnerName:'Agricultural stakeholders, including Farmer Organisations',
                            partnerLogo:devPartner,
                         },
                         {
                            id:2,
                            partnerName:'Development partners',
                            partnerLogo:agriStakeHolderPartner,
                         },
                         {
                            id:3,
                            partnerName:'Market actors across value chains',
                            partnerLogo:MarketPartner,
                         },
    ]


export default function SawasParters(){

                                    const [partnerIndex, setPartnerIndex]=useState(0)
                                    const handleNextPartner =()=>{
                                          setPartnerIndex((prevIndex)=>{
                                            return((prevIndex+1) % sawasPartners.length)
                                        }
                                        );
                                          console.log(partnerIndex);
                                    }
                                    const partnerLogo=sawasPartners[partnerIndex].partnerLogo
                                    const partnerTitle=sawasPartners[partnerIndex].partnerName
                                    useEffect(()=>{
                                         const intervalId=setInterval(handleNextPartner,10000)
                                         return ()=>clearInterval(intervalId)
                                    },[partnerLogo, partnerIndex])

                                    return(
                                         <div className="w-full bg-green-50/50 p-5">
                                            <h3 className="text-[22px] font-semibold py-5">Our Partners</h3>
                                            <div className="w-full inline-flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden py-5"> 
                                                 
                                                {sawasPartners.map((partner)=>{
                                                    return(
                                                            <figure key={partner.id} className="relative w-100 shrink-0 py-4">
                                                                <img src={partner.partnerLogo} alt="Local organizations and community groups" className="scale-50 obgect-cover"/>
                                                                <figcaption className="absolute top-50 left-1/2 translate-x-[-50%] text-center italic font-semibold">{partner.partnerName}</figcaption>
                                                            </figure>
                                                    )
                                                })}

                                               {/* <figure  className="relative w-full py-4">
                                                                <img src={partnerLogo} alt="Local organizations and community groups" className="scale-50 obgect-cover"/>
                                                                <figcaption className="absolute translate-y-[-50%] md:left-1/2 md:translate-x-[-50%] text-center italic font-semibold">{partnerTitle}</figcaption>
                                                </figure>*/}
                                            </div>
                                            
                                        </div>
                                    )
}