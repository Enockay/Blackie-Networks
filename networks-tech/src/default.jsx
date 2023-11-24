import React, { useState } from 'react';


const InitialOffer = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const handleInteraction = () => {
    setUserInteracted(true);
  };


  return (
    <div className={`inital-offer ${userInteracted ? 'hidden' : 'animate'}`} >
      {!userInteracted && (
        <div className="offer-content" >
          <h2>Special Offer!!</h2>
          <p className="item-1">1- DAY  package ksh 25 <button className="k-25"> Buy</button> </p>
          <p> WELCOME BONUS .Limited time upto date.</p>
          <button onClick={handleInteraction}>Explore More</button>
        </div>
      )}
    </div>
  );
};

export default InitialOffer;
