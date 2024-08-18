// VideoBackground.js
import React from "react";
import bear from "./vid/bear.webm";
import tornEdge from "../im2.png";
import tornEdge1 from "../im1.png";
const VideoBackground = () => {
  return (
    <div className="relative w-full h-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bear}
        autoPlay
        muted
        loop
      ></video>
      <div
        className="absolute inset-0  "
        style={{
          backgroundImage: `url(${tornEdge})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto",
        }}
      ></div>
            <div
        className="absolute inset-0  "
        style={{
          backgroundImage: `url(${tornEdge1})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto",
          backgroundPosition:"bottom"
        }}
      ></div>
    </div>
  );
};

export default VideoBackground;
