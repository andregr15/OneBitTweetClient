import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard';
import { setUserInfo } from '../TimelineContainer/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class DashboardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.setUserInfo(this.props.current_user);
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
  return bindActionCreators({ setUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);