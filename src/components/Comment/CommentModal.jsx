import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentModal = ({ setOpenCommentModal }) => {
  const closeModal = () => {
    setOpenCommentModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-[430px] h-[90%] bg-white rounded-t-lg shadow-lg overflow-auto">
        
        {/* 버튼 */}
        <div className="flex justify-end p-4">
          <button 
            className="text-gray-800 hover:text-black"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>

        <div className="space-y-5 flex-grow overflow-auto">
          <Comment />
          <Comment />
        </div>

        <div className="fixed bottom-0 w-full max-w-[430px] mx-auto p-2 bg-orange-400 flex">
          <CommentInput />
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
