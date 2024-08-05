import ProfileName from "../Common/ProfileName";
import ProfileImage from "../Common/ProfileImage";
import Like from "./Like";
import Message from "./Message";

const VideoContent = ({ setOpenCommentModal }) => {
  return (
    <div className="flex p-5 justify-between">
      <div className="flex items-center space-x-4">
        <ProfileImage size={true} />
        <ProfileName />
      </div>

      <div className="items-center">

        <Like />

        <Message
          setOpenCommentModal={setOpenCommentModal}
        />

      </div>
    </div>
  );
};

export default VideoContent;
