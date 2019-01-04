import React, { Component } from 'react';
import FollowingsUnit from '../../components/FollowingsUnit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFollowings, unfollow } from './actions';
import RowNoBottomMargin from '../../components/common/RowNoBottomMargin';

class FollowingsContainer extends Component {
  constructor() {
    super();
    this.unfollow = this.unfollow.bind(this);
  }

  componentDidMount(){
    this.props.getFollowings(this.props.current_user.id);
  }

  unfollow(id) {
    this.props.unfollow(id);
  }

  render(){
    var followings = this.props.followings.length ? (this.props.followings) : []
    return (
      <RowNoBottomMargin>
        {
        followings.map(
          (following, i) =>  <FollowingsUnit {...following} key={i} unfollow={this.unfollow}/>
        )
        }
      </RowNoBottomMargin>
    );
  };
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    followings: state.followings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFollowings, unfollow }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (FollowingsContainer);
