import React from "react";
import './css/DetailPageHeaderCard.css';
import courseIcon from './images/courseIcon.svg';
import clockIcon from './images/clockIcon.svg';
import lastUpdateIcon from './images/lastUpdateIcon.svg';
import shareIcon from './images/shareIcon.svg';
import checkCircleIcon from './images/check-circle.svg';
import tickIcon from './images/tickIcon.svg';


const DetailPageHeaderCard = ({card}) => {
    var seatLeftClassName = 'seat-left2';
    if (card.seatLeft == 0) {
        seatLeftClassName = 'seat-full2'
      } else if (card.seatLeft < (card.totalSeat-card.seatLeft)){
        seatLeftClassName = 'seat-half2'
      }
    return (
        <div className='detail-page'>
            <div className='description-view'>
                <img className='image' src={courseIcon} alt='Image' />
                <div className='title-with-share'>
                    <div className='title'>{card.courseName}</div>
                    <img src={shareIcon} alt='shareIcon' />
                </div>
                <div className='course-detail'>
                    <div className='course-duration'>
                        <img src={clockIcon} alt='clockIcon' />
                        <div>
                            <h6>Course Duration</h6>
                            <p>{card.courseDuration} days</p>
                        </div>
                    </div>
                    <div className='course-update'>
                        <img src={lastUpdateIcon} alt='lastUpdateIcon' />
                        <h6>Last update {card.updatedOn}</h6>
                    </div>
                </div>
            </div>
            <div className='enroll-view'>
                <div className='enroll-view-text1'>If enrolled now the course will end on</div>
                <div className='enroll-view-text2'>{card.enrolledDate}</div>
                <div className='sepertaor'></div>
                <div className='course-include'>This Course includes:</div>
                <div className='assessment-details'>
                    <img src={checkCircleIcon} alt='checkCircleIcon' />
                    <p className="assessment">{card.assesmentCount} Assesments</p>
                </div>
                <div className='assessment-details'>
                    <img src={tickIcon} alt='tickIcon' />
                    <p className="article">{card.articleCount} articles</p>
                </div>
                <div className='assessment-details'>
                    <img src={tickIcon} alt='tickIcon' />
                    <p className="article">{card.resources} downloadalbe resources</p>
                </div>
                <button>Enroll Now</button>
                <div className="seat-left-view">
                    <div className="filling-fast">Filling Fast</div>
                    <div className={seatLeftClassName}>Seat left : {card.seatLeft} of {card.totalSeat}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailPageHeaderCard;