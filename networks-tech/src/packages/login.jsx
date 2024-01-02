import react, { useState } from "react";

const LoginPage = () =>{

    return(
       <>
        <div className="loginPage">
            <h3 className="h32">Login Details</h3>
            <div className="label">
                phoneNumber :
                <input type="Number" required className="input1"></input>
            </div>
            <div className="label">
                Your passcode : 
                <input type="text" required className="input1"></input>
            </div>
            <div>
                <button>Login to Network</button>
             </div>  
             <p>NB: in order to login to the Networks make sure you have an active package 
                ,Or try buy a new package then login using your Passcode which is the MPESA code eg RLU4NU9S68</p> 
        </div>
       </>
    )
}

export default LoginPage;
