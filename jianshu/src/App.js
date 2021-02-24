import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        {/* Provider里面的内容最好都包在一个标签里面 */}
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>

      </Provider>
    );
  }
}

export default App;
