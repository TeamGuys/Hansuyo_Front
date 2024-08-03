import Back from "./Back";
import Graph from "./Graph";
import ProfileName from "../../Common/ProfileName"
import Star from "./Star";

export const Nav = () => {
  return (
    <div className="flex justify-between w-full p-4 "> {/* items-center 추가 */}
      
      {/* 좌측 */}
      <div className="flex space-x-5 "> {/* 아이템 간 간격 추가 */}
        <Back />
        
        <ProfileName />
        <div />
        <Graph />
      </div>

      {/* 우측 */}
      <div className="flex">
        <Star />
      </div>
    </div>
  );
}
