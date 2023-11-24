import React, { useState } from 'react';


let handleButtonClick;

const ContentPackage = () => {
const [selectedButton, setSelectedButton] = useState(null);
  const [loadedContent, setLoadedContent] = useState('');

 handleButtonClick = (button) => {
    let content ;
    if (button === 'btn1') {
      content = (
        <div className='packages'>
          <p className="item-1">30-min package ksh 10 <button className="k-10"> Buy</button> </p>
          <p className="item-1">1-hour package ksh 20 <button className="k-20"> Buy</button> </p>
          <p className="item-1">2-hour package ksh 30 <button className="k-30"> Buy</button> </p>
          <p className="item-1">3-hour package ksh 50 <button className="k-50"> Buy</button> </p>
          <p className="item-1">6-hour package ksh 100 <button className="k-100">Buy</button> </p>
        </div>
      );
    } else if (button === 'btn2') {
      content = (

        <div className='packages'>
          <p className="item-1">2 days package ksh 200 <button className="k-10"> Buy</button> </p>
          <p className="item-1">3 days package ksh 250 <button className="k-20"> Buy</button> </p>
          <p className="item-1">7 days package ksh 350 <button className="k-30"> Buy</button> </p>
          <p className="item-1">10 days package ksh 450 <button className="k-50"> Buy</button> </p>
          <p className="item-1">14 days package ksh 700 <button className="k-100">Buy</button> </p>
        </div>
      );
    } else if (button === 'btn3') {
      content = (
        <div className='packages'>
          <p className="item-1">20 days package ksh 1200 <button className="k-10"> Buy</button> </p>
          <p className="item-1">30 days package ksh 1500 <button className="k-20"> Buy</button> </p>
          <p className="item-1">10 days package ksh  300 <button className="k-30"> Buy</button> </p>
          <p className="item-1">21 days package ksh 800 <button className="k-50"> Buy</button> </p>
          <p className="item-1">28 days package ksh 1000 <button className="k-100">Buy</button> </p>
        </div>
      );
    } else if (button === 'btn4') {
      content = (
        <div className='packages'>
          <p id="user" className='top-user1'>Name of top User </p>
          <p id ="user"className='top-user2'>name of second top user</p>
          <p id = "user" className='top-user3'>Name of third top User </p>
          <p id = "user" className='top-user4'>name of fourth top user</p>
          <p id = "user" className='top-user1'>Name of fifth top User </p>
          <p id = "user" className='top-user2'>name of sixth second top user</p>
        </div>
      );
    }

    setLoadedContent(content);
    setSelectedButton(button);
  };
   
  return (
    <>
     
        {/* Display the loaded content when a button is selected */}
        {selectedButton && loadedContent}
        <h3>Thanks for choosing to work with us </h3>
      
    </>
    
  );
};

export { handleButtonClick };

export default ContentPackage;

































































