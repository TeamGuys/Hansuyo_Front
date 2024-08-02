const Time = ({small}) => {
  return(
    <div className="flex flex-col items-center justify-center">
      <p className={`${small ? 'text-xs' : '' } `}>
        {6}분전
      </p>
    </div>
  )
}

export default Time