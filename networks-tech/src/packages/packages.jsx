import React, { useState } from 'react';
import Hourly from './hourly';
import Weekly from './weekly';
import Monthly from './monthly';
import Grant from './grant';
import { handleInteraction } from './default';
import LoginPage from './login';
import { navigation } from './login';


let handleButtonClick;
const ContentPackage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [loadedContent, setLoadedContent] = useState('');

  

 handleButtonClick = (button) => {
    let content ;
   if(button === 'btn5'){
      handleInteraction();
      navigation();
      content = (
      <LoginPage/>
      )
   }
    else if  (button === 'btn1') {
      handleInteraction();
      navigation();
      content = (
        <Hourly/>
      );
    } else if (button === 'btn2') {
      handleInteraction();
      navigation();
      content = (
        <Weekly/>
      );
    } else if (button === 'btn3') {
      handleInteraction();
      navigation();
      content = (
         <Monthly/>
      );
    } else if (button === 'btn4') {
      handleInteraction();
      navigation();
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

































































