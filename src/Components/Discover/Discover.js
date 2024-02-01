import React from 'react'

function Discover() {
  return (
    <div>
      

        <div className="px-5 text-lg font-bold mt-4">
            Discover
        </div>

        <div className="flex flex-row justify-between m-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">All</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">For You</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Artichoke</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Fruits</button>
        </div>
      
    </div>
  )
}

export default Discover
