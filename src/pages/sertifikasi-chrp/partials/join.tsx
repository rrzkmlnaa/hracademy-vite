import React, { useState, useEffect } from "react";
import Jumbotron from "../../../components/jumbo/Jumbotron";
import Button from "components/Button";
import UnstyledLink from "components/links/UnstyledLink";

export default function Join() {
  const targetDate = new Date("2024-08-18T00:00:00Z"); // Target date (18 August 2024)

  // Ensure targetDate is valid
  if (isNaN(targetDate.getTime())) {
    console.error("Invalid target date");
    return null; // or handle the error as needed
  }

  const calculateRemainingTime = () => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();
    return Math.max(Math.floor(timeDifference / 1000), 0); // Ensure non-negative value
  };

  const [seconds, setSeconds] = useState(calculateRemainingTime());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const remainingTime = calculateRemainingTime();
      if (remainingTime <= 0) {
        setIsActive(false);
        clearInterval(interval);
      } else {
        setSeconds(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds: number) => {
    const totalDays = Math.floor(seconds / (3600 * 24));
    const totalHours = Math.floor((seconds % (3600 * 24)) / 3600);
    const totalMinutes = Math.floor((seconds % 3600) / 60);

    return { totalDays, totalHours, totalMinutes };
  };

  const { totalDays, totalHours, totalMinutes } = formatTime(seconds);

  return (
    <>
      <Jumbotron imageName="background2.jpeg">
        <div className="text-center md:text-start px-5">
          <h5 className="text-xl font-light lg:text-center">
            Pendaftaran CHRP <br />
            Batch 27 (Offline) <span className="font-bold"> ditutup</span>{" "}
            tanggal 18 Agustus 2024
          </h5>
        </div>

        <div className="flex items-center justify-center mt-6 px-5">
          <div className="bg-[#94a3b8] shadow-lg rounded-lg p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 flex flex-col items-center">
                <p className="text-gray-700">Hari</p>
                <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-lg mt-1">
                  <div className="text-3xl font-normal text-black text-center">{totalDays}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <p className="text-gray-700">Jam</p>
                <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-lg mt-1">
                  <div className="text-3xl font-normal text-black text-center">{totalHours}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <p className="text-gray-700">Menit</p>
                <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-lg mt-1">
                  <div className="text-3xl font-normal text-black text-center">{totalMinutes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 px-5">
          <h6 className="text-white mb-5">Harga Normal</h6>
          <p className="text-white text-xl relative inline-block mb-2">
            Rp. 7.500.000
            <span
              className="absolute inset-0 bg-red-500"
              style={{
                height: "2px",
                top: "50%",
                transform: "translateY(-50%) scaleX(1.1)", // Perlebar coretan
                transformOrigin: "left", // Agar coretan tidak meluas dari sisi kiri
                borderRadius: "4px", // Menambahkan rounded pada coretan
              }}
            ></span>
          </p>
          <p className="text-white font-bold text-xl">Early Bird Rp. 6.999.000</p>
          <p className="text-white font-bold text-2xl">Min. 3 orang Rp. 6.499.000</p>
        </div>

        <div className="text-center mt-4 px-5">
          <p className="text-white text-xl mt-5 mb-2">Mau respon lebih cepat?</p>
          <UnstyledLink to="https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0">
            <p className="text-white text-center text-3xl font-bold underline">Hubungi Admin WA</p>
          </UnstyledLink>
        </div>
      </Jumbotron>
    </>
  );
}
