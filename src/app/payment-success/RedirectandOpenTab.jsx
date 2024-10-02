"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectAndOpenTab = ({ isPaidUser }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isPaidUser) {
      // Set loading state to true and show modal for 8 seconds
      setLoading(true);

      const timer = setTimeout(() => {
        // Open the new tab with the WhatsApp link
        window.open("https://chat.whatsapp.com/CO4H6BtMAQ3ApTdxRCX87s", "_blank");

        // Redirect to the '/videos' page after 8 seconds
        router.push("/videos");

        setLoading(false)
      }, 8000); // 8-second delay

      return () => clearTimeout(timer); // Cleanup timer when component unmounts
    }
  }, [isPaidUser, router]);

  return (
    <div>
      {/* Modal to show loading */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-3xl shadow-lg animate-bounce">
            <h2 className="text-lg font-semibold mb-2">Loading...</h2>
            <p>Please wait while we redirect you.</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default RedirectAndOpenTab;
