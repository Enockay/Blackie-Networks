import React, { useState } from 'react';
import CustomModal from '../prompts/handlePurchase';
import Procceed from '../prompts/procceed';
import handlePurchase from '../App';
import LoginPage from './login';

let handleInteraction;

const InitialOffer = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [procced,setProcced] = useState(false);

     handleInteraction = () => {
    setUserInteracted(true);

  };
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Perform the action you want to confirm
  //  console.log('Confirmed!');
    // Close the modal
    setProcced(true);
    setShowModal(false);
  };

  const handleCancel = () => {
    // Cancel the action or simply close the modal
   // console.log('Canceled!');
    setProcced(false);
    setShowModal(false);
  };


  return ( 
    <>
    <div className={`inital-offer ${userInteracted ? 'hidden' : 'animate'}`} >
      {!userInteracted && (
        <div className="offer-content" >
          <h2>Special Offer!!</h2>

          <span className="item-2"> <p className='p'>24hrs - package ksh=30 </p>
          <button className="k-25"onClick={()=>handlePurchase('24-hour package ksh=30', setProcced, setShowModal,
          handleButtonClick, setSelectedPackage)}> Buy</button> </span>

          <p> WELCOME BONUS .Limited time upto date.</p>
         { /*<button onClick={handleInteraction}>Exit Offer </button>*/}
        </div>
      )}
      
     <CustomModal
        isOpen={showModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message={(
            <div>
            <p className='display'>{`confirm purchase ${selectedPackage}?`}</p>
            <label >That Amount will be deducted from your M-pesa Account</label>
          </div> 
        )}
      />
      <Procceed
      isOpen={procced} 
      onCancel={handleCancel}
      />
    </div>
    </>
  );
};
export {handleInteraction};
export default InitialOffer;
