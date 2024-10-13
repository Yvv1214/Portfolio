import React from "react";


export const Contact = () => {


    return (
        <div className="flex justify-center items-center h-screen">
        <form className="border rounded m-12 bg-cyan-300 flex flex-col items-center w-1/2">
            <h2 className=" text-bold text-center font-bold text-2xl p-2">Contact</h2>
            <label
                htmlFor="Name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Name
            </label>
            <input
                id="Name"
                name="Name"
                type="text"
                placeholder="Name"
                className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email
            </label>
            <input
                id="Email"
                name="Email"
                type="email"
                placeholder="Email"
                className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <label
                htmlFor="Message"
                className="block text-sm font-medium leading-6 text-gray-900">
                Message
            </label>
            <textarea
                id="message"
                name="Message"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 w-11/12"
                defaultValue={''}
            />
            <div className="flex p-4 justify-center w-6/12">
                <button className="border rounded bg-green-400 p-2">Send</button>
            </div>
        </form>
        </div>
    )
}