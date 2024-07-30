import ProfileImg from '../../../assets/Setting/ProfileImage.svg'

const ProfileImage = ({size}) => {

  return(
    <>
      <img 
        className={`rounded-full ${size ? 'w-[50px] h-[50px]' : ''}`}
        src={ProfileImg} alt='x' />
    </>
  )
}

export default ProfileImage