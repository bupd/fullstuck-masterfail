"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/autoplay";

import "./styles.css";
// Install the modules
import {
  Navigation,
  Pagination,
  Zoom,
  Keyboard,
  Mousewheel,
  Autoplay,
  FreeMode,
} from "swiper/modules";

export default function SwiperCard() {
  return (
    <Swiper
      speed={4000}
      direction="horizontal"
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      slidesPerView={3}
      spaceBetween={0}
      breakpoints={{
        1700: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
      }}
      freeMode={{
        enabled: true,
      }}
      modules={[
        Navigation,
        Pagination,
        Zoom,
        Keyboard,
        Mousewheel,
        Autoplay,
        FreeMode,
      ]}
    >
      <SwiperSlide className="pb-8">
        <div className="bg-white text-slate-600 text-xl shadow-2xl p-8 h-64 w-full rounded-3xl flex flex-col justify-between text-left">
          <p>
            As a seasoned designer always on the lookout for innovative tools,
            Framer.com instantly grabbed my attention..
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Casey Jordan</h2>
              <h4 className="text-slate-400">Dawson Tech</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        {/* card component */}
        <div className="bg-white text-slate-600 text-xl shadow-2xl p-8 h-64 w-80 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <p>
            I was amazed at how quickly we were able to integrate this app into
            our workflow.
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Casey Jordan</h2>
              <h4 className="text-slate-400 text-lg">Dawson Tech</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        <div className="bg-white text-xl text-slate-600 shadow-2xl p-8 h-64 w-full rounded-3xl flex flex-col justify-between text-left">
          <p>
            As a seasoned designer always on the lookout for innovative tools,
            Framer.com instantly grabbed my attention..
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Casey Jordan</h2>
              <h4 className="text-slate-400">Dawson Tech</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        {/* card component */}
        <div className="bg-white text-xl shadow-2xl p-8 text-slate-600 h-64 w-80 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <p>
            I was amazed at how quickly we were able to integrate this app into
            our workflow.
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Casey Jordan</h2>
              <h4 className="text-slate-400 text-lg">Dawson Tech</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        <div className="bg-white text-xl shadow-2xl p-8 h-64 w-full text-slate-600 rounded-3xl flex flex-col justify-between text-left">
          <p>
            As a seasoned designer always on the lookout for innovative tools,
            Framer.com instantly grabbed my attention..
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Casey Jordan</h2>
              <h4 className="text-slate-400">Dawson Tech</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        {/* card component */}
        <div className="bg-white text-xl shadow-2xl text-slate-600 p-8 h-64 w-80 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <p>
            I was amazed at how quickly we were able to integrate this app into
            our workflow.
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Casey Jordan</h2>
              <h4 className="text-slate-400 text-lg">Dawson Tech</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
}
