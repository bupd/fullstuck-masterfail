"use client";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useState } from "react";

/**
 * This code exports a React component called `VideoList` that renders a list of videos using the Plyr
video player.
 * @returns Plyr instance
 */
export default function VideoList() {
  // Define an array of video sources
  const videos = [
    {
      title: "kumar",
      src: "https://storage.googleapis.com/fullstackcreator/videos/1-Mindset.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      src: "https://storage.googleapis.com/fullstackcreator/videos/1-Mindset.mp4",
      type: "video/mp4",
      size: 1080,
    },
    // Add more videos as needed
  ];

  // State to keep track of the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to go to the previous video
  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1,
    );
  };

  // Function to go to the next video
  const handleNext = () => {
    console.log("next triggered");
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      {/*
      // <Plyr
      //   source={{
      //     type: "video",
      //     sources: [
      //       {
      //         src: "1014554651",
      //         // type: "video/mp4",
      //         provider: "vimeo",
      //       },
      //     ],
      //   }}
      // />
      */}

      <div className="rounded-3xl border-2 p-3">
        <Plyr
          autoPlay
          onEnded={handleNext} // Automatically go to next video when current one ends
          autoFocus
          source={{
            type: "video",
            sources: [videos[currentVideoIndex]],
          }}
        />

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
