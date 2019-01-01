import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import styled from 'styled-components';
import { unfollow } from '../UserInfoContainer/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Followed = styled(Icon)`
  color: #ffeb3b
`;

class UserFollow extends Component {
  constructor(){
    super();
    this.unfollow = this.unfollow.bind(this);
  }

  unfollow() {
    this.props.unfollow(this.props.id);
  };

  render() {
    return (
      <InvisibleButton onClick={this.unfollow}>
        <Followed small>star</Followed>
      </InvisibleButton>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ unfollow }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFollow);