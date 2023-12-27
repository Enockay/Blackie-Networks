let amount;
let allocatedTime;
const handlePurchase = (packageLabel, setProcced, setShowModal, handleButtonClick, setSelectedPackage) => {
  const amountRegex = /ksh=(\d+)/;
  const timeRegex = /(\d+)\s*-\s*(min|hour|day)s?/i;

  // Extract amount
  const amountMatch = packageLabel.match(amountRegex);
  amount = amountMatch ? parseInt(amountMatch[1], 10) : 0;

  // Extract allocated time
  const timeMatch = packageLabel.match(timeRegex);
  allocatedTime = timeMatch ? {
    value: parseInt(timeMatch[1], 10),
    unit: timeMatch[2].toLowerCase(),
  } : null;

  // Log extracted data (for illustration purposes)
  //console.log('Amount:', amount);
  //console.log('Allocated Time:', allocatedTime);

  // Your existing logic here
  handleButtonClick();
  setSelectedPackage(packageLabel);
  setProcced(true);
  setShowModal(false);
};

export default handlePurchase;
export { amount, allocatedTime };
