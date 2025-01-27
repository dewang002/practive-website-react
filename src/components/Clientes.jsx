import React from 'react'

function Clientes() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-8'>
        <div className='flex flex-col text-center items-center w-1/2'>
            <h1 className='text-[32px] font-bold'>Our Happy Clients</h1>
            <p className='text-[16px] font-semibold'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
        </div>
        <div className='w-full'>
            <img className='w-full' src="/Pagination.png" alt="icons" />
        </div>
        <button className='bg-blue-800 text-white px-4 py-2 rounded font-semibold'>Show more</button>
    </div>
  )
}

export default Clientes