import './user.css'
import logo from './assets/logo.jpeg'
import Timer from './time';
import LandingPage from './vedioplayer';
import ContentPackage from './packages';
import { handleButtonClick } from './packages';
import InitialOffer from './default';


function Design(){
    return(
        <>
       <div className="heading">
        <div className='logo'>
            <p className='para'><img src= {logo} alt="logo"/>
            <h3>Best services First</h3></p>
            <div className='head1'>
            <h4 class="">NETWORK AT LOW PRICE FOR COMRADES</h4>
            <h5 className='contact'>Whatsapp Me : 0740629611</h5>
            </div>
            <div class = "advertise">
              <p className='p-a'><h5>Wifi strength 20 MBPS</h5><a href='https://fast.com/en/gb/'>Test Me</a></p>
             
             <div>
             <Timer/>
             </div>
            </div>
       </div>
       <div className='items'>
           <button className='btn1'onClick={() => handleButtonClick('btn1')}><h4>Hourly Pacakages</h4></button> 
           <button className='btn2'onClick={() => handleButtonClick('btn2')}><h4>Weekly Pacakages</h4></button>
           <button className='btn3'onClick={() => handleButtonClick('btn3')}><h4>Monthly Packages</h4></button>
           <button className='btn4'onClick={() => handleButtonClick('btn4')}><h4>Grant packages</h4></button>
       </div>
       
       </div>
      
       <div className="main">
      <div className='cont1-2'>
             <div className='container1'>
               <h2 className='advert'>BRINGING NETWORK AT LOWER PRICE FASTER THAN YOU CAN THINK.</h2>
          </div>
           <div className='container2'> 
           <InitialOffer/>
        <ContentPackage/>
          </div>
       </div>
       <div className='container3'>
       <LandingPage/>  
       </div>

       </div>
       <div className='footer'>
         <center>&copy; 2023 APP Created by Enockaymwema </center>
       </div>
      </>
    )
   
}




export default Design;