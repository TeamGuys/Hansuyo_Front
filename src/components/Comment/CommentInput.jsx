import ProfileImage from "../Setting/Profile/ProfileImage";
import Send from "../Comment/Send"

const CommentInput = () => {
  return (
    <div className="flex px-4 items-center">
      <div className=" flex ">
        <ProfileImage size={true} />
      </div>
      <div className="flex-8 flex flex-col px-2">
        <input 
          className="w-full h-full"
          placeholder="댓글입력"
          />
      </div>
      <div className="flex-1 flex justify-end">
        <Send />
      </div>
    </div>
  )
}

export default CommentInput;