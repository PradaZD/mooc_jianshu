import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style';
import './style';
import './statics/iconfont/iconfont.css';
import App from './App';


ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>

  ,
  document.getElementById('root')
);


//jsx语法，如果在react项目中使用了jsx语法，就必须引入React 否则会报错。



