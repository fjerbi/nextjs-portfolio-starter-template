import React from "react";
import Image from "next/image";
function Card({ title, description, photo, link }) {
  return (
    <div
      className=" hover:shadow-md border border-custom-lightGray rounded-lg max-w-sm mb-5 backdrop-filter  hover:rotate-0 px-4 my-10 pb-3 md:min-w-[400px] min-w-[300px]  cursor-pointer transition duration-400 transform 
    hover:scale-110  "
    >
      <Image layout="responsive" height={1080} width={2000} src={photo} />

      <div className="p-5">
        <h5 className="text-gray-500 font-bold text-2xl tracking-tight mb-2">
          {title}
        </h5>

        <p className="font-normal text-gray-700 mb-3">{description}</p>
        <a
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={link}
        >
          View Demo
        </a>
      </div>
    </div>
  );
}

export default Card;
