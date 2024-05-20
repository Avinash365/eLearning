import React, { useRef, useState } from 'react';

import '../App.css'

import Card from '../Card.js';
import cardinfo from "../containers/Cardinfo.js"


import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';



function createCard(cardinfo) {
  return (
    <Card
      key={cardinfo.id}
      comment={cardinfo.comment}
      name={cardinfo.name}
      profile={cardinfo.profile}
      img={cardinfo.img}
    />
  )
}

function ScrollFeedbackCard() {
  const boxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset) => {
    setScrollPosition(scrollPosition + scrollOffset)
    console.log(boxRef.current)
    console.log(scrollPosition)
    if (boxRef.current) {
      boxRef.current.scrollLeft = scrollPosition + scrollOffset;
    }
  };

  return (
    <div> 
      <p style={{textDecoration:'underline',color:'#674818', marginLeft:'5.5rem',marginTop:'5rem', fontSize:'xx-large',padding:'0px'}}>See what others are achieving through learning</p>
      <div className='feedback'>
        <div className="dictionary" ref={boxRef}>
          {cardinfo.map(createCard)}
        </div>
        <div className='scrollBtn'>
          <KeyboardArrowLeftOutlinedIcon className='pre-btn' onClick={() => handleScroll(-50)} />
          <KeyboardArrowRightOutlinedIcon className='pre-btn' onClick={() => handleScroll(50)} />
        </div> 
      </div>  
    </div>
  );
}
export default ScrollFeedbackCard;


