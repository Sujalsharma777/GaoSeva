import React, { useEffect, useRef, useState } from "react";
import logo from '../../public/f-1.jpg'
import img from '../assets/image/0.jpg'
import { NavLink } from "react-router";
import Addimg from '../assets/image/AddImga.png';

const MyForm = () => {
    const formRef = useRef(null);
    const [showThanks, setShowThanks] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const btn = document.getElementById("Btn")
    // Check localStorage on load
    useEffect(() => {
        const submitted = localStorage.getItem("formSubmitted");
        if (submitted === "true") {
            setHasSubmitted(true);
            btn.disabled = true;

        }
    }, []);

    const handleEvent = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        fetch("https://sheetdb.io/api/v1/s90o84c7j21e2", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Submission failed");
                }
                return response.json();
            })
            .then(() => {

                localStorage.setItem("formSubmitted", "true"); // ✅ Save flag
                setHasSubmitted(true); // ✅ Hide form, show thanks
                setShowThanks(true);
                btn
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                alert("Submission failed. Please try again.");
            });
    };
    const image = img;

    return (
        <>
            {!hasSubmitted && (
                <div style={{ backgroundImage: `url(${image})` }} className="bg-no-repeat bg-top bg-size-[1000px] sm:bg-size-[1500px]  ">

                    <div className="bg-linear-to-t from-rose-900 to-rose-0 flex flex-col  justify-center items-center  ">

                        <div className=" flex justify-center items-center flex-col   *:p-5 ">
                            <div >
                                <img src={logo} alt="logo not found " className="w-36 h-auto rounded-full ring-8 ring-white shadow-xl shadow-black" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold drop-shadow-lg drop-shadow-black  text-white ">गौ सेवा टीम</h1>
                            </div>
                        </div>



                        <section
                            id="form-Section"
                            className="bg-white p-10 rounded-t-4xl w-3/4 sm:w-1/2  "
                        >
                            <form
                                id="sheetdb-form"
                                ref={formRef}
                                onSubmit={handleEvent}
                                className="grid grid-rows-5 gap-10 ">

                                <div className="flex justify-center">
                                    <div className="w-28 h-28 rounded-full border-2 border-orange-600 object-cover">

                                        <img src={Addimg} alt="" />
                                        <input type="file" name="userimage" className="pt-1 font-bold" required />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm/6 font-medium text-gray-900">
                                        नाम
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="data[name]"
                                            type="text"
                                            placeholder="आदिनाथ शंकर शर्मा"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="mobileNo"
                                        className="block text-sm/6 font-medium text-gray-900">
                                        मोबाइल नंबर
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="mobileNo"
                                            name="data[mobileNo]"
                                            type="tel"
                                            placeholder="8717487898"
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div>

                                    <label htmlFor="Address" className="block text-sm/6 font-medium text-gray-900">
                                        पता
                                    </label>


                                    <div className="mt-2">
                                        <input
                                            id="Address"
                                            name="data[Address]"
                                            type="text"
                                            required
                                            placeholder='12/1, मेन रोड, नागदा, मध्य प्रदेश, 452001'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <textarea
                                        maxLength={100}
                                        name="data[Message]"
                                        id="Message"
                                        placeholder="पशु के प्रति अपने विचार"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"></textarea>
                                </div>
                                <div>

                                    <button
                                        id="Btn"
                                        variant="contained"
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    >

                                        जमा करना
                                    </button>
                                </div>
                            </form>
                        </section >
                    </div>
                </div>

            )}
            {showThanks && (

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


            )}
        </>
    );
};

export default MyForm;
