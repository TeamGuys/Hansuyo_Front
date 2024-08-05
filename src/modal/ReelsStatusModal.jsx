import PlayCount from "../components/ReelsStatusModal/PlayCount";
import { Border } from "../components/Common/Border";
import ReelsStatusModalButton from "../components/ReelsStatusModal/ReelsStatusModalButton"
import save from "../assets/ReelsStatusModal/Save.svg"

const ReelsStatusModal = ({ setOpenReelsStatusModal }) => {

  const closeModal = () => {
    setOpenReelsStatusModal(false);
  };

  const handleBackgroundClick = (e) => {
    // 모달 콘텐츠 영역을 클릭한 경우에는 닫히지 않도록 합니다.
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-[430px] h-[60%] bg-white rounded-t-lg shadow-lg overflow-auto">
        <div className="flex justify-center pt-20 pb-5">
          <PlayCount count={5} />
        </div>
        <Border />
        <div className="flex justify-center py-5">
          <img src={save} alt='.' />
        </div>
        <div className="flex-row p-10 space-y-4">
          <ReelsStatusModalButton text={'공유하기'} />
          <ReelsStatusModalButton text={'링크복사'} />
        </div>
      </div>
    </div>
  );
}

export default ReelsStatusModal;
