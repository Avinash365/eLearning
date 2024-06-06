import React from 'react';
import '../styling/Landing.css'


function Landing() {
    return (
        <div className="Land">
            <div className='title1'>
                <h2 id='welcome' className='animate-charcter'> 
                    Learning that gets you
                    </h2> 
                <p>Skils for your present (and your future). Get started with us.</p>
            </div>
            <img
                src='/static/LandingImg.png'
                alt="Landing"
                style={{ width: '800px', minWidth: '500px', backgroundColor: 'white' }}
            />
        </div>
    )
}
export default Landing; 