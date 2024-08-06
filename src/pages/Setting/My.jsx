import Back from "../../components/Common/Back"
import ProfileName from "../../components/Common/ProfileName"
const My = () => {
    return (
        <div className="w-full">
            <div className="flex items-center p-4 h-16 space-x-3 font-bold"> {/* h-16으로 높이 설정 */}
                <Back />
                <p className="mb-0">나의 계정</p>
            </div>
            <div className="p-4 flex space-x-9">
            <p>이름   </p>  <ProfileName />

            </div>
        </div>
    )
}

export default My