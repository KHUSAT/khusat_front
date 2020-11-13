import React,{useState} from 'react';
import './MainPage.scss';
import ProgressBar from "../components/progressbar/ProgressBar";
import {Button} from "antd";
import mainImg from "../assets/main-soldier.png";

function MainPage({history}){
    //const [percent,setPercent] = useState(0);
    const onClick = () => {
        history.push('/survey');
    }

    return(
        <>
            <div className="main-wrapper">
                <div className="main-title">KHUSAT</div>
                <div className="main-title__desc">
                    KHUSAT 특별과정, <br></br>
                    여러분의 보직을 추천드립니다.
                </div>
                {/* <ProgressBar percent={percent}/> */}
                <Button 
                    size="large"
                    onClick={onClick}
                    color="#536349"
                > 시작하기</Button>
                <img className="main-image" src={mainImg}/>
            </div>
        </>
    );
}

export default MainPage;
