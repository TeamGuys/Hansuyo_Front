import Thumbnail from "../../../assets/Setting/Thumbnail.svg"

const Collection = () => {
  return(
    <>
      <p className="w-full px-3 py-1"> 영상 모아보기 </p>
      <div className="flex w-full">
        <div>
          <img src={Thumbnail} alt='x' />
          <p> 일주일기록 </p>
        </div>
        <div>
          <img src={Thumbnail} alt='x' />
          <p> 일주일기록 </p>
        </div>
      </div>
    </>
  )

} 

export default Collection