import React from "react";
import "../App.css";
import Button from "../components/LoginButton.jsx";
import LoginLogo from "../components/LoginLogo.jsx";
import LoginText from "../components/LoginText.jsx";
import KLogoImage from "../assets/KLogo.png";
import NLogoImage from "../assets/NLogo.png";
import GLogoImage from "../assets/GLogo.png";

function Login() {
  const KREST_API_KEY = "백엔드한테 달라하자1";
  const KREDIRECT_URI = "백엔드한테 달라하자2";
  const Klink = `https://kauth.kakao.com/oauth/authorize?client_id=${KREST_API_KEY}&redirect_uri=${KREDIRECT_URI}&response_type=code`;

  const KloginHandler = () => {
    window.location.href = Klink;
  };

  const NAVER_CLIENT_ID = "백엔드한테 달라하자3";
  const NREDIRECT_URI = "백엔드한테 달라하자4";
  const STATE = "flase";
  const Nlink = `https://nid.naver.com/oauth/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NREDIRECT_URI}`;

  const NloginHandler = () => {
    window.location.href = Nlink;
  };

  const GREST_API_KEY = "백엔드한테 달라하자5";
  const GREDIRECT_URI = "백엔드한테 달라하자6";
  const Glink = `https://kauth.kakao.com/oauth/authorize?client_id=${GREST_API_KEY}&redirect_uri=${GREDIRECT_URI}&response_type=code`;

  const GloginHandler = () => {
    window.location.href = Glink;
  };

  const buttonProps = [
    {
      type: "KLoginButton",
      name: "카카오로 시작하기",
      logo: "KLogo",
      image: KLogoImage,
      click: KloginHandler,
    },
    {
      type: "NLoginButton",
      name: "네이버로 시작하기",
      logo: "NLogo",
      image: NLogoImage,
      click: NloginHandler,
    },
    {
      type: "GLoginButton",
      name: "구글 계정으로 시작하기",
      logo: "GLogo",
      image: GLogoImage,
      click: GloginHandler,
    },
  ];

  return (
    <div className="LoginBody">
      <LoginLogo />
      <LoginText />
      {buttonProps.map((button, i) => (
        <Button
          type={button.type}
          name={button.name}
          logo={button.logo}
          image={button.image}
          click={button.click}
          key={i}
        />
      ))}
    </div>
  );
}

export default Login;
