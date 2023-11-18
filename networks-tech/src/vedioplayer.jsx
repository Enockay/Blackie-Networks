
import React from 'react';
import vedio from './assets/vedio.webm'
const VideoPlayer = () => {
  return (
    <div>
      <h2>Guide on how to Subscribe for wifi package </h2>
      <video width="370" height="350" controls autoPlay >
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>Thanks for Using Blackie Networks</h3>
    </div>
  );
};

export default VideoPlayer;
