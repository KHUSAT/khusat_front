import axios from 'axios';

const getQuestion = async () =>{
    const res = axios.get("http://3.34.126.151:8000/getquestions");
    return res;
}

export default getQuestion;