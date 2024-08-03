import Messages from "../../assets/Home/Message.svg"

const Message = ({setOpenCommentModal}) => {
  return(
    <div 
      className="flex flex-col items-center justify-center"
      onClick={setOpenCommentModal}>
      <img src={Messages} alt='x' />
      <p className="font-[#000"> 55 </p>
    </div>
  )
}

export default Message