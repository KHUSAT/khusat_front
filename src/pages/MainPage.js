import React,{useEffect} from 'react';
import './MainPage.scss';
import {Button} from "antd";
import axios from 'axios';
import mainImg from "../assets/main-soldier.png";
import {getSurvey, getSurveySuccess, getSurveyError} from '../store/action/survey';
import { useDispatch } from 'react-redux';


function MainPage({history}){
    const dispatch = useDispatch();
    const onClick = () => {
        history.push('/survey');
    }
    useEffect(()=>{
        const getApi = async() =>{
            dispatch(getSurvey());
            try{
              const {data} = await axios.get("getquestions");
              dispatch(getSurveySuccess(data));
            }catch(e){
              dispatch(getSurveyError(e));
            }
          }
        getApi();    
    },[]);

    return(
        <>
            <div className="main-wrapper">
                <div className="main-title">KHUSAT</div>
                <div className="main-title__desc">
                    KHUSAT 특별과정, <br></br>
                    여러분의 보직을 추천드립니다.
                </div>
                <Button 
                    size="large"
                    onClick={onClick}
                    color="#536349"
                    style={{}}
                > 시작하기</Button>
                <img className="main-image" src={mainImg}/>
            </div>
        </>
    );
}

export default MainPage;
