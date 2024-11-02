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
            Neenga kudutha assets use Panni edit panna bro....neraiya time save
            agudhu.
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold pb-1">Nitish</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        {/* card component */}
        <div className="bg-white text-slate-600 text-xl shadow-2xl p-8 h-64 w-80 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <p>
            Customer data collect pandradhum & client onboard pandradhum reveal
            pannadhuku thanks 👍🏻.
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold pb-1">Gayathri</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        <div className="bg-white text-xl text-slate-600 shadow-2xl p-8 h-64 w-full rounded-3xl flex flex-col justify-between text-left">
          <p>
            Bro naan patha varaikum 999rs ku inthana skills neenga dhan first
            time solli tharinga
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold pb-1">Pradeep</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        {/* card component */}
        <div className="bg-white text-xl shadow-2xl p-8 text-slate-600 h-64 w-80 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <p>
            I done 5 designs within 2hrs for my first client & i charged around
            600rs, this is huge for me in just 2hours
          </p>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold pb-1">Vinitha</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        <div className="bg-white text-xl shadow-2xl p-8 h-64 w-full text-slate-600 rounded-3xl flex flex-col justify-between text-left">
          <div className="max-h-fit py-10">
            <img className="h-20" src="/testimonial_special.jpeg" />
          </div>
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold pb-1">Syed Ijaz</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white text-xl shadow-2xl text-slate-600 p-4 h-64 w-72 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <img className="h-32" src="/tes_spec1.jpeg" />
          <div className="flex flex-row gap-2 items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Syed Ijaz</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white text-xl shadow-2xl text-slate-600 p-4 h-64 w-72 rounded-3xl flex flex-col justify-between text-left">
          <img className="h-32 w-full" src="/tes_spec2.jpeg" />
          <div className="flex flex-row items-center justify-start">
            <img className="w-12" src="/pr.jpg" />
            <div>
              <h2 className="text-xl font-semibold">Syed Ijaz</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="pb-8">
        {/* card component */}
        <div className="bg-white text-xl shadow-2xl text-slate-600 p-8 h-64 w-80 rounded-3xl flex flex-col justify-between gap-4 text-left">
          <img className="w-20" src="/tes_spec2.jpeg" />
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
