import React from 'react';
import Home from '../../assets/Layout/Home.svg';
import Reels from '../../assets/Layout/Reels.svg';
import Upload from '../../assets/Layout/Upload.svg';
import Ranking from '../../assets/Layout/Ranking.svg';
import Setting from '../../assets/Layout/Setting.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const icons = [
    { src: Home, path: '/home' },
    { src: Reels, path: '/reels' },
    { src: Upload, path: '/upload' },
    { src: Ranking, path: '/ranking' },
    { src: Setting, path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full text-white shadow-md ">
        <div className="flex justify-between p-5">
          {icons.map((icon, i) => (
            <Link to={icon.path} key={i}>
              <img src={icon.src} alt={`icon-${i}`} className="h-6 w-6" />
            </Link>
          ))}
      </div>
    </nav>
  );
}

export default Footer;
