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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    padding: '2rem 0', // Added padding to provide space around content
  };

  return (
    <section style={sectionStyle}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-white text-left">
          {children}
        </div>
      </div>
    </section>
  );
}
