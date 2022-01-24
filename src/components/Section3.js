import TimeLineItem from "./TimeLineItem";
import data from "../utils/data.json";
function Section3() {
  return (
    <>
      <div className="dark:bg-gray-900 bg-[#F6F8FB] w-full" id="Section3">
        <div className="flex flex-col-reverse items-center justify-between px-8 pt-8 pb-16 md:flex-row sm:px-16">
          <div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
            <h4 className=" mb-8 text-3xl font-extrabold md:flex sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Professional Experience
            </h4>
            <div className=" flex flex-col items-center">
              <div className="relative">
                <div
                  className="border-r-4  border-gray-800 absolute h-full top-0"
                  style={{ left: "9px" }}
                ></div>
                <ul className="list-none m-0 p-0 border-gray-100">
                  {data[1].professionalexp.map((exp, i) => (
                    <TimeLineItem
                      key={exp.id}
                      company={exp.company}
                      position={exp.position}
                      date={exp.date}
                      description={exp.description}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
