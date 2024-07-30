import { useParams } from "react-router"

import Video from "../../components/Board/Video";
import VideoContent from "../../components/Board/VideoContent";

const Board = () => {
  
  const { id } = useParams();
  
  return(
    <>
      {id}
      <Video />
      <VideoContent />
    </>
  )
}

export default Board