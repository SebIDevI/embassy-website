import React from "react";
import ResponsiveImage from "./ResponsiveImage";
import CustomVideo from "./component";

export default function VideoWin() {
  const imageSources = [
    {
      srcSet: "/videoz/hero_image 944px.png",
      media: "(max-width: 734px)",
    },
    {
      srcSet: "/videoz/hero_image 944px.png",
      media: "(max-width: 1068px)",
    },
    {
      srcSet: "/videoz/hero_image 944px.png",
      media: "(min-width: 0px)",
    },
  ];
  return (
    <div>
      <ResponsiveImage
        alt="Hero Image"
        sources={imageSources}
        defaultSrc="/videoz/hero_image 944px.png"
      />
      <CustomVideo
        videoSrc="/Embassy network_triangle Animation.mp4"
        poster="/videoz/hero_image 944px.png"
        alt="Video showing iPhone 15"
      />
    </div>
  );
}
