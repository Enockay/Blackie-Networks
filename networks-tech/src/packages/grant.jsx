import InitialOffer from "./default";
import StatementRequest from "../clientApis/statements";
import ParentComponent from "../clientApis/mainRender";

const Grant = () =>{
    return(
        <>
         <InitialOffer/>
         <div className='packages'>
            <ParentComponent/>
        </div>
        </>
    )
}

export default Grant;