import React, { useState } from 'react';
import StatementTable from './renderStatement.jsx';

const StatementRequest = ({ onRequestComplete }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Order_Id, setOrderId] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [receivedData, setData] = useState([]);
  const [warn, setWarning] = useState('');
  const [orderWarn, setOrderWarn] = useState('');

  const handleStatementRequest = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://blackie-networks-295df9ed8dbf.herokuapp.com/api/getStatements", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, Order_Id }),
      });

      const data = await response.json();
      setData(data);
      onRequestComplete(data);

      if (data.length < 1) {
        setOrderWarn(data.statements);
      }
    } catch (error) {
      setOrderWarn('Error requesting statements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
    setWarning('Start 2547XXXXXXXX');
  };

  const handleOrderChange = (event) => {
    setOrderId(event.target.value);
  }

  const checkBox = () => {
    if (phoneNumber.length !== 12) {
      setWarning('Please enter a valid phone number with 12 digits.');
    } else if (Order_Id.length < 4) {
      setWarning('');
      setOrderWarn('This field should be filled or not correctly filled');
    } else {
      handleStatementRequest();
      setTimeout(() => {
        setOrderWarn('Wait for the statements');
        setWarning('');
        setOrderWarn('');
      }, 5000);
    }
  };

  return (
    <div className='statement-form'>
      <label className='phone'>
        Phone Number:
        <input
          type="number"
          value={phoneNumber}
          onChange={handleInputChange}
          className='input1'
        />
      </label>
      {warn && <p style={{
        color: warn === 'Start 2547XXXXXXXX' ? 'white' : 'green',
        fontSize: '11px', marginTop: '2px'
      }}>
        {warn}
      </p>
      }

      <label className='passcode'>
        Your Passcode:
        <input
          type="text"
          value={Order_Id}
          className='input1'
          onChange={handleOrderChange}
        />
      </label>

      {orderWarn && <p style={{
        color: orderWarn === 'fill the passcode field' ? 'white' : 'green',
        fontSize: '11px', marginTop: '2px'
      }}>
        {orderWarn}
      </p>}
      <button onClick={checkBox} disabled={isLoading} className='getStatementB'>
        {isLoading ? 'Processing...' : 'Get Statements'}
      </button>

      {receivedData.length === 1 ? (
        <p style={{ color: 'green', marginTop: '10px' }}>{receivedData[0]}</p>
      ) : (
        <StatementTable data={receivedData} />
      )}

      <p>NB: passcode is the transaction code that M-Pesa will send you after successful payment of any package here, e.g., RLU4NU9S68</p>
    </div>
  );
};

export default StatementRequest;
