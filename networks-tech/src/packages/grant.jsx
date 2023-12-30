import InitialOffer from "./default";
import StatementRequest from "../clientApis/statements";
import ParentComponent from "../clientApis/mainRender";

const Grant = () =>{
    return(
        <>
         <div className='packages'id="package1">
            <ParentComponent/>
        </div>
        <InitialOffer/>
        </>
    )
}

export default Grant;