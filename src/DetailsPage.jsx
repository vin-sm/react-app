import React from 'react';
import './css/DetailsPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import DetailPageHeaderCard from './DetailPageHeaderCard';
import DetailPageDescriptionCard from './DetailPageDescriptionCard'
import mockData from './mockData/courseList.json';
import lockIcon from './images/lock.svg';
import downArrowIcon from './images/chevron-down.svg';

const DetailsPage = () => {
    const navigate = useNavigate();
    let { id } = useParams();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className='main-content'>
            <div className='backToHome'>
                <button onClick={goToHome}>Back to Home</button>
                <div className='header-title'>
                    <div className='home-title'>Home {'>'}</div>
                    <div className='course-detail-title'>Course Details</div>
                </div>
            </div>
            <DetailPageHeaderCard card={mockData.courseList[id]} />
            <DetailPageDescriptionCard card={mockData.courseList[id]} />
            <div className='assesments-view'>
                <h3 className='assesments'>Assesments</h3>
                {[...Array(5)].map((topic) => (
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