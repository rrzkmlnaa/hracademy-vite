import Jumbotron from '../../../components/jumbo/Jumbotron';
import { IconBaseProps } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';

interface SolutionType {
    title: string;
    icon: React.ElementType<IconBaseProps>;
}

const data: SolutionType[] = [
    { title: 'Pembayaran dengan skema cicilan', icon: FaCheckCircle },
    { title: 'Pelatihan Bisa online/offline', icon: FaCheckCircle },
    { title: 'Pilih jadwal sesuai keinginanmu', icon: FaCheckCircle },
];

export default function Kemudahan() {
    return (
        <Jumbotron imageName='training-sertif-banner.webp'>
            <section id="Kemudahan" className="relative">
                <div className="mx-auto min-h-96 max-w-screen-sm content-center px-10 pb-16 pt-24 md:max-w-screen-xl md:px-0 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 md:px-10">
                        {/* Bagian Kiri */}
                        <div className="text-start w-full md:w-1/2">
                            <a href="#Kemudahan" className="block uppercase font-bold text-[32px] text-center sm:text-start sm:text-5xl ml-2">
                                Kemudahan Pelatihan di HR Academy
                            </a>
                        </div>
                        {/* Bagian Kanan dengan latar belakang opacity */}
                        <div className="w-full p-5 rounded-lg md:w-1/2 bg-opacity-50 bg-gray-900 flex flex-col flex-grow min-h-0">
                            {data.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 pb-2 pt-5 md:pl-5">
                                    <item.icon size="2rem" color="#EDB526" />
                                    <p className="text-[25px] sm:text-xl text-start ml-5 flex-1 font-normal">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Jumbotron>
    );
}
