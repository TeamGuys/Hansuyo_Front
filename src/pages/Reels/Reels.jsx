import { useParams } from "react-router"

import Video from "../../components/Reels/Video";
import VideoContent from "../../components/Reels/VideoContent";

import CommentModal from "../../components/Comment/CommentModal";

import ReelsStatusModal from "../../modal/ReelsStatusModal";
import OpenReelsStatus from "../../components/Reels/OpenReelsStatus"

import { useState } from "react";

const Reels = () => {

  // const { id } = useParams();

  const [isOpenCommentModal, setOpenCommentModal] = useState(false);
  const [isReelsStatusModal, setOpenReelsStatusModal] = useState(false);

  return (
    <>
      {isReelsStatusModal && <ReelsStatusModal setOpenReelsStatusModal={setOpenReelsStatusModal} />}
      {isOpenCommentModal && <CommentModal setOpenCommentModal={setOpenCommentModal} />}
      <Video />
      <div className="w-full h-auto">
        <VideoContent setOpenCommentModal={setOpenCommentModal} />
      </div>
      <div className="w-full h-auto">
        <OpenReelsStatus setOpenReelsStatusModal={setOpenReelsStatusModal} />
      </div>
    </>
  )
}

export default Reels;
