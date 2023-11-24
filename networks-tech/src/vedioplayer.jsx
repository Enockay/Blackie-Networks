
import React from 'react';
import vedio from './assets/vedio.webm'
const VideoPlayer = () => {
  return (
    <div>
      <h2>Guide on how to Subscribe for wifi package </h2>
      <video
        width="100%" // Set the default width to 100%
        height="auto" // Let the height adjust automatically to maintain aspect ratio
        controls
        autoPlay
        style={{
          maxWidth: '600px', // Set a maximum width to control size on larger screens
          margin: '0 auto', // Center the video horizontally
          display: 'block', // Ensure it's a block-level element
        }}
      >
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>Thanks for Using Blackie Networks</h3>
    </div>
  );
};


export default VideoPlayer;
