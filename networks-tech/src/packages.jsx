import React, { useState } from 'react';
import Hourly from './hourly';
import Weekly from './weekly';
import Monthly from './monthly';
import Grant from './grant';

let handleButtonClick;
const ContentPackage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [loadedContent, setLoadedContent] = useState('');

  

 handleButtonClick = (button) => {
    let content ;
    
    if (button === 'btn1') {
      content = (
        <Hourly/>
      );
    } else if (button === 'btn2') {
      content = (
        <Weekly/>
      );
    } else if (button === 'btn3') {
      content = (
         <Monthly/>
      );
    } else if (button === 'btn4') {
      content = (
         <Grant/>
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

































































