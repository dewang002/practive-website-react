import React from "react";

function Page1() {
  return (
    <div className="relative pt-36 w-full ">
      <img className="h-full w-full object-cover" src="/page1.png" alt="" />
      <div className="absolute flex flex-col gap-10 pt-24 top-24 left-24 min-w-96 max-w-[50%]">
        <h3 className="text-lg"> Google Rating ⭐⭐⭐⭐⭐</h3>
        <h1 className="text-[3.5vw] leading-tight font-semibold ">
          Your trusted partner <br />
          for compliance business needs
        </h1>
        <p className="text-2xl">
          An online business compliance platform that helps entrepreneurs and{" "}
          <br /> other individuals with various, registrations, tax filings, and
          other legal matters.
        </p>
        <img className="object-cover" src="/pageone_group.png" alt="" />
        <div>

          <div className="flex gap-4">
            <button className="text-xl font-semibold px-6 py-4 bg-blue-800 text-white rounded">Talk An Expert</button>
            <button className="flex gap-4 items-center">
              <span>
                <img src="/playbutton.png" alt="" />
              </span>
              See how it work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
