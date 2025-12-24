"use client";

import { useState, useRef, useEffect } from "react";
import { Hand, Sparkles, Beer, Play } from "lucide-react";

export default function ChristmasSolvej() {
  const [showContent, setShowContent] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        // Start muted for autoplay compatibility
        video.muted = true;
        await video.play();
        setVideoReady(true);
        // Try to unmute after a short delay
        setTimeout(() => {
          if (video) {
            video.muted = false;
          }
        }, 500);
      } catch (error) {
        console.log("Autoplay prevented, showing play button");
        setNeedsInteraction(true);
      }
    };

    // Try to play when video can start playing
    const handleCanPlay = () => {
      if (!videoReady) {
        playVideo();
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", () => {
      playVideo();
    });

    // Also try immediately
    playVideo();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const handlePlayClick = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = false;
        await videoRef.current.play();
        setNeedsInteraction(false);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Video Section */}
      {!showContent && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
            videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            onEnded={handleVideoEnd}
            onClick={() => {
              if (videoRef.current && videoRef.current.muted) {
                videoRef.current.muted = false;
              }
            }}
            className="w-full h-full object-contain cursor-pointer"
            playsInline
            autoPlay
            muted
            controls
            preload="auto"
            onError={(e) => {
              console.error("Video error:", e);
              // If video fails to load, show content after a delay
              setTimeout(() => {
                setShowContent(true);
              }, 1000);
            }}
          >
            <source src="/solvej.MOV" type="video/quicktime" />
            <source src="/solvej.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button Overlay */}
          {needsInteraction && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors"
            >
              <div className="bg-white/90 hover:bg-white rounded-full p-6 transition-colors">
                <Play className="w-16 h-16 text-black fill-black" />
              </div>
            </button>
          )}
        </div>
      )}

      {/* Content Section */}
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
                Merry Christmas Sol! 🎄
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Even though you're far away in Hanoi, Toni and I we wanted to
                give you something special for Christmas.
              </p>
            </div>

            {/* Vouchers */}
            <div className="space-y-8 mb-16">
              {/* Voucher 1: Massage */}
              <div className="border-2 border-red-600 dark:border-red-500 bg-white dark:bg-card p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Hand className="w-10 h-10 mx-auto mb-5 text-red-600 dark:text-red-400" />
                <h2 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">
                  Massage
                </h2>
                <div className="border-t border-dashed border-foreground/20 my-5"></div>
                <p className="text-base text-muted-foreground">
                  One full body massage
                </p>
              </div>

              {/* Voucher 2: Pedicure/Manicure */}
              <div className="border-2 border-green-600 dark:border-green-500 bg-white dark:bg-card p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Sparkles className="w-10 h-10 mx-auto mb-5 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold mb-3 text-green-600 dark:text-green-400">
                  Pedicure Or Manicure
                </h2>
                <div className="border-t border-dashed border-foreground/20 my-5"></div>
                <p className="text-base text-muted-foreground">
                  One pedicure or manicure treatment (choose your favorite)
                </p>
              </div>

              {/* Voucher 3: Cigarettes and Beers */}
              <div className="border-2 border-red-600 dark:border-red-500 bg-white dark:bg-card p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Beer className="w-10 h-10 mx-auto mb-5 text-red-600 dark:text-red-400" />
                <h2 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">
                  Cigarettes & Beers
                </h2>
                <div className="border-t border-dashed border-foreground/20 my-5"></div>
                <p className="text-base text-muted-foreground">
                  Cigarettes and beers for a nice night out
                </p>
              </div>
            </div>

            {/* Footer Message */}
            <div className="text-center">
              <p className="text-base text-muted-foreground mb-3">
                Hope you're having an amazing time in Hanoi!
              </p>
              <p className="text-base font-medium text-foreground">
                Love, Henry & Antonia ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
