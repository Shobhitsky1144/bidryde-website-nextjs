import React from "react";
import './../JoinWithUs.scss'

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="relative w-full overflow-hidden pt-[56.25%] rounded-xl shadow-md">
      <iframe
        width="500"
  height="260"
  style={{borderRadius:'25px'}}
        className="frame absolute top-0 left-0 w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
