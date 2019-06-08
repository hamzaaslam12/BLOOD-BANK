import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from './STORE/index';
// import Home from './COMPONENTS/index'
import SignInPage from './COMPONENTS/signInpage';
// import SignInPage from './COMPONENTS/signInpage';
import Login from './COMPONENTS/login';
import DetailPage from './COMPONENTS/detail'
import Form from './COMPONENTS/form'
import Donors from './COMPONENTS/DonorsList'
import Receivers from './COMPONENTS/ReceiversList'

class App extends Component {
  render() {
    return (
      <div>

      <Provider store={store}>

      <Router>
      <div>
      <Route exact path="/" component={SignInPage} />
      <Route path="/login" component={Login} />
      <Route path="/detail" component={DetailPage} />
      <Route path="/detail/DonorsList" component={Donors} />
      <Route path="/detail/ReceiversList" component={Receivers} />
      <Route path="/detail/form" component={Form} />
      {/* <Route path="/topics" component={Topics} /> */}
      </div>
  </Router>
  
      </Provider>
      </div>
    );
  }
}

export default App;
