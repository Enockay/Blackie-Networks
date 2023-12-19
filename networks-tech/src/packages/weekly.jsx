import react,{useState} from "react"
import CustomModal from "../prompts/handlePurchase";
import Procceed from "../prompts/procceed";
import handlePurchase from "../App";

const Weekly = () =>{
    const [selectedPackage,setSelectedPackage] = useState(null);
    const [showModal,setShowModal] = useState(false);
    const [procced,setProcced] = useState(false);
    
    const handleButtonClick = () =>{
        setShowModal(true);
    };
    const handleConfirm = () =>{
        //logic
        setProcced(true);
        setShowModal(false);
    }

    const handleCancel = () =>{
        //logic
        setProcced(false);
        setShowModal(false);
    }

   
    return(
        <>
         <div className='packages'>
          <span className="item-1"><p className='p'>2 days package ksh=70</p>
           <button className="k-10"onClick={()=> handlePurchase('2 days package @ ksh=50', setProcced, setShowModal,
            handleButtonClick, setSelectedPackage)}> Buy</button>
            </span>

          <span className="item-1"><p className='p'>3 days package ksh=90 </p>
          <button className="k-20"onClick={()=> handlePurchase('3 days package @ ksh=70', setProcced, setShowModal,
           handleButtonClick, setSelectedPackage)}> Buy</button> 
          </span>

          <span className="item-1"><p className='p'>7 days package ksh=150</p>
           <button className="k-30" onClick={()=>handlePurchase('7 days package @ ksh=150', setProcced, setShowModal, 
           handleButtonClick, setSelectedPackage)}> Buy</button> 
           </span>
           
          <span className="item-1"><p className='p'>10 days package ksh=250 </p>
          <button className="k-50"onClick={()=> handleButtonClick('10 days package @ ksh=250', setProcced, setShowModal,
           handleButtonClick, setSelectedPackage)}> Buy</button>
           </span>

          <span className="item-1"><p className='p'>14 days package ksh=300 </p>
          <button className="k-100"onClick = {()=> handleButtonClick('14 days package @ ksh=300', setProcced, setShowModal,
           handleButtonClick, setSelectedPackage)}>Buy</button>
          </span>
          
        </div>
        
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
          <Procceed
          isOpen={procced}
          onCancel={handleCancel}
          />
        </>
    )
}

export default Weekly;