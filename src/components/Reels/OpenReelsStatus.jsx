const OpenReelsStatus = ({setOpenReelsStatusModal}) => {

  const openModal = () => {
    setOpenReelsStatusModal(true);
  };

  return( 
    <div
      onClick={openModal}>
      더보기
    </div>
  )
}

export default OpenReelsStatus