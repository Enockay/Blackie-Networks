import React from 'react';

const StatementTable = ({ data }) => {
  let dataReceived = data.statements;
  if (!dataReceived || !Array.isArray(dataReceived)) {
    // If statements is not defined or not an array, handle it appropriately
    return <p>No statements available</p>;
  }

  return (
    <div className='table-container'>
    <table>
      <tbody>
        {dataReceived.map((statement) => (
          <React.Fragment key={statement.tokenId}>
            <tr>
              <td>
                <strong>Order ID:</strong> {statement.orderId}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Amount:</strong> {statement.amount}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Last Updated:</strong> {statement.lastUpdated}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Expire:</strong> {statement.expire}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Is Expired:</strong> {statement.isExpired.toString()}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Time Remaining:</strong>{' '}
                {`${statement.timeRemaining.days} days ${statement.timeRemaining.hours} hrs ${statement.timeRemaining.minutes} mins ${statement.timeRemaining.seconds} secs`}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default StatementTable;