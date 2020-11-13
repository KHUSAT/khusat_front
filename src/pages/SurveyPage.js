import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import ProgressBar from "../components/progressbar/ProgressBar";
import axios from 'axios';
import "./SurveyPage.scss";

// const cardList = [
//   {
//     index: 0,
//     desc: "나는 오랫동안 서 있을 수 있다.",
//     ans1: "그렇습니다.",
//     ans2: "아닙니다.",
//   },
//   {
//     index: 1,
//     desc: "배경호는 오랫동안 서 있을 수 있다.",
//     ans1: "그렇습니다.",
//     ans2: "아닙니다.",
//   },
//   {
//     index: 2,
//     desc: "이준호는 오랫동안 서 있을 수 있다.",
//     ans1: "그렇습니다.",
//     ans2: "아닙니다.",
//   },
//   {
//     index: 3,
//     desc: "박기홍은 오랫동안 서 있을 수 있다.",
//     ans1: "그렇습니다.",
//     ans2: "아닙니다.",
//   },
// ];

function SurveyPage() {
  const [curIdx, setCurIdx] = useState(0);
  const [question, setQuestion] = useState([]);
  const [answer, serAnswer] = useState([]);

  // const clickAns1 = (e) =>{
  //   setCurIdx(curIdx+1);
  //   const temp 
  // }
  // const clickAns2 = (e) =>{
  //   setCurIdx(curIdx+1);
  // }

  useEffect(()=>{
    const getApi = async() =>{
      const apis = axios.create({
        baseURL: "",
        withCredentials: true
      });
      const result = await apis.get("http://192.168.0.16:8000/getquestions");
      console.log(result);
      return result;
    }
    const data = getApi();
    // setQuestion(data);
    // console.log(data);
  },[]);

  return (
    <div className="container">
      <div className="container__progress">
        <ProgressBar percent={curIdx*10} />
      </div>
      <div className="slider">
          {question && question.map((data,index) => (
                <div className="slider__wrapper">
                  <Card 
                    key={data.num}
                    data={data}
                    // onClick1={clickAns1}
                    // onClick2={clickAns2}
                    answer={answer}
                    style={{
                        transform: `translateX(${(-30)*curIdx}rem)`,
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
