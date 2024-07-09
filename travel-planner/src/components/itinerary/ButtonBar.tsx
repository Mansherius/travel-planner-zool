import React from 'react'
import { IoDocumentTextOutline, IoShareSocial, IoMapOutline } from "react-icons/io5";

const ButtonBar = () => {
  return (
    <>
        <div className="flex justify-between">
			<p className="text-4xl font-bold">Itinerary</p>
			<div className='flex gap-4'>
                <button className="bg-transparent px-4 py-1 border rounded-full ml-2 my-auto flex">Notes <IoDocumentTextOutline size={20} className='my-auto ml-2' /></button>
                <button className="bg-transparent px-4 py-1 border rounded-full ml-2 my-auto flex">Share <IoShareSocial size={20} className='my-auto ml-2'/> </button>
                <button className='bg-black text-white px-4 py-1 rounded-full ml-2 my-auto flex'>Hide map <IoMapOutline size={20} className='my-auto ml-2' /></button>
            </div>
		</div>
    </>
  )
}

export default ButtonBar