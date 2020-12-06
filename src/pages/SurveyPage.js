import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import {useDispatch} from 'react-redux';
import {getResultThunk} from "../store/action/result";
import "antd/dist/antd.css";
import mainPattern from "../assets/mainPattern.jpeg";

import styled, { css } from "styled-components";

const SurveyContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${mainPattern});
`;

const Container = styled.div`
  /* border: solid 1px red; */
  width: 500px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 0.25rem;
  margin-top: 14rem;
  background-color: #747b4b;
  border-radius: 1rem;
  position: relative;
`;

// 적당한 icon 찾으면 바꿀 것임
const ProgressIcon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #3c441d;
  ${(props)=> css`
    transform: translateX(${30 * props.curIdx}px);
    transition: 0.5s;
  `}
`;

const SliderCotainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${(props) => css`
        transform: translateX(${-500 * props.curIdx}px);
        transition: 0.5s;
  `}
  margin-top: 6rem;
`;

function SurveyPage({ history, question }) {
  const [curIdx, setCurIdx] = useState(0);
  const [answer, setAnswer] = useState([]); // post로 보낼 state
  const dispatch = useDispatch();

  useEffect(()=>{
    if(answer.length === 10){ // answer state 배열에 10개가 채워지면,
      dispatch(getResultThunk(answer));
      history.push('/result');
    }
  },[answer]);

  return (
    <SurveyContainer>
      <Container>
        {/* 상태바 넣기 */}
        <ProgressBar>
          <ProgressIcon curIdx={curIdx}/>
        </ProgressBar>
        <SliderCotainer curIdx={curIdx}>
          {/* 얘가 슬라이더 컨테이너 */}
          {question.map((question) => (
            <Card
              key={question.num}
              question={question}
              answer={answer}
              setAnswer={setAnswer}
              curIdx={curIdx}
              setCurIdx={setCurIdx}
            />
          ))}
        </SliderCotainer>
      </Container>
    </SurveyContainer>
  );
}

export default SurveyPage;
