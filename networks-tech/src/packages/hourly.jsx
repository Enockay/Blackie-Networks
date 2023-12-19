import React, { useCallback, useState } from 'react';
import CustomModal from '../prompts/handlePurchase';
import Procceed from '../prompts/procceed';
import handlePurchase from '../App';

const Hourly = () => {

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [procced, setProcced] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Perform the action you want to confirm
    console.log('Confirmed!');
    // Close the modal
    setProcced(true);
    setShowModal(false);
  };

  const handleCancel = () => {
    // Cancel the action or simply close the modal
    console.log('Canceled!');
    setProcced(false)
    setShowModal(false);
  };

 
  return (
    <>
      <div className='packages'>
        <span className="item-1"><p className='p'>30-min package ksh=5</p>
         <button className="k-10" onClick={() => handlePurchase('30-min package ksh=5', setProcced, setShowModal, 
         handleButtonClick, setSelectedPackage)}> 
         Buy</button> </span>

        <span className="item-1"><p className='p' >1-hour package ksh=7</p>
         <button className="k-20"onClick={() => handlePurchase('1-hour package ksh=7', setProcced, setShowModal,
          handleButtonClick, setSelectedPackage)}>
             Buy</button> </span>

        <span className="item-1"><p className='p'>2-hour package ksh=12</p> 
        <button className="k-30"onClick={() => handlePurchase('2-hours package ksh=12', setProcced, setShowModal,
         handleButtonClick, setSelectedPackage)}>
             Buy</button> </span>

        <span className="item-1"><p className='p'>3-hour package ksh=15 </p>
        <button className="k-50"onClick={() => handlePurchase('3-hours package ksh=15', setProcced, setShowModal, 
        handleButtonClick, setSelectedPackage)}>
             Buy</button> </span>
             
        <span className="item-1"><p className='p'>6-hour package ksh=20 </p>
        <button className="k-100"onClick={() => handlePurchase('6-hours package ksh=20', setProcced, setShowModal,
         handleButtonClick, setSelectedPackage)}>
            Buy</button> </span>
      </div>

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
    </>
  );
};

export default Hourly;
