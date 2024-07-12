import React, { ReactNode } from 'react';

interface BannerTypes {
  colorstyle: string;
  children: ReactNode;
}

export default function Banner({ colorstyle, children }: BannerTypes) {
  return (
    <section className={`${colorstyle}`}>
      <div className='container mx-auto max-w-screen-xl min-h96 content-center py-16'>
        {children}
      </div>
    </section>
  );
};
