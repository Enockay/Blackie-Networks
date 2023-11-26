import react,{useState} from "react"
import CustomModal from "./handlePurchase";

const Weekly = () =>{
    const [selectedPackage,setSelectedPackage] = useState(null);
    const [showModal,setShowModal] = useState(false);
    
    const handleButtonClick = () =>{
        setShowModal(true);
    };
    const handleConfirm = () =>{
        //logic
        setShowModal(false);
    }

    const handleCancel = () =>{
        //logic
        setShowModal(false);
    }

    const handlePurchase = (packageLable) => {
        handleButtonClick();
        setSelectedPackage(packageLable);
    }
     

    return(
        <>
         <div className='packages'>
          <span className="item-1"><p className='p'>2 days package ksh=200</p>
           <button className="k-10"onClick={()=> handlePurchase('2 days package @ ksh=200')}> Buy</button>
            </span>
          <span className="item-1"><p className='p'>3 days package ksh=250 </p>
          <button className="k-20"onClick={()=> handlePurchase('3 days package @ ksh=20')}> Buy</button> 
          </span>
          <span className="item-1"><p className='p'>7 days package ksh=350</p>
           <button className="k-30" onClick={()=>handlePurchase('7 days package @ ksh= 350')}> Buy</button> 
           </span>
          <span className="item-1"><p className='p'>10 days package ksh=450 </p>
          <button className="k-50"onClick={()=> handleButtonClick('10 days package @ ksh= 450')}> Buy</button>
           </span>
          <span className="item-1"><p className='p'>14 days package ksh=500 </p>
          <button className="k-100"onClick = {()=> handleButtonClick('14 days package @ ksh 500')}>Buy</button>
          </span>
        </div>
        {selectedPackage}
         <CustomModal
          isOpen={showModal}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          message={(
            <div>
                <p className="display">{`confirm purchase ${selectedPackage}`}..</p>
                <label>That Amount will be deducted from your M-pesa Account</label>
            </div>
          )}
          />
        </>
    )
}

export default Weekly;