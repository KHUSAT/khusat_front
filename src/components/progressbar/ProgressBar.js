import {Progress} from 'antd';

function ProgressBar({percent}){
    return(
        <Progress style={{width:"50%"}}percent={percent} showInfo={true}/>
    );
}

export default ProgressBar;