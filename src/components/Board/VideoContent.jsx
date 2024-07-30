import ProfileName from "../Setting/Nav/ProfileName";
import ProfileImage from "../Setting/Profile/ProfileImage";
import Like from "../Board/Like";
import Message from "../Board/Message";

const VideoContent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="flex p-5 justify-between">
        <div className="flex items-center space-x-4">
          <ProfileImage size={true} />
          <ProfileName />
        </div>

        <div className="items-center">
          <Like />
          <Message />
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
