import React from "react";
import './css/DetailPageHeaderCard.css';
import bannerImage from './images/bannerImage.svg';
import clockIcon from './images/clockIcon.svg';
import lastUpdateIcon from './images/lastUpdateIcon.svg';
import shareIcon from './images/shareIcon.svg';
import checkCircleIcon from './images/check-circle.svg';
import tickIcon from './images/tickIcon.svg';
import greenTickIcon from './images/greenTickIcon.svg';
import { useState } from "react";

const DetailPageHeaderCard = ({data}) => {
    var seatLeftClassName = 'seat-left2';
    if (data.seatLeft == 0) {
        seatLeftClassName = 'seat-full2'
      } else if (data.seatLeft < (data.totalSeat-data.seatLeft)){
        seatLeftClassName = 'seat-half2'
      }
      const [copied, setCopied] = useState(false);
      const copyToClipboard = () => {
        
        navigator.clipboard.writeText(data.courseName)
          .then(() => {
            setCopied(true);
    
            // Clear after 5 seconds (adjust the timeout duration as needed)
            setTimeout(() => {
              setCopied(false);
              navigator.clipboard.writeText(''); // Clear clipboard content
            }, 5000);
          })
          .catch(err => console.error('Failed to copy: ', err));
      };
    return (
        <div className='detail-page'>
            <div className='description-view'>
                <img className='bannerImage' src={bannerImage} alt='bannerImage' />
                <div className='title-with-share'>
                    <div className='title'>{data.courseName}</div>
                    <img src={copied ? greenTickIcon: shareIcon} alt='shareIcon' onClick={copied ? null : copyToClipboard} />
                </div>
                <div className='course-detail'>
                    <div className='course-duration'>
                        <img src={clockIcon} alt='clockIcon' />
                        <div>
                            <h6>Course Duration</h6>
                            <p>{data.courseDuration} days</p>
                        </div>
                    </div>
                    <div className='course-update'>
                        <img src={lastUpdateIcon} alt='lastUpdateIcon' />
                        <h6>Last update {data.updatedOn}</h6>
                    </div>
                </div>
            </div>
            <div className='enroll-view'>
                <div className='enroll-view-text1'>If enrolled now the course will end on</div>
                <div className='enroll-view-text2'>{data.enrolledDate}</div>
                <div className='sepertaor'></div>
                <div className='course-include'>This Course includes:</div>
                <div className='assessment-details'>
                    <img src={checkCircleIcon} alt='checkCircleIcon' />
                    <p className="assessment">{data.assesmentCount} Assesments</p>
                </div>
                <div className='assessment-details'>
                    <img src={tickIcon} alt='tickIcon' />
                    <p className="article">{data.articleCount} articles</p>
                </div>
                <div className='assessment-details'>
                    <img src={tickIcon} alt='tickIcon' />
                    <p className="article">{data.resources} downloadalbe resources</p>
                </div>
                <button>Enroll Now</button>
                <div className="seat-left-view">
                    <div className="filling-fast">Filling Fast</div>
                    <div className={seatLeftClassName}>Seat left : {data.seatLeft} of {data.totalSeat}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailPageHeaderCard;