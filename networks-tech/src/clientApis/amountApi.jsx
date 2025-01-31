
import React, { useState } from 'react';

import { amount,allocatedTime } from '../App';

const PaymentButton = ({ phone }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Replace with the actual details (phone number, amount, etc.)
      const phoneNumber = phone;
      const Amount = amount; // Replace with the actual amount
      const response = await fetch("https://blackie-networks-295df9ed8dbf.herokuapp.com/api/makePayment", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, Amount, allocatedTime }),
      });
      
      const data = await response.json();
    //  console.log(allocatedTime);
      // Handle the payment response from the backend
        
      setPaymentStatus(data.success ? 'Payment successfully processed Confirm  N/B keep the MPESA Code You will use to login later as passcode ' : 'Payment failed');
    } catch (error) {
      console.error('Error initiating payment:', error);
      setPaymentStatus('Payment failed');
    } finally {
      setLoading(false);
    }
  };
 /* setInterval(() => {
    handlePayment
    setPaymentStatus("network error!")
  },10000);
*/
  return (
    <div>
      <button onClick={handlePayment} disabled={isLoading}>
        {isLoading ? 'Processing...' : `Pay ksh=${amount}`}
      </button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default PaymentButton;