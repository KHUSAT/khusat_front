import React from "react";
import styled, { css } from "styled-components";
import { lighten,darken } from "polished";
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

function Card({ question, answer, setAnswer, curIdx, setCurIdx }) {
  const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    ${media.phone`
      min-width: 360px;
    `}
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
    &:hover {
      background: ${lighten(0.1, "#536349")};
    }
    &:active {
      background: ${darken(0.1, "#536349")};
    }
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

export default Card;
