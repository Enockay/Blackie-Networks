import PaymentButton from "./clientApis/amountApi";
let amount ;

const handlePurchase = (packageLabel, setProcced, setShowModal, handleButtonClick, setSelectedPackage) => {
    const amountRegex = /ksh=(\d+)/;
    const match = packageLabel.match(amountRegex);
     amount = match ? parseInt(match[1], 10) : 0;
  
    handleButtonClick();
    setSelectedPackage(packageLabel);

    
    setProcced(true);
    setShowModal(false);
  };
  
  export default handlePurchase;
  export{amount};



