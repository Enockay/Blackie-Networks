import React, { useState } from 'react';
import DataComponent from '../clientApis/postNum';

const User = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [warning, setWarning] = useState('');

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
    setWarning('start 2547XXXXXXXX'); 
  };

  const checkBox = () => {
    if (phoneNumber.length < 12 ||phoneNumber.length >12) {
      setWarning('Please enter a valid phone number with at least 12 digits.');
    } else {
      
    }
  };

  return (
    <>
      <div className="input">
        <input
          type="number"
          placeholder="mpesa-phone"
          className="number"
          required
          minLength={12}
          value={phoneNumber}
          onChange={handleInputChange}
        />
        <button className="button" onClick={() => checkBox()}>
          PAY
        </button>
      </div>
      {warning && <p className="warning">{warning}</p>}
    </>
  );
};

export default User;