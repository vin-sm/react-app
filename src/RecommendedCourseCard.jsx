import React from 'react';
import './css/RecommendedCourseCard.css';
import courseIcon from './images/courseIcon.svg'
import clockIcon from './images/clockIcon.svg'
import checkCircleIcon from './images/check-circle.svg'
import { Link } from 'react-router-dom';

const RecommendedCourseCard = ({ card, onClick }) => {
  var seatLeftClassName = 'seat-left';
  if (card.seatLeft == 0) {
    seatLeftClassName = 'seat-full'
  } else if (card.seatLeft < (card.totalSeat - card.seatLeft)) {
    seatLeftClassName = 'seat-half'
  }
  return (
    <div className='recommended-card'>
      <img src={courseIcon} alt='Image'></img>
      <div className={seatLeftClassName}>Seat left : {card.seatLeft} of {card.totalSeat}</div>
      <div className='recommended-card-details'>
        <h5>{card.courseName}</h5>
        <div className='course-update'>
          <h6>Updated On: {card.updatedOn}</h6>
          <div>
            <img src={checkCircleIcon} alt='checkCircleIcon' />
            <p>{card.assesmentCount} Assesments</p>
          </div>
        </div>
        <div className='course-enroll'>
          <div className='course-duration'>
            <img src={clockIcon} alt='clockIcon' />
            <div>
              <h6>Course Duration</h6>
              <p>{card.courseDuration} days</p>
            </div>
          </div>
          <div>
            <button className={(card.seatLeft <= 0) ? 'disableButton' : 'enableButton'} onClick={!card.isEnrolled ? onClick : null} disabled={(card.seatLeft <= 0) ? true : false}>
              {card.isEnrolled == true ?
                (<Link to={`/details/${card.id}`} style={{ textDecoration: 'none', color: 'white'}}>
                  View Details
                </Link>) : 'Enroll'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourseCard;