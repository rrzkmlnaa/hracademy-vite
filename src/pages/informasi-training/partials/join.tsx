import React from 'react';

import Jumbotron from '../../../components/jumbo/Jumbotron';
import Button from '../../../components/Button';
import UnstyledLink from '../../../components/links/UnstyledLink'


export default function join () {
    return (
        <>
        <Jumbotron imageName='linkedin-rev.png'>
            <h5 className='text-5xl font-extrabold text-center md:text-start'>
                Optimalkan Potensi HR Anda Sekarang!
            </h5>

            <p className='mt-4 max-w-lg text-xl/relaxed text-center md:text-start'>
                Gabung dengan 400+ alumni
                yang telah berhasil akselerasi karir dan kompetensi bersama
                HR Academy
            </p>

            <div className='mt-8 flex flex-wrap text-center justify-center md:justify-start'>
                {/* <UnstyledLink to ='https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0 '>
                    <Button isLoading={false} variant='yellow' className='border-0 p-3 rounded-none font-bold'>
                        HUBUNGI ADMIN
                    </Button>
                </UnstyledLink> */}
                <Button
                    type="link"
                    to="https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0 "
                    color="warning"
                    text="HUBUNGI ADMIN"
                />
            </div>
        </Jumbotron>
        </>
    )
}