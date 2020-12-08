import axios from 'axios';

const getResult = async (answer) => {
    const res = await axios.post("http://3.34.126.151:8000/submit",answer);
    return res;
}

export default getResult;