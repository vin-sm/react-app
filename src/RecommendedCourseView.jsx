import React, { useState } from 'react';
import Card from './RecommendedCourseCard';
import './css/RecommendedCourseCard.css'
import { useData } from './CourseListContext';

const RecommendedCourseView = () => {
    const { data, updateData } = useData();
    const handleCardClick = (id) => {
        data[id].isEnrolled = true
        if (data[id].seatLeft > 0) {
            data[id].seatLeft -= 1;
        }
        updateData(data);
    }

    return (
        <div className='course-cards'>
            <h4>Recommended for you</h4>
            <div className="grid-container">{data.map((card) => (
                <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
            ))}
            </div>
        </div>
    )
};

export default RecommendedCourseView;

