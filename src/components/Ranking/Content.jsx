import ProfileImage from "../Common/ProfileImage";
import ProfileName from "../Common/ProfileName";
import Comment from "../Common/Comment";
import Star from "./Star"

import SwiperComponent from "./SwiperComponent"
const Content = () => {
  return (
    <div className="w-full p-4 space-y-4">
      <div className="flex justify-between ">
        <div className="flex space-x-2">
          <ProfileImage size={true} />
          <div className="flex-row">
            <ProfileName />
            <Comment comment={'한줄소개'} />
          </div>
        </div>
        <div>
          <Star />
        </div>
      </div>

      <div className="w-full h-[150px]">
        <SwiperComponent />
      </div>
    </div>
  )
}

export default Content;