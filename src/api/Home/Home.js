import { axiosInstance } from "../axiosInstance";

// 특정 비디오 정보 조회
export const getVideo = async () => {
  try {
    const response = await axiosInstance.get(`/videos`, {
      // headers: {
      //   Authorization: `Bearer ${cookies}`, // 필요 시 인증 토큰 추가
      // },
    });
    if (response) {
      return response.data; // 응답 데이터 반환
    } else {
      return; // 응답이 없을 경우
    }
  } catch (error) {
    console.log(error); // 오류 로그 출력
    throw error; // 오류를 다시 던짐
  }
};
