import React from 'react';

interface PropsType {
  imageName: string;
  children: React.ReactNode;
}

export default function Jumbotron({ imageName, children }: PropsType) {
  const sectionStyle = {
    backgroundImage: `url(/images/${imageName})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <section style={sectionStyle}>
      <div className="mx-auto max-w-screen px-6 text-white md:px-10 lg:flex lg:items-center lg:px-8">
        <div className="max-w-full text-center">
          {children}
        </div>
      </div>
    </section>
  );
}
