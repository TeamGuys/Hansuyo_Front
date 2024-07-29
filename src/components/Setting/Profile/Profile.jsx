import ProfileImage from "./ProfileImage";
import Advice from "./Advice";

export const Profile = () => {
  return (
    <div className="flex justify-between w-full py-3 px-[60px]">
      <div>
        <ProfileImage />
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <Advice text={'받은'} />
        <Advice text={'한'} />
      </div>
    </div>
  );
}
