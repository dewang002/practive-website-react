import React from "react";

function WhyWeTheBest() {
  return (
    <div className="h-full w-full px-24 py-10">
      <div className=" grid grid-cols-12 h-[50%] py-5 gap-6 w-full">
        <div className="col-span-6 flex flex-col gap-10 py-4">
          <h1 className="text-[#EB8D15]">WHY REGISTERKARO.IN</h1>
          <h1 className="text-4xl font-bold">Why Choose Register Karo</h1>
          <p>
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="col-span-3 flex flex-col gap-6 rounded-lg items-center justify-center bg-[#FEF3EF]">
          <img src="./shild.png" alt="" />
          <h1 className="text-2xl font-semibold leading-3">
            Confidential & Safe
          </h1>
          <p className="text-lg text-center">
            All your private information is safe with us
          </p>
        </div>
        <div className="col-span-3 flex flex-col gap-6 rounded-lg items-center justify-center bg-[#F1FBF3]">
          <img src="./check.png" alt="" />
          <h1 className="text-2xl font-semibold leading-3">No Hidden Fee</h1>
          <p className="text-lg text-center">
            Everything is put before you with
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-6 py-5 h-[50%] w-full">
        <div className="col-span-3"></div>
        <div className="col-span-3 flex flex-col gap-6 rounded-lg items-center justify-center bg-[#EDF3FF]">
          <img src="./face.png" alt="" />
          <h1 className="text-2xl font-semibold leading-3">Guaranteed Satisfaction</h1>
          <p className="text-lg text-center">
          We ensure that you stay 100%
          satisfied with our offered services          </p>
        </div>
        <div className="col-span-3 flex flex-col gap-6 rounded-lg items-center justify-center bg-[#FCDDEC]">
          <img src="./cotepant.png" alt="" />
          <h1 className="text-2xl font-semibold leading-3">Expert CA/CS Assistance</h1>
          <p className="text-lg text-center">
          Prompt support from our in-house
          expert professionals          </p>
        </div>
        <div className="col-span-3 flex flex-col gap-6 rounded-lg items-center justify-center bg-[#27AE600A]">
          <img src="./shild.png" alt="" />
          <h1 className="text-2xl font-semibold leading-3">Confidential & Safe</h1>
          <p className="text-lg text-center">
          All your private information is safe
          with us          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyWeTheBest;
