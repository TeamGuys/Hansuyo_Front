import PlayCount from "../components/BoardStatusModal/PlayCount";
import { Border } from "../components/Setting/Border";
import BoardStatusModalButton from "../components/BoardStatusModal/BoardStatusModalButton"
import save from "../assets/BoardStatusModal/Save.svg"
const BoardStatusModal = ({setOpenBoardStatusModal}) => {
  const closeModal = () => {
    setOpenBoardStatusModal(false);
  };
  return(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-[430px] h-[60%] bg-white rounded-t-lg shadow-lg overflow-auto">
        <div 
          className="flex justify-center pt-40 pb-5"
          >
            <PlayCount count={5} />
        </div>
        <Border />
        <div 
          className="flex justify-center py-5"
          >
            <img src={save} alt='.' />
        </div>

        <div className="flex-row p-10 space-y-4">
          <BoardStatusModalButton text={'공유하기'} />
          <BoardStatusModalButton text={'링크복사'} />
          
        </div>
      </div>
  </div>
  )
}

export default BoardStatusModal