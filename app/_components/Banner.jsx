"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/aurat.png" alt="Slide 1" width={400} height={400} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/ontime.png" alt="Slide 2" width={400} height={400} />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col items-center justify-center gap-4">
          <iframe
            height="167"
            width="552"
            frameBorder="0"
            src="https://itch.io/embed/2963706"
          >
            <a href="https://sleepyheadstudios.itch.io/aurat">
              Aurat by SleepyHead Studios
            </a>
          </iframe>
          <iframe
            height="167"
            width="552"
            frameBorder="0"
            src="https://itch.io/embed/3558410"
          >
            <a href="https://sleepyheadstudios.itch.io/red-orbit-10">
              Red Orbit 1.0 by SleepyHead Studios
            </a>
          </iframe>
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/redorbit.png" alt="Slide 4" width={400} height={400} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/ecobuilder.png" alt="Slide 5" width={400} height={400} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
