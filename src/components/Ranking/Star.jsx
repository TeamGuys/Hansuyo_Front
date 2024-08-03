import StarImg from '../../assets/Common/Star.svg'

const Star = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className='items-center' src={StarImg} alt='.' />

      <p className='text-xs'>{12} 만</p>

    </div>
  )
}

export default Star;