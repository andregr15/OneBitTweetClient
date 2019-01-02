import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import { follow } from '../UserInfoContainer/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserUnFollow extends Component {
  constructor(){
    super();
    this.follow = this.follow.bind(this);
  }

  follow() {
    this.props.follow(this.props.id);
  };

  render() {
    return (
      <InvisibleButton onClick={this.follow}>
        <Icon small className="grey-text text-darken-2">star_border</Icon>
      </InvisibleButton>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ follow }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUnFollow);