import { useParams } from "react-router"

import Video from "../../components/Board/Video";
import VideoContent from "../../components/Board/VideoContent";

import CommentModal from "../../components/Comment/CommentModal";
import BoardStatusModal from "../../modal/BoardStatusModal";

import OpenBoardStatus from "../../components/Board/OpenBoardStatus";

import { useState } from "react";

const Board = () => {

  // const { id } = useParams();

  const [isOpenCommentModal, setOpenCommentModal] = useState(false);
  const [isBoardStatusModal, setOpenBoardStatusModal] = useState(false);

  return (
    <>
      {isBoardStatusModal && <BoardStatusModal setOpenBoardStatusModal={setOpenBoardStatusModal} />}
      {isOpenCommentModal && <CommentModal setOpenCommentModal={setOpenCommentModal} />}
      <Video />
      <div className="w-full h-auto">
        <VideoContent setOpenCommentModal={setOpenCommentModal} />
      </div>
      <div className="w-full h-auto">
        <OpenBoardStatus setOpenBoardStatusModal={setOpenBoardStatusModal} />
      </div>
    </>
  )
}

export default Board;
