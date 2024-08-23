import Jumbotron from "components/jumbo/jumbot";

export default function Comp1() {
  return (
    <Jumbotron imageName="background1.jpeg">
      <div className="flex flex-col lg:text-start text-center">
        <h5 className="capitalize text-[18px] md:text-6xl text-white font-sm p-5 overflow-wrap break-word">
          Langkah cepat berkarir di dunia HR
        </h5>
        <h6 className="capitalize text-[40px] lg:mx-5 md:text-6xl text-white font-bold overflow-wrap break-word">
          {" "}
          HR STAFF BNSP
        </h6>
        <div className="w-11/12 h-[3px] rounded bg-[#FFFFFF] mx-auto lg:mx-5 my-2 "></div>
        <p className="font-extralight lg:mx-5 text-[20px]">
          Fresh Graduate Welcome! global
        </p>
      </div>
    </Jumbotron>
  );
}
