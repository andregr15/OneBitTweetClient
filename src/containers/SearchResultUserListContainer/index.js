import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FollowersUnit from '../../components/FollowersUnit';

class SearchResultUserListContainer extends Component {
  render() {
    var users_list = this.props.followers.length ? (this.props.followers) : []
    return (
      <div>        
        {
          users_list.map(
            (follower, i) =>  <FollowersUnit {...follower} key={i}/>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return { 
    current_user: state.current_user,
    followers: state.followers,
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultUserListContainer);