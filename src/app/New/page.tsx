import React from 'react'
interface Props { }

const AddStory = () => {
  return <div className="max-w-md mx-auto p-4">
    <form className="space-y-4">
      <h3>Create a Snippet</h3>
      <div>
        <label htmlFor="input" className="block text-sm font-medium text-white-700">
          Input
        </label>
        <input
          type="text"
          id="input"
          value=''

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="textarea" className="block text-sm font-medium text-white-700 ">
          Textarea
        </label>
        <textarea
          id="textarea"
          value=''

          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className=" my-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  </div>
}

export default AddStory