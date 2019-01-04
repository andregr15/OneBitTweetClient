import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard';
import { setUserInfo } from '../TimelineContainer/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserTweets } from './actions';


class DashboardContainer extends Component {

  componentDidMount() {
    this.props.setUserInfo(this.props.current_user);
    this.props.getUserTweets(this.props.current_user.id);
  }

  render() {
    return(
      <Dashboard />
    )
  }
}

function mapStateToProps(state) {
  return { current_user: state.current_user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserInfo, getUserTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);