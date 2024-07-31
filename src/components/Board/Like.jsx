import Heart from "../../assets/Home/Heart.svg"

const Like = ({small}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img 
        src={Heart} alt='x'
        className={`${small ? 'w-3 h-3' : ''}`}
      />
      <p 
        className={`font-[#000] ${small ? 'text-sm' : ''}`}>
        55
      </p>
    </div>
  );
}

export default Like;
