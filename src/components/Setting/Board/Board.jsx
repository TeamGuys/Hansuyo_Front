import Board1 from '../../../assets/Setting/Board1.svg';
import Board2 from '../../../assets/Setting/Board2.svg';
import Board3 from '../../../assets/Setting/Board2.svg';


const Board = () => {
  const images = [Board1, Board2, Board3];

  return (
    <div className="grid grid-cols-3 gap-1 mt-1">
      {images.map((image, index) => (
        <div className={` shadow-lg transition-transform transform `} key={index}>
          <img src={image} alt={`Test ${index + 1}`} className={`w-full`} />
        </div>
      ))}
 {images.map((image, index) => (
        <div className={` shadow-lg transition-transform transform `} key={index}>
          <img src={image} alt={`Test ${index + 1}`} className={`w-full`} />
        </div>
      ))}
       {images.map((image, index) => (
        <div className={` shadow-lg transition-transform transform `} key={index}>
          <img src={image} alt={`Test ${index + 1}`} className={`w-full`} />
        </div>
      ))}

    </div>
  )
}

export default Board