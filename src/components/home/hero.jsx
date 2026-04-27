import farmImage1 from "../../assets/images/hero/agribusiness/farm1.jpeg"
import farmImage2 from "../../assets/images/hero/agribusiness/farm2.jpeg"
import farmImage3 from "../../assets/images/hero/agribusiness/farm3.jpeg"
import consultImage1 from '../../assets/images/hero/cleaning/Office1.jpeg'

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
                                            <div className="w-full md:h-7/10 md:m-auto  pl-2 space-y-4 md:mt-[25%] text-black text-center md:text-left">
                                                  <div className="inline-flex gap-3 ">
                                                             <p className="py px-3 rounded-lg bg-black/10 text-amber-400 text-[16px] w-fit">Farms</p>
                                                             <p className="py- px-3 rounded-lg bg-black/10 text-amber-400 text-[16px] w-fit">Trainings</p>
                                                  </div>
                                                  <h1 className="text-4xl font-bold ">AGRICULTURE AND WASTE MANAGEMENT SOLUTIONS</h1>
                                                  <p className="">A leading provider of sustainable agribusiness and environmental <br/> soliutions in Malawi and beyond</p>
                                                  <div className=" inline-flex gap-3 w-full text-white font-semibold">
                                                        <button className="cursor-pointer w-full md:w-4/10 p-3 bg-green-600 rounded-sm">Explore</button>
                                                        <button className="cursor-pointer w-full md:w-3/10 px-3 py-1 bg-blue-600 rounded-sm">Contact Us</button>
                                                  </div>

                                            </div>
                                            
                                       </div>
                               )
}