import React, { useState } from "react";
import "../App.css";
import simage from "../assets/SearchLogo.png";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [activeSport, setActiveSport] = useState(null); // 현재 클릭된 스포츠 상태 추가

  const sports = [
    { name: "헬스", left: "0px" },
    { name: "수영", left: "28px" },
    { name: "골프", left: "53px" },
    { name: "농구", left: "78px" },
    { name: "축구", left: "112px" },
    { name: "복싱", left: "0px" },
    { name: "필라테스", left: "12px" },
    { name: "스쿼시", left: "13px" },
    { name: "배구", left: "30px" },
    { name: "야구", left: "63px" },
    { name: "요가", left: "0px" },
    { name: "배드민턴", left: "12px" },
    { name: "테니스", left: "12px" },
    { name: "사이클", left: "23px" },
    { name: "탁구", left: "47px" },
    { name: "유도", left: "0px" },
    { name: "스키", left: "28px" },
    { name: "보드", left: "53px" },
    { name: "러닝", left: "78px" },
    { name: "당구", left: "112px" },
  ];
  const moreSports = [
    { name: "승마", left: "0px" },
    { name: "태권도", left: "20px" },
    { name: "아이스하키", left: "11px" },
    { name: "댄스", left: "13px" },
    { name: "서핑", left: "47px" },
    { name: "볼링", left: "0px" },
    { name: "풋살", left: "28px" },
  ];

  const handleSearch = (term) => {
    if (term && !recentSearches.includes(term)) {
      setRecentSearches([...recentSearches, term]);
    }
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const removeSearch = (term) => {
    setRecentSearches(recentSearches.filter((search) => search !== term));
  };

  const handleSportClick = (sport) => {
    handleSearch(sport); // 검색 기록에 추가
    setActiveSport(sport); // 현재 클릭된 스포츠 설정
    setTimeout(() => {
      setActiveSport(null); // 일정 시간 후에 사라짐
    }, 200); // 2초 후에 사라짐
  };

  const renderRecentSearches = () => {
    return (
      <div className="recentSearchContainer">
        {recentSearches.map((term, index) => (
          <div key={index} className="searchBox">
            {term}
            <span className="removeBtn" onClick={() => removeSearch(term)}>
              {" "}
              ×{" "}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const renderSports = (sportsList) => {
    const sportItems = [];
    for (let i = 0; i < sportsList.length; i += 5) {
      const sportsGroup = sportsList.slice(i, i + 5);
      sportItems.push(
        <div key={i}>
          {sportsGroup.map((sport, index) => (
            <span
              key={index}
              className={`sportItem ${
                activeSport === sport.name ? "selected" : ""
              }`} // 선택된 스타일 추가
              style={{ position: "relative", left: sport.left }}
              onClick={() => handleSportClick(sport.name)}
            >
              {sport.name}
            </span>
          ))}
          <hr className="separator" />
        </div>
      );
    }
    return sportItems;
  };

  return (
    <div className="SearchBody">
      <div id="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          src={simage}
          alt="Search"
          onClick={() => handleSearch(searchTerm)}
        />
      </div>

      <h2 className="LatelySearch">최근 검색어</h2>

      <span
        onClick={clearRecentSearches}
        className="AllDelete Clickable"
        style={{ position: "absolute", top: "78px", right: "75px" }}
      >
        전체 삭제
      </span>
      {renderRecentSearches()}

      <h2 className="TypeSearch">훈수 운동 종목</h2>
      <div className="sportsContainer">{renderSports(sports)}</div>

      {showMore && (
        <div className="sportsContainer">{renderSports(moreSports)}</div>
      )}

      <span
        onClick={() => setShowMore(!showMore)}
        className="SearchMore Clickable"
        style={{ position: "absolute", right: "75px" }}
      >
        {showMore ? "접기" : "더보기"}
      </span>
    </div>
  );
};

export default Search;
