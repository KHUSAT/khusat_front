import React from 'react';
import './Card.scss';

function Card({data,answer,onClick1,onClick2}){
    // type: true false
    return(
        <>
            <div className="card">
                <div className="card__desc">{data.question}</div>
                <div className="card__content" onClick={onClick1}>{data.answer1}</div>
                <div className="card__content" onClick={onClick2}>{data.answer2}</div>
            </div>
        </>        
    );
}
// 나중에 데이터 넘어오면 넘어온 데이터로 카드 업데이트

export default Card;