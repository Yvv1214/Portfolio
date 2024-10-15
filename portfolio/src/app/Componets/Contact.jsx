import React from "react";

export const Contact = () => {
  return (
    <div className="flex justify-center w-full items-center h-screen">
      {/* Form container */}
      <form className="border rounded m-6 bg-cyan-300 flex flex-col items-center w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        <h2 className="text-center font-bold text-2xl p-4">Contact</h2>
        
        {/* Input fields */}
        <div className="flex flex-col items-start w-full px-4 sm:px-8">
          <label
            htmlFor="Name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <input
            id="Name"
            name="Name"
            type="text"
            placeholder="Name"
            className="block w-full sm:w-10/12 md:w-8/12 rounded border py-2 px-2 mb-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600"
          />
          
          <label
            htmlFor="Email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            id="Email"
            name="Email"
            type="email"
            placeholder="Email"
            className="block w-full sm:w-10/12 md:w-8/12 rounded border py-2 px-2 mb-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600"
          />
        </div>

        {/* Textarea */}
        <label
          htmlFor="Message"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="Message"
          rows={3}
          className="block w-full sm:w-11/12 rounded-md border py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 mb-4"
          defaultValue={''}
        />

        {/* Submit button */}
        <div className="flex p-4 justify-center w-full">
          <button className="border rounded bg-green-400 p-2 w-full sm:w-6/12">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
