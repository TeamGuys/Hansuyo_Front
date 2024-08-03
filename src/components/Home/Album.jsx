import React from 'react';
import Test1 from '../../assets/Home/Test1.svg';
import Test2 from '../../assets/Home/Test2.svg';
import Test3 from '../../assets/Home/Test2.svg';
import { Link } from 'react-router-dom';
const images = [Test1, Test2, Test3, Test1, Test2];

// 5개씩 gride 3 1 순으로 row-span-2
const aspect = [false, false, true, false, false]

const aspect2 = [true, false, false, false, false]


const Album = () => {
  return (
    <div className="grid grid-cols-3 gap-1 mt-1">
      {images.map((image, index) => (
        <div className={` shadow-lg transition-transform transform ${aspect[index] ? 'row-span-2 ' : ''}`} key={index}>
          <Link to={`./reels/${index}`}>

            <img src={image} alt={`Test ${index + 1}`} className={`w-full ${aspect[index] ? 'object-cover h-full ' : 'h-auto'}`} />
          </Link>
        </div>

      ))}
      {images.map((image, index) => (
        <div className={` shadow-lg transition-transform transform ${aspect2[index] ? 'row-span-2 ' : ''}`} key={index}>
          <img src={image} alt={`Test ${index + 1}`} className={`w-full ${aspect2[index] ? 'object-cover h-full ' : 'h-auto'}`} />
        </div>
      ))}

    </div>
  );
}

export default Album;
