"use client";
import MuxPlayer from "@mux/mux-player-react";

export default function Video() {
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
        </div>

        <MuxPlayer
          playbackId="lk6FddE3nTrxqG1601MNiQoGunCp02ZLS8nwO3ps6GGDM"
        />
      </div>
    </>
  );
}
