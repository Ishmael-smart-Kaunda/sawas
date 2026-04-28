import CTAimg from "../../assets/images/hero/consultancy/consult1.jpeg"

export default function CTA(){
                           return(
                                   <section className="relative w-full h-90 bg-black/70">
                                        <img src={CTAimg} alt="one stop for all agri-business solutions" 
                                        className=" absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
                                        <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] space-y-6 px-5">
                                            <p className="text-jusify md: text-center text-yellow-700 text-[20px] font-semibold w-full md:w-1/2 mx-auto my-4">
                                                Ready to grow your agribusiness or turn waste into profit? Let's talk
                                            </p>
                                            <div className=" flex flex-col justify-between md:flex-row gap-3 w-full md:w-fit mx-auto text-white font-semibold">
                                                        <button className="cursor-pointer w-full md:w-[250px] p-3 border border-white/60 rounded-sm">Get Agri-business right</button>
                                                        <button className="cursor-pointer w-full md:w-[250px] p-3  bg-blue-600 rounded-sm hover:bg-blue-700">Contact Us</button>
                                            </div>
                                        </div>

                                    </section >
                           )
}