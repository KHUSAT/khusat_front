import React,{useState} from 'react';
import './MainPage.scss';
import ProgressBar from "../components/progressbar/ProgressBar";
import {Button} from "antd";

function MainPage(){
    const [percent,setPercent] = useState(30);
    const onClick = () => {

    }

    return(
        <>
            <div className="main-wrapper">
                <div className="main-title">KHUSAT</div>
                <div className="main-title__desc">
                    KHUSAT 특별과정, <br></br>
                    여러분의 보직을 추천드립니다.
                </div>
                <ProgressBar percent={percent}/>
                <Button 
                    size="large"
                    onClick={onClick}
                > 시작하기</Button>
            </div>
        </>
    );
}

export default MainPage;
