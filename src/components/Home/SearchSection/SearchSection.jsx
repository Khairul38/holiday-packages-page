import React from "react";

const SearchSection = () => {
  return (
    <div className="bg-slate-900 py-2 px-4">
      <div className="max-w-7xl flex gap-1.5">
        <div className="bg-[#233951] w-52 px-2 py-1 rounded">
          <h2 className="uppercase text-blue-500 text-xs font-medium">
            Starting From
          </h2>
          <p className="text-white">Hyderabad</p>
        </div>
        <div className="bg-[#233951] w-52 px-2 py-1 rounded">
          <h2 className="uppercase text-blue-500 text-xs font-medium">
            Travelling On
          </h2>
          <p className="text-white">Tue, 10 Jan 2023</p>
        </div>
        <div className="bg-[#233951] w-52 px-2 py-1 rounded">
          <h2 className="uppercase text-blue-500 text-xs font-medium">
            Rooms & Guests
          </h2>
          <p className="text-white">2 Adults</p>
        </div>
        <button className="text-xl text-white font-extrabold ml-9 px-12 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-700">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
