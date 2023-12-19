import './css/NavBar.css';
import appIcon from './images/appIcon.svg'
import notificationIcon from './images/notificationIcon.svg'

const NavBar = () => {
    return <div className="navbar">
      <div className="left-side">
        <img src={appIcon} alt="appIcon" className="app-icon" />
      </div>
      <div className="right-side">
        <img src={notificationIcon} alt="bellIcon" className="bell-icon" />
        <div className="circular-view"></div>
        <div className="details">
          <div className="name">John</div>
          <div className="email">john@gmail.com</div>
        </div>
      </div>
    </div>;
}

export default NavBar;