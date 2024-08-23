import Jumbotron from "components/jumbo/jumbot";

export default function Comp1() {
  return (
    <Jumbotron imageName="background1.jpeg">
      <div className="text-center lg:text-left">
        <h5 className="capitalize lg:text-left text-[18px] md:text-6xl text-white font-sm p-5 lg:p-0 overflow-wrap break-word">
          Sertifikasi Double Degree
        </h5>
        <h6 className="capitalize text-[40px] md:text-6xl text-[#bfdbfe] font-bold overflow-wrap break-word">
          {" "}
          CHRS BNSP HR Supervisor
        </h6>
        <div className="w-11/12 h-[3px] rounded bg-[#FFFFFF] mx-auto my-2 lg:m-0 lg:my-4"></div>
        <p className="font-extralight text-[20px] lg-[26px]">
          Memperdalam keahlian operasional pengelolaan SDM dan hubungan
          industrial sesuai praktik global
        </p>
      </div>
    </Jumbotron>
  );
}
