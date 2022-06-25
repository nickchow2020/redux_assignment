import { Alert } from 'antd';
import React from 'react';
import Marquee from 'react-fast-marquee';
import {useSelector} from "react-redux";
const App = () => {

  const {init,perform} = useSelector(data => data)

  return (
    <Alert
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
            <p style={{fontSize: 20}}>search key <strong>{init.key}</strong> found <strong>{perform.resultCount}</strong> results</p>
          </Marquee>
        }
        type="success"
      />
    );
}

export default App;