"use client";
import dynamic from "next/dynamic";

import db from "@/firestore";
import getCurrentUserEmail from "@/getCurrentUser";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

// Dynamically import the Plyr component with no SSR
const Plyr = dynamic(() => import("plyr-react"), {
  ssr: false, // Disable server-side rendering for this component
});

import "plyr-react/plyr.css"; // Import the Plyr CSS

/**
 * This code exports a React component called `VideoList` that renders a list of videos using the Plyr
video player.
 * @returns Plyr instance
 */
export default function VideoList() {
  // Define an array of video sources
  const videos = [
    {
      thumbnail: "/1Mindset.jpg",
      title: "1-Mindset",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/1-Mindset.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/2Business.jpg",
      title: "2-Business",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/2-Business.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/3Marketing.JPG",
      title: "3-Marketing",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/3-Marketing.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/4Sales.jpg",
      title: "4-Sales",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/4-Sales.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/5Branding.jpg",
      title: "5-Branding",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/5-Branding.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/6GRAPHIC DESIGN.jpg",
      title: "6-Graphic_design",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/6-Graphic_design.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/7Instagram algorithm.JPG",
      title: "7-Instagram_Algorithm",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/7-Instagram_Algorithm.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/8Content creation.JPG",
      title: "8-Conten_Creation",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/8-Content_Creation.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/9CONTENT WRITING.JPG",
      title: "9-Content_Writing",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/9-Content_Writing.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/10Videogrphy.jpg",
      title: "10-Videography",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/10-Videography.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      thumbnail: "/11Editing.JPG",
      title: "11-Video_Editing",
      src: "https://storage.googleapis.com/fullstackcreator-storage/videos/11-Video_Editing.mp4", type: "video/mp4",
      size: 1080,
    },

    // Add more videos as needed
  ];

  const [isPaidUser, setIsPaidUser] = useState(false); // State to track if user has paid
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(""); // State to track errors
  const [email, setEmail] = useState(""); // State to track user's email
  const [user, setUser] = useState(null); // State to track user data
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Fetch current user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUserEmail();
        setUser(currentUser);

        // If no user is signed in, set an error message
        if (!currentUser) {
          setError("You are not signed in.");
          setLoading(false); // Stop loading
        } else {
          // Get user's email
          setEmail(currentUser);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Error fetching user information.");
        setLoading(false); // Stop loading on error
      }
    };

    fetchUser();
  }, []);

  // Check payment status when email is set
  useEffect(() => {
    const checkUserPaymentStatus = async () => {
      if (email) {
        try {
          const userQuery = query(
            collection(db, "users_paid"),
            where("customerEmail", "==", email),
          );
          const querySnapshot = await getDocs(userQuery);

          if (!querySnapshot.empty) {
            // User is in the paid collection
            setIsPaidUser(true);
          } else {
            // User is not in the paid collection
            setError("You do not have access to view this content.");
          }
        } catch (err) {
          console.error("Error fetching user payment status:", err);
          setError("An error occurred while checking your payment status.");
        } finally {
          setLoading(false); // Stop loading
        }
      }
    };

    if (email) {
      checkUserPaymentStatus(); // Trigger check when email is set
    }
  }, [email]); // email is the dependency here

  // Render logic based on loading, error, and payment status
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-5xl font-bold text-center my-auto h-svh w-screen mx-auto underline decoration-red-500 decoration-wavy">
        <h1 className="my-auto pt-40">{error}</h1>
      </div>
    );
  }

  if (!isPaidUser) {
    return (
      <div>
        <h1 className="text-5xl font-bold text-center my-auto h-svh w-screen mx-auto underline decoration-red-500 decoration-wavy pt-40">
          You do not have access to view this contents.
        </h1>
      </div>
    );
  }

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
          poster={[videos[currentVideoIndex]].thumbnail}
          title={[videos[currentVideoIndex].title]}
          source={{
            // some error is popping
            // previewThumbnails: {
            //   enabled: true,
            //   src: [videos[currentVideoIndex].thumbnail],
            // },
            poster: [videos[currentVideoIndex].thumbnail],

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
