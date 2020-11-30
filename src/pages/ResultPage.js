import React from 'react';
import {useSelector} from 'react-redux';
import './ResultPage.scss';


function ResultPage(){
    const data = useSelector(state=>state.result.data);

    return(
        <div className="container">
            {data ? (
                <div className="result">
                    <div className="result__title">{data.high}</div>
                    <div className="result__position">{data.low}</div>
                    <div className="result__desc">{data.description}</div>
                    {/* <div><img src={"/Users/ijunho/Desktop/JUNHO/khusat-front/src/assets/db"+data.image.split("khusat_DB")[1]}/></div> */}
                    {/* {console.log(data.image.split("khusat_DB")[1])} */}
                    {/* <div><img src={"../../assets/db"+data.image.split("khusat_DB")[1]}/></div> */}
                    {/* /Users/daydream/Desktop/khusat_server/khusat_DB : 47*/}
                    {/* `${(data.image).substring(47,data.image.length)}/Users/ijunho/desktop/junho/khusat-front/src/assets/db` */}
                </div>)
                : <div>로딩중</div>
            }  
        </div>
    );
}

export default ResultPage;