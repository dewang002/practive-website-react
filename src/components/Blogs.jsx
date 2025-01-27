import React from 'react'

function Blogs() {
  return (
    <div className='h-full w-full'>
        <div className='w-full text-center py-10'>
            <h3 className='text-xl'>EXPLORE OUR BLOGS</h3>
            <h3 className='text-4xl font-bold'>Accelerate Digital Transformation</h3>
        </div>
        <div className='grid grid-cols-12 px-24 gap-8'>
            <div className='col-span-4 bg-red-200 h-96'>
                <div className='h-[60%] w-full '>
                    <img className='h-full w-full object-cover object-center' src="/Image.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-start gap-2 w-full'>
                    <h1 className='text-lg font-bold'>Prabhash Mishra • 1 Jan 2023 • Today</h1>
                    <h1 className='text-3xl font-bold '>Small business & Startup </h1>
                    <p className='leading-4'>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                    <div><span></span><span></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs