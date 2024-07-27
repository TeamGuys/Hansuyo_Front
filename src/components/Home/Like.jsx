import Heart from "../../assets/Home/Heart.svg"

const Like = () => {
  return(
    <div className="flex items-center justify-center ">
    <img 
      className="h-6"
      src={Heart} 
      alt='메시지 아이콘' 
    />
  </div>
  )
}

export default Like