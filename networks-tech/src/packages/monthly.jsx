import react,{useState} from 'react'
import CustomModal from '../prompts/handlePurchase';
import Procceed from '../prompts/procceed';
import handlePurchase from '../App';


const Monthly = () =>{
  const [selectedPackage,setSelectedPackage] = useState(null);
  const [showModal,setShowModal] = useState(false);
  const [procced, setProcced] = useState(false);

  const handleButtonClick = () =>{
    setShowModal(true);
  }
  const handleConfirm = () =>{
    
    setProcced(true);
    setShowModal(false);
  }
  const handleCancel = () =>{
    //logic
    setProcced(false)
    setShowModal(false);
  }

 
    return(
        <>
        <div className='packages'>
          <span className="item-1"><p className='p'>20 days package ksh=400</p> 
          <button className="k-10"onClick={() => handlePurchase('20-days package @ ksh=400', setProcced, setShowModal,
           handleButtonClick, setSelectedPackage)}> Buy</button>
           </span>

          <span className="item-1"><p className='p'>31 days package ksh=600 </p>
          <button className="k-20"onClick={() => handlePurchase('31-days package @ ksh=600', setProcced, setShowModal, 
          handleButtonClick, setSelectedPackage)}> Buy</button>
           </span>

          <span className="item-1"><p className='p'>10 days package ksh=300 </p>
          <button className="k-30"onClick={()=> handlePurchase('10-days package @ ksh=300', setProcced, setShowModal,
           handleButtonClick, setSelectedPackage)}> Buy</button> 
          </span>

          <span className="item-1"><p className='p'>28 days package ksh=500 </p>
          <button className="k-50"onClick={()=> handlePurchase('28-days package @ksh=500', setProcced, setShowModal,
           handleButtonClick, setSelectedPackage)}> Buy</button>
          </span>

          <span className="item-1"><p className='p'>15 days package ksh=350</p>
          <button className="k-100"onClick={()=> handlePurchase('15-days package @ ksh=350', setProcced, setShowModal, 
          handleButtonClick, setSelectedPackage)}>Buy</button>
          </span>

        </div>
      
        <CustomModal
        isOpen={showModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        message={(
            <div>
              <p className='display'>{`Confirm purchase ${selectedPackage}?`}
              <label>That Amount will be deducted from your M-pesa Account</label>
              </p>
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

export default Monthly;

