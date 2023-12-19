import React, { useState } from 'react';
import DataComponent from '../clientApis/postNum';
import PaymentButton from '../clientApis/amountApi';
import { amount } from '../App';
import { processAmount } from './processAmount';

let phone;

const User = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [warning, setWarning] = useState('');
  const [isPayNowClicked, setPayNowClicked] = useState(false);

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
    setWarning('Start 2547XXXXXXXX');
  };

  const checkBox = () => {
    if (phoneNumber.length !== 12) {
      setWarning('Please enter a valid phone number with 12 digits.');
    } else {
      processAmount(amount, phoneNumber);
      setWarning('validated')
      setPayNowClicked(true);

      setTimeout(() => {
        setWarning('');
      },5000 );
      
    }
  };

  return (
    <div>
      <input type="text" value={phoneNumber} onChange={handleInputChange} />

      
      <button onClick={checkBox}>Validate</button>
      {warning && <p style={{ color: warning === 'Start 2547XXXXXXXX' ? 'blue' : 'green',
       fontSize :'11px',marginTop : '2px' }}>
        {warning}
      </p>
}

      {isPayNowClicked && <PaymentButton phone={phoneNumber} />}
    </div>
  );
};

export default User;