import { useNavigate } from "react-router";
import Back from "../../components/Common/Back";
import { Border } from "../../components/Common/Border";

const Edit = () => {
  const navigate = useNavigate();

  const move = (router) => {
    navigate(router);
  };

  const editProps = [
    {
      name: "프로필 편집",
      router: 'profile'
    },
    {
      name: "저장한 영상",
      router: 'saveVideo'
    },
    {
      name: "삭제한 영상",
      router: 'deleteVideo'
    },
    {
      name: "구독한 채널",
      router: 'subChannel'
    },
  ];

  return (
    <div className="flex-col justify-between w-full h-screen"> {/* h-screen 추가하여 전체 높이 사용 */}
      <div className="flex items-center p-4 h-16 space-x-3 font-bold"> {/* h-16으로 높이 설정 */}
        <Back />
        <p className="mb-0">설정</p> 
      </div>

      <p 
        className="px-4"
        onClick={() => move('my')}
        >나의 계정</p>
      <Border />
      {editProps.map((item) => (
        <p
          key={item.router} // 각 요소에 고유한 키를 추가
          className="px-4"
          onClick={() => move(item.router)} // 화살표 함수를 사용하여 클릭 시 이동
        >
          {item.name}
        </p>
      ))}
      <div className="flex justify-center mt-[200px] mb-4"> {/* 버튼을 가운데 정렬 */}
        <button 
          className="bg-[#2A68E14D] bg-opacity-30 w-[80%] py-3 rounded-xl">
          Primiun 가입하러 가기
        </button>
      </div>
    </div>
  );
};

export default Edit;
