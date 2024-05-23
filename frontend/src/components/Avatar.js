import React from "react"; 

function Avatar(){
    return (
        <img className="circle-img" src="https://www.gale.com/binaries/content/gallery/gale-us-en/banners/elearning/gale-presents-udemy-for-business/instructor-yu.jpg">
        </img>
    ); 
}  
export default Avatar;   

export const Avatar1 = (Props)=>{
    return(
        <img src="circle-img" src={Props.pic} alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'solid #674818', float: 'right', marginRight: '1rem', marginTop: '1rem' }} />
    ); 
}