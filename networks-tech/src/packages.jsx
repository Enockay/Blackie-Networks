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
          <span className="item-1"><p className='p'>30-min package ksh=10</p> <button className="k-10"> Buy</button> </span>
          <span className="item-1"><p className='p' >1-hour package ksh=20</p> <button className="k-20"> Buy</button> </span>
          <span className="item-1"><p className='p'>2-hour package ksh=30</p> <button className="k-30"> Buy</button> </span>
          <span className="item-1"><p className='p'>3-hour package ksh=50 </p><button className="k-50"> Buy</button> </span>
          <span className="item-1"><p className='p'>6-hour package ksh=100 </p><button className="k-100">Buy</button> </span>
        </div>
      );
    } else if (button === 'btn2') {
      content = (

        <div className='packages'>
          <span className="item-1"><p className='p'>2 days package ksh=200</p> <button className="k-10"> Buy</button> </span>
          <span className="item-1"><p className='p'>3 days package ksh=250 </p><button className="k-20"> Buy</button> </span>
          <span className="item-1"><p className='p'>7 days package ksh=350</p> <button className="k-30"> Buy</button> </span>
          <span className="item-1"><p className='p'>10 days package ksh=450 </p><button className="k-50"> Buy</button> </span>
          <span className="item-1"><p className='p'>14 days package ksh=700 </p><button className="k-100">Buy</button> </span>
        </div>
      );
    } else if (button === 'btn3') {
      content = (
        <div className='packages'>
          <span className="item-1"><p className='p'>20 days package ksh=1200</p> <button className="k-10"> Buy</button> </span>
          <span className="item-1"><p className='p'>30 days package ksh=1500 </p><button className="k-20"> Buy</button> </span>
          <span className="item-1"><p className='p'>10 days package ksh=300 </p><button className="k-30"> Buy</button> </span>
          <span className="item-1"><p className='p'>21 days package ksh=800 </p><button className="k-50"> Buy</button> </span>
          <span className="item-1"><p className='p'>28 days package ksh=1000</p> <button className="k-100">Buy</button> </span>
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

































































