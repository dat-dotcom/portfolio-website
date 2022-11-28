import React from "react";
import Image from "next/image";

interface PortfolioItemProps {
    id: number,
    title: string,
    img: string,
    stack: string[],
    link: string
}

const PortfolioItem = ({ id, title, img, stack, link }: PortfolioItemProps) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <div className="relative w-full h-40 md:h-52">
        <Image
          src={img}
          alt="portfolio"
          className="object-cover cursor-pointer"
          layout="fill"
        />
      </div>

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span 
            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
            key={id}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
