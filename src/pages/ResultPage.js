import React from 'react';
import {useSelector} from 'react-redux';
import './ResultPage.scss';

function ResultPage(){
    const data = useSelector(state=>state.result.data);

    return(
        <div className="container">
            {data && (
                <div className="result">
                    <div className="result__title">{data.high}</div>
                    <div className="result__position">{data.low}</div>
                    <div className="result__desc">{data.description}</div>
                    <div><img src={data.image}/></div>
                </div>
            )}
            
        </div>
    );
}

export default ResultPage;