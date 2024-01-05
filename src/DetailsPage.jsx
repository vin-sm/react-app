import React from 'react';
import './css/DetailsPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import DetailPageHeaderCard from './DetailPageHeaderCard';
import DetailPageDescriptionCard from './DetailPageDescriptionCard'
import lockIcon from './images/lock.svg';
import downArrowIcon from './images/chevron-down.svg';
import { useData } from './CourseListContext';

const DetailsPage = () => {
    const navigate = useNavigate();
    let { id } = useParams();

    const { data, updateData } = useData();
    const courseData = data[id];

    const goToHome = () => {
        navigate('/');
    };

    const handleEnrolledViewClick = () => {
        courseData.isEnrolled = true
        if (courseData.seatLeft > 0) {
            courseData.seatLeft -= 1;
        }
        updateData(courseData);
    }
    return (
        <div className='main-content'>
            <div className='backToHome'>
                <button onClick={goToHome}>Back to Home</button>
                <div className='header-title'>
                    <div className='home-title' onClick={goToHome}>Home {'>'}</div>
                    <div className='course-detail-title'>Course Details</div>
                </div>
            </div>
            <DetailPageHeaderCard data={courseData} onClick={() => handleEnrolledViewClick} />
            <DetailPageDescriptionCard data={courseData} />
            <div className='assesments-view'>
                <h3 className='assesments'>Assesments</h3>
                {[...Array(5)].map(() => (
                    <div className='course-card'>
                        <div className='introduction'>
                            <div>1. Introduction</div>
                            <img src={downArrowIcon} alt='downArrowIcon' />
                        </div>
                        <div>
                            <img src={lockIcon} alt='lockIcon' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsPage;