import React from "react";
import styled, { css } from "styled-components";

function Card({ question, answer, setAnswer, curIdx, setCurIdx }) {
  const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
  `;

  const CardQuest = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 60px;
  `;

  const CardContent = styled.div`
    cursor: pointer;
    width: 300px;
    height: 60px;
    margin: 10px;
    font-size: 16px;
    border-radius: 10px;
    color: #ffffff;
    background-color: #536349;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const onClickOne = () => {
    const temp = [
      ...answer,
      {
        num: question.num,
        choice: 0,
      },
    ];
    setAnswer(temp);
    setCurIdx(curIdx + 1);
  };
  const onClickTwo = () => {
    const temp = [
      ...answer,
      {
        num: question.num,
        choice: 1,
      },
    ];
    setAnswer(temp);
    setCurIdx(curIdx + 1);
  };

  return (
    <>
      <CardWrap curIdx={curIdx}>
        <CardQuest>{question.question}</CardQuest>
        <CardContent onClick={onClickOne}>{question.answer1}</CardContent>
        <CardContent onClick={onClickTwo}>{question.answer2}</CardContent>
      </CardWrap>
    </>
  );
}
// 나중에 데이터 넘어오면 넘어온 데이터로 카드 업데이트

export default Card;
