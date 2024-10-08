import React from "react";


export const Contact = () => {


    return (
        <form className="border rounded m-12 bg-cyan-300">
            <h2>Contact</h2>
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
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Name
            </label>
            <input
                id="Email"
                name="Email"
                type="email"
                placeholder="Email"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
            />
        </form>
    )
}