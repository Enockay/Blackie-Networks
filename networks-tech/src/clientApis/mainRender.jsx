import React, { useState } from 'react';
import StatementRequest from './statements.jsx';
import StatementTable from './renderStatement.jsx';

const ParentComponent = () => {
  const [statementData, setStatementData] = useState([]);

  const handleRequestComplete = (data) => {
  //  console.log('Request complete:', data);
    setStatementData(data);
  };

  return (
    <div>
      <h2><center>Statement Request</center></h2>
      <StatementRequest onRequestComplete={handleRequestComplete}/>
      <h3><center>Statement Table</center></h3>
      <StatementTable data={statementData}/>
    </div>
  );
};

export default ParentComponent;
