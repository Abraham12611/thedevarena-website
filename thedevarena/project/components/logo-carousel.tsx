"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB" },
  { src: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg", alt: "DigitalOcean" },
  { src: "https://cdn.worldvectorlogo.com/logos/netlify.svg", alt: "Netlify" },
  { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel" },
  { src: "https://cdn.worldvectorlogo.com/logos/vultr.svg", alt: "Vultr" },
  { src: "https://cdn.worldvectorlogo.com/logos/freecodecamp-1.svg", alt: "freeCodeCamp" },
];

export default function LogoCarousel() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (row1Ref.current) row1Ref.current.style.animationPlayState = "paused";
      if (row2Ref.current) row2Ref.current.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      if (row1Ref.current) row1Ref.current.style.animationPlayState = "running";
      if (row2Ref.current) row2Ref.current.style.animationPlayState = "running";
    };

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      row1.addEventListener("mouseenter", handleMouseEnter);
      row1.addEventListener("mouseleave", handleMouseLeave);
      row2.addEventListener("mouseenter", handleMouseEnter);
      row2.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (row1 && row2) {
        row1.removeEventListener("mouseenter", handleMouseEnter);
        row1.removeEventListener("mouseleave", handleMouseLeave);
        row2.removeEventListener("mouseenter", handleMouseEnter);
        row2.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-10 bg-background/50 backdrop-blur-sm">
      <div
        ref={row1Ref}
        className="flex animate-scroll-left"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        ))}
      </div>
      <div
        ref={row2Ref}
        className="flex animate-scroll-right mt-8"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}