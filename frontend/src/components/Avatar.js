import React from "react"; 

function Avatar(Props){
    return (
        <img className="circle-img" src={Props.img} alt="img">
        </img>
    ); 
}  
export default Avatar;   

export const Avatar1 = (Props)=>{
    return(
        <img src={Props.pic} alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818'}} />
    ); 
}