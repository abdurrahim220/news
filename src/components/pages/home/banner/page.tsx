"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { sliders } from "@/lib/constant";

const Banner = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla mt-20" ref={emblaRef}>
      <div className="embla__container">
        {sliders.map((slider) => (
          <div className="embla__slide" key={slider.id}>
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
              <Image
                src={slider.image}
                alt={slider.title}
                fill
                className="w-full h-full object-cover"
                // priority
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
