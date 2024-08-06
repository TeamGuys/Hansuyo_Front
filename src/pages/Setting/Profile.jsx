
import Back from "../../components/Common/Back";
import ProfileName from "../../components/Common/ProfileName";
import ProfileImage from "../../components/Common/ProfileImage"
import Comment from "../../components/Common/Comment";
const Profile = () => {
  return (
    <div className="w-full">
      <div className="flex items-center p-4 h-16 space-x-3 font-bold"> {/* h-16으로 높이 설정 */}
        <Back />
        <p className="mb-0">프로필 편집</p>
      </div>
      <div className="w-full flex justify-center">
        <ProfileImage />
      </div>

      <div className="flex p-4 space-x-4">
        <p>프로필 이름   </p>
        <ProfileName />
      </div>
      <div className="flex p-4 space-x-5">
        <p>프로필 문구   </p>
        <Comment comment={'dlfma'} />
      </div>
    </div>
  )
}

export default Profile;