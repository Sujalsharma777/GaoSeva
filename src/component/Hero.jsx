import React from "react";

import logo from "../../public/f-1.jpg";


const Hero = () => {
    return (
        <>

            <div style={{ backgroundImage: `url(${image})` }} className="bg-no-repeat bg-top bg-size-[1000px] sm:bg-size-[1500px]">
                <div className="bg-linear-to-t from-rose-900 to-rose-0 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center flex-col *:p-5">
                        <div>
                            <img src={logo} alt="logo not found" className="w-36 h-auto rounded-full ring-8 ring-white shadow-xl shadow-black" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-extrabold drop-shadow-lg drop-shadow-black text-white">गौ सेवा टीम</h1>
                        </div>
                    </div>


                    <section className="bg-white p-10 rounded-t-4xl w-3/4 sm:w-1/2">
                        <form method=" https://script.google.com/macros/s/AKfycbz1xKHxoCuDjQNy3JUS-FCgMQlJxCLodqBmcNu-ZWRGihuFjFEqdddsT9u0SNH1g6TPzw/exec   " onSubmit={handleEvent} className="grid grid-rows-5 gap-10">



                            <div>
                                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">नाम</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="आदिनाथ शंकर शर्मा"
                                    required
                                    value={formValues.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md px-3 py-1.5 text-base"
                                />
                            </div>
                            <div>
                                <label htmlFor="mobileNo" className="block text-sm/6 font-medium text-gray-900">मोबाइल नंबर</label>
                                <input
                                    id="mobileNo"
                                    name="mobileNo"
                                    type="tel"
                                    placeholder="8717487898"
                                    required
                                    value={formValues.mobileNo}
                                    onChange={handleChange}
                                    className="block w-full rounded-md px-3 py-1.5 text-base"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">पता</label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    required
                                    value={formValues.address}
                                    onChange={handleChange}
                                    placeholder=" नागदा, मध्य प्रदेश, 452001"
                                    className="block w-full rounded-md px-3 py-1.5 text-base"
                                />
                            </div>
                            <div>
                                <textarea
                                    maxLength={100}
                                    name="message"
                                    id="message"
                                    value={formValues.message}
                                    onChange={handleChange}
                                    placeholder="पशु के प्रति अपने विचार"
                                    className="block w-full rounded-md px-3 py-1.5 text-base"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    id="Btn"
                                    type="submit"
                                    className="w-full rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-green-500"
                                >
                                    जमा करना
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>


        </>
    );
};

export default Hero;
