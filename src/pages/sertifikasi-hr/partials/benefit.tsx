import { IconBaseProps } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

interface SolutionType {
  title: string;
  subtitle: string;
  icon: React.ElementType<IconBaseProps>;
}

const data: SolutionType[] = [
  { 
    title: 'Peningkatan Keterampilan dan Pengetahuan', 
    subtitle: 'Tingkatkan kemampuan profesional dalam manajemen sumber daya manusia', 
    icon: FaCheckCircle 
  },
  { 
    title: 'Pengakuan Profesional', 
    subtitle: 'Dapatkan pengakuan resmi dari BNSP', 
    icon: FaCheckCircle 
  },
  { 
    title: 'Peluang Karir yang Lebih Baik', 
    subtitle: 'Tingkatkan peluang untuk promosi dan penawaran pekerjaan yang lebih baik', 
    icon: FaCheckCircle 
  },
  { 
    title: 'Jaringan Profesional', 
    subtitle: 'Bergabung dengan jaringan alumni HR Academy yang luas dan berpengaruh.', 
    icon: FaCheckCircle 
  },
]

export default function ManfaatSertifikasiHR() {
  return (
    <div className="bg-[#004AAD] py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:text-left md:col-span-1 ml-7 md:ml-0"> {/* Menambahkan margin di sebelah kiri */}
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:ml-6">Manfaat Sertifikasi HR</h4>
            {data.map((item, index) => (
              <div key={index} className='flex flex-wrap gap-1 sm:gap-3 pt-5 pb-2'>
                <item.icon size='2rem' color='#EDB526' />
                <div>
                  <p className="place-self-center text-white font-bold text-[16px] m-[5px] sm:text-xl">{item.title}</p> {/* Menyesuaikan ukuran font */}
                  <p className="text-xs sm:text-sm text-gray-300 hidden md:block">{item.subtitle}</p> {/* Menyembunyikan subtitle di versi mobile */}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center md:text-right md:col-span-1">
            <img
              src="/images/exclusive-hr-webinar.jpg"
              alt="HR Certification"
              className="w-[200px] md:w-[200px] lg:w-[280px] rounded-md" // Mengatur lebar gambar agar responsif
            />
          </div>
        </div>
      </div>
    </div>
  );
}