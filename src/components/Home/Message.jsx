import Messages from "../../assets/Home/Message.svg"

const Message = () => {
  return(
    <div className="flex items-center justify-center ">
      <img 
        className="h-7"
        src={Messages} 
        alt='메시지 아이콘' 
      />
    </div>
  )
}

export default Message