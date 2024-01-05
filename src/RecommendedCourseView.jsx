import React, { useState } from 'react';
import Card from './RecommendedCourseCard';
import './css/RecommendedCourseCard.css'
import mockData from './mockData/courseList.json';
import { Link } from 'react-router-dom';

const RecommendedCourseView = ({ onObjectPassed }) => {
    const [cards, setCards] = useState(mockData);

    const handleCardClick = (id) => {
        const enrolledCard = cards.courseList.filter((card) => card.id == id)
        onObjectPassed(enrolledCard)
        cards.courseList[id].isEnrolled = true
        if (cards.courseList[id].seatLeft > 0) {
            cards.courseList[id].seatLeft -= 1;
        }
        setCards(cards);
    };

    return (
        <div className='course-cards'>
            <h4>Recommended for you</h4>
            <div className="grid-container">{cards.courseList.map((card) => (
                <Link to={`/details/${card.id}`} style={{ textDecoration: 'none' }}>
                    <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
                </Link>
            ))}
            </div>
        </div>
    )
};

export default RecommendedCourseView;

