import React from "react";

function TimeLineItem({
  university,
  degree,
  date,
  description,
  company,
  position,
}) {
  return (
    <li className=" mb-5  cursor-pointer">
      <div className="flex group items-center ">
        <div className="bg-custom-lightGray group-hover:bg-gray-400 z-10 rounded-full border-4 border-gray-800  h-5 w-5">
          <div className="bg-gray-800 h-1 w-4 items-center  ml-4 mt-1"></div>
        </div>
        <div className="flex-1 ml-4 z-10 font-medium">
          <div className="order-1 space-y-2 bg-transparent rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4 border-2 border-indigo-100">
            <h3 className="mb-3 font-bold text-custom-dark text-2xl">
              {degree && degree}
              {position && position}
            </h3>
            <p className="pb-4 text-sm text-custom-dark">
              {university && university}
              {company && company} | {date && date}
            </p>

            <hr />
            <p className="text-sm font-medium leading-snug tracking-wide text-custom-dark text-opacity-100">
              {description && description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TimeLineItem;
