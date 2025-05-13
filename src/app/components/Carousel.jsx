"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Carousel = ({ images = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  if (images.length === 0) {
    return (
      <div className="text-center text-red-600 font-bold">
        No images provided.
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center gap-4">
      <button
        onClick={scrollPrev}
        className="bg-yellow-300 text-black border-[3px] border-black px-3 py-2 rounded-md hover:bg-yellow-400 transition-all disabled:opacity-40"
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={20} />
      </button>

      <div
        className="overflow-hidden rounded-xl transition-all w-full"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="min-w-full flex justify-center items-center p-6 last:border-r-0"
            >
              <div className="bg-white border-[3px] border-black p-4 rounded-xl shadow-[4px_4px_0px_#000]">
                <Image
                  src={image.src}
                  alt={image.alt || "carousel image"}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="bg-yellow-300 text-black border-[3px] border-black px-3 py-2 rounded-md hover:bg-yellow-400 transition-all disabled:opacity-40"
        disabled={!canScrollNext}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
