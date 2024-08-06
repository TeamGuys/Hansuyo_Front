import Back from "../../Common/Back";
import Graph from "./Graph";
import ProfileName from "../../Common/ProfileName"
import Star from "./Star";
import ViewVideo from "./ViewVideo";
import Edit from "./Edit";
export const Nav = ({my}) => {
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
      <div className="flex space-x-2">
      {my ? 
      <>
      <ViewVideo />
      <Edit />
      </>  :         <Star />}


      </div>
    </div>
  );
}
