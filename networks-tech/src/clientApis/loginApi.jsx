import React,{ useEffect ,useState } from "react";
import { pass ,phone } from "../packages/login";
let data;
let responseStatement;
const loginApi = async () => {
   // const[isLoading,setLoading] = useState(false);
    //const[verified ,setverification] = useState('');
    console.log(phone,pass);
    let phoneNumber = phone;
    let orderId = pass;

    try{
        const response = await fetch('https://blackie-networks-295df9ed8dbf.herokuapp.com/login/Api',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({phoneNumber,orderId})
        });

          const incomming = await response.json();

          const feedBack = incomming.responseState;
         responseStatement = await feedBack

    }catch(error){
        responseStatement = 'user not found';
    }
    /*return(
        <>
           {isLoading ? 'verifying your Details' : 'DONE'};
           {verified}
        </>
    )*/
         
}

export default loginApi;
export{responseStatement};

