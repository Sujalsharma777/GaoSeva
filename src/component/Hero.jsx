import React from "react";
import Gaumata from "../assets/image/gaumata.jpg";
import logo from "../../public/f-1.jpg";
import GauImgLgo from "../assets/image/1.jpg";

import Form from "./Form";
const Section = () => {
    return (
        <>
            {/*  
                <div className="sm:w-1/2 w-full h-96 border-2 border-rose-900 container m-5 ">
                    <div className=" h-1/2   bg-linear-to-r from-red-300 via-red-500 to-orange-500 grid grid-cols-3 gap-5  p-5">
                        <div>
                            <img
                                src={logo}
                                alt="Image Not Found"
                                className="w-2/3 rounded-full ring-2 ring-white"
                            />
                        </div>
                        <div className="w-40 flex justify-center items-start flex-col  ">

                            <h1 className="font-extrabold text-white text-3xl drop-shadow-black drop-shadow-lg">
                                गौ सेवा टीम
                            </h1>
                            <hr className="text-white" />
                            
                            < hr className="text-white font-bold m-2" />
                            <h1 className="text-center   font-bold text-white tracking-widest text-md">
                                आचार्य धर्मेश महाराज उज्जैन
                            </h1>
                        </div>
                        <div>
                            <div className=""><img src={GauImgLgo} alt="" className="ring-2 ring-amber-800 rounded-4xl" /></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div > */}
            <div
                id="thanks"
                className="w-lvh sm:w-full h-full flex justify-center mt-5     ">

                <div class="bg-white grid gap-5 items-center justify-center  min-h-screen p-4">
                    <div className="max-w-md w-full border border-red-600 rounded-[40px]  gap-0 bg-white overflow-hidden">
                        <div className="h-50 flex flex-col bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-t-[40px] md:rounded-l-[40px] md:rounded-tr-none  ">
                            <div className="flex items-center pt-5 mb-4">
                                <img alt="Logo Not Found" className="w-30 h-30 rounded-full border-2 border-white" height="60 " src={logo} />
                                <h1 className="text-white font-montserrat font-extrabold text-3xl ml-3 leading-tight" >
                                    गौ सेवा टीम
                                    <p className="text-white text-lg font-extrabold ">
                                        संस्थापक <span className="text-yellow-400">आचार्य धर्मेश महाराज </span>उज्जैन
                                    </p>
                                </h1>
                            </div>

                        </div>
                        <div className="justify-between p-6 ">
                            <div className="flex justify-center mb-4">
                                <img alt="Portrait photo of Amit Shah wearing dark blue traditional attire with white background" className="w-28 h-28 rounded-full border-2 border-orange-600 object-cover" height="120" src="https://storage.googleapis.com/a1aa/image/62dd7fe2-59b0-455d-e751-07b173df41d4.jpg" width="120" />
                            </div>
                            <div className="flex flex-col space-y-2 text-sm text-gray-900 font-semibold">
                                <div className="flex justify-between">
                                    <span>
                                        Name :
                                    </span>
                                    <span>
                                        Amit Shah
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        City
                                    </span>
                                    <span>
                                        Gujarat
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        Mobile Number :
                                    </span>
                                    <span>
                                        70***0003
                                    </span>
                                </div>
                            </div>

                            <div className="mt-10 flex justify-center items-center gap-5">
                                <div>
                                    <img alt="" class="w-42 h-auto border border-red-600" src="https://storage.googleapis.com/a1aa/image/eccd9f0c-1d15-46ff-6ec9-dcc2c5f8b5c0.jpg" width="70" />
                                </div>
                                <div className="text-black text-lg font-extrabold ">
                                    <p>गौ माता की सेवा करें, समृद्धि और संस्कृति विकास का हिस्सा बने | <br /><span className="font-bold">"सेव करें"</span></p>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="flex gap-3 text-center justify-center">
                        <div className="bg-orange-500 p-2 border-orange-700 w-30 h-auto cursor-pointer hover:bg-orange-400">Share</div>
                        <div className="bg-orange-500 p-2 border-orange-700 w-30 h-auto cursor-pointer hover:bg-orange-400">Download</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section;
