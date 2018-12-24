import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer'
import ProfilePageContainer from './containers/ProfilePageContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/wellcome">Home</Link> <br/>
        <Link to="/user/1">User 1 profile</Link>
        <Switch>
          <Route exact path="/" component={HomePageContainer} /> 
          <Route exact path="/user/:id" component={ProfilePageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;