import { useParams, useNavigate } from "react-router-dom";
import Video from "../../components/Reels/Video";
import VideoContent from "../../components/Reels/VideoContent";
import CommentModal from "../../components/Comment/CommentModal";
import ReelsStatusModal from "../../modal/ReelsStatusModal";
import OpenReelsStatus from "../../components/Reels/OpenReelsStatus";
import { useState, useEffect } from "react";


const Reels = () => {
  const { videoId } = useParams(); // URL에서 videoId 가져오기
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [isOpenCommentModal, setOpenCommentModal] = useState(false);
  const [isReelsStatusModal, setOpenReelsStatusModal] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // 스크롤 여부 상태
  const [videoIds, setVideoIds] = useState([videoId]); // 비디오 ID 배열

  // const generateRandomId = () => {
  //   return Math.floor(Math.random() * 1000); // 0부터 999까지 랜덤 숫자 생성
  // };

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY; // 현재 스크롤 위치
  //   const windowHeight = window.innerHeight; // 브라우저 창 높이
  //   const documentHeight = document.documentElement.scrollHeight; // 전체 문서 높이

  //   // 스크롤 위치가 문서의 50% 이상일 때 랜덤 비디오로 이동
  //   if (scrollPosition + windowHeight >= documentHeight * 0.5 && !hasScrolled) {
  //     setHasScrolled(true); // 스크롤 처리 완료 플래그 설정

  //     // 새로운 랜덤 ID 생성
  //     const randomId = generateRandomId();

  //     // 비디오 ID 배열에 랜덤 ID 추가
  //     setVideoIds((prevIds) => [...prevIds, randomId]);

  //     navigate(`/reels/${randomId}`); // 랜덤 ID를 가진 URL로 이동
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 추가

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   };
  // }, [hasScrolled]); // hasScrolled 상태에 따라 의존성 변경


  return (
    <>
      {isReelsStatusModal && <ReelsStatusModal setOpenReelsStatusModal={setOpenReelsStatusModal} />}
      {isOpenCommentModal && <CommentModal setOpenCommentModal={setOpenCommentModal} />}
      
      {/* 여러 비디오 렌더링 */}
      {videoIds.map((id) => (
        <>
        <Video key={id} videoId={id} /> // 각 비디오 컴포넌트에 고유 키 설정
        <div className="w-full h-auto">
        <VideoContent setOpenCommentModal={setOpenCommentModal} />
      </div>
      <div className="w-full h-auto">
        <OpenReelsStatus setOpenReelsStatusModal={setOpenReelsStatusModal} />
      </div>

      <div className="h-[200px]" />
      </>
      ))}
      
     
    </>
  );
}

export default Reels;
