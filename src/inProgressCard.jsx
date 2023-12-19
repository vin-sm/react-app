import React from 'react';
import './css/InProgessCard.css';
import exploreNowIcon from './images/exploreNowIcon.svg';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={exploreNowIcon} alt='Image'></img>
      <div className='card-details'>
        <h5>{card.courseName}</h5>
        <p>{card.completedLessonCount}. {card.lessonName}</p>
        <h6>{card.completedLessonCount}/{card.totalLessonCount} Lessons</h6>
        <div className='progress'>
          <div class="mainDiv" style={{ width: card.totalLessonCount * 10 }}>
            <div class="childDiv" style={{ width: card.completedLessonCount * 10 }}></div>
          </div>
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Card;