import React from "react";
import { NavLink } from "react-router";
import NotFound from "../assets/image/404.png";
const FormFailed = () => {
    return (
        <>
            <div className="w-full h-lvh   flex justify-center items-center flex-col  *:p-2 *:m-3 ">
                <div className="text-5xl font-extrabold text-gray-600">404</div>
                <div className="text-2xl font-extrabold text-gray-600 text-center">
                    Ooops, Something Went Wrong
                </div>
                <div className="bg-rose-700 text-md font-bold text-gray-200">

                    <NavLink to="/">Back to home page</NavLink>
                </div>
            </div>
        </>
    );
};

export default FormFailed;
