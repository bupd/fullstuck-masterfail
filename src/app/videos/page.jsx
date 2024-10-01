"use client";
import dynamic from 'next/dynamic';

// Dynamically import the Plyr component with no SSR
const Plyr = dynamic(() => import('plyr-react'), {
  ssr: false, // Disable server-side rendering for this component
});

import 'plyr-react/plyr.css'; // Import the Plyr CSS
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
      title: "1-Mindset",
      src: "https://storage.googleapis.com/fullstackcreator/videos/1-Mindset.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "2-Business",
      src: "https://storage.googleapis.com/fullstackcreator/videos/2-Business.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "3-Marketing",
      src: "https://storage.googleapis.com/fullstackcreator/videos/3-Marketing.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "4-Sales",
      src: "https://storage.googleapis.com/fullstackcreator/videos/4-Sales.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "5-Branding",
      src: "https://storage.googleapis.com/fullstackcreator/videos/5-Branding.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "6-Graphic_design",
      src: "https://storage.googleapis.com/fullstackcreator/videos/6-Graphic_design.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "7-Instagram_Algorithm",
      src: "https://storage.googleapis.com/fullstackcreator/videos/7-Instagram_Algorithm.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "8-Content_Creation",
      src: "https://storage.googleapis.com/fullstackcreator/videos/8-Content_Creation.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "9-Content_Writing",
      src: "https://storage.googleapis.com/fullstackcreator/videos/9-Content_Writing.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "10-Videography",
      src: "https://storage.googleapis.com/fullstackcreator/videos/10-Videography.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      title: "11-Video_Editing",
      src: "https://storage.googleapis.com/fullstackcreator/videos/11-Video_Editing.mp4",
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
