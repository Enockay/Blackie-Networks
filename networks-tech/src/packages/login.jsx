import react, { useState } from "react";

const LoginPage = () =>{
    const [phoneNumber,setPhoneNumber] = useState('');
    const [passcode,setPasscode] = useState('');
    const [warning,setWarning] = useState('');
    const [passWarn,setpassWarn] = useState('');

    
    const passcodeCheck = (event) => {
        setPasscode(event.target.value);
        setpassWarn("eg SL........")
    }
   
    const phoneNumberChange = (event) =>{
        setPhoneNumber(event.target.value);
        setWarning("start 2547XXXXXX")
    }

    const checkForm = () => {
        if(phoneNumber.length !== 12){
            setWarning("check your phone Number kindly")
        } else if (passcode.length !== 10){
            setpassWarn("validate your passcode")
        }else {
            setWarning('');
            setpassWarn('');
        }
    }
    return(
       <>
        <div className="loginPage">
            <h3 className="h32">Login Details</h3>
            <div className="label">
                phoneNumber :
                <input type="Number" value={phoneNumber} required className="input1" onChange={phoneNumberChange}></input>
                   {warning && <p style={{color: warning === 'check your phone Number kindly' ? 'white' : 'yellow',
                     fontSize : '11px',marginTop : '2px'}}>
                    {warning}
                </p>}
             </div>
            <div className="label">
                Your passcode : 
                <input type="text" value={passcode} className="input1" onChange={passcodeCheck}></input>
                {passWarn && <p style={{color : passWarn ==="validate your passcode" ? 'white' : 'yellow',fontSize : '11px',marginTop : '2px'}}>
                    {passWarn}
                    </p>}
            </div>
            <div>
                <button onClick={checkForm}>Login to Network</button>
             </div>  
             <p>NB: in order to login to the Networks make sure you have an active package 
                ,Or try buy a new package then login using your Passcode which is the MPESA code eg SLU4NU9S68</p> 
        </div>
       </>
    )
}

export default LoginPage;
