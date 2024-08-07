import React, { useRef, useState } from 'react';

import '../App.css'

import Card from '../Card.js';
import cardinfo from "../containers/Cardinfo.js"


import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { set } from 'mongoose';



function ScrollFeedbackCard() {
  const boxRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [ind, setInd] = useState(1); 

  function createCard(cardinfo, index) {
    return (
      <Card
        key={cardinfo.id}
        comment={cardinfo.comment}
        name={cardinfo.name}
        profile={cardinfo.profile}
        img={cardinfo.img}
        index={index} // Passing the index as a prop  
        ind = {ind}
      />
    )
  }


  const handleScroll = async (dir) => {
    const scrollOffset = dir * boxRef.current.offsetWidth / 3;

    const newScrollPosition = scrollPosition + scrollOffset;

    // If attempting to scroll past the end, reset to the beginning
    if (newScrollPosition < 0) { 
      setInd(1)
      setScrollPosition(0);
    } else if (newScrollPosition > boxRef.current.scrollWidth - boxRef.current.offsetWidth) { 
      setInd(1)
      setScrollPosition(0);
    } else { 
      setInd(ind+dir);
      setScrollPosition(newScrollPosition);
    }

    if (boxRef.current) {
      boxRef.current.scrollLeft = newScrollPosition;
    }
  };


  return (
    <div>
      <p style={{ textDecoration: 'underline', color: '#674818', marginLeft: '5.5rem', marginTop: '5rem', fontSize: 'xx-large', padding: '0px' }}>See what others are achieving through learning</p>
      <div className='feedback'>
        <div className="dictionary" ref={boxRef}>
          {cardinfo.map((card, index) => createCard(card, index))}
        </div>
        <div className='scrollBtn'>
          <KeyboardArrowLeftOutlinedIcon className='pre-btn' onClick={() => handleScroll(-1)} />
          <KeyboardArrowRightOutlinedIcon className='pre-btn' onClick={() => handleScroll(1)} />
        </div>
      </div>
    </div>
  );
}
export default ScrollFeedbackCard;


