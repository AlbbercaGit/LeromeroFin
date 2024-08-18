// VideoBackground.js
import React from 'react';

const VideoBackground = () => {
  const videoUrl = 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/leromerm.mp4'; // URL directa al archivo de video

  return (
    <div className="absolute top-0 left-0 w-full h-[110vh] block md:hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline // Asegúrate de incluir este atributo para iOS
      ></video>
    </div>
  );
};

export default VideoBackground;