import { cn } from "lib/utils";
import React from "react";

interface PropsType {
  imageName: string;
  children: React.ReactNode;
  className?: string;
}

export default function Jumbotron({
  imageName,
  children,
  className,
}: PropsType) {
  const sectionStyle = {
    backgroundImage: `url(/images/${imageName})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <section style={sectionStyle}>
      <div
        className={cn(
          "mx-auto max-w-screen text-white md:px-10 lg:flex lg:items-center lg:px-8",
          className
        )}
      >
        <div className="max-w-full text-center">{children}</div>
      </div>
    </section>
  );
}
