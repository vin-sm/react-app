import React from 'react';
import './css/StatusCard.css';
import pendingIcon from './images/pendingIcon.svg';
import completedIcon from './images/completedIcon.svg';
import assesmentIcon from './images/assesmentIcon.svg';

const StatusCard = ({ coursePending, courseCompleted, assesmentCompleted}) => {
    return (
        <div className='status-card'>
            <div className='card-status'>
                <img src={pendingIcon} alt='pendingIcon'/>
                <h1>{coursePending}</h1>
                <p>Courses<br></br>Pending</p>
            </div>
            <div className='card-status'>
                <img src={completedIcon} alt='completedIcon'/>
                <h1>{courseCompleted}</h1>
                <p>Courses<br></br>Completed</p>
            </div>
            <div className='card-status'>
                <img src={assesmentIcon} alt='assesmentIcon'/>
                <h1>{assesmentCompleted}</h1>
                <p>Assesments<br></br>Completed</p>
            </div>
        </div>
)};

export default StatusCard;