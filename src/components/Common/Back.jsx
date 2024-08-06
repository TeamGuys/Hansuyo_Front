import { useNavigate } from "react-router"
import BackImg from "../../assets/Setting/Back.svg"

const Back = () => {
  const navigate = useNavigate()

  const handleback = () => {
    navigate(-1) // 이전 ��이지로 이���
  }
  
  return (
    <div 
      className="flex items-center"
      onClick={handleback}
      >
      <img src={BackImg} alt='x' />
    </div>
  )
}

export default Back