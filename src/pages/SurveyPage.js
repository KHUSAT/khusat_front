import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import ProgressBar from "../components/progressbar/ProgressBar";
import axios from 'axios';
import "./SurveyPage.scss";
import 'antd/dist/antd.css'
// import redux
import {useDispatch,useSelector} from 'react-redux';
import {getResult,getResultSuccess,getResultError} from '../store/action/result';
import {getSurvey,getSurveySuccess,getSurveyError} from '../store/action/survey';
import ResultPage from "./ResultPage";
// import styled,{css} from 'styled-components';

// const Slider = styled.div`
//   border: 1px solid gray;
//   width: 30rem;
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   transform: translateX(${-30}rem);
//   transition: 0.5s
//   overflow: hidden;
// `;

function SurveyPage({history}) {
  const [curIdx, setCurIdx] = useState(0);
  const [question, setQuestion] = useState(JSON.parse(localStorage.getItem('question')||'{}'));
  const [answer, setAnswer] = useState([]);  
  const dispatch = useDispatch();

  const data = useSelector(state=>state.survey.data);
  // useEffect(()=>{
  //   const getApi = async() =>{
  //     dispatch(getSurvey());
  //     try{
  //       const {data} = await axios.get("getquestions");
  //       setQuestion(data);
  //       dispatch(getSurveySuccess(data));
  //     }catch(e){
  //       dispatch(getSurveyError(e));
  //     }
  //   }
  //   getApi();
  // },[]);

  useEffect(()=>{
    console.log(curIdx);
    if(curIdx === 10){
      // setCurIdx(curIdx-1);
      const postApi = async ()=>{
        dispatch(getResult());
        try{
          const {data} = await axios.post("submit", answer);
          console.log(data);
          dispatch(getResultSuccess(data));
        }catch(e){
          dispatch(getResultError(e));
        }
      }
      postApi();
      history.push('/result');
    }
  },[curIdx]);

  return (
    <div className="container">
      <div className="container__progress"></div>
      <div className="slider">
        {
          curIdx === 11? history.push('/result') :(<Card
          question={question[curIdx]}
          answer={answer}
          setAnswer={setAnswer}
          curIdx={curIdx}
          setCurIdx={setCurIdx}
      />)
      }
      </div>
    </div>
  );
}

export default SurveyPage;

// {/* <Slider> */}
// {question && question.map((question,index) => (
//   <div className="slider__wrapper">
//     {/* <ProgressBar percent={curIdx*10} /> */}
//     <Card 
//       key={question.num}
//       question={question}
//       answer={answer}
//       setAnswer={setAnswer}
//       curIdx={curIdx}
//       setCurIdx={setCurIdx}
//       style={{
//           transform: `translate3d(${(-30)*curIdx}rem,0,0)`,
//           transition: "0.5s",
//       }}
//     />
//   </div>
// ))}
// {/* </Slider> */}