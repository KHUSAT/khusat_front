import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import ProgressBar from "../components/progressbar/ProgressBar";
import axios from 'axios';
import "./SurveyPage.scss";
import 'antd/dist/antd.css'
// import redux
import {useDispatch} from 'react-redux';
import {getResult,getResultSuccess,getResultError} from '../store/action/result';

function SurveyPage({history}) {
  const [curIdx, setCurIdx] = useState(0);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);  
  const dispatch = useDispatch();

  useEffect(()=>{
    const getApi = async() =>{
      const {data} = await axios.get("getquestions");
      setQuestion(data);
    }
    getApi();
  },[]);

  useEffect(()=>{
    if(curIdx === 10){
      const postApi = async ()=>{
        dispatch(getResult);
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
      <div className="container__progress">
        <ProgressBar percent={curIdx*10} />
      </div>
      <div className="slider">
          {question && question.map((question,index) => (
                <div className="slider__wrapper">
                  <Card 
                    key={question.num}
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    curIdx={curIdx}
                    setCurIdx={setCurIdx}
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
