import React, { useState } from 'react';
import CustomModal from './handlePurchase';

const InitialOffer = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleInteraction = () => {
    setUserInteracted(true);

  };
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Perform the action you want to confirm
    console.log('Confirmed!');
    // Close the modal
    setShowModal(false);
  };

  const handleCancel = () => {
    // Cancel the action or simply close the modal
    console.log('Canceled!');
    setShowModal(false);
  };


  const handlePurchase = (packageLabel) => {
   
    handleButtonClick();
    setSelectedPackage(packageLabel);
  };

  return (
    <div className={`inital-offer ${userInteracted ? 'hidden' : 'animate'}`} >
      {!userInteracted && (
        <div className="offer-content" >
          <h2>Special Offer!!</h2>
          <span className="item-2"> <p className='p'>1- DAY  package ksh=25 </p><button className="k-25"onClick={()=>handlePurchase('1- DAY  package ksh=25')}> Buy</button> </span>
          <p> WELCOME BONUS .Limited time upto date.</p>
          <button onClick={handleInteraction}>Explore More</button>
        </div>
      )}
      {selectedPackage}
     <CustomModal
        isOpen={showModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message={(
            <div>
            <p className='display'>{`confirm purchase ${selectedPackage}?`}</p>
            <label >That Amount will be deducted from your M-pesa</label>
          </div> 
        )}
      /> 
    </div>
  );
};

export default InitialOffer;
