import React from 'react';
import ProfileName from "../Setting/Nav/ProfileName";
import ProfileImage from "../Setting/Profile/ProfileImage";
import CommentContent from "../../components/Comment/CommentContent";
import Like from "../Board/Like";

const Comment = () => {
  return (
    <div className="flex px-4 items-center">
      <div className=" flex ">
        <ProfileImage size={true} />
      </div>
      <div className="flex-8 flex flex-col px-2">
        <ProfileName />
        <CommentContent />
      </div>
      <div className="flex-1 flex justify-end">
        <Like />
      </div>
    </div>
  );
};

export default Comment;
