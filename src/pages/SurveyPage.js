import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import {useDispatch} from 'react-redux';
import {getResultThunk} from "../store/action/result";
import "antd/dist/antd.css";

import styled, { css } from "styled-components";

const sizes = {
  desktop: 102.4,
  tablet: 76.8,
  phone: 36,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const SurveyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.phone`
    width: 360px;
  `}
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
  ${media.phone`
    margin-top: 10rem;
  `}
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
  margin-top: 6rem;
  ${(props) => css`
        transform: translateX(${-500 * props.curIdx}px);
        transition: 0.5s;
  `}
  ${media.phone`
  ${(props)=> css`
    transform: translateX(${-360 * props.curIdx}px);
    transition: 0.5s;
  `}
  `}
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
        <ProgressBar>
          <ProgressIcon curIdx={curIdx}/>
        </ProgressBar>
        <SliderCotainer curIdx={curIdx}>
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
