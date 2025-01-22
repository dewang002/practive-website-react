import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function Card({title, img, describe, link, index}) {
  return (
    <div className="col-span-4 flex flex-col justify-center items-center py-4 gap-10 relative">
      {/* Add vertical lines only to middle cards (index + 1) % 3 === 2 */}
      {(index + 1) % 3 === 2 && (
        <>
          <div className="absolute left-0 top-0 h-full w-[0.1px] bg-gray-500" />
          <div className="absolute right-0 top-0 h-full w-[0.1px] bg-gray-500" />
        </>
      )}
      <div className="flex flex-col justify-center items-center gap-8">
        <img src={img} alt="" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="text-2xl text-center">
        {describe}
      </div>
      <div className="text-xl flex items-center gap-2">{link}<FaRegArrowAltCircleRight/>  </div>
    </div>
  );
}

export default Card;