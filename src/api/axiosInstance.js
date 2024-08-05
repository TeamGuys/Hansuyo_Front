// axiosInstance.js
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER, // 환경 변수에서 서버 URL 가져오기
});
