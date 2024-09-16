"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import SwiperCard from "@/components/SwiperCard";
import Image from "next/image";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";
export default function Home() {
  const previousRate = "2500";
  const rate = "999";
  const days = "99";
  const DateOfSaleEnd = "23 Jun 24";
  return (
    <>
      <div className="bg-neutral-950">
        <div className="max-w-screen-xl mx-auto font-sans bg-neutral-950 text-white overflow-hidden">
          <div className="text-2xl my-8 font-bold mx-auto w-fit text-center uppercase">
            <h1>No views! no followers! no revenue</h1>
            <h1>don't worry</h1>
          </div>
          <div className="text-2xl my-8 font-bold mx-auto w-fit text-center">
            <h1>Full Stack Creator</h1>
            <h1>Masterclass</h1>
          </div>

          <div className="max-w-screen-lg mx-auto">
            <MediaPlayer autoPlay title="promo" src="youtube/IvqNxxRlpP0">
              <MediaProvider />
              <PlyrLayout
                // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={plyrLayoutIcons}
              />
            </MediaPlayer>
          </div>
          <div className="text-2xl my-8 font-bold mx-auto w-fit text-center bg-white h-full"></div>

          <div className="text-lg my-4 font-thin text-slate-100 opacity-40 mx-auto w-fit text-center">
            <h1>Beginner To Pro</h1>
          </div>

          <div className="my-8 mx-auto w-fit font-semibold grid grid-cols-2 justify-center gap-4 px-4 text-center text-white items-center">
            {/* duration */}
            <div className="bg-zinc-800 border h-[80px] lg:w-[180px] w-full flex flex-row gap-4 items-center justify-center mx-auto rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#f59e0b"
                  d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Zm-2.06 106.85a4 4 0 0 0-4.06.11L124 164.78V160a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-4.78l25.88 16.17a4 4 0 0 0 2.12.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 156 216v-64a4 4 0 0 0-2.06-3.5M116 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm32 .78l-24-15v-19.56l24-15Z"
                ></path>
              </svg>

              <div className="flex flex-col items-baseline justify-start">
                <h1 className="text-center font-thin lg:text-xl">Duration</h1>
                <p className="text-lg font-semibold text-left">8 Hrs</p>
              </div>
            </div>
            {/* date */}
            <div className="bg-zinc-800 border h-[80px] lg:w-[180px] w-full flex flex-row gap-4 items-center justify-center mx-auto rounded-2xl">
              <img src="/calendar.svg" className="px-2 w-3/12" />

              <div className="flex flex-col items-baseline justify-start">
                <h1 className="text-center font-thin text-xl">Date</h1>
                <p className="text-lg font-semibold text-left pr-4">
                  {DateOfSaleEnd}
                </p>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="text-xl my-8 font-bold mx-auto w-fit text-center">
            <h1>Limited seats only</h1>
            <div class="bg-action rounded-2xl mt-4 mb-8 hover:scale-110 transition-all ease-in-out duration-700 hover:shadow-lg hover:cursor-pointer drop-shadow-lg hover:shadow-yellow-50">
              <span class="flex flex-row gap-2 justify-center items-center px-8 py-2 h-full text-white font-bold text-lg">
                Join Now
                <span className="text-2xl"> ₹999 only </span>
              </span>
            </div>

            <span className="line-through text-slate-300 text-sm">
              Price: ₹2500
            </span>
            {/*
          // <button className="bg-[#BD54FF] mt-4 text-lg text-white font-sans duration-500 px-8 py-1 hover:bg-blue-500 rounded-full text-nowrap">
          //   Join Now <span className="text-2xl">${rate}</span> only <br />{" "}
          //   <span className="line-through">${previousRate}</span>
          // </button>
          // */}
          </div>

          <div className="my-8 font-thin text-slate-200 opacity-70 mx-auto w-fit text-center">
            <h1>Offer ends in</h1>
          </div>

          <div className="my-8 font-semibold grid grid-cols-4 gap-4 px-4 text-center text-white">
            <div className="bg-indigo-950 rounded-xl h-[100px] flex flex-col items-center justify-center">
              <h1 className="text-center text-4xl">{days}</h1>
              <p className="text-sm font-thin">days</p>
            </div>
            <div className="bg-indigo-950 rounded-xl h-[100px] flex flex-col items-center justify-center">
              <h1 className="text-center text-4xl">{days}</h1>
              <p className="text-sm font-thin">hours</p>
            </div>
            <div className="bg-indigo-950 rounded-xl h-[100px] flex flex-col items-center justify-center">
              <h1 className="text-center text-4xl">{days}</h1>
              <p className="text-sm font-thin">minutes</p>
            </div>
            <div className="bg-indigo-950 rounded-xl h-[100px] flex flex-col items-center justify-center">
              <h1 className="text-center text-4xl">{days}</h1>
              <p className="text-sm font-thin">seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-white bg-slate-900 pt-12 pb-8 font-sans">
        <h1 className="py-8 text-center font-bold text-3xl">
          Why this{" "}
          <span className="text-amber-500">
            Full Stack Creator Masterclass?
          </span>
        </h1>
        <p className="text-xl px-4 pb-8 text-justify max-w-screen-lg mx-auto">
          The Full Stack Creator Masterclass is designed to provide you with
          everything you need to succeed in the world of content creation, from
          beginner to pro. This comprehensive Masterclass covers all essential
          aspects, including mindset, business, marketing, sales, branding,
          graphic design, the Instagram algorithm, content creation, scripting,
          videography, and editing.
        </p>
      </div>
      <div className="max-w-screen-xl overflow-hidden text-white mx-auto bg-slate-900 font-sans">
        <div className="text-2xl py-8 pt-4 font-bold mx-auto w-fit text-center">
          <h1 className="py-8 px-2">Start Your Journey in Content Creation</h1>
          <ol className="text-left pl-8 list-disc flex flex-col gap-2 text-lg font-normal text-slate-100 opacity-75 max-w-screen-lg">
            <li>
              When starting out, you'll handle everything for your Instagram
              page profile, posts, reels, and more.
            </li>
            <li>
              You'll need branding and graphic design skills to create a
              compelling profile picture, logo, and posts.
            </li>
            <li>
              Engaging reels require strong scripting, videography, and editing.
            </li>
            <li>
              Understanding the Instagram algorithm and content creation
              strategies is crucial for page growth. Once you gain followers,
              selling products or services becomes essential.
            </li>
            <li>
              You'll need knowledge in business, marketing, and sales to
              succeed. Our Full Stack Creator Masterclass offers a holistic
              approach by combining content creation with business skills.
            </li>
          </ol>
        </div>

        <h1 className="pt-12 pb-0 text-center font-bold text-4xl">
          Whom this <span className="text-amber-500">mastery course </span>is
          for ?
        </h1>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:m-20 pt-4 px-4">
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/student.webp" className="rounded-2xl" />
              <p className="text-center my-auto py-3 font-bold text-indigo-800 text-2xl">
                Students
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/Housewives.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Housewifes
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/BusinessOwners.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Business Owners & Entrepreneurs
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/WorkingProfessionals.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Working Professionals
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/VideoEditors.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Video Editors
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/graphicDesigners.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Graphic Designing
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/ContentCreators.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Content Creators
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/DigiCoach.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Digital Coaches
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl text-white mx-auto py-8 bg-slate-950 font-sans">
        <h1 className="py-12 text-center font-bold text-4xl">
          What will <span className="text-amber-500">you learn </span>?
        </h1>
        <p className="text-center text-lg">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>

        <div className="grid gap-12 px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src="/Mindset.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">Mindset</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Understand how mindset can transform your life. </li>
                <li>
                  Learn techniques for controlling depression, overthinking,
                  procrastination, and sleep disorders.
                </li>
                <li>Achieve financial and time freedom. </li>
                <li>Discover and pursue your passion. </li>
              </ol>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img className="lg:hidden" src="/Business.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">Business</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Learn how to start a successful business. </li>
                <li>
                  Follow a step-by-step process to build and grow your business.
                </li>
                <li>Develop a business system that runs on autopilot. </li>
                <li>Implement effective business ideas. </li>
                <li>Understand the reasons behind wealth disparity.</li>
              </ol>
            </div>
            <img className="hidden lg:block" src="/Business.png" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img className="h-72 mx-auto rounded-2xl" src="/Marketing.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">Marketing</h1>
              <ol className="text-justify p-4 pl-8 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Explore the psychology behind marketing. </li>
                <li>Create effective marketing funnels.</li>
                <li>Identify and target your audience.</li>
                <li>Generate organic leads with zero-rupee marketing.</li>
                <li>Master digital and social media marketing.</li>
                <li>Develop a winning pricing strategy.</li>
              </ol>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              className="h-72 mx-auto rounded-2xl lg:hidden"
              src="/sales.png"
            />
            <div>
              <h1 className="text-3xl font-bold text-center">Sales</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li> Master the art of selling.</li>
                <li>Understand the psychology behind sales.</li>
                <li>Build and optimize sales funnels.</li>
                <li>Create custom databases and case studies for leads.</li>
                <li>practical sales classes.</li>
              </ol>
            </div>
            <img
              className="h-72 mx-auto rounded-2xl hidden lg:block"
              src="/sales.png"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img className="h-72 mx-auto rounded-2xl" src="/branding.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">Branding</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Discover the 7 essential elements of brand identity.</li>
                <li>Learn the 5 A's of personal branding.</li>
              </ol>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              className="h-72 mx-auto rounded-2xl lg:hidden"
              src="/gdesign.png"
            />
            <div>
              <h1 className="text-3xl font-bold text-center">
                Graphic Designers
              </h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>
                  Learn the fundamentals and principles of graphic design.
                </li>
                <li>Understand the psychology of colors and fonts.</li>
                <li>
                  Participate in practical design classes using Canva and
                  Photoshop.
                </li>
                <li>
                  Gain skills to design on both mobile and PC using any software
                  you prefer.
                </li>
              </ol>
            </div>
            <img
              className="h-72 mx-auto rounded-2xl hidden lg:block"
              src="/gdesign.png"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img className="h-72 mx-auto rounded-2xl" src="/instaAlog.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">
                Instagram Algorithm
              </h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Understand how the Instagram algorithm works.</li>
                <li>Learn how to go viral.</li>
                <li>Discover reasons for low views on reels.</li>
              </ol>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              className="h-72 mx-auto rounded-2xl lg:hidden"
              src="/Contentcreation.png"
            />
            <div>
              <h1 className="text-3xl font-bold text-center">
                Content Creation
              </h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Understand the importance of content creation.</li>
                <li>Learn why content creators should start a business.</li>
                <li>Get tips and tricks to crack the Instagram algorithm.</li>
                <li>Select a niche and generate unlimited content ideas.</li>
                <li>Learn how to generate revenue from content creation.</li>
              </ol>
            </div>
            <img
              className="h-72 mx-auto rounded-2xl hidden lg:block"
              src="/Contentcreation.png"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img className="h-72 mx-auto rounded-2xl" src="/scripting.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">
                Scripting and Storytelling
              </h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Learn how to write viral scripts.</li>
                <li>Understand the psychology behind storytelling.</li>
                <li>screenplays used in movies.</li>
              </ol>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              className="h-72 mx-auto rounded-2xl lg:hidden"
              src="/videography.png"
            />
            <div>
              <h1 className="text-3xl font-bold text-center">Videography</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Explore the psychology behind videography.</li>
                <li>
                  Learn the fundamentals of videography, including composition,
                  shots, angles, and camera movements.
                </li>
              </ol>
            </div>
            <img
              className="h-72 mx-auto rounded-2xl hidden lg:block"
              src="/videography.png"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img className="h-72 mx-auto rounded-2xl" src="/editing.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">Editing</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Understand the fundamentals of video editing.</li>
                <li>
                  Explore the psychology of video editing and sound effects.
                </li>
                <li>
                  Learn retention-based editing and the power of green screen.
                </li>
                <li>Discover the best websites for editors.</li>
                <li>
                  Gain skills to edit videos using any software (CapCut, VN,
                  Premiere Pro, DaVinci, Final Cut Pro) on any device (mobile,
                  PC).
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto text-white bg-slate-950">
        <h1 className="py-12 text-center font-bold text-4xl">
          <span className="text-amber-500">Testimonials </span>
        </h1>
        <h1 className="pb-12 text-center font-bold text-4xl">What They Say?</h1>
      </div>
      <div className="bg-slate-950">
        <SwiperCard />
      </div>
      <div className="max-w-screen-xl text-white flex flex-col items-center mx-auto bg-slate-950 font-sans py-12">
        <h1 className="py-12 text-center font-bold text-4xl">
          What I get from this{" "}
          <span className="text-amber-500">masterclass </span>?
        </h1>
        <ol className="pl-12 text-wrap list-decimal flex flex-col justify-center gap-2  font-normal text-slate-100 opacity-85 text-2xl">
          <li>Trending assets pack worth 3,999.</li>
          <li>Content creation mastery ebook worth 2,999.</li>
          <li>Ai tools pdf worth 1,999.</li>
          <li>Placement- partime.</li>
          <li>Community Access.</li>
          <li>1-1 page review.</li>
          <li>Certificate.</li>
        </ol>
      </div>
      <div className="max-w-screen-xl text-white overflow-hidden mx-auto py-12 bg-slate-950 px-16">
        <h1 className="py-12 text-center font-bold text-4xl">
          Join the{" "}
          <span className="text-amber-500">
            Full Stack Creator Masterclass{" "}
          </span>
          ?
        </h1>
        <p className="text-justify text-xl pt-4 max-w-4xl mx-auto pb-8">
          Whether you're a beginner or looking to enhance your skills, this
          masterclass provides a complete roadmap to becoming a successful
          content creator. Grow your audience and turn your passion into a
          thriving business. Join the Full Stack Creator Masterclass and
          transform your creative journey today.
        </p>
      </div>
    </>
  );
}
