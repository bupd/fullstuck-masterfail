"use client";
import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 4,
    hours: 23,
    minutes: 9,
    seconds: 52,
  });

  const countdownRef = useRef(null);

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);
      console.log(seconds)

      setTimeRemaining({ days, hours, minutes, seconds });

      // Update the DOM element directly using useRef
      if (countdownRef.current) {
        countdownRef.current.textContent = `Countdown
        ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
      }
    } else {
      clearInterval(interval);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeRemaining]);

  return (
    <div ref={countdownRef}>
      Countdown
      <span>{timeRemaining.days} days </span>
      <span>{timeRemaining.hours} hours </span>
      <span>{timeRemaining.minutes} minutes </span>
      <span>{timeRemaining.seconds} seconds</span>
    </div>
  );
};

export default CountdownTimer;
