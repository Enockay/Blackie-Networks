import React,{ useEffect ,useState } from "react";
import { pass ,phone } from "../packages/login";
let data;
let responseStatement;
const loginApi = async () => {
   // const[isLoading,setLoading] = useState(false);
    //const[verified ,setverification] = useState('');
    console.log(phone,pass);
    try{
        const response = await fetch('/login/Api',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({phone,pass})
        });

          responseStatement = await response.json();

    }catch(error){
        responseStatement = 'error in signing User'
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

