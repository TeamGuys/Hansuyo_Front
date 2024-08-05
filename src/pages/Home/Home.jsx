import React from "react"
import SearchInput from "../../components/Home/SearchInput"
import Like from "../../components/Home/Like"
import Message from "../../components/Home/Message"
import Album from "../../components/Home/Album"
import { getVideo } from "../../api/Home/Home";
import { useState, useEffect } from "react";


const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const videoData = await getVideo();
        
        setVideos(videoData); // 비디오 데이터 설정
      } catch (err) {
        setError(err); // 오류 설정
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-[100vh] p-1 ">
      {/* 검색창 상단바 */}
      <div className="flex h-[50px] p-1 space-x-3" >
        <SearchInput />
        <Like />
        <Message />

      </div>

      {/* 탐색 */}
      <Album />
    </div>
    
  )
}

export default Home