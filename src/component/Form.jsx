import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/f-1.jpg";
import img from "../assets/image/0.jpg";
import Addimg from "../assets/image/AddImga.png";
import { useNavigate } from "react-router";
import Donation from "../assets/image/donastionQr.jpeg"
import { Cube } from 'react-preloaders'
import html2canvas from 'html2canvas-pro';
import download from 'downloadjs';
import { toBlob } from 'html-to-image';
import env from 

const MyForm = () => {
    const divRef = useRef();
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const preloaders = document.getElementById("preloader ")

    const [formValues, setFormValues] = useState({
        name: "",
        mobileNo: "",
        Address: "",
        Message: "",
        IDImage: null,
    });
    useEffect(() => {
        if (!loading) {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, [loading]);


    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setFormValues(prev => ({
            ...prev,

            [name]: files ? files[0] : value,
        }));

    };


    useEffect(() => {
        const submitted = localStorage.getItem("formSubmitted");
        if (submitted === "true") {
            setHasSubmitted(true)

        }
    }, []);


    const excelurl = process.env.REACT_APP_API_KEY

    // form data store in excel 
    const handleEvent = (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(formRef.current);

        fetch(
            "https://script.google.com/macros/s/AKfycbyrdVh04lw362JdNtxWoBlxnPZFBU1_7qIpnb-2LgWfhWtd9pthMbqtAgLuy2lqUHZMQw/exec",
            {
                method: "POST",
                body: formData,
            }
        )
            .then((response) => {
                if (!response.ok) throw new Error("Submission failed");
                return response.json();
            })
            .then(() => {
                localStorage.setItem("formSubmitted", 'true');
                setHasSubmitted(true);
                setLoading(false)


            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                navigate("/FromFailed");
                setLoading(false)

            });


    };
    const handleChangeLoading = () => {
        setLoading(true);

    }
    // share ID Logic
    const handleShare = async () => {
        const blob = await toBlob(divRef.current);
        const filesArray = [new File([blob], 'image.png', { type: blob.type })];
        const shareData = {
            files: filesArray,
            title: 'Shared Image',
            text: 'Check out this image!',
        };
        if (navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.error('Sharing not supported');
        }
    };
    // download container Logic 
    const downloadDivAsPng = async () => {
        const element = divRef.current;

        if (!element) {
            return;
        }

        try {
            const canvas = await html2canvas(element);
            const dataURL = canvas.toDataURL('image/png');
            download(dataURL, 'gaoseva.png');
        } catch (error) {
            console.error('Error capturing or downloading the div:', error);
        }
    };


    const image = img;

    return (

        <>
            {loading && (
                <div className="preloader ">
                    <Cube
                        background="blur"
                    />
                </div>
            )}
            {hasSubmitted ? (
                < div className="font-devanagari font-bold sm:w-full h-full flex justify-center items-center mt-5" >
                    < div id="myDiv"
                        className="bg-white grid gap-5 items-center justify-center min-h-screen  p-4"
                    >
                        <div
                            className="max-w-md w-full border border-red-600 rounded-[40px] gap-0 bg-white overflow-hidden "
                            ref={divRef}>
                            <div className="h-50 flex flex-col bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-t-[40px]">
                                <div className="flex items-center pt-5 mb-4">
                                    <img
                                        className="w-30 h-30 rounded-full border-2 border-white"
                                        src={logo}
                                        alt="Logo"
                                    />
                                    <h1 className="text-white font-extrabold text-3xl ml-3 leading-tight">
                                        गौ सेवा टीम
                                        <p className="text-white text-lg font-extrabold">
                                            संस्थापक : <br />
                                            <span className="text-yellow-400">
                                                आचार्य धर्मेश महाराज,
                                            </span>
                                            <br />उज्जैन
                                        </p>
                                    </h1>
                                </div>
                            </div>
                            <div className="justify-between p-6">
                                <div className="flex justify-center mb-4">
                                    <img
                                        className="w-28 h-28 rounded-full border-2 border-orange-600 object-cover"
                                        alt="User Image"
                                        src={
                                            formValues.IDImage
                                                ? URL.createObjectURL(formValues.IDImage)
                                                : Addimg
                                        }
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
                                        <span>{formValues.Address}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>विचार:</span>
                                        <span>{formValues.Message}</span>
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-center items-center gap-5">
                                    <div>
                                        <img
                                            alt=""
                                            className="w-42 h-auto border border-red-600"
                                            src={Donation}
                                        />
                                    </div>
                                    <div className="text-black text-lg font-extrabold">
                                        <p>
                                            गौ माता की सेवा करें, समृद्धि और संस्कृति विकास का हिस्सा
                                            बने | <br />
                                            <span className="font-bold">"सेवा करें"</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 text-center justify-center">
                            <div onClick={handleShare} className="bg-orange-500 p-2 border-orange-700 w-30 cursor-pointer hover:bg-orange-400">
                                Share
                            </div>
                            <div onClick={downloadDivAsPng} className="bg-orange-500 p-2 border-orange-700 w-30 cursor-pointer hover:bg-orange-400">
                                Download
                            </div>
                        </div>
                    </div >
                </div >
            ) : (

                < div
                    style={{ backgroundImage: `url(${image})` }}
                    className=" bg-no-repeat bg-top bg-size-full sm:bg-size-[1500px] ">
                    <div className="bg-linear-to-t from-rose-900 to-rose-0 flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center flex-col *:p-5">
                            <div>
                                <img
                                    src={logo}
                                    alt="logo not found"
                                    className="w-36 h-auto  rounded-full ring-8 ring-white shadow-xl shadow-black"
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold drop-shadow-lg drop-shadow-black text-white">
                                    गौ सेवा टीम
                                </h1>
                            </div>
                        </div>

                        <section className="bg-white p-10 rounded-t-4xl w-3/4 sm:w-1/2">
                            <form
                                ref={formRef}
                                onSubmit={handleEvent}
                                className="grid grid-rows-5 sm:gap-10 gap-0  ">
                                <div className="flex justify-center">
                                    <div className="w-28 h-28 rounded-full border-2 border-orange-600 overflow-hidden">
                                        <div className="flex justify-center mb-4">
                                            <label htmlFor="actual-btn">
                                                <img
                                                    className="w-28 h-28 rounded-full border-2 border-orange-600 object-cover"
                                                    alt="User Image"
                                                    src={
                                                        formValues.IDImage
                                                            ? URL.createObjectURL(formValues.IDImage)
                                                            : Addimg
                                                    }
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center mt-2 hidden  ">
                                    <input
                                        id="actual-btn"
                                        type="file"
                                        name="IDImage"
                                        accept="image/*"
                                        required
                                        onChange={handleChange}
                                        className="text-sm text-gray-base "
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm/6 font-medium text-gray-900">
                                        नाम
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="आदिनाथ शंकर शर्मा"
                                        required
                                        value={formValues.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-md px-3 py-1.5 text--base "
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="mobileNo"
                                        className="block text-sm/6 font-medium text-gray-900">
                                        मोबाइल नंबर
                                    </label>
                                    <input
                                        id="mobileNo"
                                        name="mobileNo"
                                        type="tel"
                                        placeholder="8717487898"
                                        required
                                        value={formValues.mobileNo}
                                        onChange={handleChange}
                                        className="block w-full rounded-md px-3 py-1.5 text-base "
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block text-sm/6 font-medium text-gray-900">
                                        पता
                                    </label>
                                    <input
                                        id="address"
                                        name="Address"
                                        type="text"
                                        required
                                        value={formValues.Address}
                                        onChange={handleChange}
                                        placeholder=" नागदा, मध्य प्रदेश, 452001"
                                        className="block w-full rounded-md px-3 py-1.5 text-base "
                                    />
                                </div>
                                <div>
                                    <textarea
                                        maxLength={100}
                                        name="Message"
                                        id="message"
                                        value={formValues.Message}
                                        onChange={handleChange}
                                        placeholder="पशु के प्रति अपने विचार"
                                        className="block w-full rounded-md px-3 py-1.5 text-base "></textarea>
                                </div>
                                <div  >
                                    <button
                                        onClick={handleChangeLoading}
                                        id="Btn"
                                        type="submit"
                                        className="w-full rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-green-500">
                                        जमा करना
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div >
                </div >
            )
            }
        </>
    );
};

export default MyForm;
