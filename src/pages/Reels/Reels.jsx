import { useParams, useNavigate } from "react-router-dom"; // useNavigate에서 react-router-dom으로 변경
import Video from "../../components/Reels/Video";
import VideoContent from "../../components/Reels/VideoContent";
import CommentModal from "../../components/Comment/CommentModal";
import ReelsStatusModal from "../../modal/ReelsStatusModal";
import OpenReelsStatus from "../../components/Reels/OpenReelsStatus";
import { useState } from "react";

const Reels = () => {
  const { videoId } = useParams(); // URL에서 videoId 가져오기
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [isOpenCommentModal, setOpenCommentModal] = useState(false);
  const [isReelsStatusModal, setOpenReelsStatusModal] = useState(false);

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000); // 0부터 999까지 랜덤 숫자 생성
  };

  const handleRedirect = () => {
    const randomId = generateRandomId();
    navigate(`/reels/${randomId}`); // 랜덤 ID를 가진 URL로 이동
  };

  return (
    <>
      {isReelsStatusModal && <ReelsStatusModal setOpenReelsStatusModal={setOpenReelsStatusModal} />}
      {isOpenCommentModal && <CommentModal setOpenCommentModal={setOpenCommentModal} />}
      <Video videoId={videoId} /> {/* videoId를 Video 컴포넌트에 전달 */}
      <div className="w-full h-auto">
        <VideoContent setOpenCommentModal={setOpenCommentModal} />
      </div>
      <div className="w-full h-auto">
        <OpenReelsStatus setOpenReelsStatusModal={setOpenReelsStatusModal} />
      </div>
      <button onClick={handleRedirect} className="mt-4 p-2 bg-blue-500 text-white rounded">랜덤 비디오로 이동</button> {/* 랜덤 비디오로 이동하는 버튼 추가 */}
    </>
  );
}

export default Reels;
