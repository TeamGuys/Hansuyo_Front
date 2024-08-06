import Back from "../../components/Common/Back";
import { Subscribe } from "../../components/Setting/Subscirbe/Subscribe";
const SubChannel = () => {
    return (
        <div className="w-full">
            <div className="flex items-center p-4 h-16 space-x-3 font-bold"> {/* h-16으로 높이 설정 */}
                <Back />
                <p className="mb-0">프로필 편집</p>
            </div>
            <div>
            <Subscribe text={'나의 구독 채널'}/>

            </div>
            <div>
            <Subscribe text={'나를 구독하는 채널'}/>

            </div>
        </div>
    )
}

export default SubChannel;