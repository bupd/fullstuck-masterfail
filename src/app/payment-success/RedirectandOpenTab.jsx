"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectAndOpenTab = ({ isPaidUser }) => {
  const router = useRouter(); // useRouter from next/navigation

  useEffect(() => {
    if (isPaidUser) {
      // Open a new tab with the WhatsApp link
      window.open("https://chat.whatsapp.com/CO4H6BtMAQ3ApTdxRCX87s", "_blank");

      // Redirect the current tab to the '/videos' page
      router.push("/videos");
    }
  }, [isPaidUser, router]);

  return <div>Redirecting...</div>;
};

export default RedirectAndOpenTab;
