import React, { useRef } from "react";
import "./VideoPlayer.css";
import video_1 from "../../assets/GreatStack.mp4";

const VideoPlayer = (props) => {
  const playerRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === playerRef.current) props.setPlayState(false);
  };
  return (
    <div
      className={`video-player ${props.playState === true ? "" : "hide"}`}
      onClick={closePlayer}
      ref={playerRef}
    >
      <video src={video_1} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;