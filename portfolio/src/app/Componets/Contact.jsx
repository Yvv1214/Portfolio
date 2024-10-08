import React from "react";


export const Contact = () => {


    return (
        <form className="border rounded m-12 bg-cyan-300">
            <h2>Contact</h2>
            <input
                id="username"
                name="username"
                type="text"
                placeholder="Name"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
        </form>
    )
}