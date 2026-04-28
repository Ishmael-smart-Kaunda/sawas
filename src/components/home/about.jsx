import garbageImg from "../../assets/images/hero/waste management/garbage.jpeg"

export default function About(){
                                return(
                                        <section className="relative w-full h-70 bg-black/70">
                                            <img src={garbageImg} alt="one stop for all agri-business solutions" 
                                            className=" absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
                                            <div className="absolute top-1/2 translate-y-[-50%] space-y-6 px-5">
                                                <p className="text-jusify md: text-center text-white font-semibold w-full md:w-1/2 mx-auto my-4">
                                                    We turn crop residues into compost, link smallholders to ready 
                                                    markets, and build climate-smart farms. No theories only, field tested solutions that work for Malawi.
                                                </p>
                                            </div>
    
                                        </section >
                                )
}