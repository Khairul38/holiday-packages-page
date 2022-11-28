import React from "react";

const HeaderSection = () => {
  return (
    <div className="bg-white px-4 py-5">
      <div className="max-w-7xl">
        <h1 className="text-3xl font-bold">
          Amazing Goa Flight Inclusive Deal 4N
        </h1>
        <div className="flex items-center mt-1 gap-1">
          <p className="bg-[#26B5A9] px-2 py-0.5 text-white text-xs font-semibold rounded">
            4N/5D
          </p>
          <p className="bg-black text-white text-xs font-semibold px-2 py-0.5 rounded">
            Flexi Package
          </p>
          <p className="font-semibold text-gray-400 ml-1">4N Goa</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
