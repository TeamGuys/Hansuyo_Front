import { useParams } from "react-router"

import Video from "../../components/Board/Video";
import VideoContent from "../../components/Board/VideoContent";

import CommentModal from "../../components/Comment/CommentModal";

import { useState } from "react";

const Board = () => {
  
  const { id } = useParams();
  
  const [isOpenCommentModal,setOpenCommentModal] = useState(false)

  return(
    <>
      {isOpenCommentModal && <CommentModal setOpenCommentModal={setOpenCommentModal} />}
      <Video />
      <VideoContent 
        setOpenCommentModal={setOpenCommentModal}
        />

    </>
  )
}

export default Board