// export interface propType {
//     videoSrc: string;
//     thumbnail: string;
// }

// const VideoPlayer = ({ videoSrc, thumbnail }: propType) => {
//     return (
//         <div className="w-full h-auto flex justify-center items-center">
//             <video 
//                 width={300}
//                 height={500}
//                 autoPlay
//                 muted
//                 playsInline
//                 controls
//                 loop
//                 poster={thumbnail}
//                 className="border-2 shadow-md border-double rounded-md"
//             >
//                 <source src={videoSrc} />
//                 <div className="text-xl">Your browser does not support the video tag...</div>
//             </video>
//         </div>
//     );
// };

// export default VideoPlayer;

import React, { useRef, useState } from "react";

export interface propType {
  videoSrc: string;
  thumbnail: string;
}

const VideoPlayer = ({ videoSrc, thumbnail }: propType) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isYouTube = videoSrc.includes("youtube.com/watch");
  const videoId = isYouTube ? new URL(videoSrc).searchParams.get("v") : "";



  const handlePlayPause = () => {
    if (videoRef.current && !isYouTube) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div
      className='relative w-full h-auto flex justify-center items-center'
      onMouseEnter={() => !isPlaying && setIsPlaying(false)}
      onMouseLeave={() => !isPlaying && setIsPlaying(false)}
    >
      {isYouTube ? (
        <iframe
          width={300}
          height={175}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${
            isPlaying ? 1 : 0
          }`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-4 border-white/[.80] shadow-md rounded-md"
          onClick={handlePlayPause}
        />
      ) : (
        <video
          ref={videoRef}
          width={300}
          height={500}
          playsInline
          loop
          poster={thumbnail}
          className="border-4 border-white/[.80] shadow-md rounded-md"
          onClick={handlePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          <div className="text-xl">
            Your browser does not support the video tag...
          </div>
        </video>
      )}
      {!isPlaying && !isYouTube && (
        <button
          onClick={handlePlayPause}
          className="absolute flex justify-center items-center bg-blue-500 bg-opacity-50 rounded-full w-16 h-16 text-white"
          style={{ zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-5.796-3.349A1 1 0 007 8.653v6.694a1 1 0 001.456.898l5.796-3.349a1 1 0 000-1.796z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
