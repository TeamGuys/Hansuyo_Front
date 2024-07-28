import React from "react"
import SearchInput from "../../components/Home/SearchInput"
import Like from "../../components/Home/Like"
import Message from "../../components/Home/Message"
import Album from "../../components/Home/Album"

const Home = () => {
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