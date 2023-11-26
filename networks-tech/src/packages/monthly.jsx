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
          <span className="item-1"><p className='p'>20 days package ksh=1200</p> 
          <button className="k-10"onClick={() => handlePurchase('20 days package @ ksh=1200')}> Buy</button>
           </span>
          <span className="item-1"><p className='p'>30 days package ksh=1500 </p>
          <button className="k-20"onClick={() => handlePurchase('30 days package @ ksh=1500')}> Buy</button>
           </span>
          <span className="item-1"><p className='p'>10 days package ksh=300 </p>
          <button className="k-30"onClick={()=> handlePurchase('10days package @ ksh=300')}> Buy</button> 
          </span>
          <span className="item-1"><p className='p'>21 days package ksh=800 </p>
          <button className="k-50"onClick={()=> handlePurchase('21 days package @ksh 800')}> Buy</button>
          </span>
          <span className="item-1"><p className='p'>28 days package ksh=1000</p>
          <button className="k-100"onClick={()=> handlePurchase('28 days package @ ksh=1000')}>Buy</button>
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
