import React from "react";
import Jumbotron from "../../../components/Jumbotron";

const schedules = [
  { type: "Online", date: "26 - 30 Agustus" },
  { type: "Online", date: "2 - 6 September" },
  { type: "Offline", date: "9 - 13 September" },
  { type: "Online", date: "16 - 20 September" },
  { type: "Offline", date: "23 - 27 September" },
  { type: "Offline", date: "30 Sept - 4 Oktober" },
];

export default function Join() {
  return (
    <>
      <Jumbotron imageName="background2.jpeg">
        <div className="text-center md:text-start">
          <h5 className="text-3xl mb-10 font-bold">Upcoming Schedule</h5>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-4">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-[#cffafe] shadow-lg rounded-lg py-3 max-w-sm w-full"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-center mx-10 bg-white rounded px-2">
                  <div className="text-xl font-normal text-black">
                    {schedule.type}
                  </div>
                </div>
                <p className="flex flex-1 justify-center items-center text-[#a3a3a3] font-bold">
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
