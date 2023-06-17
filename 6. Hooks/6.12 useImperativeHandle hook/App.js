import react, { useEffect } from "react";
import Video from "./Video";
import { useRef } from "react";
export default function PlayVideo() {
  const videoRef = useRef();
  useEffect(() => {
    console.log("ref", videoRef.current);
  });
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
    </div>
  );
}
