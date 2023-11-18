import './user.css'
import logo from './assets/logo.jpeg'
import Timer from './time';
import VideoPlayer from './vedioplayer';
import ContentPackage from './packages';
import { handleButtonClick } from './packages';


function Design(){
    return(
        <>
       <div className="heading">
        <div className='logo'>
            <p className='para'><img src= {logo} alt="logo"/></p>
            <h3 class="head1">NETWORK AT LOW PRICE FOR COMRADES</h3>
            <div class = "advertise">
              <p className='p-a'>Think of Online streaming with apowerful internet of 20 Mbps+</p>
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
        <ContentPackage/>
          </div>
       </div>
       <div className='container3'>
           <VideoPlayer/>
       </div>

       </div>
       <div className='footer'>
         <center>&copy; 2023 APP Created by Enockaymwema </center>
       </div>
      </>
    )
   
}




export default Design;