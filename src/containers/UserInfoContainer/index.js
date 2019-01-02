import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserInfoContainer extends Component {

  render() {
    return (
      <UserInfo {...this.props} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    current_user: state.current_user
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);