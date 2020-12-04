import React, { useState } from "react";
import Card from "../components/card/Card";
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
  border: 1px solid gray;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  ${(props) => css`
        transform: translateX(${-500 * props.curIdx}px);
        transition: 0.5s;
  `}
`;

function SurveyPage({ history, question }) {
  const [curIdx, setCurIdx] = useState(0);
  const [answer, setAnswer] = useState([]); // post로 보낼 state

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
