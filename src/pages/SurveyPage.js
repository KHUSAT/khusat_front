import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import {useDispatch} from 'react-redux';
import {getResultThunk} from "../store/action/result";
import ProgressBar from "../components/progressbar/ProgressBar";
import "antd/dist/antd.css";

import styled, { css } from "styled-components";

const SurveyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  border: solid 1px red;
  width: 500px;
  height: 100vh;
  overflow: hidden;
`;

const SliderCotainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* margin: 0 auto; */
  ${(props) => css`
        transform: translateX(${-500 * props.curIdx}px);
        transition: 0.5s;
  `}
  margin-top: 20rem;
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
