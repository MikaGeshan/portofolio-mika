import React from "react";

function EducationCard({ year, degree, name, description }) {
  return (
    <div className="bg-white text-black border-4 border-black rounded-xl shadow-[6px_6px_0_black] p-6 flex gap-6 min-h-[200px]">
      <div className="min-w-[120px] flex items-center justify-center border-r-2 border-black pr-4">
        <p className="text-xl font-bold">{year}</p>
      </div>

      <div className="flex-1 flex flex-col justify-center text-left">
        <h2 className="text-2xl font-bold mb-2">{degree}</h2>
        <p className="text-lg font-semibold mb-1">{name}</p>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default EducationCard;
