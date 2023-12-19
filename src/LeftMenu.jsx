import './css/LeftMenu.css';
import dashboardIcon from './images/dashboardIcon.svg'
import exploreIcon from './images/exploreIcon.svg'
import myLearningIcon from './images/mylearningIcon.svg'
import settingsIcon from './images/settingsIcon.svg'

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <ul>
        <li><img src={dashboardIcon} alt='dashboardIcon'></img></li>
        <li><img src={exploreIcon} alt='exploreIcon'></img></li>
        <li><img src={myLearningIcon} alt='myLearningIcon'></img></li>
        <li><img src={settingsIcon} alt='settingsIcon'></img></li>
      </ul>
    </div>
  );
};

export default LeftMenu;