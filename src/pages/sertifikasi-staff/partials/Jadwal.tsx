import React from "react";
import Jumbotron from "../../../components/jumbo/Jumbotron";

const schedules = [
  { type: "Online", date: "23 - 24, 30 Agustus" },
  { type: "Offline", date: "30 -31, 06 September" },
  { type: "Online", date: "06 - 07, 13 September " },
  { type: "Offline", date: "13 - 14, 20 September" },
  { type: "Online", date: "20 - 21, 27 September" },
  { type: "Offline", date: "27 - 28, 04 September" },
];

export default function Join() {
  return (
    <>
      <Jumbotron imageName="background2.jpeg">
        <div className="text-center md:text-center">
          <h5 className="text-3xl mb-10 font-bold">Upcoming Schedule</h5>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-4">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-[#cffafe] shadow-lg rounded-lg py-3 max-w-sm w-full lg:w-[500px] "
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-center mx-5 bg-white rounded">
                  <div className="text-xl font-normal px-5 text-black">
                    {schedule.type}
                  </div>
                </div>
                <p className="flex flex-1 justify-center items-center text-[#a3a3a3] px-5 font-bold">
                  {schedule.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-start my-10 font-light">*Available Kelas Malam dan Weekend</p>
      </Jumbotron>
    </>
  );
}
