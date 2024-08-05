import React from 'react';
import Home from '../../assets/Layout/Home.svg';
import Reels from '../../assets/Layout/Reels.svg';
import Upload from '../../assets/Layout/Upload.svg';
import Ranking from '../../assets/Layout/Ranking.svg';
import Setting from '../../assets/Layout/Setting.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const icons = [
    { src: Home, path: '/' },
    { src: Reels, path: '/reels/0' },
    { src: Upload, path: '/upload' },
    { src: Ranking, path: '/ranking' },
    { src: Setting, path: '/setting' },
  ];

  return (  
    <footer className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto p-2 h-[60px] bg-white
                        z-40 flex justify-between"> 
      {icons.map((icon, i) => (
        <Link to={icon.path} key={i} className="flex items-center">
          <img src={icon.src} alt={`icon-${i}`} className="h-6 w-6" />
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
