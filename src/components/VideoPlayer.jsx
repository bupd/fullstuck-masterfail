"use client";
import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
// import 'plyr/dist/plyr.css'; // Import the Plyr CSS

const VideoPlayer = () => {
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    // Initialize Plyr on the video element
    const player = new Plyr(videoRef.current, {
      captions: { active: true, update: true, language: "auto" },
    });

    // Expose player globally for console access if needed
    window.player = player;

    return () => {
      // Cleanup Plyr instance when component is unmounted
      player.destroy();
    };
  }, []);

  return (
    <div className="container">
      <video
        ref={videoRef} // Attach ref to video element
        controls
        crossOrigin="anonymous"
        playsInline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
      >
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
          size="576"
        />
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
          size="720"
        />
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
          size="1080"
        />

        {/* Caption files */}
        <track
          kind="captions"
          label="English"
          srcLang="en"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          default
        />
        <track
          kind="captions"
          label="Français"
          srcLang="fr"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
        />

        {/* Fallback link for unsupported browsers */}
        <a
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          download
        >
          Download
        </a>
      </video>
    </div>
  );
};

export default VideoPlayer;
