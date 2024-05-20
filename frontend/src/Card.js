import React from "react";
import './App.css';
import './styling/Card.css'

import StarIcon from '@mui/icons-material/Star';


import Avatar from './components/Avatar.js';

function Card(Props) {
    return (
        // <dl className="dictionary">
        <div className="term">
            <dt><StarIcon className='icon' /></dt>
            <dd>{Props.comment}</dd>
            <div className='foot'>
                <Avatar img={Props.img} />
                <div className='disCr'>
                    <p>{Props.name}</p>
                    <p>{Props.profile}</p>
                </div>
            </div>
            <a href='' >Link of course</a>
        </div>
        // </dl>
    );
}
export default Card; 