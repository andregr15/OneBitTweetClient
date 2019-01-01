import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tweetLike } from '../TweetListContainer/actions';

class TweetUnliked extends Component {

  constructor(){
    super();
    this.like = this.like.bind(this);
  }

  like() {    
    this.props.tweetLike(this.props.id);
  };

  render() {
    return (
      <InvisibleButton onClick={this.like}>
        <Icon className="grey-text text-darken-2">thumb_up</Icon>
      </InvisibleButton>
    );
  }
}

function mapStateToProps(state){
  return { 
    tweets: state.tweets,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ tweetLike }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetUnliked);