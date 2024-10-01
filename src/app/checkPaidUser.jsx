import React, { useEffect, useState } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import db from "@/firestore";
import getCurrentUserEmail from "@/getCurrentUser";

const CheckPaidUser = ({ children }) => {
  const [isPaidUser, setIsPaidUser] = useState(false); // State to track if user has paid
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(""); // State to track errors
  const [email, setEmail] = useState(""); // State to track user's email
  const [user, setUser] = useState(null); // State to track user data

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
    return <div></div>;
  }

  if (!isPaidUser) {
    return <div>You do not have access to view this content.</div>;
  }

  // Render children (the content passed into this component) if the user is a paid user
  return <>{children}</>;
};

export default CheckPaidUser;
