import React, { useEffect, useRef, useState } from "react";
import logo from '../../public/f-1.jpg';
import img from '../assets/image/0.jpg';
import { NavLink } from "react-router";
import Addimg from '../assets/image/AddImga.png';

const MyForm = () => {
    const formRef = useRef(null);
    const [showThanks, setShowThanks] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const btn = document.getElementById("#Btn")


    const [formValues, setFormValues] = useState({
        name: "",
        mobileNo: "",
        address: "",
        message: "",
        userImage: null,
    });

    useEffect(() => {
        const submitted = localStorage.getItem("formSubmitted");
        if (submitted === "true") {
            setHasSubmitted(true);
            setShowThanks(true);
        }
    }, []);


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleEvent = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        fetch("https://sheetdb.io/api/v1/s90o84c7j21e2", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) throw new Error("Submission failed");
                return response.json();
            })
            .then(() => {
                localStorage.setItem("formSubmitted", "true");
                setHasSubmitted(true);
                btn.setAttribute('disabled', true);

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
                            <form ref={formRef} onSubmit={handleEvent} className="grid grid-rows-5 gap-10">
                                <div className="flex justify-center">
                                    <div className="w-28 h-28 rounded-full border-2 border-orange-600 overflow-hidden">
                                        <div className="flex justify-center mb-4">
                                            <label for="actual-btn">
                                                <img


                                                    className="w-28 h-28 rounded-full border-2 border-orange-600 object-cover"
                                                    alt="User Image"
                                                    src={formValues.userImage ? URL.createObjectURL(formValues.userImage) : Addimg}
                                                /></label>
                                        </div>



                                    </div>
                                </div>
                                <div className="flex justify-center mt-2 hidden " >
                                    <input
                                        id="actual-btn"
                                        type="file"
                                        name="userImage"
                                        accept="image/*"
                                        required
                                        onChange={handleChange}
                                        className="text-sm text-gray-500 "
                                    />
                                </div>
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
                                        placeholder="12/1, मेन रोड, नागदा, मध्य प्रदेश, 452001"
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
            )}

            {showThanks && (
                <div className="w-lvh sm:w-full h-full flex justify-center mt-5">
                    <div className="bg-white grid gap-5 items-center justify-center min-h-screen p-4">
                        <div className="max-w-md w-full border border-red-600 rounded-[40px] gap-0 bg-white overflow-hidden">
                            <div className="h-50 flex flex-col bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-t-[40px]">
                                <div className="flex items-center pt-5 mb-4">
                                    <img className="w-30 h-30 rounded-full border-2 border-white" src={logo} alt="Logo" />
                                    <h1 className="text-white font-extrabold text-3xl ml-3 leading-tight">
                                        गौ सेवा टीम
                                        <p className="text-white text-lg font-extrabold">
                                            संस्थापक <span className="text-yellow-400">आचार्य धर्मेश महाराज</span> उज्जैन
                                        </p>
                                    </h1>
                                </div>
                            </div>
                            <div className="justify-between p-6">
                                <div className="flex justify-center mb-4">
                                    <img
                                        className="w-28 h-28 rounded-full border-2 border-orange-600 object-cover"
                                        alt="User Image"
                                        src={formValues.userImage ? URL.createObjectURL(formValues.userImage) : Addimg}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2 text-sm text-gray-900 font-semibold">
                                    <div className="flex justify-between">
                                        <span>नाम:</span>
                                        <span>{formValues.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>मोबाइल नंबर:</span>
                                        <span>{formValues.mobileNo}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>पता:</span>
                                        <span>{formValues.address}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>विचार:</span>
                                        <span>{formValues.message}</span>
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-center items-center gap-5">
                                    <div>
                                        <img alt="" className="w-42 h-auto border border-red-600" src="https://storage.googleapis.com/a1aa/image/eccd9f0c-1d15-46ff-6ec9-dcc2c5f8b5c0.jpg" />
                                    </div>
                                    <div className="text-black text-lg font-extrabold">
                                        <p>
                                            गौ माता की सेवा करें, समृद्धि और संस्कृति विकास का हिस्सा बने | <br />
                                            <span className="font-bold">"सेव करें"</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 text-center justify-center">
                            <div className="bg-orange-500 p-2 border-orange-700 w-30 cursor-pointer hover:bg-orange-400">Share</div>
                            <div className="bg-orange-500 p-2 border-orange-700 w-30 cursor-pointer hover:bg-orange-400">Download</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyForm;
