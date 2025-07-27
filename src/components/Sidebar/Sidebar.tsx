import { useState } from 'react';
import iconHome from '/assets/icons/Group-46.png';
import iconSearch from '/assets/icons/Search.png';
import iconMovies from '/assets/icons/Group-54.png';
import iconTVShows from '/assets/icons/Group-56.png';
import iconGenres from '/assets/icons/Group-53.png';
import iconWatchLater from '/assets/icons/Group-47.png';
import iconProfile from '/assets/profile.png';
import './Sidebar.scss';

const Items = [
  { icon: iconSearch, label: 'Search', id: 'search' },
  { icon: iconHome, label: 'Home', id: 'home' },
  { icon: iconTVShows, label: 'TV Shows', id: 'tv-shows' },
  { icon: iconMovies, label: 'Movies', id: 'movies' },
  { icon: iconGenres, label: 'Genres', id: 'genres' },
  { icon: iconWatchLater, label: 'Watch Later', id: 'watch-later' },
];

const bottomItems = [
  { icon: '', label: 'Language', id: 'language' },
  { icon: '', label: 'Get Help', id: 'help' },
  { icon: '', label: 'Exit', id: 'exit' },
];

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive && <div className="sidebar-backdrop" />}
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className={`sidebar ${isActive ? 'expanded' : ''}`}
      >
        <div className="sidebar-wrapper">

          <nav className="sidebar-menu">
            {isActive && <div className='profile-section'>
            <img src={iconProfile} alt="Profile" className="profile-img" />
            <span className="profileName">Daniel</span>
          </div>}
            {Items.map((item) => (
              <div key={item.id} className="sidebar-item">
                <img src={item.icon} alt={item.label} className="sidebar-icon" />
                <span className={`sidebar-label ${isActive ? 'visible' : 'hidden'}`}>
                  {item.label}
                </span> 
              </div>
            ))}
          </nav>

          <div className="sidebar-bottom">
            {bottomItems.map((item) => (
              <div key={item.id} className="sidebar-item">
                <span className="sidebar-icon" />
                <span className={`sidebar-label ${isActive ? 'visible' : 'hidden'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
