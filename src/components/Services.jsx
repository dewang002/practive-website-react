import React from 'react'
import Card from './Card'


const CardData = [
    {
        img:"./service1.png",
        title:"Company Formation",
        describe:"Build web-based solutions that enhance customer experience.",
        link:"Learn More"
    },
    {
        img:"./service2.png",
        title:"Company Formation",
        describe:"Build web-based solutions that enhance customer experience.",
        link:"Learn More"
    },
    {
        img:"./service3.png",
        title:"Company Formation",
        describe:"Build web-based solutions that enhance customer experience.",
        link:"Learn More"
    },
    {
        img:"./services4.png",
        title:"Company Secretarial Services",
        describe:"Build web-based solutions that enhance customer experience.",
        link:"Learn More"
    },
    {
        img:"./services5.png",
        title:"Company Formation",
        describe:"Build web-based solutions that enhance customer experience.",
        link:"Learn More"
    },
    {
        img:"./services6.png",
        title:"Company Formation",
        describe:"Build web-based solutions that enhance customer experience.",
        link:"Learn More"
    },
]

function Services() {
  return (
    <div className='flex flex-col justify-center items-center w-full px-24 pt-14 bg-zinc-200 overflow-hidden'>
        <div className='flex flex-col justify-center items-center gap-4'>
        <h4 className='text-[#EB8D15]'>WELCOME TO REGISTERKARO.IN</h4>
        <h1 className='font-semibold text-4xl'>Explore Our Services</h1>
        </div>
        <div className='grid grid-cols-12 gap-10 p-10 '>
            {CardData.map((elem,index)=>(
                <Card index={index} img={elem.img} title={elem.title} describe={elem.describe} link={elem.link} />
                  
            ))
            }

        </div>
        <button className="text-xl font-semibold px-6 py-4 bg-blue-800 text-white rounded">See all Services</button>
    </div>
  )
}

export default Services