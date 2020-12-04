import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

function Loading() {
    return (
        <Spin indicator={antIcon}
            style={{ display: "flex", alignItems: "center", justifyContent:"center", margin: "300px"}}/>
    )
}

export default Loading;

// 군인 관련 애니메이션 or 움짤로 개선 예정