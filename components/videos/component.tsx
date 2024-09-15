// components/CustomVideo.tsx
import { useEffect, useRef } from "react";

interface CustomVideoProps {
  videoSrc: string;
  poster: string;
  alt: string;
}

const CustomVideo: React.FC<CustomVideoProps> = ({ videoSrc, poster, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Load video when it comes into the viewport
      const handleScroll = () => {
        const rect = videoElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          videoElement.load();
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        preload="none"
        playsInline
        muted
        poster={poster}
        aria-label={alt}
        role="img"
        autoPlay
        controls={false}
        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
        disablePictureInPicture
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default CustomVideo;
