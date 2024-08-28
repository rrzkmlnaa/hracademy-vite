import React from "react";
import DetailCourse from "./components/detailCourse";
import Menfaat from "./components/benefit";
import Topik from "./components/topik";
import Target from "./components/target";
import Syarat from "./components/syarat";
import Ujian from "./components/ujian";
import JadwalProgram from "./components/jadwal";
import BiayaProgram from "./components/BiayaProgram";
import Button from "./components/Buttons";
import Course from "./components/course";
import UnderlineLink from "components/links/UnderlineLink";

export interface SingleServiceType {
  slug: string;
  imageUrl: string;
}

export const dummyData: SingleServiceType[] = [
  {
    slug: "hr-staff",
    imageUrl: "/images/SH.jpg",
  },
  {
    slug: "chrp",
    imageUrl: "/images/chrp.jpg",
  },
  {
    slug: "chrs",
    imageUrl: "/images/chrs.jpg",
  },
  {
    slug: "chcgm",
    imageUrl: "/images/chcgm.jpg",
  },
];

const chcgm: React.FC = () => {


  return (
    <>

      {/* <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap ">
          {dummyData.map((item, index) => (
              <UnderlineLink
                key={index}
                to ={`/hallo/${item.slug}`} // Navigate to the URL based on the slug
                className="w-full md:w-1/3 lg:w-1/4 p-2" // Optional: add classes for responsive layout
              >
                <img
                  src={item.imageUrl} // Use `src` instead of `imageUrl`
                  alt={`Image for ${item.slug}`} // Provide an alt attribute for accessibility
                  className="w-full h-auto" // Ensure the image maintains its aspect ratio
                />
              </UnderlineLink>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center  gap-4 md:gap-0 ">
            {dummyData.map((item, index) => (
              <UnderlineLink
                key={index}
                to={`/classDetails/${item.slug}`} // Navigate to the URL based on the slug
                className="w-full md:w-1/3 lg:w-1/4 p-2" // Optional: add classes for responsive layout
              >
                <img
                  src={item.imageUrl} // Use `src` instead of `imageUrl`
                  alt={`Image for ${item.slug}`} // Provide an alt attribute for accessibility
                  className="w-full h-auto" // Ensure the image maintains its aspect ratio
                />
              </UnderlineLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default chcgm;
