import React, { Component } from 'react';
import FollowersUnit from '../../components/FollowersUnit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFollowers } from './actions';
import RowNoBottomMargin from '../../components/common/RowNoBottomMargin';

class FollowersContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.getFollowers(this.props.current_user.id);
  }

  render(){
    var followers = this.props.followers.length ? (this.props.followers) : []
    return (
      <RowNoBottomMargin>
        {
        followers.map(
          (follower, i) =>  <FollowersUnit {...follower} key={i}/>
        )
        }
      </RowNoBottomMargin>
    );
  };
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    followers: state.followers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFollowers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (FollowersContainer);
