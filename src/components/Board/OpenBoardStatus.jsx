const OpenBoardStatus = ({setOpenBoardStatusModal}) => {

  const openModal = () => {
    setOpenBoardStatusModal(true);
  };

  return( 
    <div
      onClick={openModal}>
      더보기
    </div>
  )
}

export default OpenBoardStatus