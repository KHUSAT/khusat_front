import React,{useEffect} from "react";
import useScript from "../hooks/useScript";
import KakaoBtn from "../components/kakao/KakaoBtn";

const KakaoBtnContainer = ({result}) => {
  useScript("https://developers.kakao.com/sdk/js/kakao.js");
  
  return (
    <div className="layout">
      <KakaoBtn result={result} />
    </div>
  );
};
export default KakaoBtnContainer;
