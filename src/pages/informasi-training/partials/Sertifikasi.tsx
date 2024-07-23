import Jumbotron from "components/Jumbotron";

export default function Comp1() {
    return (
        <Jumbotron
            imageName='banner-aboutus.webp'
        >
            <h5 className='capitalize text-start text-5xl md:text-6xl text-white font-normal p-5 overflow-wrap break-word'>
                Sertifikasi HR Terbaik di Indonesia:
                <span className="font-bold text-white"> Double Degree Program HRA </span>
            </h5>
        </Jumbotron>
    );
}
