"use client";

import { useEffect, useRef } from "react";

const ScrollControlledVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Disable the default page scroll
    document.body.style.overflow = "hidden";

    const handleWheel = (e) => {
      const video = videoRef.current;
      if (!video) return;

      // Calculate the new time for the video based on scroll direction
      const delta = e.deltaY;
      const speed = 0.001; // Adjust this value to control the speed of playback based on scroll
      const calculatedTime = video.currentTime + delta * speed;

      // Update the video current time, clamping it within the video duration
      video.currentTime = Math.max(0, Math.min(video.duration, calculatedTime));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      // Restore page scroll
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        preload="auto"
        playsInline
        muted
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default ScrollControlledVideo;
