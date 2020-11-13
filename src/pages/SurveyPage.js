import React, { useState, useRef } from "react";
import Card from "../components/card/Card";
import ProgressBar from "../components/progressbar/ProgressBar";
import "./SurveyPage.scss";

const cardList = [
  {
    index: 0,
    desc: "나는 오랫동안 서 있을 수 있다.",
    ans1: "그렇습니다.",
    ans2: "아닙니다.",
  },
  {
    index: 1,
    desc: "배경호는 오랫동안 서 있을 수 있다.",
    ans1: "그렇습니다.",
    ans2: "아닙니다.",
  },
  {
    index: 2,
    desc: "이준호는 오랫동안 서 있을 수 있다.",
    ans1: "그렇습니다.",
    ans2: "아닙니다.",
  },
  {
    index: 3,
    desc: "박기홍은 오랫동안 서 있을 수 있다.",
    ans1: "그렇습니다.",
    ans2: "아닙니다.",
  },
];

function SurveyPage() {
  const [curIdx, setCurIdx] = useState(0);
  const clickToNext = (index) =>{
    setCurIdx(curIdx+1);
  }

  return (
    <div className="container">
      <div className="container__progress">
        <ProgressBar percent={curIdx*10} />
      </div>
      <div className="slider">
          {cardList.map((card) => (
              <div className="slider__wrapper">
                  <Card 
                    data={card} 
                    onClick={()=>clickToNext(card.index)}
                    style={{
                        transform: `translateX(${-30*card.index}rem)`,
                        transition: "0.5s",
                    }}
                  />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SurveyPage;
