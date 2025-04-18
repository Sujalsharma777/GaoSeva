import React, { useEffect, useRef, useState } from "react";
import logo from '../assets/image/logo.jpg'

const MyForm = () => {
    const formRef = useRef(null);
    const [showThanks, setShowThanks] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    // Check localStorage on load
    useEffect(() => {
        const submitted = localStorage.getItem("formSubmitted");
        if (submitted === "true") {
            setHasSubmitted(true);
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
                setTimeout(() => {
                    setShowThanks(false); // Hide thanks after 3 seconds
                }, 3000);
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                alert("Submission failed. Please try again.");
            });
    };

    return (
        <>
            {!hasSubmitted && (
                <section
                    id="form-Section"
                    className="w-full h-lvh flex justify-center items-center flex-row bg-transparent absolute z-10  backdrop-blur-3xl ">
                    <form
                        id="sheetdb-form"
                        ref={formRef}
                        onSubmit={handleEvent}
                        className="grid grid-rows-5  w-50">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                अपने बारे में लिखो
                            </h2>
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


                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                जमा करना
                            </button>
                        </div>
                    </form>
                </section >
            )}
            {showThanks && (

                <div id="thanks" className="flex justify-center item-center w-full h-full bg-transparent backdrop-blur-3xl absolute  ">

                    <div className="w-2/6 h-fit bg-white p-5 border rounded-2xl absolute top-52 ">
                        <div className="grid grid-cols-2">
                            <img src={logo} alt="" className="rounded-full w-20 h-auto " />
                            <h1>आपका धन्यवाद मेरी गाय की सेवा में आपका योगदान है</h1>
                        </div>

                    </div>
                </div>

            )}
        </>
    );
};

export default MyForm;
