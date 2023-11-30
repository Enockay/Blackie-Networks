

const User = () => {

    
    const userNumber = 
    (
        <input type="num"  placeholder="mpesa-phone" className="number" required minLength={12}></input>
    )


    const checkBox = () =>{
    if(userNumber === '')
    {
      <h3>phone Number for transcation</h3>
    }
    else{
        <h4>Number captured wait for STK in it</h4>
    }
}


    return  (
        <>
        <div class="input">
         {userNumber}
        <button className="button" onClick={()=>checkBox}>PAY</button>
        </div>
        
        </>
    )
}
export default User