import react,{useState} from 'react'
import CustomModal from '../prompts/handlePurchase';
import Procceed from '../prompts/procceed';

const Monthly = () =>{
  const [selectedPackage,setSelectedPackage] = useState(null);
  const [showModal,setShowModal] = useState(false);
  const [procced, setProcced] = useState(false);

  const handleButtonClick = () =>{
    setShowModal(true);
  }
  const handleConfirm = () =>{
    //logic
    setProcced(true);
    setShowModal(false);
  }
  const handleCancel = () =>{
    //logic
    setProcced(false)
    setShowModal(false);
  }

  const handlePurchase = (packageLabel) =>{
    handleButtonClick();
    setSelectedPackage(packageLabel);
  }
    return(
        <>
        <div className='packages'>
          <span className="item-1"><p className='p'>20 days package ksh=400</p> 
          <button className="k-10"onClick={() => handlePurchase('20 days package @ ksh=400')}> Buy</button>
           </span>
          <span className="item-1"><p className='p'>31 days package ksh=600 </p>
          <button className="k-20"onClick={() => handlePurchase('31 days package @ ksh=600')}> Buy</button>
           </span>
          <span className="item-1"><p className='p'>10 days package ksh=300 </p>
          <button className="k-30"onClick={()=> handlePurchase('10 days package @ ksh=300')}> Buy</button> 
          </span>
          <span className="item-1"><p className='p'>28 days package ksh=500 </p>
          <button className="k-50"onClick={()=> handlePurchase('28 days package @ksh=500')}> Buy</button>
          </span>
          <span className="item-1"><p className='p'>15 days package ksh=350</p>
          <button className="k-100"onClick={()=> handlePurchase('15 days package @ ksh=350')}>Buy</button>
          </span>
        </div>
        {selectedPackage}
        <CustomModal
        isOpen={showModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        message={(
            <div>
              <p className='display'>{`Confirm purchase ${selectedPackage}?`}</p>
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

export default Monthly;
