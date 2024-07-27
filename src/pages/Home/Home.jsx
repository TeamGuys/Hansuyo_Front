import React from "react"
import SearchInput from "../../components/Home/SearchInput"
import Like from "../../components/Home/Like"
import Message from "../../components/Home/Message"

const Home = () => {
  return (
    <div className="h-[100vh] bg-slate-500 p-1 ">
      {/* 검색창 상단바 */}
      <div className="flex h-[50px] p-1 space-x-3" >
        <SearchInput />
        <Like />
        <Message />

      </div>
    </div>
    
  )
}

export default Home