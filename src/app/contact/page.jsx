import React from "react";

function ContactUs() {
  return (
    <>
      <div className="bg-neutral-950 h-svh">
        <div className="max-w-screen-xl mx-auto font-sans bg-neutral-950 text-white overflow-hidden">
          <div className="text-2xl my-8 font-bold mx-auto w-fit text-center uppercase">
          </div>
          <div className="text-4xl my-8 font-bold mx-auto w-fit text-center">
            <h1>Contact Us</h1>
          </div>
          <div className="flex flex-col gap-8 mt-20 font-bold">
          <a className="text-center text-2xl" href="https://api.whatsapp.com/send?phone=9345476429">Whatsapp: +91 9345476429</a>
          <a className="text-center text-2xl" href="https://www.instagram.com/fullstack.creator/profilecard/?igsh=MThwYmZiNTFidXF4aA==">Instagram: @FullStack.Creator</a>
          <a className="text-center text-2xl" href="https://www.youtube.com/@GreyEditor">YouTube: FullStack Creator</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
