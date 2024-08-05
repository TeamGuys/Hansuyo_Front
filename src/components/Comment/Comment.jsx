import React from 'react';
import ProfileName from "../Common/ProfileName";
import ProfileImage from "../Common/ProfileImage";
import CommentContent from "../../components/Comment/CommentContent";
import Like from "../Reels/Like";
import Time from './Time';

const Comment = () => {
  return (
    <div className="w-full flex px-4 items-center">
      <div className="flex-grow">
        <ProfileImage size={true} />
      </div>
      <div className="flex-grow-[8] flex flex-col px-2">
        <ProfileName />
        <CommentContent />
      </div>
      <div className="flex-grow flex-col justify-end">
        <Time small={true} />
        <Like small={true}/>
        
      </div>
    </div>
  );
};

export default Comment;
