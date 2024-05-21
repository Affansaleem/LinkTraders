import React from "react";
import "../Styles/MidPage.scss";

const MidPage = () => {
  return (
    <div className="mid-page">
      <video
        className="video-bg"
        src="Videos/vid.mp4"
        autoPlay
        loop
        muted
      ></video>
      <h1 className="text-overlay">Pakistan Zindabad</h1>
    </div>
  );
};

export default MidPage;
