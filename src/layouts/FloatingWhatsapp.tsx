
import UnstyledLink from 'components/links/UnstyledLink';

const FloatingWhatsapp = () => {
  return (
    <UnstyledLink
      to ="https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0"
      className="animate-bounce fixed bottom-5 right-5 bg-blue-600 rounded-3xl w-1/9 h-auto p-3 text-white flex justify-center gap-1 items-center z-50 no-underline"
    >
      <img
        src='/images/whatsapp-icon.webp'
        width={34}
        height={34}
        alt='Whatsapp Icon'
        className='bg-green-500 rounded-full content-center'
      />
      <p className='text-white text-center'>Chat with Us</p>
    </UnstyledLink>
  );
};

export default FloatingWhatsapp;
