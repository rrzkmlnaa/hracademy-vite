import React from 'react'

interface PropsType {
  imageName: string
  children: React.ReactNode
}

export default function Jumbotron({ imageName, children }: PropsType) {
  const sectionStyle = {
    backgroundImage: `url(/images/${imageName})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section style={sectionStyle}>
      <div className="mx-auto h-screen max-w-screen-xl lg:px-6 text-white md:px-10 lg:flex lg:items-center">
        <div className="max-w-3xl text-start ltr:sm:text-left rtl:sm:text-right flex items-center justify-center min-h-screen">
          {children}
        </div>
      </div>
    </section>
  )
}
