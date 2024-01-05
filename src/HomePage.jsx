import InProgressCard from './InProgressView';
import './App.css';
import exploreNowIcon from './images/exploreNowIcon.svg'
import RecommendedCourseView from './RecommendedCourseView'
import React from 'react';
import { useData } from './CourseListContext';

const HomePage = () => {

    const { data, updateData } = useData();
    const enrolledCard = data.filter((card) => card.isEnrolled == true)

    return (<div className='main-content'>
        <div className='explore-now'>
            <div>
                <h1>Expand your career opportunities</h1>
                <p>Choose from a list of online video courses with new additions published every month</p>
                <button>Explore Now</button>
            </div>
            <div className='explore-image'><img src={exploreNowIcon} alt='exploreNowIcon'></img></div>
        </div>
        {enrolledCard.length > 0 ? (
            <InProgressCard cards={enrolledCard} />) : null}
        <RecommendedCourseView />
    </div>
    );
};

export default HomePage;