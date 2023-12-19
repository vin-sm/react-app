import NavBar from './NavBar'
import LeftMenu from './LeftMenu';
import InProgressCard from './InProgressView';
import './App.css';
import exploreNowIcon from './images/exploreNowIcon.svg'
import RecommendedCourseView from './RecommendedCourseView'
import React, { useState } from 'react';

const App = () => {
  const [receivedObject, setReceivedObject] = useState([]);
  const handleObjectFromCourseView = (newData) => {
    setReceivedObject(prevData => [...prevData, ...newData]);
    // You can perform any action with the received object here
  };
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <LeftMenu />
        <div className='main-content'>
          <div className='explore-now'>
            <div> 
              <h1>Expand your career opportunities</h1>
              <p>Choose from a list of online video courses with new additions published every month</p>
              <button>Explore Now</button>
            </div>
              <div className='explore-image'><img src={exploreNowIcon} alt='exploreNowIcon'></img></div>
          </div>
          {receivedObject.length > 0 ? (
            <InProgressCard cards={receivedObject}/>) : null}
            <RecommendedCourseView onObjectPassed={handleObjectFromCourseView} />
        </div>
      </div>
    </div>
  );
};

export default App;

