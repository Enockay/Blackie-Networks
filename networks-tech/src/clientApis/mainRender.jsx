import React, { useState } from 'react';
import StatementRequest from './statements.jsx';
import StatementTable from './renderStatement.jsx';

const ParentComponent = () => {
  const [statementData, setStatementData] = useState([]);

  const handleRequestComplete = (data) => {
    console.log('Request complete:', data);
    setStatementData(data);
  };

  return (
    <div>
      <h1>Statement Request</h1>
      <StatementRequest onRequestComplete={handleRequestComplete}/>
      <h2>Statement Table</h2>
      <StatementTable data={statementData}/>
    </div>
  );
};

export default ParentComponent;
