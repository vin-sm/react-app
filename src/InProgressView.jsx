import React from 'react';
import './css/InProgessView.css';
import Card from './inProgressCard';
import exploreNowIcon from './images/exploreNowIcon.svg'
import StatusCard from './StatusCard';

const InProgressCard = (receivedCards) => {
  const limitedData = [...receivedCards.cards].reverse().slice(0,2)
  const coursePending = receivedCards.cards.filter((card) => !card.isCompleted)
  const courseCompleted = receivedCards.cards.filter((card) => card.isCompleted)
    return  (
    <div className='inprogress-cards'>
        <div className='inprogress-cards-row'>
        <div className='continue-learning'>
          <h4>Continue Learning</h4>
          <m1>See all</m1>
        </div>
        {/* <div className='cards'> */}
            <div className="card-list">{limitedData.map((card) => (
                <Card card={card}  />
            ))}
            </div>
        {/* </div> */}
        </div>
        <div className='status'>
          <h4>Status</h4>
            <div>
              <StatusCard coursePending={coursePending.length} courseCompleted={courseCompleted.length} assesmentCompleted={courseCompleted.length}/>
            </div>
        </div>
    </div>  
)};

export default InProgressCard;

