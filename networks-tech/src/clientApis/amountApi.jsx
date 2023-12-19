
import React, { useState } from 'react';

import { amount } from '../App';

const PaymentButton = ({ phone }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Replace with the actual details (phone number, amount, etc.)
      const phoneNumber = phone;
      const Amount = amount; // Replace with the actual amount
      const orderId = '123456'; // Replace with a unique order ID
      const response = await fetch('http://localhost:3000/api/makePayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, Amount, orderId }),
        
      });

      const data = await response.json();

      // Handle the payment response from the backend
      setPaymentStatus(data.success ? 'Payment successful' : 'Payment failed');
    } catch (error) {
      console.error('Error initiating payment:', error);
      setPaymentStatus('Payment failed');
    } finally {
      setLoading(false);
    }
  };

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