import Back from "../../components/Common/Back"
import { Border } from "../../components/Common/Border"

const Edit = () =>{
    return(
        <>
            <Back />
            <p>설정</p>

            <p>나의 계정</p>
            <Border />
            <p>프로필 편집</p>
            <p>저장한 영상</p>
            <p>삭제한 영상</p>
            <p>구독한 채널</p>

            <button>
                Primiun 가입하러 가기
            </button>

        </>
    )
}

export default Edit;