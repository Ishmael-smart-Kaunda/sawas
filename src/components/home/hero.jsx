import { Link } from "react-router-dom"
import farmImage1 from "../../assets/images/hero/agribusiness/farm1.jpeg"
import farmImage2 from "../../assets/images/hero/agribusiness/farm2.jpeg"
import farmImage3 from "../../assets/images/hero/agribusiness/farm3.jpeg"
import consultImage1 from '../../assets/images/hero/cleaning/office1.jpeg'

export default function Hero(){
                               return(
                                       <div className="hero w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-5 py-15 mt-10 md:mt-18 min-h-[90vh] bg-gadient-to-r from-green-500 to-blue-500">
                                             <div className=" grid grid-cols-1 md:grid-cols-2 grid-row-2 gap-3 rounded-xl">
                                                    <div className="a1 w-full h-full bg-white rounded-full">
                                                        <img src={farmImage3} alt="plant with us" className="object-cover w-full h-full rounded-full"/>

                                                    </div>
                                                    <div className="b1 hidden w-9/10 h-full bg-blue-400 rounded-full translate-x-[10%]">
                                                        
                                                    </div>
                                                    <div className="a2  w-full h-full bg-blue-600 rounded-full translate-y-[-10%]">
                                                          <img src={consultImage1} alt="plant with us" className="hidden md:block object-cover w-full h-full rounded-full"/>
                                                    </div>
                                                    <div className="b2 hidden w-9/10 h-full bg-blue-900 rounded-full">
                                                       
                                                        
                                                    </div>
                                            </div>
                                            <div className="w-full md:h-7/10 md:m-auto  pl-2 space-y-4 md:mt-[20%] text-black text-center md:text-left">
                                                  <div className="inline-flex gap-3 ">
                                                             <p className="pb-1 px-3 rounded-sm bg-black/30 text-amber-400 text-[14px] w-fit">Farms</p>
                                                             <p className="pb-1 px-3 rounded-sm bg-black/30 text-amber-400 text-[14px] w-fit">Trainings</p>
                                                             <p className="pb-1 px-3 rounded-sm bg-black/30 text-amber-400 text-[14px] w-fit">Markets</p>
                                                             <p className="pb-1 px-3 rounded-sm bg-black/30 text-amber-400 text-[14px] w-fit">Composites</p>
                                                  </div>
                                                  <h1 className="text-4xl font-bold uppercase">Sustainable Agribusiness and Waste Management <br/> Solutions</h1>
                                                  <p className="">Transforming agricultural waste into value- empowering Malawian farmers and communities with practical, eco-friendly solutions.</p>
                                                  <div className=" inline-flex gap-3 w-full text-white font-semibold">
                                                       <Link to='/services' className="cursor-pointer w-full md:w-3/10 py-2 text-center bg-green-600 rounded-sm">Explore</Link>
                                                       <Link to='/contact' className="cursor-pointer w-full md:w-2/10 py-2 text-center bg-blue-600 rounded-sm" > Contact Us</Link>
                                                  </div>

                                            </div>
                                            
                                       </div>
                               )
}