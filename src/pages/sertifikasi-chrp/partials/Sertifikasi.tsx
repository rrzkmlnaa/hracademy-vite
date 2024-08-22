import Jumbotron from "components/jumbo/jumbot";

export default function Comp1() {
  return (
    <Jumbotron imageName="background1.jpeg">
      <div className="">
        <h5 className="capitalize text-center lg:text-left text-[18px] md:text-6xl text-white font-sm p-5 lg:p-0 overflow-wrap break-word">
          Sertifikasi Double Degree
        </h5>
        <h6 className="capitalize text-center text-[40px] md:text-6xl text-white font-bold overflow-wrap break-word">
          {" "}
          CHRP BNSP HR Manager
        </h6>
        <div className="w-11/12 h-[3px] rounded bg-[#FFFFFF] mx-auto my-2 lg:m-0 lg:my-4"></div>
        <p className="font-extralight text-[20px] lg-[26px] text-center">
          Memperperdalam kompetensi mengelola SDM organisasi dengan standar
          global
        </p>
      </div>
    </Jumbotron>
  );
}
