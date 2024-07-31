import Comment from "./Comment";

const CommentModal = ({setOpenCommentModal}) => {
  const closeModal = () => {
    setOpenCommentModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-[430px] h-[90%] bg-white rounded-t-lg shadow-lg overflow-auto">
        
        {/* 버튼 */}
        <div className="flex justify-end p-4">
          <button 
            className="text-gray-800 hover:text-black"
            onClick={closeModal}
            >
            &times;
          </button>
        </div>
        <div className="space-y-5">
        <Comment />
        <Comment />
        </div>
      </div>
    </div>
  );
}

export default CommentModal