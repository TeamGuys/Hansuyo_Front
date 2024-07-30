import YouTube from 'react-youtube';

const Video = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 3,
      autohide: 1,
      mute: 1,
    },
  };
  return(
    <>
     <YouTube
          videoId="IE5_RjZomUs"
          opts={videoOptions}
          className="w-full h-full object-cover"
          onEnd={(e) => e.target.playVideo()} // 반복 재생 설정
          containerClassName="absolute inset-0 w-full h-full"
        />
    </>
  )
}
export default Video