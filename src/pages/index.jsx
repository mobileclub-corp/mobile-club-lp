import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import mediaquery from '../../assets/styles/variable';
import '../../assets/styles/reset.css';

// 女性用LP
import TowardsWoman from './towardsWoman';


class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 女性用LP */}
          <Route exact path="/" component={TowardsWoman} />
        </Switch>
      </Router>
    )
  }
};

export default Home;