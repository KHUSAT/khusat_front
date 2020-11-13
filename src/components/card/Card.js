import React from 'react';
import './Card.scss';

function Card({question,answer,setAnswer,curIdx,setCurIdx}){
    // type: true false
    const onClickOne=()=>{
        const temp = [
            ...answer,{
                num: question.num,
                choice: 0
            }];
        setAnswer(temp);
        setCurIdx(curIdx+1);
    }
    const onClickTwo=()=>{
        const temp = [
            ...answer,{
                num: question.num,
                choice: 1
            }];
        setAnswer(temp);
        setCurIdx(curIdx+1);
    }
    return(
        <>
            <div className="card">
                <div className="card__desc">{question.question}</div>
                <div className="card__content" onClick={onClickOne}>{question.answer1}</div>
                <div className="card__content" onClick={onClickTwo}>{question.answer2}</div>
            </div>
        </>        
    );
}
// 나중에 데이터 넘어오면 넘어온 데이터로 카드 업데이트

export default Card;