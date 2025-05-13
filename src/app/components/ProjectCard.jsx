import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white border-2 border-black shadow-[6px_6px_0_black] rounded-xl overflow-hidden max-w-5xl mx-auto my-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-6 py-6 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-black text-2xl font-bold mb-2">{title}</h2>
            <p className="text-black text-base md:text-lg">{description}</p>
          </div>
          {link && (
            <Link
              href={link}
              className="text-black font-semibold hover:underline inline-flex items-center gap-1"
            >
              View Project <ArrowRight size={18} />
            </Link>
          )}
        </div>

        <div className="hidden md:block w-2 bg-black" />

        <div className="md:w-1/2 p-6 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg border-2 border-black shadow-[4px_4px_0_black] object-cover w-full max-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
