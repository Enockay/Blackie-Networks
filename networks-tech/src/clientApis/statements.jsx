import React, { useState } from 'react';
import StatementTable from './renderStatement.jsx';

const StatementRequest = ({ onRequestComplete }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [receivedData,setData]  = useState(true);
  const [warn, setWarning] = useState('');
  

  const handleStatementRequest = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://blackie-networks-295df9ed8dbf.herokuapp.com/api/getStatements", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      //console.log(data);
     setData(data);
      onRequestComplete(data);
    } catch (error) {
      console.error('Error requesting statements:', error);
    } finally {
      setLoading(false);
    }
  };
  const checkBox = () => {
    if (phoneNumber.length !== 12) {
      setWarning('Please enter a valid phone number with 12 digits.');
    } else {
      handleStatementRequest();
      setWarning('wait for the statements')
      setTimeout(() => {
        setWarning('');
      },5000 );
      
    }
  };

  return (
    <div>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      {warn && <p style={{ color: warn === 'Start 2547XXXXXXXX' ? 'white' : 'red',
       fontSize :'11px',marginTop : '2px' }}>
        {warn}
      </p>
      }

      <button onClick={checkBox} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Get Statements'}
      </button>
       
        
    </div>
  );
};

export default StatementRequest;
