import React, { Component } from 'react';
import InvisibleButton from '../../components/common/InvisibleButton';
import { Icon } from 'react-materialize';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tweetUnlike } from '../TweetListContainer/actions';

const Liked = styled(Icon)`
  color: #75d3f4;
`;

class TweetLiked extends Component {
  constructor(){
    super();
    this.unlike = this.unlike.bind(this);
  }

  unlike() {
    this.props.tweetUnlike(this.props.id);
  };

  render() {
    return (
      <InvisibleButton onClick={this.unlike}>
        <Liked>thumb_up</Liked>
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
  return bindActionCreators({ tweetUnlike }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetLiked);