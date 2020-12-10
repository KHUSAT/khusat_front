import React, { useEffect } from "react";
import "./kakaoBtn.scss";
import kakao from "../../assets/kakao.png";
import useScript from "../../hooks/useScript";


const KakaoBtn = ({result}) => {
  const { loaded } = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  useEffect(()=>{
    if(loaded)
      createKakaoButton();
  },[loaded]);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지

      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: result.low,
          description: "성격으로 알아보는 내 보직은? KHUSAT 특별과정!",
          imageUrl: result.image, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            webUrl: "http://khusat.herokuapp.com",
          },
        },
        social: {
          likeCount: 7,
          sharedCount: 7,
        },
        buttons: [
          {
            title: "나도 테스트 하기",
            link: {
              webUrl: "http://khusat.herokuapp.com",
              mobileWebUrl: "http://khusat.herokuapp.com",
            },
          },],
      });
    }
  };
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <div id="kakao-link-btn" >
        <img src={kakao} alt="kakao-share-icon"/>
        카톡으로 공유하기
      </div>
    </div>
  );
};
export default KakaoBtn;