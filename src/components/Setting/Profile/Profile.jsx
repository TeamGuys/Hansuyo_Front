import ProfileImage from "../../Common/ProfileImage";
import Advice from "./Advice";
import Comment from "./Comment";

export const Profile = () => {
  return (
    <>
      <div className="flex justify-between w-full py-3 px-[60px]">
        <div>
          <ProfileImage />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <Advice text={'받은'} />
          <Advice text={'한'} />
        </div>

      </div>
      <div className="w-full px-[60px]">
        <Comment comment={'comment'} />
      </div>
    </>
  );
}
