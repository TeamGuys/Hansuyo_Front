import ProfileImage from "../Common/ProfileImage";
import Send from "../Comment/Send";

const CommentInput = () => {
  return (
    <div className="flex w-full px-4 items-center">
      <div className="flex-grow">
        <ProfileImage size={true} />
      </div>
      <div className="flex-grow-[8] flex flex-col px-2">
        <input 
          className="w-full h-full"
          placeholder="댓글 입력"
        />
      </div>
      <div className="flex-grow flex justify-end">
        <Send />
      </div>
    </div>
  );
}

export default CommentInput;
