import Image from "next/image";
export default function Home() {
  const previousRate = "2500";
  const rate = "999";
  const days = "99";
  return (
    <>
      <div className="max-w-screen-xl mx-auto font-sans">
        <div className="text-2xl my-8 font-bold mx-auto w-fit text-center uppercase">
          <h1>No views! no followers! no revenue</h1>
          <h1>don't worry</h1>
        </div>
        <div className="text-2xl my-8 font-bold mx-auto w-fit text-center">
          <h1>Full Stack Creator</h1>
          <h1>Masterclass</h1>
        </div>

        <div className="text-2xl my-8 font-bold mx-auto w-fit text-center bg-white h-full">
          <h1>Video</h1>
        </div>

        <div className="text-lg my-4 font-thin text-slate-100 opacity-40 mx-auto w-fit text-center">
          <h1>Beginner To Pro</h1>
        </div>

        <div className="text-xl my-8 font-bold mx-auto w-fit text-center">
          <h1>Limited seats only</h1>
          <div
            class="button my-8 text-nowrap bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400"
          >
            <span class="flex flex-col justify-center items-center px-8 py-2 h-full text-white font-bold text-lg">
              Join Now
              <span className="text-orange-100">
                $999 only{" "}
                <span className="line-through text-slate-300 text-sm">
                  $2500
                </span>
              </span>
            </span>
          </div>
          {/*
          // <button className="bg-[#BD54FF] mt-4 text-lg text-white font-sans duration-500 px-8 py-1 hover:bg-blue-500 rounded-full text-nowrap">
          //   Join Now <span className="text-2xl">${rate}</span> only <br />{" "}
          //   <span className="line-through">${previousRate}</span>
          // </button> */}
        </div>

        <div className="my-8 font-thin text-slate-200 opacity-70 mx-auto w-fit text-center">
          <h1>Offer ends in</h1>
        </div>

        <div className="my-8 font-semibold grid grid-cols-4 gap-4 px-4 text-center text-white">
          <div className="bg-indigo-950 rounded-lg h-[100px] flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl">{days}</h1>
            <p className="text-sm font-thin">days</p>
          </div>
          <div className="bg-indigo-950 rounded-lg h-[100px] flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl">{days}</h1>
            <p className="text-sm font-thin">hours</p>
          </div>
          <div className="bg-indigo-950 rounded-lg h-[100px] flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl">{days}</h1>
            <p className="text-sm font-thin">minutes</p>
          </div>
          <div className="bg-indigo-950 rounded-lg h-[100px] flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl">{days}</h1>
            <p className="text-sm font-thin">seconds</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto bg-slate-900 pt-12 pb-8 font-sans">
        <h1 className="py-8 text-center font-bold text-2xl">
          Why this{" "}
          <span className="text-amber-500">
            Full Stack Creator Masterclass?
          </span>
        </h1>
        <p className="text-xs px-4 pb-8 text-justify max-w-screen-lg mx-auto">
          The Full Stack Creator Masterclass is designed to provide you with
          everything you need to succeed in the world of content creation, from
          beginner to pro. This comprehensive Masterclass covers all essential
          aspects, including mindset, business, marketing, sales, branding,
          graphic design, the Instagram algorithm, content creation, scripting,
          videography, and editing.
        </p>
      </div>

      <div className="max-w-screen-xl overflow-hidden mx-auto bg-slate-900 font-sans">
        <div className="text-2xl py-8 pt-4 font-bold mx-auto w-fit text-center">
          <h1 className="py-8">Start Your Journey in Content Creation</h1>
          <ol className="text-left px-4 list-disc flex flex-col gap-2 text-xs font-normal text-slate-100 opacity-75">
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

        <h1 className="pt-12 pb-0 text-center font-bold text-3xl">
          Whom this <span className="text-amber-500">mastery course </span>is
          for ?
        </h1>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 m-20">
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/student.png" />
              <p className="text-center my-auto py-3 font-bold text-indigo-800 text-2xl">
                Students
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl m-2 overflow-hidden hover:skew-y-3 hover:-skew-x-2 transition-all ease-in-out">
            <div className="hover:scale-110 transition-all flex items-center justify-center duration-200 cursor-pointer flex-col">
              <img src="/graphicDesigners.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Graphic Designers
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
              <img src="/Housewives.png" />
              <p className="text-center py-3 font-bold text-indigo-800 text-2xl">
                Housewives
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

      <div className="max-w-screen-xl mx-auto py-8 bg-slate-950 font-sans">
        <h1 className="py-12 text-center font-bold text-4xl">
          What will <span className="text-amber-500">you learn </span>?
        </h1>
        <p className="text-center text-lg">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>

        <div className="grid gap-12 px-8 py-16">
          <div className="grid grid-cols-2 gap-12 items-center">
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
          <div className="grid grid-cols-2 gap-12 items-center">
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
            <img src="/Business.png" />
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
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
          <div className="grid grid-cols-2 gap-12 items-center">
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
            <img className="h-72 mx-auto rounded-2xl" src="/sales.png" />
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
            <img className="h-72 mx-auto rounded-2xl" src="/branding.png" />
            <div>
              <h1 className="text-3xl font-bold text-center">Branding</h1>
              <ol className="text-justify p-4 list-disc flex flex-col justify-center gap-2 text-sm font-normal text-slate-100 opacity-75">
                <li>Discover the 7 essential elements of brand identity.</li>
                <li>Learn the 5 A's of personal branding.</li>
              </ol>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
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
            <img className="h-72 mx-auto rounded-2xl" src="/gdesign.png" />
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
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
          <div className="grid grid-cols-2 gap-12 items-center">
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
              className="h-72 mx-auto rounded-2xl"
              src="/Contentcreation.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
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
          <div className="grid grid-cols-2 gap-12 items-center">
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
            <img className="h-72 mx-auto rounded-2xl" src="/videography.png" />
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
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

        <h1 className="py-12 text-center font-bold text-4xl">
           <span className="text-amber-500">Testimonials </span>
        </h1>
        <h1 className="pb-12 text-center font-bold text-4xl">
        What They Say?
        </h1>
    </>
  );
}
