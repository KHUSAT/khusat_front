import React from 'react';
import './Card.scss';

function Card({data,onClick}){
    // type: true false
    return(
        <>
            <div className="card" onClick={onClick}>
                <div className="card__desc">{data.desc}</div>
                <div className="card__content">{data.ans1}</div>
                <div className="card__content">{data.ans2}</div>
            </div>
        </>        
    );
}
// 나중에 데이터 넘어오면 넘어온 데이터로 카드 업데이트

export default Card;