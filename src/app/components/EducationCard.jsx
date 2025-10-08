import React from "react";
import Image from "next/image";

function EducationCard({ year, degree, name, description, image }) {
  return (
    <div className="bg-white text-black border-4 border-black rounded-xl shadow-[6px_6px_0_black] p-6 flex gap-10 min-h-[200px] items-center">
      {image && (
        <div className="flex-shrink-0 rounded-lg overflow-hidden ">
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center text-left">
        <p className="text-xl font-bold mb-1">{year}</p>
        <h2 className="text-2xl font-bold mb-2">{degree}</h2>
        <p className="text-lg font-semibold mb-1">{name}</p>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default EducationCard;
